import MainFooter from '../Molecules/Footers/MainFooter';
import MainHeader from '../Molecules/Headers/MainHeader';
import { IMAGES } from '../../common/Images';
import BlurBackground from './BlurBackground';
import { Layout } from 'antd';

export default function BaseLayout(props: any) {
  return (
    <Layout style={{
      background: `url(${IMAGES.BG_SonDoong_01}) center/cover no-repeat`,
    }}>
      <MainHeader />
      <Layout.Content className={'container'}>
        {props.children}
      </Layout.Content>
      <MainFooter />
      <BlurBackground blur={2} height={'calc(100vh + 20px)'} />
    </Layout>
  );
}