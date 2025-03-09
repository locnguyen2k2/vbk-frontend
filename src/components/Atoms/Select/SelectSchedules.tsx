import { Select, Space } from 'antd';
import { LazyQueryResultTuple, useLazyQuery } from '@apollo/client';
import { QuerySchedulesArgs, ScheduleDetail, SchedulesQuery } from '../../../generated/graphql';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { SCHEDULES_PAGINATED_QUERY } from '../../../apis/services/schedules/schedule.query';
import dayjs from 'dayjs';

export const SelectSchedules = (props: any) => {
  const user = useAppSelector((state) => state.user);
  const [data, setData] = useState<any[]>([]);

  const onLoadCompleted = (data: ScheduleDetail[]) => {
    setData(data.map((item, index) => ({
      label: dayjs(item.date).format('DD-MM-YYYY'),
      value: item.id,
      key: index,
    })));
  };

  const onLoadData = () => {
    getSchedules({
      variables: {
        pageOptions: {
          all: true,
        },
      },
    }).then((res) => {
      if (res.data && res.data.schedules) {
        onLoadCompleted(res.data.schedules.data as ScheduleDetail[]);
      }

    });
  };

  const [getSchedules, { loading }]: LazyQueryResultTuple<SchedulesQuery, QuerySchedulesArgs> = useLazyQuery(SCHEDULES_PAGINATED_QUERY, {
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