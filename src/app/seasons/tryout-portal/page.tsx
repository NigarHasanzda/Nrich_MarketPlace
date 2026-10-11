import type { Metadata } from 'next';
import TryoutPortal from './TryoutPortal';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Tryout Portal',
  description: 'Register for NRICH elite tryouts. View schedule, pricing tiers, and contact support.',
  path: '/seasons/tryout-portal',
});

const page = () => (
  <>
    <TryoutPortal />
  </>
);

export default page;
