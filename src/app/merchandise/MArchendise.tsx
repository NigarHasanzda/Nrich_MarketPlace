"use client"
import React from 'react';

import { Quicksand } from 'next/font/google';
import { Zap, MapPin, ChevronRight, Phone, Mail, Globe, MessageSquare } from 'lucide-react';
import ProgramHeader from '@/components/Pages/Hero';
import ProductCard from '@/components/Cards/ProductCard';
import ProductSidebar from '@/components/ProductSideBAr/ProductSidebar';
import HorizontalScroll from '@/components/layout/HorizontalScroll';
import { pagePadding } from '@/lib/layout';

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const ProductSection = () => {
    // Nümunə məlumat strukturu
    const categories = [
        { id: 'top-sellers', name: 'Top Sellers' },
        { id: 'apparel', name: 'Apparel' },
        { id: 'equipment', name: 'Equipment' },
    ];

    const productData = {
        image: "/headphone.png", // Şəkildəki Sonic Pro Wireless v3
        category: "ELECTRONICS",
        title: "Sonic Pro Wireless v3",
        rating: 4,
        reviews: 89,
        price: "199.00"
    };

    return (
        <>
            <ProgramHeader
                badgeText="2024 ACTIVITIES"
                title="Explore all programs"
                description="Explore our upcoming seasons designed to push boundaries and build champions. Professional coaching meets elite athletic development."
                backgroundImage="/path-to-your-leaf-image.jpg"
            />
            <section className={`${quicksand.className} bg-gray-50 py-10 sm:py-12 ${pagePadding}`}>
                <div className="max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* SOL TƏRƏF: Məhsul Kateqoriyaları (8 Sütun) */}
                    <div className="lg:col-span-8 space-y-12">
                        {categories.map((cat) => (
                            <div key={cat.id}>
                                {/* Kateqoriya Başlığı */}
                                <div className="flex flex-wrap justify-between items-center gap-2 mb-6">
                                    <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-[#1A1D1F]">{cat.name}</h2>
                                    <button type="button" className="text-[#2557FF] font-bold text-sm sm:text-lg underline uppercase tracking-wider">
                                        See All
                                    </button>
                                </div>

                                <HorizontalScroll ariaLabel={`${cat.name} products`}>
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="shrink-0 w-[min(100%,280px)] sm:w-[300px] lg:w-[360px] snap-start">
                                          <ProductCard {...productData} />
                                        </div>
                                    ))}
                                </HorizontalScroll>
                            </div>
                        ))}
                    </div>

                    {/* SAĞ TƏRƏF: Yan Panellər (4 Sütun) */}
                   <ProductSidebar/>
                </div>
            </section></>
    );
};

// Köməkçi Komponentlər
const LocationItem = ({ name, address }: { name: string; address: string }) => (
    <div className="flex items-center justify-between group cursor-pointer">
        <div>
            <p className="text-sm font-bold text-[#1A1D1F]">{name}</p>
            <p className="text-xs text-gray-400">{address}</p>
        </div>
        <ChevronRight size={16} className="text-gray-300 group-hover:text-[#2557FF] transition-colors" />
    </div>
);

const ContactInfo = ({ icon, label, value }: { icon: any; label: string; value: string }) => (
    <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#F1F4FF] rounded-xl flex items-center justify-center text-[#2557FF] shrink-0">
            {icon}
        </div>
        <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
            <p className="text-sm font-bold text-[#1A1D1F]">{value}</p>
        </div>
    </div>
);

export default ProductSection;