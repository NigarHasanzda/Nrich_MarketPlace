import type { Metadata } from 'next';
import Media from './Media';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Media',
  description: 'NRICH video showcase, press resources, and media contact information.',
  path: '/media',
});

const page = () => (
  <>
    <Media />
  </>
);

export default page;
