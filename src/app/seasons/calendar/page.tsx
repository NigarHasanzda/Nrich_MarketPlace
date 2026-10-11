import type { Metadata } from 'next';
import TrainingCalendarPage from './TrainingCalendarPage';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Training Calendar',
  description: 'View NRICH training calendar, filter sessions, and register for upcoming activities.',
  path: '/seasons/calendar',
});

const page = () => (
  <>
    <TrainingCalendarPage />
  </>
);

export default page;
