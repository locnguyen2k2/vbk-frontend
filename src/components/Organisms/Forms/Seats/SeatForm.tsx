import { Helmet } from 'react-helmet';
import { Card, Checkbox, Col, Flex, Form, Input, Row, Skeleton } from 'antd';
import { TableLabel } from '../../../Atoms/Label/TableLabel';
import { HomeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { FormActions } from '../../../Molecules/Actions/FormActions';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import {
  CreateSeatArgs,
  QuerySeatDetailArgs,
  SeatDetail,
  SeatDetailQuery,
  useCreateSeatMutation,
  useUpdateSeatMutation,
} from '../../../../generated/graphql';
import { SEAT_DETAIL_QUERY } from '../../../../apis/services/seats/seat.query';
import { SelectRows } from '../../../Atoms/Select/SelectRows';
import { SelectSeatStatus } from '../../../Atoms/Select/SelectSeatStatus';
import { InputNumeric } from '../../../Atoms/Input/InputNumeric';

export const SeatForm = (props: any) => {
  const [form] = Form.useForm();

  const [currentRowId, setCurrentRowId] = useState<number | null>(null);

  const onLoadDataCompleted = (rawData: any) => {
    const data = rawData as SeatDetail;
    if (data.row.id) setCurrentRowId(data.row.id);

    form.setFields([
      { name: 'name', value: data.name },
      { name: 'enable', value: data.enable },
      { name: 'status', value: data.status },
      { name: 'price', value: data.price },
      { name: 'rowId', value: currentRowId },
    ]);
  };

  const onSubmit = (values: any) => {
    const seatArgs = {
      name: values.name,
      enable: values.enable,
      rowId: currentRowId,
      status: values.status,
      price: values.price,
    } as CreateSeatArgs;

    if (props?.id) {
      updateSeat({
        variables: {
          updateSeatArgs: seatArgs,
          seatId: props.id,
        },
      }).then((res) => {
        if (res.data?.updateSeat)
          props.onCompleted();
      });
    } else {
      createSeat({
        variables: {
          createSeatArgs: seatArgs,
        },
      }).then((res) => {
        if (res.data?.createSeat) {
          props.onCompleted();
        }
      });
    }
  };


  const onLoadData = () => {
    sectorDetail({ variables: { seatId: props.id } }).then((res) => {
      if (res.data?.seatDetail)
        onLoadDataCompleted(res.data.seatDetail);
    });
  };

  const [updateSeat, { loading: loadingUpdate }] = useUpdateSeatMutation({
    fetchPolicy: 'no-cache',
    onError: props.onError,
    onCompleted: props.onSuccess,
  });

  const [createSeat, { loading: loadingCreate }] = useCreateSeatMutation({
    fetchPolicy: 'no-cache',
    onError: props.onError,
    onCompleted: props.onSuccess,
  });

  const [sectorDetail, { loading: loadingDetail }]: LazyQueryResultTuple<SeatDetailQuery, QuerySeatDetailArgs> = useLazyQuery(SEAT_DETAIL_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    onLoadData();
  }, [props.id]);
  return (
    <>
      <Helmet>
        <title>Ghế | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Ghế" />
      </Helmet>

      <Card>
        <Row gutter={[24, 24]}>

          <TableLabel content={'Ghế'}
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
              loadingCreate || loadingDetail || loadingUpdate ? <Skeleton /> :
                <Form layout={'vertical'}
                      onFinish={onSubmit} disabled={props?.onlyView}
                      form={form}>
                  <Flex>
                    <Col span={12} className={'left'}>
                      <Form.Item label={'Chọn hàng ghế'}>
                        <SelectRows value={currentRowId}
                                    onChange={(value: number) => setCurrentRowId(value)} name={'rowId'} />
                      </Form.Item>
                    </Col>
                    <Col className={'right'} span={12}>
                      <Form.Item name={'name'} label={'Tên'}>
                        <Input name={'name'} />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex>
                    <Col className={'left'} span={12}>
                      <Form.Item name={'price'} label={'Giá ghế'}>
                        <InputNumeric name={'price'} />
                      </Form.Item>
                    </Col>
                    <Col className={'right'} span={12}>
                      <Form.Item name={'status'} label={'Trạng thái ghế'}>
                        <SelectSeatStatus name={'status'} />
                      </Form.Item>
                    </Col>
                  </Flex>

                  <Flex>
                    <Col className={'left'} span={12}>
                      <Form.Item className={'left'} label={'Ghi chú'} name={'description'}>
                        <Input.TextArea name={'description'} />
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