import { Button, Space } from 'antd';
import { CloseOutlined, SaveOutlined } from '@ant-design/icons';

export interface IFormAction {
  onUpdate?: (e: any) => void;
  onCancel?: (e: any) => void;
}

export const FormActions = (props: IFormAction) => {
  const {
    onUpdate = null,
    onCancel = null,
  } = props;

  return (
    <Space>
      {
        onUpdate && <Button type={'primary'} icon={<SaveOutlined />} onClick={onUpdate}>
          Lưu
        </Button>
      }
      {
        onCancel && <Button icon={<CloseOutlined />} danger={true} onClick={onCancel}>Hủy</Button>
      }
    </Space>
  );
};