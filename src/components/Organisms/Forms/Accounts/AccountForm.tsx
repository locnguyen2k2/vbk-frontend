import { Helmet } from 'react-helmet';
import { Card, Checkbox, Col, DatePicker, Flex, Form, Input, notification, Row, Skeleton, Upload } from 'antd';
import { TableLabel } from '../../../Atoms/Label/TableLabel';
import { HomeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { FormActions } from '../../../Molecules/Actions/FormActions';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import {
  PermissionEnum,
  ProfileQuery,
  SystemRoleEnum,
  UpdateProfileArgs,
  UserProfile,
  useUpdateProfileMutation,
} from '../../../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { ACCOUNT_PROFILE_QUERY } from '../../../../apis/services/accounts/account.query';
import { updateUser } from '../../../../store/reduceres/user.slice';
import dayjs from 'dayjs';
import { SelectGenders } from '../../../Atoms/Select/SelectGenders';
import { Link } from 'react-router-dom';

export const AccountForm = (props: any) => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const user = useAppSelector(state => state.user);
  const userPermissions = user.userPermissions;
  const roles = user.roles;

  const permissions = {
    admin: roles.includes(SystemRoleEnum.Admin as never),
    update: userPermissions.includes(PermissionEnum.UpdateAccount as never),
  };

  const [previewImage, setPreviewImage] = useState<any>(null);
  const [fileAvatar, setFileAvatar] = useState<any[]>([]);

  const onLoadDataCompleted = (rawData: any) => {
    const data = rawData as UserProfile;

    if (data.avatar && data.avatar.path !== '') {
      setFileAvatar([{
        uid: '-1',
        name: '',
        status: 'done',
        url: process.env.REACT_APP_ASSETS_URL + data.avatar?.path,
      }]);
      setPreviewImage(process.env.REACT_APP_ASSETS_URL + data.avatar.path);
    } else {
      setFileAvatar([]);
      setPreviewImage(null);
    }

    form.setFields([
      { name: 'username', value: data.username },
      { name: 'status', value: data.status },
      { name: 'firstName', value: data.firstName },
      { name: 'lastName', value: data.lastName },
      { name: 'birthDay', value: data.birthDay },
      { name: 'email', value: data.email },
      { name: 'gender', value: data.gender },
      { name: 'phone', value: data.phone },
      { name: 'address', value: data.address },
      { name: 'enable', value: data.enable },
      { name: 'updatedAt', value: data.updatedAt ? dayjs(data.updateBy) : null },
    ]);
  };

  const onSubmit = (values: any) => {
    if (fileAvatar[0] && fileAvatar[0].uid !== '-1') {
      const file = fileAvatar[0];
      delete file?.url;
      setFileAvatar([file]);
    }
    const updateProfileArgs = {
      status: values.status,
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      birthDay: values.birthDay,
      gender: values.gender,
      phone: values.phone,
      avatar: fileAvatar[0] && fileAvatar[0].uid !== '-1' ? fileAvatar[0] : undefined,
    } as UpdateProfileArgs;

    updateProfile({ variables: { updateProfileArgs } }).then((res) => {
      const data = res.data;
      if (data?.updateProfile) {
        const info = data.updateProfile;
        dispatch(updateUser({
          ...user,
          ...(info.firstName && { firstName: info.firstName }),
          ...(info.lastName && { lastName: info.lastName }),
        }));
        onLoadData();
      }
    });
  };

  const onRemoveFile = (file: any) => {
    const index = fileAvatar.indexOf(file);
    const newFileList = fileAvatar.slice();
    newFileList.splice(index, 1);
    setFileAvatar(newFileList);
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }
    setPreviewImage(null);
  };

  const onError = (err: Error) => {
    api.error({ message: err.message });
  };

  const onSuccess = () => {
    api.success({ message: 'Thao tác thành công' });
  };

  const handleBeforeUpload = (file: any) => {
    const previewUrl = URL.createObjectURL(file);
    file['url'] = previewUrl;
    setFileAvatar([file]);
    setPreviewImage(previewUrl);
  };

  const onLoadData = () => {
    getProfile().then((res) => {
      if (res.data?.profile)
        onLoadDataCompleted(res.data.profile);
    });
  };
  const [updateProfile, { loading: loadingUpdate }] = useUpdateProfileMutation({
    fetchPolicy: 'no-cache',
    onError: onError,
    onCompleted: onSuccess,
  });

  const [getProfile, { loading: loadingProfile }]: LazyQueryResultTuple<ProfileQuery, any> = useLazyQuery(ACCOUNT_PROFILE_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    onLoadData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Thông tin tài khoản | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Quản lý thông tin cá nhân" />
      </Helmet>

      <Card>
        <Row gutter={[24, 24]}>

          <TableLabel content={'Thông tin cá nhân'}
                      items={[
                        { title: <HomeOutlined />, link: '/' },
                        { title: 'Cập nhật' },
                      ]}
          />
          <FormActions
            onUpdate={props.onlyView ? undefined : () => form.submit()}
            onCancel={props.onCancel}
          />

          <Col span={24}>
            {
              loadingProfile || loadingUpdate ? <Skeleton /> :
                <Form layout={'vertical'} onFinish={onSubmit} disabled={props?.onlyView} form={form}>
                  <Flex>
                    <Col className={'left'} span={4}>
                      <Form.Item name={'avatar'}>
                        <Upload onRemove={onRemoveFile}
                                beforeUpload={handleBeforeUpload}
                                fileList={fileAvatar}
                                multiple={false}
                                maxCount={1}
                                accept={'image/*'}
                                listType="picture-card"
                        >
                          {fileAvatar.length < 1 && !previewImage && 'Avatar'}
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col className={'right'} span={20}>
                      <Flex>
                        <Col className={'left'} span={12}>
                          <Form.Item name={'lastName'} label={'Họ'}>
                            <Input name={'lastName'} />
                          </Form.Item>
                        </Col>
                        <Col className={'right'} span={12}>
                          <Form.Item name={'firstName'} label={'Tên'}>
                            <Input name={'firstName'} />
                          </Form.Item>
                        </Col>
                      </Flex>
                      <Flex>
                        <Col className={'left'} span={12}>
                          <Form.Item name={'email'} label={'Email'}>
                            <Input disabled={true} name={'email'} />
                          </Form.Item>
                        </Col>
                        <Col className={'right'} span={12}>
                          <Form.Item name={'phone'} label={'SĐT'}>
                            <Input name={'phone'} />
                          </Form.Item>
                        </Col>
                      </Flex>
                    </Col>
                  </Flex>
                  <Flex>
                    <Col className={'left'} span={12}>
                      <Form.Item name={'gender'} label={'Giới tính'}>
                        <SelectGenders name={'gender'} />
                      </Form.Item>
                    </Col>
                    <Col className={'right'} span={12}>
                      <Form.Item name={'address'} label={'Địa chỉ'}>
                        <Input name={'address'} />
                      </Form.Item>
                    </Col>
                  </Flex>

                  <Flex>
                    <Col className={'left'} span={12}>
                      <Form.Item layout={'horizontal'} label={'Còn quản lý'} name={'enable'} valuePropName="checked">
                        <Checkbox disabled={true} name={'enable'} />
                      </Form.Item>
                    </Col>
                    <Col className={'right'} span={12}>
                      <Form.Item name={'updatedAt'} label={'Cập nhật gần nhất'}>
                        <DatePicker format={'DD-MM-YYYY HH:mm:ss'} disabled={true} name={'updatedAt'} />
                      </Form.Item>
                    </Col>
                  </Flex>
                </Form>
            }
            <Link to={'/changePassword'} title={'Thay đổi mật khẩu'}>Thay đổi mật khẩu</Link>
          </Col>
        </Row>
        {contextHolder}
      </Card>
    </>
  );
};