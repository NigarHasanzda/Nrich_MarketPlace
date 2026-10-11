'use client';

import { CircleUserRound, Search, ShoppingCart } from 'lucide-react';
import { loginButtonClassName } from './header.config';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';

const Header = () => (
  <header className="relative w-full border-b border-gray-200 font-['Quicksand'] bg-white">
    <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <MobileMenu />
        <h1 className="text-[#001B71] text-3xl font-extrabold">N&apos;RICH</h1>
      </div>

      <DesktopNav />

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-[#A4B0BE]" aria-hidden />
          </div>
          <input
            type="search"
            className="bg-[#EDF2F7] text-[14px] min-w-[180px] rounded-lg block w-64 pl-10 p-2.5 focus:outline-none text-gray-700 placeholder-[#7B808E] font-medium"
            placeholder="Search programs..."
            aria-label="Search programs"
          />
        </div>

        <div className="flex items-center gap-4 text-[#6C7180]">
          <button type="button" className="hover:text-[#001B71] transition-colors" aria-label="Cart">
            <ShoppingCart className="h-6 w-6" aria-hidden />
          </button>
          <button type="button" className="hover:text-[#001B71] transition-colors" aria-label="Account">
            <CircleUserRound className="h-6 w-6" aria-hidden />
          </button>
        </div>

        <div className="h-8 w-[1px] bg-gray-300 mx-1 hidden lg:block" />

        <button type="button" className={`${loginButtonClassName} hidden lg:inline-flex`}>
          Login
        </button>
      </div>
    </div>
  </header>
);

export default Header;
