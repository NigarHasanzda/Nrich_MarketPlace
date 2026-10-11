import { NAV_ITEMS, type NavItem } from './header.config';

const PROGRAMS_INDEX = NAV_ITEMS.findIndex((item) => item.label === 'PROGRAMS');

export const navBeforeSeasons: NavItem[] = NAV_ITEMS.slice(0, PROGRAMS_INDEX + 1);
export const navAfterSeasons: NavItem[] = NAV_ITEMS.slice(PROGRAMS_INDEX + 1);
