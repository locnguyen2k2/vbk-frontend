import { Card, Col, Flex, notification, Pagination, Row, Space, Table, TableColumnsType, TableProps, Tag } from 'antd';
import { Helmet } from 'react-helmet';
import { HomeOutlined } from '@ant-design/icons';
import { TableLabel } from '../../Atoms/Label/TableLabel';
import { TableActions } from '../../Molecules/Actions/TableActions';
import { Search } from '../../Molecules/Searches/Search';
import { useEffect, useState } from 'react';
import {
  Pagination as IPagination,
  QueryRowsArgs,
  RowModel,
  RowPageOptions,
  RowsQuery,
  SortedEnum,
  useEnableRowsMutation,
} from '../../../generated/graphql';
import { RecordActions } from '../../Molecules/Actions/RecordAction';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import { TableRowSelection } from 'antd/es/table/interface';
import { InitialPaginated } from '../../../common/constants';
import dayjs from 'dayjs';
import { ROWS_PAGINATED_QUERY } from '../../../apis/services/rows/row.query';
import { DraggableForm } from '../../Molecules/Form/DraggableForm';
import { RowForm } from '../../Organisms/Forms/Rows/RowForm';

type OnChange = NonNullable<TableProps<RowModel>['onChange']>;
export default function ListRow(props: any) {
  const [api, contextHolder] = notification.useNotification();
  const [data, setData] = useState<Exclude<RowModel, { key: number }>[] | []>([]);

  const [itemsSelected, setItemsSelected] = useState<number[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);

  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalView, setModalView] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);

  const [paginated, setPaginated] = useState<IPagination>(InitialPaginated);
  const [pageOptions, setPageOptions] = useState<RowPageOptions>();

  const onChangeTable: OnChange = (pagination, filters, sorter) => {
    const column = Array.isArray(sorter) ? sorter[0] : sorter;
    setPageOptions({
      ...pageOptions,
      sort: `${column.field}`,
      sorted: column.order === 'ascend' ? SortedEnum.Asc : SortedEnum.Desc,
    });
  };

  const columnsShow: TableColumnsType<RowModel> = [
    {
      dataIndex: 'id',
      title: 'Mã hàng ghế',
      sorter: true,
      fixed: 'left',
      width: '125px',
    },
    {
      dataIndex: 'name',
      title: 'Tên',
      sorter: true,
      width: '180px',
    },
    {
      dataIndex: 'enable',
      title: 'Trạng thái',
      sorter: true,
      width: '200px',
      render: (text: string, record: RowModel) => (
        !!record.enable ? <Tag color={'green'}>Kích hoạt</Tag>
          : <Tag color={'red'}>Vô hiệu</Tag>
      ),
    },
    {
      dataIndex: 'updatedAt',
      title: 'Cập nhật lần cuối',
      sorter: true,
      width: '200px',
      render: (text: string, record: RowModel) => (
        <span>{dayjs(record.updatedAt).format('DD-MM-YYYY HH:mm:ss')}</span>
      ),
    },
    {
      title: 'Thao tác',
      width: '150px',
      fixed: 'right',
      render: (text: string, record: RowModel) => (
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

  const onError = (err: Error) => {
    api.error({ message: err.message });
  };

  const onSuccess = () => {
    api.success({ message: 'Thao tác thành công' });
  };

  const onLoadCompleted = (data: RowModel[]) => {
    setData(data.map((item, index) => ({ ...item, key: index })));
  };

  const onLoadData = () => {
    getRows({
      variables: {
        pageOptions: {
          ...pageOptions,
        },
      },
    }).then((res) => {
      if (res.data && res.data.rows) {
        resetRowSelection();
        setPaginated({ ...res.data.rows.paginated });
        onLoadCompleted(res.data.rows.data as RowModel[]);
      }

    });
  };

  const toggleModalCreate = () => setModalCreate(!modalCreate);
  const toggleModalView = () => setModalView(!modalView);
  const toggleModalUpdate = () => setModalUpdate(!modalUpdate);
  const toggleModalDelete = () => setModalDelete(!modalDelete);

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

  const onClickRow = (row: RowModel) => {
    if (row?.id) setItemsSelected([row.id]);
    toggleModalView();
  };

  const rowSelection: TableRowSelection<RowModel> = {
    type: 'checkbox',
    selectedRowKeys,
    onChange: (newSelectedRowKeys: any, selectedRows: RowModel[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
      const ids: any[] = selectedRows.map(row => row.id);
      if (ids) setItemsSelected(ids);
    },
  };

  const onEnable = (ids: number[], enable: boolean) => {
    enableRows({
      variables: { rowId: ids, enableRowArgs: { enable } },
    }).then(() => onLoadData());
  };

  const [enableRows, { loading: loadingEnable }] = useEnableRowsMutation({
    onError: onError,
    onCompleted: onSuccess,
    fetchPolicy: 'no-cache',
  });

  const [getRows, { loading: loadingList }]: LazyQueryResultTuple<RowsQuery, QueryRowsArgs> = useLazyQuery(ROWS_PAGINATED_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    onLoadData();
  }, [pageOptions]);
  return (
    <>
      <Helmet>
        <title>Danh sách hàng ghế | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Quản lý danh sách hàng ghế" />
      </Helmet>

      <Card>
        <Row gutter={[24, 24]}>

          <TableLabel content={'Danh sách hàng ghế'}
                      items={[
                        { title: <HomeOutlined />, link: '/' },
                        { title: 'Danh sách hàng ghế' },
                      ]}
          />
          <Flex>
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
              scroll={{ x: 992, y: `calc(40 * ${4})` }}
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

          <DraggableForm
            open={modalCreate}
            onCancel={toggleModalCreate}
            footer={null}
            width={1200}
            modal={<RowForm
              id={null}
              onError={onError}
              onSuccess={onSuccess}
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
            modal={<RowForm
              id={itemsSelected[0] || null}
              onError={onError}
              onSuccess={onSuccess}
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
            width={800}
            modal={<RowForm
              id={itemsSelected[0] || null}
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
        </Row>
        {contextHolder}
      </Card>
    </>
  );
}