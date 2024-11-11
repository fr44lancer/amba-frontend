'use client';

import { Tabs } from '@/components/ui/tabs';
import { ProductList } from '@/components/pages/Catalog/ProductList';
import { ProductListSt } from '@/components/pages/Catalog/ProductListSt';

export function CatalogTabs() {
  const tabs = [
    {
      title: 'Ստելաժներ',
      value: 'stellajner',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl font-bold text-gray-900 bg-gradient-to-br from-white to-gray-100">
          <p>Ստելաժներ</p>
          <ProductListSt />
        </div>
      ),
    },
    {
      title: 'Պահեստներ',
      value: 'pahest',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl font-bold text-gray-900 bg-gradient-to-br from-white to-gray-100">
          <p>Պահեստներ</p>
          <ProductList />
        </div>
      ),
    },
    {
      title: 'Սառնարաններ',
      value: 'sarnaranner',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl font-bold text-gray-900 bg-gradient-to-br from-white to-gray-100">
          <p>Սառնարաններ</p>
        </div>
      ),
    },
    {
      title: 'Աքսեսուարներ',
      value: 'access',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl font-bold text-gray-900 bg-gradient-to-br from-white to-gray-100">
          <p>Աքսեսուարներ</p>
        </div>
      ),
    },
    {
      title: 'Սայլակներ',
      value: 'saylakner',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl font-bold text-gray-900 bg-gradient-to-br from-white to-gray-100">
          <p>Սայլակներ</p>
        </div>
      ),
    },
    {
      title: 'Դրամարկղային սեղաններ',
      value: 'dramarkx',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl font-bold text-gray-900 bg-gradient-to-br from-white to-gray-100">
          <p>Դրամարկղային սեղաններ</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[300rem]  [perspective:1000px] relative b flex flex-col  mx-auto w-full  items-start justify-start my-4 px-0">
      <Tabs tabs={tabs} />
    </div>
  );
}
