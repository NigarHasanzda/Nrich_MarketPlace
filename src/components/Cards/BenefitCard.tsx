import React from 'react';

interface BenefitCardProps {
  label: string;
  labelColor: string; // Tailwind class örneği: 'text-blue-600'
  title: string;
  description: string;
  borderColor: string; // Tailwind class örneği: 'border-blue-600'
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  label,
  labelColor,
  title,
  description,
  borderColor,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 flex overflow-hidden min-h-[140px]">
      <div className={`w-1.5 ${borderColor} h-full`}></div>
      <div className="p-5 flex flex-col justify-center">
        <span className={`text-[12px] font-bold uppercase tracking-widest mb-1 ${labelColor}`}>
          {label}
        </span>
        <h3 className="text-[18px] font-bold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-500 text-[12px] leading-relaxed max-w-[200px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;