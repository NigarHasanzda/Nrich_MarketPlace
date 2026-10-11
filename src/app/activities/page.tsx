import type { Metadata } from 'next';
import Activities from './Activities';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Activities',
  description: 'Find and register for NRICH activities. Filter by sport, location, and season.',
  path: '/activities',
});

const page = () => {
  return (
   <>
   <Activities/>
   </>
  )
}

export default page