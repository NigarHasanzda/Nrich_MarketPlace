"use client"
import React from 'react';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

interface ProgramHeaderProps {
  badgeText: string;
  title: string;
  description: string;
  backgroundImage: string;
}

const ProgramHeader = ({ badgeText, title, description, backgroundImage }: ProgramHeaderProps) => {
  return (
    <section className={`${quicksand.className} relative w-full overflow-hidden bg-[#1A1B2F]`}>
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-stretch min-h-[320px] md:h-[390px]">
        
        <div className="flex-1 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 z-10">
          <span className="text-gray-400 text-[12px] md:text-[16px] font-bold ">
            {badgeText}
          </span>
          
          <h1 className="text-white text-4xl md:text-5xl lg:text-[66px] font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-gray-400 text-[14px] md:text-[18px] max-w-[90%] font-medium">
            {description}
          </p>
        </div>

        {/* Sağ Tərəf - Şəkil Sahəsi */}
        <div className="flex-1 relative min-h-[200px] md:min-h-full">
          {/* <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#121421] via-transparent to-transparent hidden md:block" />
           */}
          {/* <img 
            src={backgroundImage} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default ProgramHeader;