import { Metadata } from 'next';
import React from 'react';
import { Contact } from '@/components/pages/Contact';

export const metadata: Metadata = {
  title: 'Amba',
  description: 'Amba Group',
};

export default async function AboutPage() {
  return <Contact />;
}
