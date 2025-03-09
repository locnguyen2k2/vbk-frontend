import { Picture } from '../../Atoms/Picture/Picture';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import BlurBackground from '../../Templates/BlurBackground';
import { IMAGES } from '../../../common/Images';

export default function MainHeader() {
  const [barsState] = useState([`CloseLHead`, `OpenLHeadOne`, `CloseLHead`, `OpenLHeadTwo`]);
  const [currentHover, setIsHover] = useState('');
  const [isClickBar, setIsClickBar] = useState(false);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const configs = useAppSelector((state) => state.configs);

  const toggleMenu = () => {
    setIsClickBar(!isClickBar);
  };

  const path = [
    {
      title: 'Trang chủ',
      name: '/',
      link: `/projects`,
    },
    {
      title: 'Khuyến mãi',
      name: 'campaign',
      link: `/skill`,
    },
    {
      title: 'Vé xem phim',
      name: 'cinema',
      link: `/skill`,
    },
    {
      title: 'Tour du lịch',
      name: 'travel',
      link: `/about`,
    },
    {
      title: 'Về chúng tôi',
      name: 'about',
      link: `/about`,
    },
  ];

  const accountActions = [
    {
      title: 'Hồ sơ',
      name: 'profile',
      link: `/profile`,
    },
    {
      title: 'Đổi mật khẩu',
      name: 'changePassword',
      link: `/changePassword`,
    },
    {
      title: 'Lịch sử giao dịch',
      name: 'historyPayment',
      link: `/historyPayment`,
    },
    (user.isAuthenticated ? {
      title: 'Đăng xuất',
      name: 'logout',
      link: `/logout`,
    } : {
      title: 'Đăng nhập',
      name: 'login',
      link: `/login`,
    }),
  ];
  return (
    <div id={'header'}>
      <div className={'left'}>
        <Picture className={'rad-primary left logo'} preview={false}
                 src={IMAGES.LOGO_02} width={'40px'} height={'40px'} />
      </div>

      <div className={'center'}>
        <ul>
          {path.map((item, index) => (
            <li key={index} onMouseEnter={() => setIsHover(item.name)} onMouseLeave={() => setIsHover('')}>
              {item.link && <Link to={`${item.name}`}> {item?.title}</Link>}
              <BlurBackground opacity={currentHover === item.name ? '1' : '0'} style={{ borderRadius: '4px' }}
                              width={'100%'} height={'100%'} blur={3} />
            </li>
          ))}
        </ul>
      </div>
      <div className={'right'}>
        <div
          onMouseEnter={() => setIsHover('account')} onMouseLeave={() => setIsHover('')}
          className={'account'}>
          <Button className={'btn-account'} icon={<UserOutlined />}
                  style={{ border: 'none', height: '100%', width: '100%', background: 'transparent' }}>
            <BlurBackground opacity={currentHover === 'account' ? '1' : '0'} style={{ borderRadius: '4px' }}
                            width={'100%'} height={'100%'} blur={3} />
          </Button>
          <ul>
            {accountActions.map((item, index) => (
              <li key={index}>
                {item.name && <Link to={`${item.name}`}> {item?.title}<span
                  className={'dash-hover'}></span></Link>}
              </li>
            ))}
          </ul>
        </div>
        <div className={`mobile-menu`} onClick={toggleMenu}>
          <div className="bars">
            {barsState.map((isActive, index) => <span key={index}
                                                      className={`bar ${isClickBar ? isActive : ''}`}></span>)}
          </div>
        </div>
      </div>
    </div>
  );
}


