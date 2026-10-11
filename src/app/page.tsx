import type { Metadata } from 'next';
import ActivitySection from '@/components/Pages/Activity';
import ActivityGallery from '@/components/Pages/ActivityGallery';
import Featured from '@/components/Pages/Features';
import MemberBenefits from '@/components/Pages/MemberBenefits';
import ProductSection from '@/components/Pages/Product';
import { pageMetadata, siteConfig } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Home',
  description:
    'Browse featured activities, seasons, and products. Register for elite youth sports programs with NRICH.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        {siteConfig.name} — {siteConfig.tagline}
      </h1>
      <ActivityGallery />
      <ActivitySection />
      <Featured />
      <ProductSection />
      <MemberBenefits />
    </>
  );
}
