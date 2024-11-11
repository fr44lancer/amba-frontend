'use client';
import { ReactNode, useEffect, useState } from 'react';
import { Layout, MenuProps } from 'antd';
import StyledLayout from '@/components/common/Layout/style';
import Navbar from '@/components/common/Navigation/Navbar';
import { MoonLoader } from 'react-spinners';
import AppFooter from '@/components/global/Footer';

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
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const timoutId = setTimeout(() => {
      setPageLoading(false);
    }, 50);

    return () => {
      clearTimeout(timoutId);
    };
  }, []);

  return (
    <StyledLayout>
      {pageLoading ? (
        <div className={'flex items-center justify-center w-full min-h-screen'}>
          <MoonLoader
            color={'#1a9990'}
            loading={true}
            size={32}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={0.4}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Layout>
            <Content>{children}</Content>
            <AppFooter />
          </Layout>
        </>
      )}
    </StyledLayout>
  );
};

export default AppLayout;
