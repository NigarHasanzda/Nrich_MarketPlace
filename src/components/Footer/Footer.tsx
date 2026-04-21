"use client"
import React from 'react';
import { Quicksand } from 'next/font/google';
import { Star, CircleUserRound, Trophy } from 'lucide-react';
import { CircleCheck } from 'lucide-react';
import { Play } from 'lucide-react';
import { StoreButton } from '../Button/StoreButton';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const Footer = () => {
  return (
    <div className={`${quicksand.className} flex flex-col`}>
      {/* App Section */}
      <section className="bg-[#0D1B3E] py-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#323232] border border-white/20 px-4 py-1.5 rounded-full text-white/90 text-[12px] font-medium mb-8">
            <img src="/replace.png" alt="" className='w-6' />
            <span>Available on iOS & Android</span>
          </div>

          <h2 className="text-white text-4xl md:text-[34px] font-bold mb-6">
            Get the NRICH App
          </h2>
          
          <p className="text-gray-400 text-[16px] font-medium max-w-xl mx-auto mb-16">
            Manage your sports programs, track progress, and stay connected - all from your phone
          </p>

          {/* App Cards Container */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Parent App Card */}
            <AppCard 
              icon={<CircleUserRound size={32} />} // İkonun özü ötürülür
              iconBg="bg-blue-600"
              title="NRICH Parent"
              subtitle="For parents & families"
              rating={5.0}
            />

            {/* Coach App Card */}
            <AppCard 
              icon={<CircleCheck size={30} />} // Coach üçün uyğun ikon
              iconBg="bg-emerald-500"
              title="NRICH Coach"
              subtitle="For coaches & instructors"
              rating={5.0}
            />

          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-[#5A67F2] rounded-lg flex items-center justify-center text-white font-bold text-[24px">
              N
            </div>
            <span className="text-[#1A1D1F] text-2xl font-bold inter">NRICH</span>
          </div>
          
          <p className="text-gray-500 mb-6">
            © 2026 NRICH. All rights reserved.
          </p>

          <div className="flex justify-center gap-8 text-gray-400 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const AppCard = ({ icon, iconBg, title, subtitle, rating }: any) => (
  <div className="bg-[#26324C] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
    <div className="flex items-center gap-4 mb-8 text-left">
      <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center text-white`}>
        {icon}
      </div>
      <div>
        <h3 className="text-white text-[18px] font-semibold">{title}</h3>
        <p className="text-gray-400 text-[14px] font-regular">{subtitle}</p>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="#FFC107" className="text-[#FFC107]" />
          ))}
          <span className="text-gray-400 text-[14px] ml-1">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <StoreButton type="google" />
      <StoreButton type="apple" />
    </div>
  </div>
);




export default Footer;