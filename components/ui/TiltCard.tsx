'use client';

import type { ReactNode } from 'react';


export function TiltCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}
