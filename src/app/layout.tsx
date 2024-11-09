import './globals.css';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import StyledComponentsRegistry from '@/utils/styleRegistry';
import AppLayout from '@/components/common/Layout';

export const metadata: Metadata = {
  title: 'Docus | AI Health Assistant',
  description: 'AI-Powered Health Platform',
};

export const viewport = {
  themeColor: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      {/* eslint-disable-next-line @next/next/no-script-component-in-head */}
      <body className={'scrollbar'}>
        <StyledComponentsRegistry>
          <Suspense>
            <AppLayout>
              <Suspense>{children}</Suspense>
            </AppLayout>
          </Suspense>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
