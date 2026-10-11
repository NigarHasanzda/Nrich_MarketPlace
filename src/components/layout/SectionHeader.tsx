import type { ReactNode } from 'react';
import { sectionHeading } from '@/lib/layout';

type SectionHeaderProps = {
  title: string;
  action?: ReactNode;
  className?: string;
};

export default function SectionHeader({ title, action, className = '' }: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 ${className}`.trim()}
    >
      <h2 className={sectionHeading}>{title}</h2>
      {action}
    </div>
  );
}
