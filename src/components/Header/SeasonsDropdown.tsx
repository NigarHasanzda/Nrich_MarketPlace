'use client';

import { useCallback, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { navLinkClassName, SEASON_OPTIONS } from './header.config';
import NavLink from './NavLink';

const SeasonsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <div
      className="relative group h-20 flex items-center"
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <button
        type="button"
        className={`flex items-center gap-1 ${navLinkClassName} outline-none`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        SEASONS
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute top-[75px] left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {SEASON_OPTIONS.map((option) => (
            <NavLink
              key={option.href}
              href={option.href}
              className="block px-5 py-3 text-[#636E72] text-[14px] font-semibold hover:bg-[#F8FAFC] hover:text-[#2956FF] transition-colors"
              onNavigate={close}
            >
              {option.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeasonsDropdown;
