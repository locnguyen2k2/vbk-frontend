import { Select, Space } from 'antd';
import { SeatStatusEnum } from '../../../generated/graphql';

export const SelectSeatStatus = (props: any) => {
  return (
    <Space.Compact block>
      <Select {...props}
              options={[
                { label: 'Đã đặt', value: SeatStatusEnum.Unavailable },
                { label: 'Sẵn dùng', value: SeatStatusEnum.Available },
                { label: 'Đang bảo trì', value: SeatStatusEnum.Maintenance },
              ]}
              allowClear={true}
              style={{ minWidth: '150px' }}
      />
    </Space.Compact>
  );
};