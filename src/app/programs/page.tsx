import type { Metadata } from 'next';
import ProgramsPage from './Programpage';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Programs',
  description: 'Explore all NRICH sports programs, featured seasons, schedules, and member benefits.',
  path: '/programs',
});

const page = () => {
  return (
   <>
   <ProgramsPage/>
   </>
  )
}

export default page