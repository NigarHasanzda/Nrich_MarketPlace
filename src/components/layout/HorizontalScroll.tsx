import type { ReactNode } from 'react';
import { horizontalScrollBleed, horizontalScrollTrack } from '@/lib/layout';

type HorizontalScrollProps = {
  ariaLabel: string;
  children: ReactNode;
  trackClassName?: string;
};

export default function HorizontalScroll({
  ariaLabel,
  children,
  trackClassName = '',
}: HorizontalScrollProps) {
  return (
    <div className={horizontalScrollBleed}>
      <div
        className={`${horizontalScrollTrack} ${trackClassName}`.trim()}
        aria-label={ariaLabel}
      >
        {children}
      </div>
    </div>
  );
}
