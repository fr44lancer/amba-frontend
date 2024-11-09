import { Metadata } from 'next';
import React from 'react';
import Home from '@/components/pages/Home';

export const metadata: Metadata = {
  title: 'Amba',
  description: 'Amba Group',
};

export default async function HomePage() {
  return <Home />;
}
