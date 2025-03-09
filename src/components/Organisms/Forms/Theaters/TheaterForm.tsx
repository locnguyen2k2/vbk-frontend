import { Helmet } from 'react-helmet';
import { Card, Checkbox, Col, Flex, Form, Input, Row, Skeleton, Upload } from 'antd';
import { TableLabel } from '../../../Atoms/Label/TableLabel';
import { HomeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { FormActions } from '../../../Molecules/Actions/FormActions';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import {
  CreateTheaterArgs,
  QueryTheaterDetailArgs,
  TheaterDetail,
  TheaterDetailQuery,
  useCreateTheaterMutation,
  useUpdateTheaterMutation,
} from '../../../../generated/graphql';
import dayjs from 'dayjs';
import { THEATER_DETAIL_QUERY } from '../../../../apis/services/theaters/theater.query';

export const TheaterForm = (props: any) => {
  const [form] = Form.useForm();
  const [previewImage, setPreviewImage] = useState<any>(null);
  const [photo, setPhoto] = useState<any[]>([]);

  const onLoadDataCompleted = (rawData: any) => {
    const data = rawData as TheaterDetail;
    if (data.photo && data.photo.path !== '') {
      setPhoto([{
        uid: '-1',
        name: '',
        status: 'done',
        url: process.env.REACT_APP_ASSETS_URL + data.photo.path,
      }]);
      setPreviewImage(process.env.REACT_APP_ASSETS_URL + data.photo.path);
    } else {
      setPhoto([]);
      setPreviewImage(null);
    }

    form.setFields([
      { name: 'name', value: data.name },
      { name: 'enable', value: data.enable },
      { name: 'address', value: data.address },
    ]);
  };

  const onRemoveFile = (file: any) => {
    const index = photo.indexOf(file);
    const newFileList = photo.slice();
    newFileList.splice(index, 1);
    setPhoto(newFileList);
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }
    setPreviewImage(null);
  };

  const handleBeforeUpload = (file: any) => {
    const previewUrl = URL.createObjectURL(file);
    file['url'] = previewUrl;
    setPhoto([file]);
    setPreviewImage(previewUrl);
  };

  const onSubmit = (values: any) => {
    if (photo[0] && photo[0].uid !== '-1') {
      const file = photo[0];
      delete file?.url;
      setPhoto([file]);
    }

    const theaterArgs = {
      name: values.name,
      address: values.address,
      enable: values.enable,
      image: photo[0] && photo[0].uid !== '-1' ? photo[0] : undefined,
    } as CreateTheaterArgs;

    if (props?.id)
      updateTheater({
        variables: {
          updateTheaterArgs: theaterArgs,
          theaterId: props.id,
        },
      }).then(props.onCompleted);
    else
      createTheater({ variables: { createTheaterArgs: theaterArgs } }).then(props.onCompleted);
  };


  const onLoadData = () => {
    theaterDetail({ variables: { theaterId: props.id } }).then((res) => {
      if (res.data?.theaterDetail)
        onLoadDataCompleted(res.data.theaterDetail);
    });
  };
  const [updateTheater, { loading: loadingUpdate }] = useUpdateTheaterMutation({
    fetchPolicy: 'no-cache',
    onCompleted: props.onSuccess,
    onError: props.onError,
  });

  const [createTheater, { loading: loadingCreate }] = useCreateTheaterMutation({
    fetchPolicy: 'no-cache',
    onCompleted: props.onSuccess,
    onError: props.onError,
  });

  const [theaterDetail, { loading: loadingDetail }]: LazyQueryResultTuple<TheaterDetailQuery, QueryTheaterDetailArgs> = useLazyQuery(THEATER_DETAIL_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    onLoadData();
  }, [props.id]);
  return (
    <>
      <Helmet>
        <title>Rạp | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Quản lý rạp" />
      </Helmet>

      <Card>
        <Row gutter={[24, 24]}>

          <TableLabel content={'Rạp'}
                      items={[
                        { title: <HomeOutlined />, link: '/' },
                        { title: `${props.id ? props.onlyView ? 'Xem' : 'Cập nhật' : 'Tạo'}` },
                      ]}
          />
          <FormActions
            onUpdate={props.onlyView ? undefined : () => form.submit()}
            onCancel={props.onCancel}
          />

          <Col span={24}>
            {
              loadingUpdate ||
              loadingCreate ||
              loadingDetail ? <Skeleton /> :
                <Form layout={'vertical'}
                      onFinish={onSubmit} disabled={props?.onlyView}
                      form={form}
                      initialValues={{
                        ...(!props.id && { 'date': dayjs() }),
                      }}
                >
                  <Flex>
                    <Col className={'left'} span={4}>
                      <Form.Item name={'photo'}>
                        <Upload onRemove={onRemoveFile}
                                beforeUpload={handleBeforeUpload}
                                fileList={photo}
                                multiple={false}
                                maxCount={1}
                                accept={'image/*'}
                                listType="picture-card"
                        >
                          {photo.length < 1 && !previewImage && 'Photo'}
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col className={'right'} span={20}>
                      <Form.Item name={'name'} label={'Tên'}>
                        <Input name={'name'} />
                      </Form.Item>
                      <Form.Item name={'address'} label={'Địa chỉ'}>
                        <Input name={'address'} />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Form.Item className={'right'} layout={'horizontal'} label={'Còn quản lý'} name={'enable'}
                             valuePropName="checked">
                    <Checkbox name={'enable'} />
                  </Form.Item>
                </Form>
            }
          </Col>
        </Row>
      </Card>
    </>
  );
};