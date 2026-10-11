import BenefitCard from '../Cards/BenefitCard';
import HorizontalScroll from '@/components/layout/HorizontalScroll';
import SectionHeader from '@/components/layout/SectionHeader';
import { pageContainer, pagePadding } from '@/lib/layout';

export default function MemberBenefits() {
  const benefitsData = [
    {
      id: 1,
      label: 'Limited Time',
      labelColor: 'text-blue-600',
      title: 'Early Bird 15%',
      description: 'Register by May 15th to unlock tiered pricing.',
      borderColor: 'bg-blue-600',
    },
    {
      id: 2,
      label: 'Family Plan',
      labelColor: 'text-red-600',
      title: 'Sibling Discount',
      description: '$25 off for each additional child enrolled.',
      borderColor: 'bg-red-600',
    },
    {
      id: 3,
      label: 'Value Pack',
      labelColor: 'text-gray-800',
      title: 'Season Pass',
      description: 'Access all sports for a flat $599/year fee.',
      borderColor: 'bg-gray-800',
    },
    {
      id: 4,
      label: 'Family Plan',
      labelColor: 'text-red-600',
      title: 'Sibling Discount',
      description: '$25 off for each additional child enrolled.',
      borderColor: 'bg-red-600',
    },
  ];

  return (
    <section className={`pt-10 sm:pt-12 pb-16 sm:pb-20 ${pagePadding}`}>
      <div className={pageContainer}>
        <SectionHeader title="Member Benefits & Discounts" />
        <HorizontalScroll ariaLabel="Member benefits">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="shrink-0 w-[min(100%,280px)] sm:w-[300px] lg:w-[340px] snap-start"
            >
              <BenefitCard {...benefit} />
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
