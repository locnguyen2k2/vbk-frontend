import MainFooter from '../Molecules/Footers/MainFooter';
import MainHeader from '../Molecules/Headers/MainHeader';
import { LefSidebar } from './LeftSidebar';
import { Layout } from 'antd';

export default function BaseHorizontalLayout(props: any) {
  return (
    <Layout className={'horiz-layout'}>
      <MainHeader />
      <LefSidebar />
      <Layout.Content className={'container'}>
        {props.children}
      </Layout.Content>

      <MainFooter />
    </Layout>
  );
}