import { Button, Dropdown, Space } from 'antd';
import { CheckOutlined, DeleteOutlined, DownOutlined, StopOutlined } from '@ant-design/icons';

export const TableActions = (props: any) => {
  const {
    onCreate = null,
    onEnabled = null,
    onDisabled = null,
    onDeleted = null,

  } = props;
  const items = [
    {
      key: 'enable',
      label: (
        <span onClick={onEnabled}>
          Kích hoạt
        </span>
      ),
      icon: <CheckOutlined />,
    },
    {
      key: 'disable',
      label: (
        <span onClick={onDisabled}>
          Vô hiệu hóa
        </span>
      ),
      icon: <StopOutlined />,
      disabled: !onDisabled,
    },
    {
      key: 'delete',
      label: (
        <span onClick={onDeleted}>
          Xóa
        </span>
      ),
      icon: <DeleteOutlined />,
      danger: true,
      disabled: !onDeleted,
    },
  ];

  return (
    <Space>
      {onCreate && <Button type={'primary'} onClick={onCreate}>Tạo mới</Button>}
      <Dropdown disabled={props.disabled} className={'border-primary rad-primary table-action'} menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          Hành động
          <DownOutlined />
        </a>
      </Dropdown>
    </Space>
  );
};