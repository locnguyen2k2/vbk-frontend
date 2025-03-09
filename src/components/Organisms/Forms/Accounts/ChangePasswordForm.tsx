import { Helmet } from 'react-helmet';
import { Card, Checkbox, Col, Flex, Form, Image, Input, notification, Row, Skeleton } from 'antd';
import { TableLabel } from '../../../Atoms/Label/TableLabel';
import { HomeOutlined, SafetyOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { FormActions } from '../../../Molecules/Actions/FormActions';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import {
  ChangePasswordArgs,
  ReCaptCha,
  ReCaptChaQuery,
  useChangePasswordMutation,
} from '../../../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { logout } from '../../../../store/reduceres/user.slice';
import { b64toBlob } from '../../../../utils/b64toBlob';
import { LOGIN_CAPTCHA_QUERY } from '../../../../apis/services/auth/login.query';

export const ChangePasswordForm = (props: any) => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const user = useAppSelector(state => state.user);

  const [captchaInfo, setCaptchaInfo] = useState<ReCaptCha | null>(null);
  const [previewCaptcha, setPreviewCaptcha] = useState<string | null>(null);

  const onLoadCaptchaCompleted = (data: ReCaptCha) => {
    b64toBlob(data.captcha).then((res) => {
      if (res)
        setPreviewCaptcha(URL.createObjectURL(res));
      else
        setPreviewCaptcha(null);
    });
    setCaptchaInfo(data);
  };

  const onLoadCaptcha = () => {
    getCaptcha().then((res) => {
      if (res.data?.reCaptCha)
        onLoadCaptchaCompleted(res.data.reCaptCha);
    });
  };

  const onEnter = (e: any) => {
    if (e.key === 'Enter') {
      form.submit();
    }
  };

  const onSubmit = (values: any) => {
    if (values.confirmedPassword !== values.newPassword) {
      api.error({ message: 'Xác nhập mật khẩu thất bại!' });
    } else {
      const changePasswordArgs = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        captcha: values.captcha,
        captchaId: captchaInfo?.captchaId,
        logout: values.logout,
      } as ChangePasswordArgs;

      changePassword({ variables: { changePasswordArgs } }).then((res) => {
        const data = res.data;
        if (data?.changePassword) {
          dispatch(logout());
        }
      });
    }
  };


  const onError = (err: Error) => {
    api.error({ message: err.message });
  };

  const onSuccess = () => {
    api.success({ message: 'Thao tác thành công' });
  };

  const [getCaptcha, {
    loading: loadingCaptcha,
    error,
  }]: LazyQueryResultTuple<ReCaptChaQuery, any> = useLazyQuery(LOGIN_CAPTCHA_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  const [changePassword, { loading: loadingUpdate }] = useChangePasswordMutation({
    fetchPolicy: 'no-cache',
    onError: onError,
    onCompleted: onSuccess,
  });

  useEffect(() => {
    if (user.isAuthenticated)
      onLoadCaptcha();
    else
      api.error({ message: 'Vui lòng đăng nhập' });
  }, [user]);
  return (
    <>
      <Helmet>
        <title>Thay đổi mật khẩu | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Thay đổi mật khẩu" />
      </Helmet>

      <Card>
        <Row gutter={[24, 24]}>

          <TableLabel content={'Thông tin tài khoản'}
                      items={[
                        { title: <HomeOutlined />, link: '/' },
                        { title: 'Cập nhật mật khẩu' },
                      ]}
          />
          <FormActions
            onUpdate={props.onlyView ? undefined : () => form.submit()}
            onCancel={props.onCancel}
          />

          <Col span={24}>
            {
              loadingCaptcha || loadingUpdate ? <Skeleton /> :
                <Form layout={'vertical'} onFinish={onSubmit} disabled={props?.onlyView} form={form}
                      onKeyDown={onEnter}>
                  <Form.Item label={'Mật khẩu cũ'} name="oldPassword"
                             rules={[{ required: true, message: 'Vui lòng nhập mật khẩu cũ' }]}>
                    <Input.Password name="oldPassword" placeholder={'Nhập mật khẩu cũ'} />
                  </Form.Item>
                  <Form.Item label={'Mật khẩu mới'} name="newPassword"
                             rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới' }]}>
                    <Input.Password name="newPassword" placeholder={'Nhập mật khẩu mới'} />
                  </Form.Item>
                  <Form.Item label={'Xác nhận mật khẩu'} name="confirmedPassword"
                             rules={[{ required: true, message: 'Vui lòng xác nhận mật khẩu' }]}>
                    <Input.Password name="confirmedPassword" placeholder={'Xác nhận mật khẩu'} />
                  </Form.Item>
                  <Form.Item layout={'horizontal'} label={'Đăng xuất khỏi các thiết bị'} name={'logout'}
                             valuePropName="checked">
                    <Checkbox name={'logout'} />
                  </Form.Item>
                  <Flex justify={'space-between'} align={'flex-end'}>
                    <Col className={'left'} span={15}>
                      <Form.Item label={'Nhập mã xác thực'} name="captcha"
                                 rules={[{ required: true, message: 'Vui lòng nhập mã xác thực' }]}>
                        <Input addonBefore={<SafetyOutlined />} type="text" name="captcha"
                               placeholder={'ABC012'} />
                      </Form.Item>
                    </Col>
                    <Col className={'right'} span={9}>
                      <Form.Item name="captchaImg">
                        {previewCaptcha &&
                          <Image style={{ marginBottom: 0 }} title={'Click to refresh captcha'} preview={false}
                                 src={previewCaptcha}
                                 onClick={onLoadCaptcha} />
                        }
                      </Form.Item>
                    </Col>
                  </Flex>
                </Form>
            }
          </Col>
        </Row>
        {contextHolder}
      </Card>
    </>
  );
};