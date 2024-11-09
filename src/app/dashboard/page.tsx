import { Metadata } from 'next';
import AppPage from '@/components/common/Layout/AppPage';
import Dashboard from '@/components/pages/Dashboard';
import { IOnboardingProfile } from '@/types/interfaces';
import { getServerProfile } from '@/utils/data/server/profile';
import { getServerUserSettings } from '@/utils/data/server/user-settings';
import MaintenanceModeAlert from '@/components/maintenance-mode/MaintenanceModeAlert';
import React from 'react';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Docus Dashboard',
  description: 'AI-Powered Health Platform',
};

export default async function DashboardPage() {
  const profile: IOnboardingProfile = await getServerProfile();
  const userSettings: any = await getServerUserSettings();
  return (
    <>
      <AppPage contentClassName={'no-padding'}>
        <Dashboard profile={profile} userSettings={userSettings} />
      </AppPage>
    </>
  );
}
