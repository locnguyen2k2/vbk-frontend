import { Select, Space } from 'antd';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import { MovieProductsQuery, MovieSchedulesDetail, QueryMovieProductsArgs } from '../../../generated/graphql';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { MOVIES_PAGINATED_QUERY } from '../../../apis/services/movies/movie.query';

export const SelectMovies = (props: any) => {
  const user = useAppSelector((state) => state.user);
  const [data, setData] = useState<any[]>([]);

  const onLoadCompleted = (data: MovieSchedulesDetail[]) => {
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
      if (res.data && res.data.movieProducts) {
        onLoadCompleted(res.data.movieProducts.data as MovieSchedulesDetail[]);
      }

    });
  };

  const [getData, { loading }]: LazyQueryResultTuple<MovieProductsQuery, QueryMovieProductsArgs> = useLazyQuery(MOVIES_PAGINATED_QUERY, {
    variables: {
      pageOptions: {
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