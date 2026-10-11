'use client';

import { useId } from 'react';
import { Menu, X } from 'lucide-react';
import {
  loginButtonClassName,
  navLinkClassName,
  SEASON_OPTIONS,
} from './header.config';
import NavLink from './NavLink';
import { navAfterSeasons, navBeforeSeasons } from './nav.helpers';
import { useMobileMenu } from './useMobileMenu';

const mobileLinkClass = `${navLinkClassName} py-3 block`;

const MobileMenu = () => {
  const menuId = useId();
  const { isOpen, close, toggle, triggerProps } = useMobileMenu(menuId);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="p-2 text-[#6C7180] hover:text-[#001B71] transition-colors rounded-lg"
        onClick={toggle}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        {...triggerProps}
      >
        {isOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-20 bg-black/20 z-40"
            aria-label="Close menu"
            onClick={close}
          />

          <nav
            id={menuId}
            className="absolute left-0 right-0 top-full z-50 border-b border-gray-200 bg-white shadow-lg max-h-[calc(100dvh-5rem)] overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="max-w-[1600px] mx-auto px-6 py-6 flex flex-col gap-1">
              {navBeforeSeasons.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  className={mobileLinkClass}
                  onNavigate={close}
                >
                  {item.label}
                </NavLink>
              ))}

              <p className="text-[#636E72] text-[12px] font-bold tracking-wider uppercase pt-3 pb-2">
                Seasons
              </p>
              {SEASON_OPTIONS.map((option) => (
                <NavLink
                  key={option.href}
                  href={option.href}
                  className="block py-2.5 pl-3 text-[#636E72] text-[14px] font-semibold hover:text-[#2956FF] transition-colors"
                  onNavigate={close}
                >
                  {option.label}
                </NavLink>
              ))}

              {navAfterSeasons.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  className={mobileLinkClass}
                  onNavigate={close}
                >
                  {item.label}
                </NavLink>
              ))}

              <button
                type="button"
                className={`${loginButtonClassName} w-full mt-6`}
                onClick={close}
              >
                Login
              </button>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
