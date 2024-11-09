'use client'; // Error components must be Client Components

import AppPage from '@/components/common/Layout/AppPage';
import RuntimeErrorPage from '@/components/pages/RuntimeErrorPage';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <AppPage contentClassName={'no-padding'}>Error 503</AppPage>;
}
