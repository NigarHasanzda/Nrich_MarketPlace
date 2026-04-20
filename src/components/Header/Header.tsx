import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full  border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Bölməsi */}
        <div className="flex items-center">
          <h1 className="text-[#001B71] text-3xl font-black tracking-tighter">
            N'RICH
          </h1>
        </div>

        {/* Naviqasiya Linkləri */}
        <nav className="hidden lg:flex items-center gap-8">
          {['PROGRAMS', 'SEASONS', 'ACTIVITIES', 'LOCATIONS', 'MERCHANDISE', 'MEDIA'].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[#636E72] text-[14px] font-medium hover:text-[#001B71] transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Sağ tərəf: Axtarış, İkonlar və Button */}
        <div className="flex items-center gap-6">
          
          {/* Axtarış Barı */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-[#A4B0BE]" />
            </div>
            <input
              type="text"
              className="bg-[#EDF2F7] text-sm rounded-lg block w-64 pl-10 p-2.5 focus:outline-none text-gray-700 placeholder-[#A4B0BE]"
              placeholder="Search programs..."
            />
          </div>

          {/* İkonlar */}
          <div className="flex items-center gap-4 text-[#636E72]">
            <button className="hover:text-[#001B71] transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="hover:text-[#001B71] transition-colors">
              <User className="h-6 w-6" />
            </button>
          </div>

          {/* Divider */}
          <div className="h-8 w-[1px] bg-gray-300 mx-1 hidden sm:block"></div>

          {/* Login Button */}
          <button className="bg-[#2956FF] text-white px-8 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all shadow-sm">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;