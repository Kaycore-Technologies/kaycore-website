import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface GlowButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  showArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function GlowButton({ 
  href, 
  onClick, 
  children, 
  variant = 'primary', 
  className = '', 
  showArrow = false, 
  type = 'button' 
}: GlowButtonProps) {
  const baseClass = variant === 'primary' 
    ? 'btn-primary hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 ease-in-out' 
    : 'btn-secondary hover:scale-105 transition-all duration-300 ease-in-out';
  
  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-5 h-5 ml-2" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClass} inline-flex items-center justify-center w-full xs:w-auto ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClass} inline-flex items-center justify-center w-full xs:w-auto ${className}`}>
      {content}
    </button>
  );
}
