import type { Metadata } from 'next';
import MArchendise from './MArchendise';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Merchandise',
  description: 'Shop NRICH official merchandise, apparel, equipment, and top sellers.',
  path: '/merchandise',
});

const page = () => (
  <>
    <MArchendise />
  </>
);

export default page;
