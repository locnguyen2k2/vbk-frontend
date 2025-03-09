import { Select, Space } from 'antd';
import { GenderEnum } from '../../../generated/graphql';

export const SelectGenders = (props: any) => {
  return (
    <Space.Compact block>
      <Select {...props}
              options={[
                { label: 'Nam', value: GenderEnum.Female },
                { label: 'Nữ', value: GenderEnum.Male },
                { label: 'Khác', value: GenderEnum.Other },
              ]}
              allowClear={true}
              style={{ minWidth: '150px' }}
      />
    </Space.Compact>
  );
};