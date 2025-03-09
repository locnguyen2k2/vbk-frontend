import { Card, Col, Flex, notification, Pagination, Row, Space, Table, TableColumnsType, TableProps, Tag } from 'antd';
import { Helmet } from 'react-helmet';
import { HomeOutlined } from '@ant-design/icons';
import { TableLabel } from '../../Atoms/Label/TableLabel';
import { TableActions } from '../../Molecules/Actions/TableActions';
import { Search } from '../../Molecules/Searches/Search';
import { useEffect, useState } from 'react';
import {
  Pagination as IPagination,
  PersonModel,
  PersonPageOptions,
  PersonsQuery,
  QueryPersonsArgs,
  SortedEnum,
  useEnablePersonsMutation,
} from '../../../generated/graphql';
import { RecordActions } from '../../Molecules/Actions/RecordAction';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import { TableRowSelection } from 'antd/es/table/interface';
import { InitialPaginated } from '../../../common/constants';
import dayjs from 'dayjs';
import { PERSONS_PAGINATED_QUERY } from '../../../apis/services/persons/person.query';
import { DraggableForm } from '../../Molecules/Form/DraggableForm';
import { PersonForm } from '../../Organisms/Forms/Persons/PersonForm';

type OnChange = NonNullable<TableProps<PersonModel>['onChange']>;
export default function ListPerson(props: any) {
  const [api, contextHolder] = notification.useNotification();
  const [data, setData] = useState<Exclude<PersonModel, { key: number }>[] | []>([]);

  const [itemsSelected, setItemsSelected] = useState<number[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);

  const [modalView, setModalView] = useState<boolean>(false);
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);

  const [paginated, setPaginated] = useState<IPagination>(InitialPaginated);
  const [pageOptions, setPageOptions] = useState<PersonPageOptions>();

  const onChangeTable: OnChange = (pagination, filters, sorter) => {
    const column = Array.isArray(sorter) ? sorter[0] : sorter;
    setPageOptions({
      ...pageOptions,
      sort: `${column.field}`,
      sorted: column.order === 'ascend' ? SortedEnum.Asc : SortedEnum.Desc,
    });
  };

  const columnsShow: TableColumnsType<PersonModel> = [
    {
      dataIndex: 'id',
      title: 'Mã nghệ sĩ',
      sorter: true,
      fixed: 'left',
      width: '125px',
    },
    {
      dataIndex: 'firstName',
      title: 'Họ',
      sorter: true,
      width: '180px',
    },
    {
      dataIndex: 'lastName',
      title: 'Tên',
      sorter: true,
      width: '180px',
    },
    {
      dataIndex: 'enable',
      title: 'Trạng thái',
      sorter: true,
      width: '200px',
      render: (text: string, record: PersonModel) => (
        !!record.enable ? <Tag color={'green'}>Kích hoạt</Tag>
          : <Tag color={'red'}>Vô hiệu</Tag>
      ),
    },
    {
      dataIndex: 'updatedAt',
      title: 'Cập nhật lần cuối',
      sorter: true,
      width: '200px',
      render: (text: string, record: PersonModel) => (
        <span>{dayjs(record.updatedAt).format('DD-MM-YYYY HH:mm:ss')}</span>
      ),
    },
    {
      title: 'Thao tác',
      width: '150px',
      fixed: 'right',
      render: (text: string, record: PersonModel) => (
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

  const onLoadCompleted = (data: PersonModel[]) => {
    resetRowSelection();
    setData(data.map((item, index) => ({ ...item, key: index })));
  };

  const onLoadData = () => {
    getPersons({
      variables: {
        pageOptions: {
          ...pageOptions,
        },
      },
    }).then((res) => {
      if (res.data && res.data.persons) {
        setItemsSelected([]);
        setPaginated({ ...res.data.persons.paginated });
        onLoadCompleted(res.data.persons.data as PersonModel[]);
      }

    });
  };

  const onEnable = (ids: number[], enable: boolean) => {
    enablePersons({
      variables: { personId: ids, enablePersonArgs: { enable } },
    }).then(() => onLoadData());
  };

  const toggleModalView = () => setModalView(!modalView);
  const toggleModalCreate = () => setModalCreate(!modalCreate);
  const toggleModalUpdate = () => setModalUpdate(!modalUpdate);
  const toggleModalDelete = () => setModalView(!modalDelete);

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

  const onClickRow = (row: PersonModel) => {
    if (row?.id) setItemsSelected([row.id]);
    toggleModalView();
  };

  const rowSelection: TableRowSelection<PersonModel> = {
    type: 'checkbox',
    selectedRowKeys,
    onChange: (newSelectedRowKeys: any, selectedRows: PersonModel[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
      const ids: any[] = selectedRows.map(row => row.id);
      if (ids) setItemsSelected(ids);
    },
  };

  const onError = (err: Error) => {
    api.error({ message: err.message });
  };

  const onSuccess = () => {
    api.success({ message: 'Thao tác thành công' });
  };

  const [enablePersons, { loading: loadingEnable }] = useEnablePersonsMutation({
    onError: onError,
    onCompleted: onSuccess,
    fetchPolicy: 'no-cache',
  });

  const [getPersons, { loading: loadingList }]: LazyQueryResultTuple<PersonsQuery, QueryPersonsArgs> = useLazyQuery(PERSONS_PAGINATED_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    onLoadData();
  }, [pageOptions]);
  return (
    <>
      <Helmet>
        <title>Danh sách lịch chiếu | {`${process.env.REACT_APP_NAME}`}</title>
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
            modal={<PersonForm
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
            modal={<PersonForm
              id={itemsSelected[0]}
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
            modal={<PersonForm
              id={itemsSelected[0]}
              // initData={(initData && initData.data) ? initData.data.positionDetail : null}
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