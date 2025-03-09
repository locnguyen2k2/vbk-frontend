import { Select, Space } from 'antd';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import { QueryTheatersArgs, TheaterDetail, TheatersQuery } from '../../../generated/graphql';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { THEATERS_PAGINATED_QUERY } from '../../../apis/services/theaters/theater.query';

export const SelectTheaters = (props: any) => {
  const user = useAppSelector((state) => state.user);
  const [data, setData] = useState<any[]>([]);

  const onLoadCompleted = (data: TheaterDetail[]) => {
    setData(data.map((item, index) => ({
      label: item.name,
      value: item.id,
      photo: item.photo?.path,
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
      if (res.data && res.data.theaters) {
        onLoadCompleted(res.data.theaters.data as TheaterDetail[]);
      }

    });
  };

  const [getData, { loading }]: LazyQueryResultTuple<TheatersQuery, QueryTheatersArgs> = useLazyQuery(THEATERS_PAGINATED_QUERY, {
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
              optionRender={(option, index) => (
                <Space wrap={true}>
                  <img
                    src={(option.data.photo) && process.env.REACT_APP_ASSETS_URL + option.data.photo}
                    style={{ backgroundColor: 'white', width: '25px', height: '25px' }}
                  />
                  <p>{option.data.label}</p>
                  <hr />
                </Space>
              )}
              allowClear={true}
              loading={loading}
              style={{ minWidth: '150px' }}
      />
    </Space.Compact>
  );
};