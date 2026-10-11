import type { Metadata } from 'next';
import FacilityPage from './Location';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Locations',
  description: 'NRICH facility details, directions, programs at each location, and activity schedules.',
  path: '/locations',
});

const page = () => (
  <>
    <FacilityPage />
  </>
);

export default page;
