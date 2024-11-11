import { Metadata } from 'next';
import React from 'react';
import AboutUs from '@/components/pages/About';

export const metadata: Metadata = {
  title: 'Amba',
  description: 'Amba Group',
};

export default async function AboutPage() {
  return <AboutUs />;
}
