import { Button, Space } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

export interface IRecordAction {
  onView?: (e: any) => void;
  onUpdate?: (e: any) => void;
  onDelete?: (e: any) => void;
}

export const RecordActions = (props: IRecordAction) => {
  const {
    onView = null,
    onUpdate = null,
    onDelete = null,
  } = props;

  return (
    <Space>
      {
        onView && <Button icon={<EyeOutlined />} onClick={onView} />
      }
      {
        onUpdate && <Button icon={<EditOutlined />} onClick={onUpdate} />
      }
      {
        onDelete && <Button icon={<DeleteOutlined />} danger={true} onClick={onDelete} />
      }
    </Space>
  );
};