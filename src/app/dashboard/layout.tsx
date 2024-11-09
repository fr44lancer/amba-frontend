import { ReactNode, Suspense } from 'react';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {



  return (
    <>
              <Suspense>{children}</Suspense>
    </>
  );
}
