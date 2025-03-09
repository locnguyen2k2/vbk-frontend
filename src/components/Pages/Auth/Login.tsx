import { Wrapper } from '../../Templates/Wrapper';
import { Link, useNavigate } from 'react-router-dom';
import { Credential, LoginArgs, ReCaptCha, ReCaptChaQuery, useLoginMutation } from '../../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { updateUser } from '../../../store/reduceres/user.slice';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Col, Flex, Form, Image, Input, notification, Row } from 'antd';
import { Picture } from '../../Atoms/Picture/Picture';
import { IMAGES } from '../../../common/Images';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import { LOGIN_CAPTCHA_QUERY } from '../../../apis/services/auth/login.query';
import { b64toBlob } from '../../../utils/b64toBlob';
import { SafetyOutlined } from '@ant-design/icons';

export default function Login() {
  const [form] = Form.useForm();
  const navigator = useNavigate();
  const [captchaInfo, setCaptchaInfo] = useState<ReCaptCha | null>(null);
  const [previewCaptcha, setPreviewCaptcha] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user);
  const [api, contextHolder] = notification.useNotification();

  const onCompleted = (data: Credential) => {
    const { profile, accessToken, refreshToken } = data;
    if (profile) {
      dispatch(updateUser({
        ...(profile.lastName && { lastName: profile.lastName }),
        ...(profile.firstName && { firstName: profile.firstName }),
        ...(profile.username && { username: profile.username }),
        ...(profile.email && { email: profile.email }),
        token: accessToken,
        refreshToken: refreshToken,
        roles: profile?.roles || [],
        userPermissions: profile?.permissions || [],
        ...(profile.enable && { isActive: profile.enable }),
        isAuthenticated: true,
      }));

      navigator('/');
    }
  };

  const onLoadCaptchaCompleted = (data: ReCaptCha) => {
    b64toBlob(data.captcha).then((res) => {
      if (res)
        setPreviewCaptcha(URL.createObjectURL(res));
      else
        setPreviewCaptcha(null);
    });
    setCaptchaInfo(data);
  };

  const onSave = (values: LoginArgs) => {
    const loginArgs = {
      username: values.username,
      password: values.password,
      captcha: values.captcha,
      captchaId: captchaInfo?.captchaId,
    } as LoginArgs;
    loginMutation({ variables: { loginArgs } }).then((res) => {
      if (res.data?.login) {
        onCompleted(res.data.login);
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

  const [loginMutation, { loading }] = useLoginMutation({
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
        <title>Đăng nhập | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Đăng nhập vào hệ thống VBK" />
      </Helmet>

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
            <Form.Item label={'Nhập tài khoản'} name="username"
                       rules={[{ required: true, message: 'Vui lòng nhập tài khoản' }]}>
              <Input type="text" name="username" placeholder={'locnguyen01'} />
            </Form.Item>
            <Form.Item label={'Nhập mật khẩu'} name="password"
                       rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}>
              <Input.Password name="password" placeholder={'locnguyen01'} />
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
              Chưa có tài khoản? <Link to={'/register'} title={'Link to register'}>Đăng ký tại đây</Link><br />
              Bạn quên mật khẩu? <Link to={'/forgotpassword'} title={'Link to forgot password'}>Lấy lại mật khẩu tại
              đây</Link>
            </Form.Item>
            <Form.Item className={'flex-center'}>
              <Button type={'primary'} onClick={form.submit} title={'Login'} loading={loading}>Đăng nhập</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {contextHolder}
    </Wrapper>
  );
}