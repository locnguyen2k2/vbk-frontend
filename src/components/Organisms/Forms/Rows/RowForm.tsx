import { Helmet } from 'react-helmet';
import { Card, Checkbox, Col, Form, Input, Row, Skeleton } from 'antd';
import { TableLabel } from '../../../Atoms/Label/TableLabel';
import { HomeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { FormActions } from '../../../Molecules/Actions/FormActions';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import {
  CreateRowArgs,
  QueryRowDetailArgs,
  RowDetail,
  RowDetailQuery,
  useCreateRowMutation,
  useUpdateRowMutation,
} from '../../../../generated/graphql';
import { ROW_DETAIL_QUERY } from '../../../../apis/services/rows/row.query';
import { SelectSectors } from '../../../Atoms/Select/SelectSectors';

export const RowForm = (props: any) => {
  const [form] = Form.useForm();

  const [currentSectorId, setcurrentSectorId] = useState<number | null>(null);

  const onLoadDataCompleted = (rawData: any) => {
    const data = rawData as RowDetail;
    if (data.sector.id) setcurrentSectorId(data.sector.id);

    form.setFields([
      { name: 'name', value: data.name },
      { name: 'enable', value: data.enable },
      { name: 'sectorId', value: currentSectorId },
    ]);
  };

  const onSubmit = (values: any) => {
    const rowArgs = {
      name: values.name,
      enable: values.enable,
      sectorId: currentSectorId,
    } as CreateRowArgs;

    if (props?.id) {
      updateRow({
        variables: {
          updateRowArgs: rowArgs,
          rowId: props.id,
        },
      }).then((res) => {
        if (res.data?.updateRow)
          props.onCompleted();
      });
    } else {
      createRow({
        variables: {
          createRowArgs: rowArgs,
        },
      }).then((res) => {
        if (res.data?.createRow) {
          props.onCompleted();
        }
      });
    }
  };


  const onLoadData = () => {
    rowDetail({ variables: { rowId: props.id } }).then((res) => {
      if (res.data?.rowDetail)
        onLoadDataCompleted(res.data.rowDetail);
    });
  };

  const [updateRow, { loading: loadingUpdate }] = useUpdateRowMutation({
    fetchPolicy: 'no-cache',
    onError: props.onError,
    onCompleted: props.onSuccess,
  });

  const [createRow, { loading: loadingCreate }] = useCreateRowMutation({
    fetchPolicy: 'no-cache',
    onError: props.onError,
    onCompleted: props.onSuccess,
  });

  const [rowDetail, { loading: loadingDetail }]: LazyQueryResultTuple<RowDetailQuery, QueryRowDetailArgs> = useLazyQuery(ROW_DETAIL_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    onLoadData();
  }, [props.id]);
  return (
    <>
      <Helmet>
        <title>Hàng ghế | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Hàng ghế" />
      </Helmet>

      <Card>
        <Row gutter={[24, 24]}>

          <TableLabel content={'Hàng ghế'}
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
                  <Form.Item label={'Chọn phòng'}>
                    <SelectSectors value={currentSectorId}
                                   onChange={(value: number) => setcurrentSectorId(value)} name={'sectorId'} />
                  </Form.Item>
                  <Form.Item name={'name'} label={'Tên'}>
                    <Input name={'name'} />
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