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
      data-theme={isKayHealth ? 'kayhealth' : 'kaycore'}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isKayHealth
          ? scrolled
            ? 'bg-white/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-slate-200/70 py-1.5 shadow-sm'
            : 'bg-white/30 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 py-2'
          : scrolled
            ? 'thick-glass thick-glass-strong border-x-0 border-t-0 py-1.5'
            : 'thick-glass border-x-0 border-t-0 py-2'
      }`}
    >
      {/* Cyan to indigo accent bar, as on the Quality Audit sample */}
      {!isKayHealth && <div className="absolute inset-x-0 top-0 h-[3px] k-accent-bar" aria-hidden="true" />}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex items-center gap-3 group py-0.5"
            aria-label="Kaycore Technologies"
          >
            <div className="relative h-7 w-40 md:h-8 md:w-44 transition-transform group-hover:scale-105">
              <Image
                src="/assets/logo-mark-2.png"
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
