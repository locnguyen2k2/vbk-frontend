import { Helmet } from 'react-helmet';
import { Card, Checkbox, Col, DatePicker, Form, Row, Skeleton } from 'antd';
import { TableLabel } from '../../../Atoms/Label/TableLabel';
import { HomeOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { FormActions } from '../../../Molecules/Actions/FormActions';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import {
  QueryScheduleDetailArgs,
  ScheduleDetailQuery,
  ScheduleModel,
  useCreateScheduleMutation,
  useUpdateScheduleMutation,
} from '../../../../generated/graphql';
import { SCHEDULE_DETAIL_QUERY } from '../../../../apis/services/schedules/schedule.query';
import dayjs from 'dayjs';

export const ScheduleForm = (props: any) => {
  const [form] = Form.useForm();

  const onLoadDataCompleted = (rawData: any) => {
    const data = rawData as ScheduleModel;

    form.setFields([
      { name: 'date', value: dayjs(data.date) },
      { name: 'enable', value: data.enable },
    ]);
  };

  const onSubmit = (values: any) => {
    const updateScheduleArgs = {
      date: dayjs(values.date).format('YYYY-MM-DD'),
      enable: values.enable,
    };

    if (props?.id)
      updateSchedule({ variables: { updateScheduleArgs, scheduleId: props.id } }).then(props.onCompleted);
    else
      createSchedule({ variables: { createScheduleArgs: updateScheduleArgs } }).then(props.onCompleted);
  };


  const onLoadData = () => {
    scheduleDetail({ variables: { scheduleId: props.id } }).then((res) => {
      if (res.data?.scheduleDetail)
        onLoadDataCompleted(res.data.scheduleDetail);
    });
  };
  const [updateSchedule, { loading: loadingUpdate }] = useUpdateScheduleMutation({
    fetchPolicy: 'no-cache',
    onCompleted: props.onSuccess,
    onError: props.onError,
  });

  const [createSchedule, { loading: loadingCreate }] = useCreateScheduleMutation({
    fetchPolicy: 'no-cache',
    onCompleted: props.onSuccess,
    onError: props.onError,
  });

  const [scheduleDetail, { loading: loadingDetail }]: LazyQueryResultTuple<ScheduleDetailQuery, QueryScheduleDetailArgs> = useLazyQuery(SCHEDULE_DETAIL_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    onLoadData();
  }, [props.id]);
  return (
    <>
      <Helmet>
        <title>Lịch chiếu | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Quản lý lịch chiếu" />
      </Helmet>

      <Card>
        <Row gutter={[24, 24]}>

          <TableLabel content={'Lịch chiếu'}
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
                  <Form.Item name={'date'} label={'Ngày'}>
                    <DatePicker format={'DD-MM-YYYY'} name={'date'} />
                  </Form.Item>
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