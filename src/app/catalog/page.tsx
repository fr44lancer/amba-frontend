import { Metadata } from 'next';
import React from 'react';
import { CatalogTabs } from '@/components/pages/Catalog/CatalogTabs';
import AppPage from '@/components/common/Layout/AppPage';

export const metadata: Metadata = {
  title: 'Amba',
  description: 'Amba Group',
};

export default async function Catalog() {
  return (
    <AppPage>
      <CatalogTabs />
    </AppPage>
  );
}
