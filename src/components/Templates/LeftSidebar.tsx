import { useAppSelector } from '../../hooks';
import { Affix, Button, Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LefSidebar = () => {
  const navigate = useNavigate();
  const [leftSideBar, setLeftSideBar] = useState(false);
  const user = useAppSelector((state) => state.user);

  const toggleCollapsed = () => {
    setLeftSideBar(!leftSideBar);
  };

  const items = [
    {
      key: 'movies', icon: <PieChartOutlined />, label: 'Phim',
      children: [
        { key: 'products', label: 'Phim' },
        { key: 'productCategories', label: 'Loại phim' },
        { key: 'listPerson', label: 'Diễn viên' },
        { key: 'schedules', label: 'Lịch chiếu' },
        { key: 'showTimes', label: 'Xuất chiếu' },
      ],
    },
    {
      key: 'theater', icon: <DesktopOutlined />, label: 'Cụm rạp',
      children: [
        { key: 'theaters', label: 'Rạp' },
        { key: 'sectors', label: 'Phòng chiếu' },
        { key: 'rows', label: 'Hàng ghế' },
        { key: 'seats', label: 'Ghế' },
      ],
    },
    {
      key: 'system',
      label: 'Hệ thống',
      icon: <MailOutlined />,
      children: [
        { key: 'users', label: 'Người dùng' },
        { key: 'roles', label: 'Vai trò' },
        { key: 'permissions', label: 'Quyền' },
      ],
    },
    {
      key: 'settings',
      label: 'Cấu hình',
      icon: <AppstoreOutlined />,
      children: [
        { key: 'configs', label: 'Thiết lập' },
      ],
    },
  ];

  return (
    <Layout.Sider className={'left-sidebar'} style={{ background: 'transparent' }} trigger={null}
                  collapsible={true}
                  collapsed={leftSideBar}>
      {
        user.isAuthenticated && <Button onClick={toggleCollapsed}>
          {leftSideBar ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      }
      <Affix offsetTop={56}>
        <Menu
          style={{
            overflowY: 'scroll',
            height: `calc(100vh - 76px)`,
            background: 'rgb(103 103 103)',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
          mode="inline"
          onClick={(item) => navigate(`/${item.key}`)}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          items={[...items]}
          inlineCollapsed={leftSideBar}
        />
      </Affix>
    </Layout.Sider>
  );
};