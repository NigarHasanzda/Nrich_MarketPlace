"use client"
import React from 'react';
import { Quicksand } from 'next/font/google';
import ProductCard from '../Cards/ProductCard';


const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const products = [
  {
    id: 1,
    image: '/headphone.png', // Şəkli public qovluğuna əlavə et
    category: 'Electronics',
    title: 'Sonic Pro Wireless v3',
    rating: 4,
    reviews: 89,
    price: '199.00'
  },
  {
    id: 2,
    image: '/headphone.png',
    category: 'Electronics',
    title: 'Sonic Pro Wireless v3',
    rating: 4,
    reviews: 89,
    price: '199.00'
  },
  {
    id: 3,
    image: '/headphone.png',
    category: 'Electronics',
    title: 'Sonic Pro Wireless v3',
    rating: 4,
    reviews: 89,
    price: '199.00'
  },
  {
    id: 4,
    image: '/headphone.png',
    category: 'Electronics',
    title: 'Sonic Pro Wireless v3',
    rating: 4,
    reviews: 89,
    price: '199.00'
  }
];

export default function ProductSection() {
  return (
    <section className={`${quicksand.className} py-16 px-4 md:px-8 bg-[#F8F9FB]`}>
      <div className="max-w-[1550px] mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-[#1A1D1F] text-[28px] md:text-[30px] font-bold uppercase ">
            Featured Products
          </h2>
          <a 
            href="#" 
            className="text-[#1C50FB] font-bold text-[20px] border-b-2 border-[#2557FF] pb-1 hover:text-blue-800 hover:border-blue-800 transition-all"
          >
            SEE ALL
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}