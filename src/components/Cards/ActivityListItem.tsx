import React from 'react';
import { Calendar, MapPin, Users, CheckCircle } from 'lucide-react';
import { Quicksand } from 'next/font/google';
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

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
    <div className={`${quicksand.className} bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row gap-6 p-4 hover:shadow-md transition-shadow`}>
      <div className="relative w-full md:w-64 h-48 shrink-0 rounded-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-[#D31F3C] text-white text-[10px] font-bold px-2 py-1 rounded">
          ELITE SERIES
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between py-2">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-[24px] font-bold text-[#1A1D1F]">{title}</h3>
            <span className="text-[#2557FF] text-[20px] font-bold">${price}</span>
          </div>

          <div className="flex flex-wrap gap-4 text-[#434656] text-[14px] mb-4">
            <div className="flex items-center gap-1 font-medium">
              <Users size={16} /> <span>Ages {ages}</span>
            </div>
            <div className="flex items-center gap-1 font-medium">
              <MapPin size={16} /> <span>{location}</span>
            </div>
            <div className="flex items-center gap-1 font-medium">
              <Calendar size={16} /> <span>{date}</span>
            </div>
          </div>

          <p className="text-gray-400 text-[14px] w-[80%] font-normal leading-relaxed mb-4">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-[#2557FF] text-[12px] font-bold tracking-wide">
            <CheckCircle size={16} fill="#2557FF" className="text-white" />
            PRO COACHES
          </div>
          <button className="bg-[#F1F4FF] text-[#1C50FB] px-6 py-2 rounded-lg font-bold text-[14px] hover:bg-blue-100 transition-colors active:scale-95">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityListItem;