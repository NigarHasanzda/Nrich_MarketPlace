"use client"
import React, { useState } from 'react';
import { Search, ShoppingCart, CircleUserRound, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isSeasonsOpen, setIsSeasonsOpen] = useState(false);

  const navLinks = ['PROGRAMS', 'ACTIVITIES', 'LOCATIONS', 'MERCHANDISE', 'MEDIA'];
  
  // Sizin xüsusi Seasons menyusu
  const seasonsOptions = [
    { name: 'Tryout Portal', href: '/seasons/tryout-portal' },
    { name: 'League ', href: '/seasons/league' },
    { name: 'Calendar', href: '/seasons/calendar' }
  ];

  return (
    <header className="w-full border-b border-gray-200 font-['Quicksand'] bg-white">
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Bölməsi */}
        <div className="flex items-center">
          <h1 className="text-[#001B71] text-3xl font-extrabold">
            N'RICH
          </h1>
        </div>

        {/* Naviqasiya Linkləri */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="/programs" className="text-[#636E72] text-[14px] font-medium hover:text-[#001B71] transition-colors tracking-wide">
            PROGRAMS
          </a>

          {/* SEASONS Custom Dropdown */}
          <div 
            className="relative group h-20 flex items-center"
            onMouseEnter={() => setIsSeasonsOpen(true)}
            onMouseLeave={() => setIsSeasonsOpen(false)}
          >
            <button className="flex items-center gap-1 text-[#636E72] text-[14px] font-medium hover:text-[#001B71] transition-colors tracking-wide outline-none">
              SEASONS
              <ChevronDown className={`h-4 w-4 transition-transform ${isSeasonsOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isSeasonsOpen && (
              <div className="absolute top-[75px] left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {seasonsOptions.map((option) => (
                  <a
                    key={option.name}
                    href={option.href}
                    className="block px-5 py-3 text-[#636E72] text-[14px] font-semibold hover:bg-[#F8FAFC] hover:text-[#2956FF] transition-colors"
                  >
                    {option.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLinks.filter(item => item !== 'PROGRAMS').map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[#636E72] text-[14px] font-medium hover:text-[#001B71] transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Sağ tərəf */}
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-[#A4B0BE]" />
            </div>
            <input
              type="text"
              className="bg-[#EDF2F7] text-[14px] min-w-[180px] rounded-lg block w-64 pl-10 p-2.5 focus:outline-none text-gray-700 placeholder-[#7B808E] font-medium"
              placeholder="Search programs..."
            />
          </div>

          <div className="flex items-center gap-4 text-[#6C7180]">
            <button className="hover:text-[#001B71] transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="hover:text-[#001B71] transition-colors">
              <CircleUserRound className="h-6 w-6" />
            </button>
          </div>

          <div className="h-8 w-[1px] bg-gray-300 mx-1 hidden sm:block"></div>

          <button className="bg-[#2956FF] text-white px-6 py-2.5 rounded-lg font-bold text-[14px] hover:bg-blue-700 transition-all shadow-sm">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;