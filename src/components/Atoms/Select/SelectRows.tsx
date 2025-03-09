import { Select, Space } from 'antd';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import { QueryRowsArgs, RowModel, RowsQuery } from '../../../generated/graphql';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { ROWS_PAGINATED_QUERY } from '../../../apis/services/rows/row.query';

export const SelectRows = (props: any) => {
  const user = useAppSelector((state) => state.user);
  const [data, setData] = useState<any[]>([]);

  const onLoadCompleted = (data: RowModel[]) => {
    setData(data.map((item, index) => ({
      label: item.name,
      value: item.id,
      key: index,
    })));
  };

  const onLoadData = () => {
    getData({
      variables: {
        pageOptions: {
          all: true,
        },
      },
    }).then((res) => {
      if (res.data && res.data.rows) {
        onLoadCompleted(res.data.rows.data as RowModel[]);
      }

    });
  };

  const [getData, { loading }]: LazyQueryResultTuple<RowsQuery, QueryRowsArgs> = useLazyQuery(ROWS_PAGINATED_QUERY, {
    variables: {
      pageOptions: {
        // ...(props.currentTheaterId && { theaterId: props.currentTheaterId }),
        all: true,
      },
    },
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
              loading={loading}
              style={{ minWidth: '150px' }}
      />
    </Space.Compact>
  );
};