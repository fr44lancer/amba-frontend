'use client';
import { ReactNode } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import AppMain from './AppMain';
import AppHeader from './AppHeader';
import StyledLayout from '@/components/common/Layout/style';

interface IAppLayout {
  children?: ReactNode;
}

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = [
  'Ստելաժներ',
  'Պահեստներ',
  'Սառնարաններ',
  'Աքսեսուարներ',
  'Սայլակներ',
  'Դրամարկղային\n' + '    սեղաններ\n',
].map((key) => ({
  key,
  label: `${key}`,
}));

const AppLayout = ({ children }: IAppLayout) => {
  return (
    <StyledLayout>
      <Layout className={'app-main-layout'}>
        <AppHeader />
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            items={items1}
          />
        </Sider>
        <AppMain>{children}</AppMain>
      </Layout>
    </StyledLayout>
  );
};

export default AppLayout;
