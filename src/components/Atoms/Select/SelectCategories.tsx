import { Select, Space } from 'antd';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import { ProductCategoriesQuery, ProductCategoryModel, QueryProductCategoriesArgs } from '../../../generated/graphql';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { PROD_CATEGORIES_PAGINATED_QUERY } from '../../../apis/services/productCategories/productCategory.query';

export const SelectCategories = (props: any) => {
  const user = useAppSelector((state) => state.user);
  const [data, setData] = useState<any[]>([]);

  const onLoadCompleted = (data: ProductCategoryModel[]) => {
    setData(data.map((item, index) => ({
      label: `${item.name}`,
      value: item.id,
      key: index,
    })));
  };

  const onLoadData = () => {
    getProdCategories({
      variables: {
        pageOptions: {
          all: true,
        },
      },
    }).then((res) => {
      if (res.data && res.data.productCategories) {
        onLoadCompleted(res.data.productCategories.data as ProductCategoryModel[]);
      }

    });
  };

  const [getProdCategories, { loading: loadingProdCategories }]: LazyQueryResultTuple<ProductCategoriesQuery, QueryProductCategoriesArgs> = useLazyQuery(PROD_CATEGORIES_PAGINATED_QUERY, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });


  useEffect(() => {
    onLoadData();
  }, []);
  return (
    <Space.Compact block>
      <Select {...props}
              options={data}
              allowClear={true}
              loading={loadingProdCategories}
              style={{ minWidth: '150px' }}
      />
    </Space.Compact>
  );
};