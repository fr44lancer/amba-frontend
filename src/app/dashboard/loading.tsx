'use client';

import AppPage from '@/components/common/Layout/AppPage';
import BaseSkeleton from '@/components/common/Skeletons/BaseSkeleton';

export default function Loading() {
  return (
    <AppPage contentClassName={'white-bg'}>
      <BaseSkeleton />
    </AppPage>
  );
}
