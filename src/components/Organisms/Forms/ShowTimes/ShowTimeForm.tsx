import { Helmet } from 'react-helmet';
import { Button, Card, Checkbox, Col, DatePicker, Flex, Form, notification, Row, Skeleton } from 'antd';
import { TableLabel } from '../../../Atoms/Label/TableLabel';
import { DeleteOutlined, HomeOutlined, PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { FormActions } from '../../../Molecules/Actions/FormActions';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import {
  BaseShowTimeDto,
  CreateShowTimesArgs,
  QueryShowTimeDetailArgs,
  ShowTimeDetail,
  ShowTimeDetailQuery,
  useCreateShowTimesMutation,
} from '../../../../generated/graphql';
import dayjs from 'dayjs';
import { SHOW_TIME_DETAIL_QUERY } from '../../../../apis/services/showtimes/showTime.query';
import { SelectSchedules } from '../../../Atoms/Select/SelectSchedules';
import { SelectSectors } from '../../../Atoms/Select/SelectSectors';
import { SelectMovies } from '../../../Atoms/Select/SelectMovies';
import { SelectTheaters } from '../../../Atoms/Select/SelectTheaters';

export const ShowTimeForm = (props: any) => {
  type NewBaseShowTime = BaseShowTimeDto & { id: number };
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();

  const [showTimeArgs, setShowTimeArgs] = useState<NewBaseShowTime[]>([]);
  const [currentTheaterId, setCurrentTheaterId] = useState<number>();
  const onLoadDataCompleted = (rawData: any) => {
    const data = rawData as ShowTimeDetail;

    setShowTimeArgs([
      {
        id: 1,
        sectorId: data.sector?.id || 0,
        productId: data.movie?.id || 0,
        scheduleId: data.schedule?.id || 0,
        startTime: data.startTime,
      },
    ]);

    form.setFields([
      { name: 'scheduleId', value: data.schedule?.id },
      { name: 'enable', value: data.enable },
    ]);
  };

  const onSubmit = (values: any) => {
    const createShowTimesArgs = {
      enable: values.enable,
      showTimeArgs: showTimeArgs.map(({ productId, sectorId, startTime }) => {
        return {
          productId,
          sectorId,
          startTime,
          scheduleId: values.scheduleId,
        };
      }) as BaseShowTimeDto[],
    } as CreateShowTimesArgs;

    if (!props?.id)
      createShowTimes({ variables: { createShowTimesArgs } }).then((res) => {
        if (res.data)
          props.onCompleted();
      });
  };


  const onLoadData = () => {
    showTimeDetail({ variables: { showTimesId: props.id } }).then((res) => {
      if (res.data?.showTimeDetail)
        onLoadDataCompleted(res.data.showTimeDetail);
    });
  };

  const onChangeShowTimeArgs = (newItem: NewBaseShowTime) => {
    const newItems = showTimeArgs.filter((item) => item.id !== newItem.id);
    newItems.push(newItem);
    setShowTimeArgs(newItems.sort((a, b) => a.id - b.id));
  };

  const onAddShowTimeArgs = () => {
    if (!currentTheaterId)
      api.error({ message: 'Vui lòng chọn rạp' });
    else {
      const newItems = [...showTimeArgs, {
        id: showTimeArgs.length + 1,
        sectorId: 0,
        scheduleId: 0,
        productId: 0,
        startTime: dayjs().format('HH:mm'),
      }];
      setShowTimeArgs(newItems.sort((a, b) => a.id - b.id));
    }
  };


  const onDeleteShowTimeArgs = (id: number) => {
    const newItems = showTimeArgs.filter((item) => item.id !== id);
    setShowTimeArgs(newItems.sort((a, b) => a.id - b.id));
  };

  const [createShowTimes, { loading: loadingCreate }] = useCreateShowTimesMutation({
    fetchPolicy: 'no-cache',
    onCompleted: props.onSuccess,
    onError: props.onError,
  });

  const [showTimeDetail, { loading: loadingDetail }]: LazyQueryResultTuple<ShowTimeDetailQuery, QueryShowTimeDetailArgs> = useLazyQuery(SHOW_TIME_DETAIL_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    onLoadData();
  }, [props.id]);
  return (
    <>
      <Helmet>
        <title>Xuất chiếu | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Quản lý xuất chiếu" />
      </Helmet>

      <Card>
        <Row gutter={[24, 24]}>

          <TableLabel content={'Xuất chiếu'}
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
              loadingCreate ||
              loadingDetail ? <Skeleton /> :
                <Form layout={'vertical'}
                      onFinish={onSubmit} disabled={props?.onlyView}
                      form={form}>
                  <Flex align={'flex-end'}>
                    <Col className={'left'} span={12}>
                      <Form.Item label={'Chọn rạp'}>
                        <SelectTheaters value={currentTheaterId}
                                        onChange={(value: number) => setCurrentTheaterId(value)} name={'theaterId'} />
                      </Form.Item>
                      <Form.Item name={'scheduleId'} label={'Lịch chiếu'}>
                        <SelectSchedules name={'scheduleId'} />
                      </Form.Item>
                    </Col>
                    <Col className={'right'} span={12}>
                      <Form.Item layout={'horizontal'} label={'Còn quản lý'} name={'enable'}
                                 valuePropName="checked">
                        <Checkbox name={'enable'} />
                      </Form.Item>
                    </Col>
                  </Flex>
                  {
                    currentTheaterId && showTimeArgs.length > 0 && showTimeArgs.map((item, index) => <>
                        <Flex key={index} justify={'space-between'} align={'flex-end'}>
                          <Col className={'left'} span={8}>
                            <Form.Item label={'Chọn phim'}>
                              <SelectMovies
                                value={item.productId}
                                onChange={(value: number) => onChangeShowTimeArgs({
                                  ...item,
                                  productId: value,
                                })}
                                name={'movieId'} />
                            </Form.Item>
                          </Col>
                          <Col span={6}>
                            <Form.Item label={'Xuất chiếu'}>
                              <DatePicker.TimePicker
                                value={dayjs(item.startTime, 'HH:mm')}
                                onChange={(value) => onChangeShowTimeArgs({
                                  ...item,
                                  startTime: dayjs(value).format('HH:mm'),
                                })} format={'HH:mm'}
                                name={'startDate'}
                                placeholder={'HH:mm'} />
                            </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item label={'Chọn phòng'}>
                              <SelectSectors value={item.sectorId}
                                             currentTheaterId={currentTheaterId}
                                             onChange={(value: number) => onChangeShowTimeArgs({
                                               ...item,
                                               sectorId: value,
                                             })}
                                             name={'sectorId'} />
                            </Form.Item>
                          </Col>
                          {
                            !props.id &&
                            <Col className={'right'} span={2}>
                              <Form.Item>
                                <Button title="Xóa xuất chiếu" type={'primary'}
                                        onClick={() => onDeleteShowTimeArgs(item.id)}
                                        icon={<DeleteOutlined />} />
                              </Form.Item>
                            </Col>
                          }
                        </Flex>
                      </>,
                    )
                  }
                  {
                    !props.id &&
                    <Button title={'Thêm xuất chiếu'} type="primary" onClick={onAddShowTimeArgs}
                            icon={<PlusOutlined />}>
                      Thêm xuất chiếu
                    </Button>
                  }
                </Form>
            }
          </Col>
          {contextHolder}
        </Row>
      </Card>
    </>
  );
};