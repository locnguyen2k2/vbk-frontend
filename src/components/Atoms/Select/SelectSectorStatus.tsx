import { Select, Space } from 'antd';
import { SectorStatusEnum } from '../../../generated/graphql';

export const SelectSectorStatus = (props: any) => {
  return (
    <Space.Compact block>
      <Select {...props}
              options={[
                { label: 'Đang chiếu', value: SectorStatusEnum.Showing },
                { label: 'Sẵn dùng', value: SectorStatusEnum.Available },
                { label: 'Đang bảo trì', value: SectorStatusEnum.Maintenance },
              ]}
              allowClear={true}
              style={{ minWidth: '150px' }}
      />
    </Space.Compact>
  );
};