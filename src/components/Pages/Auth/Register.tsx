import { Wrapper } from '../../Templates/Wrapper';
import { Link, useNavigate } from 'react-router-dom';
import { ReCaptCha, ReCaptChaQuery, RegisterArgs, useRegisterMutation } from '../../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Col, Flex, Form, Image, Input, notification, Row, Skeleton } from 'antd';
import { Picture } from '../../Atoms/Picture/Picture';
import { IMAGES } from '../../../common/Images';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import { LOGIN_CAPTCHA_QUERY } from '../../../apis/services/auth/login.query';
import { b64toBlob } from '../../../utils/b64toBlob';
import { SafetyOutlined } from '@ant-design/icons';
import { SelectGenders } from '../../Atoms/Select/SelectGenders';

export default function Register() {
  const [form] = Form.useForm();
  const navigator = useNavigate();
  const [captchaInfo, setCaptchaInfo] = useState<ReCaptCha | null>(null);
  const [previewCaptcha, setPreviewCaptcha] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user);
  const [api, contextHolder] = notification.useNotification();

  const onLoadCaptchaCompleted = (data: ReCaptCha) => {
    b64toBlob(data.captcha).then((res) => {
      if (res)
        setPreviewCaptcha(URL.createObjectURL(res));
      else
        setPreviewCaptcha(null);
    });
    setCaptchaInfo(data);
  };

  const onSave = (values: RegisterArgs) => {
    const registerArgs = {
      username: values.username,
      password: values.password,
      email: values.email,
      gender: values.gender,
      firstName: values.firstName,
      lastName: values.lastName,
      captcha: values.captcha,
      captchaId: captchaInfo?.captchaId,
    } as RegisterArgs;

    register({ variables: { registerArgs } }).then((res) => {
      if (res.data?.register) {
        api.success({
          message: 'Đăng ký thành công, đang chuyển hướng sang trang đăng nhâp!',
          showProgress: true,
          duration: 5,
        });
        setTimeout(() => navigator('/login'), 5000);
      }
    });
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

  const onError = (err: Error) => {
    api.error({ message: err.message });
  };

  const [getCaptcha, {
    loading: loadingCaptcha,
    error,
  }]: LazyQueryResultTuple<ReCaptChaQuery, any> = useLazyQuery(LOGIN_CAPTCHA_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  const [register, { loading }] = useRegisterMutation({
    fetchPolicy: 'no-cache',
    onError: (error: Error) => onError(error),
  });

  useEffect(() => {
    if (error)
      onError(error);
  }, [error]);

  useEffect(() => {
    onLoadCaptcha();
  }, []);

  return (
    <Wrapper blur={20} style={{ maxWidth: '800px' }}>
      <Helmet>
        <title>Đăng ký | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Đăng ký thành viên hệ thống VBK" />
      </Helmet>

      {
        loadingCaptcha || loading ? <Skeleton /> :
          <Form className={'login rad-primary'} form={form} onKeyDown={onEnter}
                style={{ padding: '15px', background: '#fff' }}
                layout={'vertical'} onFinish={onSave}
                initialValues={{ ['key']: 'cW1Qj4' }}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Flex justify={'center'}>
                  <Picture className={'border-primary rad-primary'} preview={false} src={IMAGES.LOGO_01} style={{
                    width: '155px',
                    height: '150px',
                  }} />
                </Flex>
                <Flex>
                  <Col span={12} className={'left'}>
                    <Form.Item label={'Nhập họ'} name="lastName"
                               rules={[{ required: true, message: 'Vui lòng nhập họ' }]}>
                      <Input type="text" name="lastName" placeholder={'locnguyen01'} />
                    </Form.Item>
                  </Col>
                  <Col span={12} className={'right'}>
                    <Form.Item label={'Nhập tên'} name="firstName"
                               rules={[{ required: true, message: 'Vui lòng nhập tên' }]}>
                      <Input type="text" name="firstName" placeholder={'locnguyen071102@gmail.com'} />
                    </Form.Item>
                  </Col>
                </Flex>
                <Form.Item label={'Chọn giới tính'} name={'gender'}>
                  <SelectGenders name={'gender'} />
                </Form.Item>
                <Form.Item label={'Nhập tài khoản'} name="username"
                           rules={[{ required: true, message: 'Vui lòng nhập tài khoản' }]}>
                  <Input type="text" name="username" placeholder={'locnguyen01'} />
                </Form.Item>
                <Form.Item label={'Nhập email'} name="email"
                           rules={[{ required: true, message: 'Vui lòng nhập email' }]}>
                  <Input type="text" name="email" placeholder={'locnguyen071102@gmail.com'} />
                </Form.Item>
                <Form.Item label={'Nhập mật khẩu'} name="password"
                           rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}>
                  <Input.Password name="password" placeholder={'locnguyen01'} />
                </Form.Item>
                <Form.Item label={'Nhập lại mật khẩu'} name="confirmedPassword"
                           rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu' }]}>
                  <Input.Password name="confirmedPassword" placeholder={'locnguyen01'} />
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
                <Form.Item>
                  Đã có tài khoản? <Link to={'/login'} title={'Link to register'}>Đăng nhập ngay</Link><br />
                </Form.Item>
                <Form.Item className={'flex-center'}>
                  <Button type={'primary'} onClick={form.submit} title={'Register'} loading={loading}>Đăng ký</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
      }
      {contextHolder}
    </Wrapper>
  );
}