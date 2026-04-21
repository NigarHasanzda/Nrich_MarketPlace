import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

// --- Type Təyini ---
interface Feature {
  text: string;
  included: boolean;
}

interface PricingTierProps {
  title: string;
  price: string | number;
  badge: string;
  features: Feature[];
  isEarlyBird: boolean;
}

// --- Komponent ---
export const PricingTier: React.FC<PricingTierProps> = ({ 
  title, 
  price, 
  badge, 
  features, 
  isEarlyBird 
}) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
    <div className="flex justify-between items-start mb-4">
      <h4 className="text-xl font-extrabold">{title}</h4>
      <span className={`${isEarlyBird ? 'bg-[#E0E7FF] text-[#1E51FF]' : 'bg-gray-100 text-[#64748B]'} text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest`}>
        {badge}
      </span>
    </div>
    <div className={`text-4xl font-black mb-6 ${isEarlyBird ? 'text-[#1E51FF]' : 'text-gray-800'}`}>
      ${price}
    </div>
    <ul className="space-y-4">
      {features.map((feature, idx) => (
        <li key={idx} className={`flex items-center gap-3 text-sm font-bold ${feature.included ? 'text-[#64748B]' : 'text-[#94A3B8]'}`}>
          {feature.included ? (
            <CheckCircle2 className={`w-5 h-5 ${isEarlyBird ? 'text-blue-500' : 'opacity-50'}`} />
          ) : (
            <XCircle className="w-5 h-5 text-gray-300" />
          )}
          {feature.text}
        </li>
      ))}
    </ul>
  </div>
);