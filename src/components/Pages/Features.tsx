"use client"
import { Quicksand } from 'next/font/google';
import FeaturedCard from "../Cards/FeaturedCard";
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function Featured() {
  const seasonsData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000',
      title: 'Future Stars Soccer',
      address: '123, Adresse California',
      monthlyPrice: '300,00',
      classPrice: '10,00',
      date: '30 Dec, 2025',
      time: '10:00 - 11:00',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000',
      title: 'Future Stars Soccer',
      address: '123, Adresse California',
      monthlyPrice: '300,00',
      classPrice: '10,00',
      date: '30 Dec, 2025',
      time: '10:00 - 11:00',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000',
      title: 'Future Stars Soccer',
      address: '123, Adresse California',
      monthlyPrice: '300,00',
      classPrice: '10,00',
      date: '30 Dec, 2025',
      time: '10:00 - 11:00',
    },
  ];

  return (
    <section className={`${quicksand.className} py-12 px-4 sm:px-6 lg:px-8 bg-gray-50`}>
      <div className="max-w-[1550px] mx-auto">
        <div className="flex justify-between items-center mb-8 border-b-2 border-transparent">
          <h2 className="text-[30px] font-bold text-[#1A1D1F] tracking-tight uppercase">
            Featured Seasons
          </h2>
          <a 
            href="#" 
            className="text-[#2557FF] font-bold text-[18px] underline decoration-2 underline-offset-8 hover:text-blue-800 transition-colors"
          >
            SEE ALL
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
          {seasonsData.map((item) => (
            <FeaturedCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}