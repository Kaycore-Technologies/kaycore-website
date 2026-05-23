'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Navigation } from './Navigation';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isKayHealth = pathname.startsWith('/kayhealth');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isKayHealth
          ? scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-4 shadow-sm'
            : 'bg-transparent py-6'
          : scrolled 
            ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex items-center gap-3 group"
            aria-label="Kaycore Technologies"
          >
            <div className="relative h-8 w-32 md:h-10 md:w-40 transition-transform group-hover:scale-105">
              <Image
                src="/assets/logo_backup.png"
                alt="Kaycore Technologies"
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Navigation */}
          <Navigation isLightTheme={isKayHealth} />
        </div>
      </div>
    </header>
  );
}
