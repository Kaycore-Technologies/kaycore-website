'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Youtube, Linkedin, Instagram, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { services, industries, globalOffices } from '@/components/company-data';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const hideFooterCTA = pathname === '/contact';
  const isKayHealth = pathname.startsWith('/kayhealth');

  // Theme-aware classes
  const footerBg = isKayHealth ? 'bg-slate-50' : 'bg-[#030712]';
  const borderColor = isKayHealth ? 'border-slate-200' : 'border-white/10';
  const headingColor = isKayHealth ? 'text-slate-900' : 'text-white';
  const textColor = isKayHealth ? 'text-slate-600' : 'text-gray-400';
  const hoverColor = isKayHealth ? 'hover:text-blue-600' : 'hover:text-brand-accent';
  const healthHoverColor = isKayHealth ? 'hover:text-blue-600' : 'hover:text-blue-400';
  const accentColor = isKayHealth ? 'text-blue-600' : 'text-brand-accent';
  const socialBg = isKayHealth ? 'bg-slate-200 border-slate-300' : 'bg-white/5 border-white/10';
  const socialHover = isKayHealth ? 'hover:bg-blue-600 hover:border-blue-600 hover:text-white' : 'hover:bg-brand-accent hover:border-brand-accent hover:text-white';
  const socialIconColor = isKayHealth ? 'text-slate-500' : 'text-gray-400';

  return (
    <footer className={`relative ${footerBg} border-t ${borderColor} pt-24 overflow-hidden`}>
      {/* Background decorations */}
      {!isKayHealth && (
        <>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
        </>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Call to action bar */}
        {!hideFooterCTA && (
        <div className={`p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl ${
          isKayHealth
            ? 'bg-gradient-to-r from-blue-600 to-blue-800 shadow-xl'
            : 'glass-card'
        }`}>
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
              {isKayHealth ? 'Ready to transform patient care?' : 'Ready to elevate your software quality?'}
            </h3>
            <p className={isKayHealth ? 'text-blue-100/80' : 'text-gray-400'}>
              {isKayHealth ? 'Schedule a demo with our clinical AI team.' : 'Partner with our dedicated AI-powered QA teams.'}
            </p>
          </div>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl whitespace-nowrap transition-all hover:scale-[1.02] ${
              isKayHealth
                ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg'
                : 'bg-brand-accent text-white hover:bg-brand-accent/90 shadow-md shadow-brand-accent/20'
            }`}
          >
            {isKayHealth ? 'Schedule a Demo' : 'Start a Conversation'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
        )}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-10 w-40">
                <Image
                  src="/assets/logo_backup.png"
                  alt="Kaycore Technologies"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className={`${textColor} text-sm leading-relaxed mb-8 max-w-md`}>
              Kaycore Technologies delivers next-generation Quality Engineering services and AI-powered healthcare solutions, helping enterprise teams ship flawless products at speed.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/kaycore" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full ${socialBg} flex items-center justify-center ${socialIconColor} ${socialHover} transition-all`}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://youtube.com/@kaycore" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full ${socialBg} flex items-center justify-center ${socialIconColor} ${socialHover} transition-all`}>
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/kaycore" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full ${socialBg} flex items-center justify-center ${socialIconColor} ${socialHover} transition-all`}>
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/kaycore" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full ${socialBg} flex items-center justify-center ${socialIconColor} ${socialHover} transition-all`}>
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className={`${headingColor} font-bold mb-6 tracking-wide`}>Services</h4>
            <ul className="space-y-4 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href="/services" className={`${textColor} ${hoverColor} transition-colors flex items-center group`}>
                    {service.title}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KayHealth */}
          <div>
            <h4 className={`${headingColor} font-bold mb-6 tracking-wide`}>KayHealth</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/kayhealth" className={`${textColor} ${healthHoverColor} transition-colors flex items-center group`}>
                  AI Healthcare Hub
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              </li>
              <li>
                <span className={`${textColor} opacity-50 flex items-center cursor-not-allowed select-none`}>
                  KayScribe
                  <span className="ml-2 text-[9px] font-mono tracking-widest text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full border border-blue-500/20">
                    SOON
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className={`${headingColor} font-bold mb-6 tracking-wide`}>Industries</h4>
            <ul className="space-y-4 text-sm">
              {industries.slice(0, 5).map((industry) => (
                <li key={industry.name}>
                  <Link href="/industries" className={`${textColor} ${hoverColor} transition-colors flex items-center group`}>
                    {industry.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className={`${headingColor} font-bold mb-6 tracking-wide`}>Locations</h4>
            <ul className={`space-y-4 text-sm ${textColor}`}>
              {[
                { city: 'Bengaluru', country: 'India' },
                { city: 'New Delhi', country: 'India' },
                { city: 'Kanpur', country: 'India' }
              ].map((office) => (
                <li key={office.city} className="flex items-start gap-3">
                  <MapPin className={`w-5 h-5 ${accentColor} shrink-0`} />
                  <span>{office.city}, {office.country}</span>
                </li>
              ))}
              <li className={`flex items-center gap-3 mt-6 pt-6 border-t ${borderColor}`}>
                <Mail className={`w-5 h-5 ${accentColor} shrink-0`} />
                <a href="mailto:admin@kaycore.com" className={`${hoverColor} transition-colors`}>
                  admin@kaycore.com
                </a>
              </li>
            </ul>
          </div>

          {/* Company / Legal */}
          <div>
            <h4 className={`${headingColor} font-bold mb-6 tracking-wide`}>Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/privacy-policy" className={`${textColor} ${hoverColor} transition-colors flex items-center group`}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className={`${textColor} ${hoverColor} transition-colors flex items-center group`}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className={`${textColor} ${hoverColor} transition-colors flex items-center group`}>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/security-policy" className={`${textColor} ${hoverColor} transition-colors flex items-center group`}>
                  Security Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${borderColor} py-8 flex flex-col items-center justify-center gap-2 text-sm text-gray-500`}>
          <p>
            &copy; 2026 Kaycore Technologies. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Kaycore<sup>&trade;</sup> is a trademark of Kaycore Technologies LLP.
          </p>
        </div>
      </div>
    </footer>
  );
}
