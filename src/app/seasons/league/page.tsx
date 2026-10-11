import type { Metadata } from 'next';
import League from './League';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'League Standings',
  description: 'Live league standings, recent results, and registration for NRICH soccer leagues.',
  path: '/seasons/league',
});

const page = () => (
  <>
    <League />
  </>
);

export default page;
