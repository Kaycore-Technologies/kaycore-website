import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from './Navigation';


/**
 * Header component with Kaycore logo and navigation
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Kaycore Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0 group"
            aria-label="Kaycore Technologies - Core Tech Clear Vision"
          >
            {/* Mobile: Smaller logo */}
            <div className="md:hidden relative h-10 w-32 group-hover:scale-105 transition-transform">
              <Image
                src="/assets/logo.png"
                alt="Kaycore Technologies"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Desktop: Full size logo */}
            <div className="hidden md:block relative h-14 w-44 group-hover:scale-105 transition-transform">
              <Image
                src="/assets/logo.png"
                alt="Kaycore Technologies - Core Tech Clear Vision"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </header>
  );
}
