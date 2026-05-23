import { ReactNode } from 'react';
import { GradientText } from './GradientText';

interface SectionHeaderProps {
  badge?: string;
  title: ReactNode;
  highlight?: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeader({ badge, title, highlight, description, align = 'center', className = '' }: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`${alignmentClasses[align]} max-w-3xl mb-10 md:mb-16 ${className}`}>
      {badge && (
        <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-4">
          {badge}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
        {title}
        {highlight && (
           <>
             {' '}
             <GradientText>{highlight}</GradientText>
           </>
        )}
      </h2>
      {description && (
        <p className="text-gray-400 text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
