import BenefitCard from "../Cards/BenefitCard";


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
    <section className="pt-12 pb-25 px-6">
      <div className="max-w-[1550px] mx-auto">
        <h2 className="text-[30px] font-bold text-gray-800 mb-8 uppercase tracking-tight">
          Member Benefits & Discounts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit) => (
            <BenefitCard key={benefit.id} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}