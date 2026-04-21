import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

interface ScheduleCardProps {
  day: string;
  field: string;
  time: string;
  ages: string;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({ 
  day, 
  field, 
  time, 
  ages 
}) => (
  <div className={`${quicksand.className} bg-white p-6 rounded-[8px] shadow-sm border border-gray-100 group hover:shadow-md transition-shadow`}>
    <h4 className="font-bold text-lg mb-4 text-[#1A202C]">{day}</h4>
    
    <div className="space-y-3 mb-6">
      <div className="flex items-center gap-2 text-[#64748B] text-sm font-medium">
        <MapPin className="w-4 h-4" /> 
        {field}
      </div>
      <div className="flex items-center gap-2 text-[#64748B] text-sm font-medium">
        <Clock className="w-4 h-4" /> 
        {time}
      </div>
    </div>
    
    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
      <span className="text-[12px] font-bold text-[#64748B] tracking-tight">
        {ages}
      </span>
      <ArrowRight className="w-4 h-4 text-[#1E51FF] group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
);