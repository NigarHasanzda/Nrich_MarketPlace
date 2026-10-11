import NavLink from './NavLink';
import { navAfterSeasons, navBeforeSeasons } from './nav.helpers';
import SeasonsDropdown from './SeasonsDropdown';

const DesktopNav = () => (
  <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
    {navBeforeSeasons.map((item) => (
      <NavLink key={item.href} href={item.href}>
        {item.label}
      </NavLink>
    ))}
    <SeasonsDropdown />
    {navAfterSeasons.map((item) => (
      <NavLink key={item.href} href={item.href}>
        {item.label}
      </NavLink>
    ))}
  </nav>
);

export default DesktopNav;
