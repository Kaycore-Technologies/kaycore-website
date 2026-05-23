import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className = '', hoverEffect = false }: GlassCardProps) {
  const hoverClasses = hoverEffect ? 'hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-accent/10 transition-all duration-300' : '';
  
  return (
    <div className={`glass-card ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
