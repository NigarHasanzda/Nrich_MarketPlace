import React from 'react';
import { Calendar, Clock, MapPin, ShoppingCart } from 'lucide-react';
import { Quicksand } from 'next/font/google';

// Fontu konfiqurasiya edirik
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

interface FeaturedCardProps {
  image: string;
  title: string;
  address: string;
  monthlyPrice: string;
  classPrice: string;
  date: string;
  time: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  image,
  title,
  address,
  monthlyPrice,
  classPrice,
  date,
  time,
}) => {
  return (
    <div className={`${quicksand.className} bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden w-full max-w-[490px] mx-auto lg:mx-0 transition-all hover:shadow-md`}>
      {/* Görsel Alanı */}
      <div className="relative h-52 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
          <h3 className="text-white font-bold text-[18px] tracking-tight">{title}</h3>
          <div className="flex items-center text-white/90 text-[14px] mt-1 font-semibold">
            <MapPin size={16} className="mr-1" />
            <span>{address}</span>
          </div>
        </div>
      </div>

      {/* İçerik Alanı */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-5">
          <div>
            <span className="text-[#2557FF] font-bold text-[20px]">${monthlyPrice}</span>
            <span className="text-gray-400 text-[16px] ml-1 font-medium">/Month</span>
          </div>
          <div className="bg-[#EFFFF6] px-3 py-1 rounded-md text-[#00B058] text-[14px] font-semibold border border-[#D1F7E2]">
            ${classPrice}/Class
          </div>
        </div>

        {/* Tarih & Saat Bilgisi */}
        <div className="flex gap-3 mb-5">
          <div className="flex-1 bg-[#F1F5FF] p-3 rounded-xl flex items-center gap-3">
            <div className=" p-2  text-gray-600">
              <Calendar size={22} color='#64738B' />
            </div>
            <div>
              <p className="text-[16px] text-gray-400 font-semibold uppercase tracking-widest leading-none">Date</p>
              <p className="text-[15px] font-bold text-[#09132E] mt-1.5">{date}</p>
            </div>
          </div>
          <div className="flex-1 bg-[#F1F5FF] p-3 rounded-xl flex items-center gap-3">
            <div className=" p-2  text-gray-600">
              <Clock size={22} color='#64738B' />
            </div>
            <div>
              <p className="text-[16px] text-gray-400 font-semibold uppercase tracking-widest leading-none">Time</p>
              <p className="text-[15px] font-bold text-[#09132E] mt-1.5">{time}</p>
            </div>
          </div>
        </div>

        {/* Aksiyon Butonları */}
        <div className="flex gap-3">
          <button className="flex-1 py-3.5 px-4 bg-[#F1F5FF] text-[#1C50FB] font-bold text-[16px] rounded-xl hover:bg-blue-100 transition-all active:scale-95">
            See more
          </button>
          <button className="flex-[1.5] py-3.5 px-4 bg-[#2557FF] text-white font-bold text-[16px] rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;