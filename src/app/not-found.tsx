import AppPage from '@/components/common/Layout/AppPage';
import ErrorPage from '@/components/pages/ErrorPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 | Page Not Found',
  description:
    "Oops! The page you're looking for couldn't be found. Please check the URL and try again.",
};

export const viewport = {
  width: 1,
  themeColor: 'light',
};

export default function NotFoundPage() {
  return (
    <AppPage contentClassName={'no-padding'}>
      <ErrorPage errorCode={404} desc={'This page could not be found.'} />
    </AppPage>
  );
}
