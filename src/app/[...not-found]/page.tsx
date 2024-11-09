import { redirect } from 'next/navigation';

export default async function RedirectToNotFound() {
  redirect('/not-found');
}
