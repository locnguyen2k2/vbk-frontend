import { Card, Col, Flex, notification, Pagination, Row, Space, Table, TableColumnsType, TableProps, Tag } from 'antd';
import { Helmet } from 'react-helmet';
import { HomeOutlined } from '@ant-design/icons';
import { TableLabel } from '../../Atoms/Label/TableLabel';
import { TableActions } from '../../Molecules/Actions/TableActions';
import { Search } from '../../Molecules/Searches/Search';
import { useEffect, useState } from 'react';
import {
  MovieProductPageOptions,
  MovieProductsQuery,
  MovieSchedulesDetail,
  Pagination as IPagination,
  QueryMovieProductsArgs,
  SortedEnum,
  useEnableMoviesMutation,
} from '../../../generated/graphql';
import { RecordActions } from '../../Molecules/Actions/RecordAction';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import { MOVIES_PAGINATED_QUERY } from '../../../apis/services/movies/movie.query';
import { TableRowSelection } from 'antd/es/table/interface';
import { InitialPaginated } from '../../../common/constants';
import dayjs from 'dayjs';
import { MovieForm } from '../../Organisms/Forms/Movies/MovieForm';
import { DraggableForm } from '../../Molecules/Form/DraggableForm';
import { SIZES } from '../../../common/Sizes';

type OnChange = NonNullable<TableProps<MovieSchedulesDetail>['onChange']>;
export default function ListMovie() {
  const [api, contextHolder] = notification.useNotification();
  const [data, setData] = useState<Exclude<MovieSchedulesDetail, { key: number }>[] | []>([]);

  const [itemsSelected, setItemsSelected] = useState<number[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);

  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalView, setModalView] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);

  const [paginated, setPaginated] = useState<IPagination>(InitialPaginated);
  const [pageOptions, setPageOptions] = useState<MovieProductPageOptions>();

  const columnsShow: TableColumnsType<MovieSchedulesDetail> = [
    {
      dataIndex: 'id',
      title: 'Mã phim',
      sorter: true,
      fixed: 'left',
      width: '125px',
    },
    {
      dataIndex: 'name',
      title: 'Tên phim',
      sorter: true,
      width: '200px',
    },
    {
      title: 'Thể loại',
      width: '250px',
      render: (text: string, record: MovieSchedulesDetail) => (
        record.categories?.map((item, index) => <Tag key={index} color={'green'}>{item.name}</Tag>)
      ),
    },
    {
      title: 'Đạo diễn',
      width: '150px',
      render: (text: string, record: MovieSchedulesDetail) => (
        <Tag color={'green'}>{record.director?.firstName + ' ' + record.director?.firstName}</Tag>
      )
      ,
    },
    {
      dataIndex: 'durationMin',
      title: 'Thời lượng(phút)',
      sorter: true,
      width: '180px',
    },
    {
      dataIndex: 'enable',
      title: 'Trạng thái',
      sorter: true,
      width: '200px',
      render: (text: string, record: MovieSchedulesDetail) => (
        !!record.enable ? <Tag color={'green'}>Kích hoạt</Tag>
          : <Tag color={'red'}>Vô hiệu</Tag>
      ),
    },
    {
      dataIndex: 'updatedAt',
      title: 'Cập nhật lần cuối',
      sorter: true,
      width: '200px',
      render: (text: string, record: MovieSchedulesDetail) => (
        <span>{dayjs(record.updatedAt).format('DD-MM-YYYY HH:mm:ss')}</span>
      ),
    },
    {
      title: 'Thao tác',
      width: '150px',
      fixed: 'right',
      ellipsis: true,
      render: (text: string, record: MovieSchedulesDetail) => (
        <RecordActions
          onView={(e: any) => {
            e.stopPropagation();
            setItemsSelected([record.id ? record.id : 0]);
            toggleModalView();
          }}
          onUpdate={(e: any) => {
            e.stopPropagation();
            setItemsSelected([record.id ? record.id : 0]);
            toggleModalUpdate();
          }}
          onDelete={(e: any) => {
            e.stopPropagation();
          }}
        />
      ),
    },
  ];

  const resetRowSelection = () => {
    setItemsSelected([]);
    setSelectedRowKeys([]);
  };

  const onLoadCompleted = (data: MovieSchedulesDetail[]) => {
    setData(data.map((item, index) => ({ ...item, key: index })));
  };

  const onError = (err: Error) => {
    api.error({ message: err.message, showProgress: true, duration: 5 });
  };

  const onSuccess = () => {
    api.success({ message: 'Thao tác thành công' });
  };


  const onLoadData = () => {
    getMovies({
      variables: {
        pageOptions: {
          ...pageOptions,
        },
      },
    }).then((res) => {
      if (res.data && res.data.movieProducts) {
        resetRowSelection();
        setPaginated({ ...res.data.movieProducts.paginated });
        onLoadCompleted(res.data.movieProducts.data as MovieSchedulesDetail[]);
      }
    }).catch(onError);
  };

  const toggleModalCreate = () => setModalCreate(!modalCreate);
  const toggleModalView = () => setModalView(!modalView);
  const toggleModalUpdate = () => setModalUpdate(!modalUpdate);
  const toggleModalDelete = () => setModalView(!modalDelete);

  const onChangeTable: OnChange = (pagination, filters, sorter) => {
    const column = Array.isArray(sorter) ? sorter[0] : sorter;
    setPageOptions({
      ...pageOptions,
      sort: `${column.field}`,
      sorted: column.order === 'ascend' ? SortedEnum.Asc : SortedEnum.Desc,
    });
  };

  const onChangePage = (page: number, pageSize: number) => {
    setPageOptions({
      ...pageOptions,
      page: page,
      take: pageSize,
    });
    setPaginated({
      ...paginated,
      page: page,
      take: pageSize,
    });
  };

  const onClickRow = (row: MovieSchedulesDetail) => {
    if (row?.id) setItemsSelected([row.id]);
    toggleModalView();
  };

  const rowSelection: TableRowSelection<MovieSchedulesDetail> = {
    type: 'checkbox',
    selectedRowKeys,
    onChange: (newSelectedRowKeys: any, selectedRows: MovieSchedulesDetail[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
      const ids: any[] = selectedRows.map(row => row.id);
      if (ids) setItemsSelected(ids);
    },
  };

  const onEnable = (ids: number[], enable: boolean) => {
    enableMovies({
      variables: { movieId: ids, enableMovieArgs: { enable } },
    }).then(() => onLoadData());
  };

  const [enableMovies, { loading: loadingEnable }] = useEnableMoviesMutation({
    onError: onError,
    onCompleted: onSuccess,
    fetchPolicy: 'no-cache',
  });

  const [getMovies, {
    loading: loadingList,
    error,
  }]: LazyQueryResultTuple<MovieProductsQuery, QueryMovieProductsArgs> = useLazyQuery(MOVIES_PAGINATED_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (error)
      onError(error);
  }, [error]);

  useEffect(() => {
    onLoadData();
  }, [pageOptions]);
  return (
    <>
      <Helmet>
        <title>Danh sách phim | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Quản lý danh sách phim" />
      </Helmet>

      <Card>
        <Row gutter={[24, 24]}>
          <TableLabel content={'Danh sách phim'}
                      items={[
                        { title: <HomeOutlined />, link: '/' },
                        { title: 'Danh sách phim' },
                      ]}
          />
          <Flex style={{ width: '100%' }}>
            <Col span={6}>
              <Space>
                <TableActions
                  onCreate={(e: any) => {
                    toggleModalCreate();
                  }}
                  onDeleted={() => console.log('Deleting')}
                  onEnabled={() => onEnable(itemsSelected, true)}
                  onDisabled={() => onEnable(itemsSelected, false)}
                />
              </Space>
            </Col>
            <Col span={18}>
              <Search
                from={'from'}
                to={'to'}
                onSubmit={({ fromDate = dayjs(), toDate = dayjs(), keyword = '' }) => {
                  const search = {
                    ...pageOptions,
                    keyword,
                    fromDate: fromDate.format('YYYY-MM-DD'),
                    toDate: toDate.format('YYYY-MM-DD'),
                  };
                  setPageOptions(search);
                }} />
            </Col>
          </Flex>

          <Col span={24}>
            <Table
              dataSource={data}
              columns={columnsShow}
              loading={loadingList || loadingEnable}
              onChange={onChangeTable}
              onRow={(record) => {
                return {
                  onClick: () => onClickRow(record),
                };
              }}
              rowSelection={rowSelection}
              showSorterTooltip={false}
              scroll={{ x: 992, y: '100%' }}
              pagination={false}
            />

            <Pagination
              showSizeChanger={true}
              total={paginated?.numberRecords}
              defaultCurrent={paginated?.page}
              onChange={onChangePage}
              pageSizeOptions={[5, 15, 25, 50]}
            />
          </Col>
        </Row>

        <DraggableForm
          open={modalCreate}
          onCancel={toggleModalCreate}
          footer={null}
          width={1200}
          modal={<MovieForm
            id={itemsSelected[0]}
            onError={onError}
            onCompleted={() => {
              onLoadData();
              toggleModalCreate();
            }}
            onGoHome={toggleModalCreate}
            onCancel={toggleModalCreate}
          />}
        />

        <DraggableForm
          open={modalUpdate}
          onCancel={toggleModalUpdate}
          footer={null}
          width={1200}
          modal={<MovieForm
            id={itemsSelected[0]}
            onError={onError}
            onCompleted={() => {
              onLoadData();
              toggleModalUpdate();
            }}
            onGoHome={toggleModalUpdate}
            onCancel={toggleModalUpdate}
          />}
        />

        <DraggableForm
          open={modalView}
          onCancel={toggleModalView}
          footer={null}
          width={SIZES.PrimaryFormWidth}
          modal={<MovieForm
            id={itemsSelected[0]}
            onError={onError}
            onCompleted={() => {
              onLoadData();
              toggleModalView();
            }}
            onGoHome={toggleModalView}
            onCancel={toggleModalView}
            onlyView={true}
          />}
        />
        {contextHolder}
      </Card>
    </>
  );
}