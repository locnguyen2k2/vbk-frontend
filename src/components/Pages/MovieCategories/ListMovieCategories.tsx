import { useEffect, useState } from 'react';
import {
  Pagination as IPagination,
  ProductCategoriesQuery,
  ProductCategoryModel,
  ProductCategoryPageOptions,
  QueryProductCategoriesArgs,
  SortedEnum,
  useEnableProdCategoriesMutation,
} from '../../../generated/graphql';
import { InitialPaginated } from '../../../common/constants';
import { Card, Col, Flex, notification, Pagination, Row, Space, Table, TableColumnsType, TableProps, Tag } from 'antd';
import { RecordActions } from '../../Molecules/Actions/RecordAction';
import { TableRowSelection } from 'antd/es/table/interface';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import { Helmet } from 'react-helmet';
import { TableLabel } from '../../Atoms/Label/TableLabel';
import { HomeOutlined } from '@ant-design/icons';
import { TableActions } from '../../Molecules/Actions/TableActions';
import { Search } from '../../Molecules/Searches/Search';
import { PROD_CATEGORIES_PAGINATED_QUERY } from '../../../apis/services/productCategories/productCategory.query';
import dayjs from 'dayjs';
import { DraggableForm } from '../../Molecules/Form/DraggableForm';
import { MovieCategoryForm } from '../../Organisms/Forms/MovieCategories/MovieCategoryForm';

type OnChange = NonNullable<TableProps<ProductCategoryModel>['onChange']>;
export const ListMovieCategories = (props: any) => {
  const [api, contextHolder] = notification.useNotification();
  const [productCategories, setProductCategories] = useState<Exclude<ProductCategoryModel, {
    key: number
  }>[] | []>([]);

  const [itemsSelected, setItemsSelected] = useState<number[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);

  const [modalView, setModalView] = useState<boolean>(false);
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);

  const [paginated, setPaginated] = useState<IPagination>(InitialPaginated);
  const [pageOptions, setPageOptions] = useState<ProductCategoryPageOptions>();

  const onChangeTable: OnChange = (pagination, filters, sorter) => {
    const column = Array.isArray(sorter) ? sorter[0] : sorter;
    setPageOptions({
      ...pageOptions,
      sort: `${column.field}`,
      sorted: column.order === 'ascend' ? SortedEnum.Asc : SortedEnum.Desc,
    });
  };

  const columnsShow: TableColumnsType<ProductCategoryModel> = [
    {
      dataIndex: 'id',
      title: 'Mã loại',
      sorter: true,
      fixed: 'left',
      width: '125px',
    },
    {
      dataIndex: 'name',
      title: 'Tên loại',
      sorter: true,
      width: '200px',
    },
    {
      dataIndex: 'value',
      title: 'Giá trị',
      sorter: true,
      width: '200px',
    },
    {
      dataIndex: 'enable',
      title: 'Trạng thái',
      sorter: true,
      width: '200px',
      render: (text: string, record: ProductCategoryModel) => (
        !!record.enable ? <Tag color={'green'}>Kích hoạt</Tag>
          : <Tag color={'red'}>Vô hiệu</Tag>
      ),
    },
    {
      dataIndex: 'updatedAt',
      title: 'Cập nhật lần cuối',
      sorter: true,
      width: '200px',
      render: (text: string, record: ProductCategoryModel) => (
        <span>{dayjs(record.updatedAt).format('DD-MM-YYYY HH:mm:ss')}</span>
      ),
    },
    {
      title: 'Thao tác',
      width: '150px',
      fixed: 'right',
      render: (text: string, record: ProductCategoryModel) => (
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
          onDelete={(e: any) => console.log(e, record.id)}
        />
      ),
    },
  ];

  const resetRowSelection = () => {
    setItemsSelected([]);
    setSelectedRowKeys([]);
  };

  const onLoadCompleted = (data: ProductCategoryModel[]) => {
    setProductCategories(data.map((item, index) => ({ ...item, key: index })));
  };

  const onLoadData = () => {
    getProdCategories({
      variables: {
        pageOptions: {
          ...pageOptions,
        },
      },
    }).then((res) => {
      if (res.data && res.data.productCategories) {
        resetRowSelection();
        setPaginated({ ...res.data.productCategories.paginated });
        onLoadCompleted(res.data.productCategories.data);
      }
    });
  };

  const onEnable = (ids: number[], enable: boolean) => {
    enableProdCategories({
      variables: { productCategoryId: ids, enableProdCategoryArgs: { enable } },
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

  const onClickRow = (row: ProductCategoryModel) => {
    if (row?.id) setItemsSelected([row.id]);
    toggleModalView();
  };

  const rowSelection: TableRowSelection<ProductCategoryModel> = {
    type: 'checkbox',
    selectedRowKeys,
    onChange: (newSelectedRowKeys: any, selectedRows: ProductCategoryModel[]) => {
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

  const [enableProdCategories, { loading: loadingEnable }] = useEnableProdCategoriesMutation({
    onError: onError,
    onCompleted: onSuccess,
    fetchPolicy: 'no-cache',
  });

  const [getProdCategories, { loading: loadingList }]: LazyQueryResultTuple<ProductCategoriesQuery, QueryProductCategoriesArgs> = useLazyQuery(PROD_CATEGORIES_PAGINATED_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  useEffect(() => {
    onLoadData();
  }, [pageOptions]);
  return (
    <>
      <Helmet>
        <title>Danh loại phim | {`${process.env.REACT_APP_NAME}`}</title>
        <meta name="description" content="Quản lý sách loại sách phim" />
      </Helmet>

      <Card>
        <Row gutter={[24, 24]}>
          <TableLabel content={'Danh sách loại phim'}
                      items={[
                        { title: <HomeOutlined />, link: '/' },
                        { title: 'Loại phim' },
                      ]}
          />

          <Flex style={{ width: '100%' }}>
            <Col span={6}>
              <Space>
                <TableActions
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
              dataSource={productCategories}
              columns={columnsShow}
              onChange={onChangeTable}
              loading={loadingList}
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
        </Row>
        <DraggableForm
          open={modalUpdate}
          onCancel={toggleModalUpdate}
          footer={null}
          width={1200}
          modal={<MovieCategoryForm
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
          width={1200}
          modal={<MovieCategoryForm
            id={itemsSelected[0]}
            onlyView={true}
            onError={onError}
            onCompleted={() => {
              onLoadData();
              toggleModalView();
            }}
            onGoHome={toggleModalView}
            onCancel={toggleModalView}
          />}
        />
        {contextHolder}
      </Card>
    </>
  );
};