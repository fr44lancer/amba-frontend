'use client';

import { Tabs } from '@/components/ui/tabs';
import { ProductList } from '@/components/pages/Catalog/ProductList';

export function CatalogTabs() {
  const tabs = [
    {
      title: 'Ստելաժներ',
      value: 'stellajner',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl font-bold text-gray-900 bg-gradient-to-br from-white to-gray-400">
          <p>Ստելաժներ</p>
          <ProductList />
        </div>
      ),
    },
    {
      title: 'Պահեստներ',
      value: 'pahest',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl font-bold text-gray-900 bg-gradient-to-br from-white to-gray-400">
          <p>Պահեստներ</p>
          <ProductList />
        </div>
      ),
    },
    {
      title: 'Սառնարաններ',
      value: 'sarnaranner',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl font-bold text-gray-900 bg-gradient-to-br from-white to-gray-400">
          <p>Սառնարաններ</p>
          <ProductList />
        </div>
      ),
    },
    {
      title: 'Աքսեսուարներ',
      value: 'access',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl font-bold text-gray-900 bg-gradient-to-br from-white to-gray-400">
          <p>Աքսեսուարներ</p>
          <ProductList />
        </div>
      ),
    },
    {
      title: 'Սայլակներ',
      value: 'saylakner',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl font-bold text-gray-900 bg-gradient-to-br from-white to-gray-400">
          <p>Սայլակներ</p>
          <ProductList />
        </div>
      ),
    },
    {
      title: 'Դրամարկղային սեղաններ',
      value: 'dramarkx',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl font-bold text-gray-900 bg-gradient-to-br from-white to-gray-400">
          <p>Դրամարկղային սեղաններ</p>
          <ProductList />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[100rem]  [perspective:1000px] relative b flex flex-col  mx-auto w-full  items-start justify-start my-10 px-32">
      <Tabs tabs={tabs} />
    </div>
  );
}
