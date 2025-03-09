import { Select, Space } from 'antd';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import { QuerySectorsArgs, SectorModel, SectorsQuery } from '../../../generated/graphql';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { SECTORS_PAGINATED_QUERY } from '../../../apis/services/sectors/sector.query';

export const SelectSectors = (props: any) => {
  const user = useAppSelector((state) => state.user);
  const [data, setData] = useState<any[]>([]);

  const onLoadCompleted = (data: SectorModel[]) => {
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
      if (res.data && res.data.sectors) {
        onLoadCompleted(res.data.sectors.data as SectorModel[]);
      }

    });
  };

  const [getData, { loading }]: LazyQueryResultTuple<SectorsQuery, QuerySectorsArgs> = useLazyQuery(SECTORS_PAGINATED_QUERY, {
    variables: {
      pageOptions: {
        ...(props.currentTheaterId && { theaterId: props.currentTheaterId }),
        all: true,
      },
    },
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });


  useEffect(() => {
    onLoadData();
  }, [props.currentTheaterId]);
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