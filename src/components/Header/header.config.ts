export type NavItem = {
  label: string;
  href: string;
};

export type SeasonOption = NavItem;

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'PROGRAMS', href: '/programs' },
  { label: 'ACTIVITIES', href: '/activities' },
  { label: 'LOCATIONS', href: '/locations' },
  { label: 'MERCHANDISE', href: '/merchandise' },
  { label: 'MEDIA', href: '/media' },
];

export const SEASON_OPTIONS: SeasonOption[] = [
  { label: 'Tryout Portal', href: '/seasons/tryout-portal' },
  { label: 'League ', href: '/seasons/league' },
  { label: 'Calendar', href: '/seasons/calendar' },
];

export const navLinkClassName =
  'text-[#636E72] text-[14px] font-medium hover:text-[#001B71] transition-colors tracking-wide';

export const loginButtonClassName =
  'bg-[#2956FF] text-white px-6 py-2.5 rounded-lg font-bold text-[14px] hover:bg-blue-700 transition-all shadow-sm';
