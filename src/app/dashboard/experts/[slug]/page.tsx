import { IExpertBio } from '@/types/interfaces';
import ExpertBiography from '@/components/pages/Experts/ExpertBiography';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import AppPage from '@/components/common/Layout/AppPage';
import { staticRoutes } from '@/utils/router/staticRoutes';

//Medical Second opinion from

async function getExpert(slug: string) {
  headers();
  const url = process.env.INTERNAL_API_URL + '/experts/' + slug;
  const res = await fetch(url, { next: { revalidate: 86000 } });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const { data } = await getExpert(slug);

  const expert: IExpertBio = data;

  return {
    title: `Medical Second opinion from Dr. ${expert.name} ${expert.surname}`,
    description: 'AI-Powered Health Platform',
  };
}
export default async function ExpertView({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { data } = await getExpert(slug);

  const expert: IExpertBio = data;

  return (
    <AppPage
      pageTitle={'Doctor’s Biography'}
      contentClassName={'no-padding pb-20'}
      backLink={staticRoutes.experts}
    >
      <ExpertBiography expert={expert} />
    </AppPage>
  );
}
