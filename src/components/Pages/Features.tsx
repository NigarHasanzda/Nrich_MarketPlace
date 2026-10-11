"use client";

import { Quicksand } from 'next/font/google';
import FeaturedCard from '../Cards/FeaturedCard';
import HorizontalScroll from '@/components/layout/HorizontalScroll';
import SectionHeader from '@/components/layout/SectionHeader';
import { pageContainer, pagePadding } from '@/lib/layout';

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
    <section className={`${quicksand.className} py-10 sm:py-12 ${pagePadding} bg-gray-50`}>
      <div className={pageContainer}>
        <SectionHeader
          title="Featured Seasons"
          action={
            <a
              href="#"
              className="text-[#2557FF] font-bold text-sm sm:text-[18px] underline decoration-2 underline-offset-4 sm:underline-offset-8 hover:text-blue-800 transition-colors shrink-0"
            >
              SEE ALL
            </a>
          }
        />
        <HorizontalScroll ariaLabel="Featured seasons carousel">
          {seasonsData.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-[min(100%,340px)] sm:w-[400px] lg:w-[490px] snap-start"
            >
              <FeaturedCard {...item} />
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
