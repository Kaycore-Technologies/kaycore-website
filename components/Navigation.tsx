'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavChild {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'KayHealth', href: '/kayhealth' },
  { label: 'About', href: '/about' },
];

interface NavigationProps {
  isLightTheme?: boolean;
}

export function Navigation({ isLightTheme = false }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileAccordion(null);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isItemActive = (item: NavItem) => {
    if (item.href === '/') return pathname === '/';
    return pathname.startsWith(item.href);
  };

  // Theme-aware classes
  const linkBase = isLightTheme ? 'text-slate-500 hover:text-slate-900' : 'text-gray-400 hover:text-white';
  const linkActive = isLightTheme ? 'text-blue-600' : 'text-brand-accent';
  const linkActiveHealth = isLightTheme ? 'text-blue-600' : 'text-health-accent';
  const dropdownBg = isLightTheme
    ? 'bg-white border-slate-200 shadow-xl'
    : 'bg-[#0a1628]/95 backdrop-blur-2xl border-white/10 shadow-2xl';
  const dropdownHover = isLightTheme ? 'hover:bg-blue-50' : 'hover:bg-health-accent/10';
  const dropdownLabel = isLightTheme ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-health-accent';
  const dropdownDesc = isLightTheme ? 'text-slate-500' : 'text-gray-500';

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8" ref={dropdownRef}>
        <ul className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = isItemActive(item);
            const hasDropdown = item.children && item.children.length > 0;
            const isDropdownOpen = openDropdown === item.label;

            return (
              <li 
                key={item.href} 
                className="relative"
                onMouseEnter={() => hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
              >
                {hasDropdown ? (
                  <>
                    <Link
                      href={item.href}
                      className={`text-sm font-medium tracking-wide uppercase transition-colors flex items-center gap-1.5 ${
                        isActive ? linkActiveHealth : linkBase
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 rounded-2xl border transition-all duration-200 ${dropdownBg} ${
                        isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="p-3">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-3 rounded-xl transition-colors group ${dropdownHover}`}
                          >
                            <span className={`block text-sm font-semibold transition-colors ${dropdownLabel}`}>
                              {child.label}
                            </span>
                            {child.description && (
                              <span className={`block text-xs mt-0.5 ${dropdownDesc}`}>{child.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                      isActive ? linkActive : linkBase
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className={`pl-8 border-l ${isLightTheme ? 'border-slate-200' : 'border-white/10'}`}>
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center text-sm font-semibold transition-all duration-300 hover:scale-105 ${
              isLightTheme
                ? 'bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-3 hover:shadow-xl'
                : 'bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] text-white rounded-full px-6 py-3'
            }`}
          >
            Talk to an Expert
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden relative z-50 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors ${
          isLightTheme ? 'text-slate-500 hover:text-slate-900' : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Overlay rendered outside the header hierarchy using a React Portal */}
      {mounted && createPortal(
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 md:hidden flex flex-col justify-center ${
            isLightTheme
              ? 'bg-white/98 backdrop-blur-xl'
              : 'bg-[#030712]/95 backdrop-blur-xl'
          } ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          {!isLightTheme && (
            <>
              <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none" />
            </>
          )}
          
          <nav className="relative z-10 px-8 py-12 flex flex-col h-full overflow-y-auto">
            <ul className="space-y-6 mt-24 flex-1">
              {navItems.map((item, index) => {
                const isActive = isItemActive(item);
                const hasDropdown = item.children && item.children.length > 0;
                const isAccordionOpen = mobileAccordion === item.label;

                return (
                  <li 
                    key={item.href} 
                    className={`transform transition-all duration-500 ${
                      isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {hasDropdown ? (
                      <div>
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-3xl font-display font-bold transition-colors ${
                              isActive
                                ? (isLightTheme ? 'text-blue-600' : 'text-health-accent')
                                : (isLightTheme ? 'text-slate-800 hover:text-slate-900' : 'text-gray-300 hover:text-white')
                            }`}
                          >
                            {item.label}
                          </Link>
                          <button
                            onClick={() => setMobileAccordion(isAccordionOpen ? null : item.label)}
                            className={`p-2 transition-colors ${
                              isLightTheme ? 'text-slate-500 hover:text-slate-800' : 'text-gray-400 hover:text-white'
                            }`}
                            aria-label="Toggle submenu"
                          >
                            <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isAccordionOpen ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        {isAccordionOpen && (
                          <div className={`pl-4 mt-4 space-y-3 border-l-2 ${isLightTheme ? 'border-blue-200' : 'border-health-accent/30'}`}>
                            {item.children!.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`block text-lg py-3 min-h-[44px] flex items-center transition-colors ${
                                  isLightTheme ? 'text-slate-600 hover:text-blue-600' : 'text-gray-400 hover:text-health-accent'
                                }`}
                              >
                                {child.label}
                                {child.description && (
                                  <span className={`block text-xs ${isLightTheme ? 'text-slate-400' : 'text-gray-600'}`}>{child.description}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-3xl font-display font-bold transition-colors ${
                          isActive
                            ? (isLightTheme ? 'text-blue-600' : 'text-brand-accent')
                            : (isLightTheme ? 'text-slate-800 hover:text-slate-900' : 'text-gray-300 hover:text-white')
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
              
              <li className={`transform transition-all duration-500 pt-8 border-t ${isLightTheme ? 'border-slate-200' : 'border-white/10'} ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '500ms' }}>
                <Link
                  href="/contact"
                  className={`block w-full text-center py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    isLightTheme
                      ? 'bg-slate-900 hover:bg-slate-800 text-white rounded-full hover:shadow-xl'
                      : 'bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] text-white rounded-full'
                  }`}
                >
                  Talk to an Expert
                </Link>
              </li>
            </ul>
          </nav>
        </div>,
        document.body
      )}
    </>
  );
}
