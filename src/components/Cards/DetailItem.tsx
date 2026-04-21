import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DetailItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subValue?: string;
}

export const DetailItem: React.FC<DetailItemProps> = ({ icon: Icon, title, value, subValue }) => (
  <div className="flex gap-4">
    <div className="bg-[#EDF2F7] p-3 rounded-[8px] h-fit">
      <Icon className="w-5 h-5 text-[#1E51FF]" />
    </div>
    <div>
      <p className="text-[10px] font-black text-[#434656] uppercase tracking-widest mb-1">{title}</p>
      <p className="text-sm font-bold text-[#1A202C]">{value}</p>
      {subValue && <p className="text-[11px] text-[#94A3B8] font-medium">{subValue}</p>}
    </div>
  </div>
);