import { Helmet } from 'react-helmet';
import { Card, Checkbox, Col, Flex, Form, Input, Row, Skeleton } from 'antd';
import { TableLabel } from '../../../Atoms/Label/TableLabel';
import { HomeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { FormActions } from '../../../Molecules/Actions/FormActions';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import {
  CreateSectorArgs,
  QuerySectorDetailArgs,
  SectorDetail,
  SectorDetailQuery,
  useCreateSectorMutation,
  useUpdateSectorMutation,
} from '../../../../generated/graphql';
import { SECTOR_DETAIL_QUERY } from '../../../../apis/services/sectors/sector.mutation';
import { SelectTheaters } from '../../../Atoms/Select/SelectTheaters';
import { SelectSectorStatus } from '../../../Atoms/Select/SelectSectorStatus';

export const SectorForm = (props: any) => {
  const [form] = Form.useForm();

  const [currentTheaterId, setCurrentTheaterId] = useState<number | null>(null);

  const onLoadDataCompleted = (rawData: any) => {
    const data = rawData as SectorDetail;
    if (data.theater.id) setCurrentTheaterId(data.theater.id);

    form.setFields([
      { name: 'name', value: data.name },
      { name: 'description', value: data.description },
      { name: 'enable', value: data.enable },
      { name: 'status', value: data.status },
    ]);
  };

  const onSubmit = (values: any) => {
    const sectorArgs = {
      name: values.name,
      description: values.description || '',
      enable: values.enable,
      status: values.status,
      theaterId: currentTheaterId,
    } as CreateSectorArgs;

    if (props?.id) {
      updateSector({
        variables: {
          updateSectorArgs: sectorArgs,
          sectorId: props.id,
        },
      }).then((res) => {
        if (res.data?.updateSector)
          props.onCompleted();
      });
    } else {
      createSector({
        variables: {
          createSectorArgs: sectorArgs,
        },
      }).then((res) => {
        if (res.data?.createSector) {
          props.onCompleted();
        }
      });
    }
  };


  const onLoadData = () => {
    sectorDetail({ variables: { sectorId: props.id } }).then((res) => {
      if (res.data?.sectorDetail)
        onLoadDataCompleted(res.data.sectorDetail);
    });
  };

  const [updateSector, { loading: loadingUpdate }] = useUpdateSectorMutation({
    fetchPolicy: 'no-cache',
    onError: props.onError,
    onCompleted: props.onSuccess,
  });

  const [createSector, { loading: loadingCreate }] = useCreateSectorMutation({
    fetchPolicy: 'no-cache',
    onError: props.onError,
    onCompleted: props.onSuccess,
  });

  const [sectorDetail, { loading: loadingDetail }]: LazyQueryResultTuple<SectorDetailQuery, QuerySectorDetailArgs> = useLazyQuery(SECTOR_DETAIL_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    onLoadData();
  }, [props.id]);
  return (
    <>
      <Helmet>
        <title>Phòng chiếu | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Phòng chiếu" />
      </Helmet>

      <Card>
        <Row gutter={[24, 24]}>

          <TableLabel content={'Phòng chiếu'}
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
                  <Form.Item label={'Chọn rạp'}>
                    <SelectTheaters value={currentTheaterId}
                                    onChange={(value: number) => setCurrentTheaterId(value)} name={'theaterId'} />
                  </Form.Item>
                  <Flex>
                    <Col className={'left'} span={12}>
                      <Form.Item name={'name'} label={'Tên'}>
                        <Input name={'name'} />
                      </Form.Item>
                    </Col>
                    <Col className={'right'} span={12}>
                      <Form.Item name={'status'} label={'Trạng thái phòng'}>
                        <SelectSectorStatus name={'status'} />
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