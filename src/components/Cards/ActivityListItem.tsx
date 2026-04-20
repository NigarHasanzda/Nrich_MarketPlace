import React from 'react';
import { Calendar, MapPin, Users, CheckCircle } from 'lucide-react';

interface ActivityProps {
  image: string;
  title: string;
  price: string;
  ages: string;
  location: string;
  date: string;
  description: string;
}

const ActivityListItem = ({ image, title, price, ages, location, date, description }: ActivityProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row gap-6 p-4 hover:shadow-md transition-shadow">
      {/* Şəkil və Elite Tag */}
      <div className="relative w-full md:w-64 h-48 shrink-0 rounded-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-[#D31F3C] text-white text-[10px] font-bold px-2 py-1 rounded">
          ELITE SERIES
        </div>
      </div>

      {/* Məlumatlar */}
      <div className="flex-1 flex flex-col justify-between py-2">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-[#1A1D1F]">{title}</h3>
            <span className="text-[#2557FF] text-xl font-bold">${price}</span>
          </div>

          <div className="flex flex-wrap gap-4 text-gray-500 text-[13px] mb-4">
            <div className="flex items-center gap-1">
              <Users size={16} /> <span>Ages {ages}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} /> <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} /> <span>{date}</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-[#2557FF] text-[12px] font-bold">
            <CheckCircle size={16} fill="#2557FF" className="text-white" />
            PRO COACHES
          </div>
          <button className="bg-[#F1F4FF] text-[#1A1D1F] px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-100 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityListItem;