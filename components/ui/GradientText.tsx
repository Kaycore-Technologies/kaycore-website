import { ReactNode, ElementType } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function GradientText({ children, className = '', as: Component = 'span' }: GradientTextProps) {
  return (
    <Component className={`text-gradient ${className}`}>
      {children}
    </Component>
  );
}
