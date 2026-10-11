"use client";

import { Quicksand } from 'next/font/google';
import ProductCard from '../Cards/ProductCard';
import HorizontalScroll from '@/components/layout/HorizontalScroll';
import SectionHeader from '@/components/layout/SectionHeader';
import { pageContainer, pagePadding } from '@/lib/layout';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const products = [
  {
    id: 1,
    image: '/headphone.png',
    category: 'Electronics',
    title: 'Sonic Pro Wireless v3',
    rating: 4,
    reviews: 89,
    price: '199.00',
  },
  {
    id: 2,
    image: '/headphone.png',
    category: 'Electronics',
    title: 'Sonic Pro Wireless v3',
    rating: 4,
    reviews: 89,
    price: '199.00',
  },
  {
    id: 3,
    image: '/headphone.png',
    category: 'Electronics',
    title: 'Sonic Pro Wireless v3',
    rating: 4,
    reviews: 89,
    price: '199.00',
  },
  {
    id: 4,
    image: '/headphone.png',
    category: 'Electronics',
    title: 'Sonic Pro Wireless v3',
    rating: 4,
    reviews: 89,
    price: '199.00',
  },
];

export default function ProductSection() {
  return (
    <section className={`${quicksand.className} py-12 sm:py-16 ${pagePadding} bg-[#F8F9FB]`}>
      <div className={pageContainer}>
        <SectionHeader
          title="Featured Products"
          action={
            <a
              href="#"
              className="text-[#1C50FB] font-bold text-sm sm:text-lg border-b-2 border-[#2557FF] pb-1 hover:text-blue-800 hover:border-blue-800 transition-all shrink-0"
            >
              SEE ALL
            </a>
          }
        />
        <HorizontalScroll ariaLabel="Featured products carousel">
          {products.map((product) => (
            <div
              key={product.id}
              className="shrink-0 w-[min(100%,280px)] sm:w-[300px] lg:w-[360px] snap-start"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
