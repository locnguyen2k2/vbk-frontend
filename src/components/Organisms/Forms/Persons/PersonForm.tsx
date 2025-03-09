import { Helmet } from 'react-helmet';
import { Card, Checkbox, Col, DatePicker, Flex, Form, Input, Row, Skeleton } from 'antd';
import { TableLabel } from '../../../Atoms/Label/TableLabel';
import { HomeOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { FormActions } from '../../../Molecules/Actions/FormActions';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import {
  PersonDetailQuery,
  PersonModel,
  QueryPersonDetailArgs,
  useCreatePersonMutation,
  useUpdatePersonMutation,
} from '../../../../generated/graphql';
import { PERSON_DETAIL_QUERY } from '../../../../apis/services/persons/person.query';
import dayjs from 'dayjs';

export const PersonForm = (props: any) => {
  const [form] = Form.useForm();

  const onLoadDataCompleted = (rawData: any) => {
    const data = rawData as PersonModel;

    form.setFields([
      { name: 'firstName', value: data.firstName },
      { name: 'lastName', value: data.lastName },
      { name: 'birthDay', value: data.birthDay ? dayjs(data.birthDay) : null },
      { name: 'enable', value: data.enable },
    ]);
  };

  const onSubmit = (values: any) => {
    const updatePersonArgs = {
      firstName: values.firstName,
      lastName: values.lastName,
      birthDay: values.birthDay ? dayjs(values.birthDay).format('YYYY-MM-DD') : null,
      enable: values.enable,
    };

    if (props?.id)
      updatePerson({ variables: { updatePersonArgs, personId: props.id } }).then(props.onCompleted);
    else
      createPerson({ variables: { createPersonArgs: updatePersonArgs } }).then(props.onCompleted);
  };


  const onLoadData = () => {
    personDetail({ variables: { personId: props.id } }).then((res) => {
      if (res.data?.personDetail)
        onLoadDataCompleted(res.data.personDetail);
    });
  };
  const [updatePerson, { loading: loadingUpdate }] = useUpdatePersonMutation({
    fetchPolicy: 'no-cache',
    onCompleted: props.onSuccess,
    onError: props.onError,
  });

  const [createPerson, { loading: loadingCreate }] = useCreatePersonMutation({
    fetchPolicy: 'no-cache',
    onError: props.onError,
  });

  const [personDetail, { loading: loadingDetail }]: LazyQueryResultTuple<PersonDetailQuery, QueryPersonDetailArgs> = useLazyQuery(PERSON_DETAIL_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    onLoadData();
  }, [props.id]);
  return (
    <>
      <Helmet>
        <title>Danh sách lịch chiếu | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Quản lý danh sách phim" />
      </Helmet>

      <Card>
        <Row gutter={[24, 24]}>

          <TableLabel content={'Nghệ sĩ'}
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
                      form={form}>
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
                      <Form.Item className={'left'} label={'Ngày sinh'} name={'birthDay'}>
                        <DatePicker format={'DD-MM-YYYY'} name={'birthDay'} />
                      </Form.Item>
                    </Col>

                    <Col className={'right'} span={12}>
                      <Form.Item className={'right'} layout={'horizontal'} label={'Còn quản lý'} name={'enable'}
                                 valuePropName="checked">
                        <Checkbox name={'enable'} />
                      </Form.Item>
                    </Col>
                  </Flex>
                </Form>
            }
          </Col>
        </Row>
      </Card>
    </>
  );
};