import type { ReactNode } from 'react';
import { navLinkClassName } from './header.config';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
};

const NavLink = ({ href, children, className, onNavigate }: NavLinkProps) => (
  <a href={href} className={className ?? navLinkClassName} onClick={onNavigate}>
    {children}
  </a>
);

export default NavLink;
