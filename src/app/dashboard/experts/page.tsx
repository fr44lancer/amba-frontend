import { Metadata } from 'next';
import AppPage from '@/components/common/Layout/AppPage';
import ExpertsList from '@/components/pages/Experts/ExpertsList';
import { headers } from 'next/headers';
import { staticRoutes } from '@/utils/router/staticRoutes';

export const metadata: Metadata = {
  title: 'Top Doctors for Medical Second Opinion',
  description: 'AI-Powered Health Platform',
};

export const viewport = {
  width: 1,
  themeColor: 'light',
};

async function getExperts() {
  headers();
  const url = process.env.INTERNAL_API_URL + '/experts';
  const res = await fetch(url, { next: { revalidate: 86000 } });

  return res.json();
}

async function getExpertsFilters() {
  const url = process.env.INTERNAL_API_URL + '/experts/filters';
  const res = await fetch(url, {
    next: { revalidate: 86000 },
  });

  return res.json();
}

export default async function ExpertsPage() {
  const { data: experts } = await getExperts();
  const { data: filters } = await getExpertsFilters();

  return (
    <AppPage
      pageTitle={'Choose Top Doctor'}
      contentClassName={'no-padding'}
      backLink={staticRoutes.dashboard}
    >
      <ExpertsList experts={experts} filters={filters} />
    </AppPage>
  );
}
