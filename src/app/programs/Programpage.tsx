"use client"
import React from 'react';
import { Quicksand } from 'next/font/google';
import { Waves, Volleyball, Trophy } from 'lucide-react';

// Komponentlərin importu
import FeaturedCard from '@/components/Cards/FeaturedCard';
import BenefitCard from '@/components/Cards/BenefitCard';
import ProductSidebar from '@/components/ProductSideBAr/ProductSidebar';
import ProgramHeader from '@/components/Pages/Hero';
import { ProgramRowItem } from '@/components/Cards/ProgramRowItem';
import HorizontalScroll from '@/components/layout/HorizontalScroll';
import { pagePadding } from '@/lib/layout';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const ProgramPage = () => {
  const featuredSeasons = [
    { id: 1, image: "/soccer-bg.jpg", title: "Future Stars Soccer", address: "123, Addresse California", monthlyPrice: "300,00", classPrice: "10,00", date: "30 Dec, 2025", time: "10:00 - 11:00" },
    { id: 2, image: "/soccer-bg.jpg", title: "Future Stars Soccer", address: "123, Addresse California", monthlyPrice: "300,00", classPrice: "10,00", date: "30 Dec, 2025", time: "10:00 - 11:00" },
  ];

  const programs = [
    { id: 1, icon: <Waves size={22} />, title: "Aquatic Speed Training", sessions: "8 Sessions", ages: "7-14", locations: "5 Locations", price: "160" },
    { id: 2, icon: <Volleyball size={22} />, title: "Club Volleyball Prep", sessions: "10 Sessions", ages: "13-17", locations: "2 Locations", price: "210" },
    { id: 3, icon: <Trophy size={22} />, title: "Youth Academy Skills", sessions: "24 Sessions", ages: "4-8", locations: "28 Locations", price: "125" },
  ];

  const benefits = [
    { id: 1, label: "Limited Time", labelColor: "text-[#2557FF]", title: "Early Bird 15%", description: "Register by May 15th to unlock special pricing.", borderColor: "bg-[#2557FF]" },
    { id: 2, label: "Family Plan", labelColor: "text-red-500", title: "Sibling Discount", description: "$25 off for each additional child enrolled.", borderColor: "bg-red-500" },
    { id: 3, label: "Value Pack", labelColor: "text-gray-400", title: "Season Pass", description: "Access all sports for a flat $249/year fee.", borderColor: "bg-gray-300" },
  ];

  return (
    <>
      <ProgramHeader
        badgeText="2024 ACTIVITIES"
        title="Explore all programs"
        description="Explore our upcoming seasons designed to push boundaries and build champions. Professional coaching meets elite athletic development."
        backgroundImage="/leaf-bg.jpg" 
      />

      <main className={`${quicksand.className} bg-[#F8F9FA] py-10 sm:py-12 ${pagePadding}`}>
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

          <div className="lg:col-span-8 space-y-12">
            
            <div>
              <div className="flex flex-wrap justify-between items-center gap-2 mb-6">
                <h2 className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#1A1D1F]">Featured Seasons</h2>
                <button type="button" className="text-[#2557FF] font-bold text-[14px] underline uppercase tracking-wider">See All</button>
              </div>
              <HorizontalScroll ariaLabel="Featured seasons">
                {featuredSeasons.map((season) => (
                  <div key={season.id} className="shrink-0 w-[min(100%,340px)] sm:w-[400px] lg:w-[490px] snap-start">
                    <FeaturedCard {...season} />
                  </div>
                ))}
              </HorizontalScroll>
            </div>
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[24px] font-bold text-[#1A1D1F]">All Programs</h2>
                <button className="text-[#2557FF] font-bold text-[14px] underline uppercase tracking-wider">See All</button>
              </div>
              <div className="space-y-3">
                {programs.map((prog) => (
                  <ProgramRowItem key={prog.id} {...prog} />
                ))}
              </div>
            </div>

     
            <div>
              <h2 className="text-[24px] font-bold text-[#1A1D1F] mb-6 uppercase tracking-tight">Member Benefits & Discounts</h2>
              <HorizontalScroll ariaLabel="Member benefits">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="shrink-0 w-[min(100%,280px)] sm:w-[300px] snap-start">
                    <BenefitCard {...benefit} />
                  </div>
                ))}
              </HorizontalScroll>
            </div>

         
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[24px] font-bold text-[#1A1D1F]">Full Activities Schedule</h2>
                <button className="text-[#2557FF] font-bold text-[14px] underline uppercase tracking-wider">See All</button>
              </div>
              <div className="space-y-3">
                {programs.map((prog) => (
                  <ProgramRowItem key={`schedule-${prog.id}`} {...prog} />
                ))}
              </div>
            </div>

          </div>

  
          <div className="lg:col-span-4">
            <ProductSidebar />
          </div>

        </div>
      </main>
    </>
  );
};

export default ProgramPage;