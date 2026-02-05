import Link from 'next/link';
import { Twitter, Linkedin, Github, Instagram, MapPin } from 'lucide-react';

/**
 * Footer component with 4-column layout (IT Style)
 */
import { services, industries } from '@/components/company-data';

/**
 * Footer component with 4-column layout (IT Style)
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-slate-300 mt-20 border-t border-brand-border font-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-brand-accent/30 hover:border-brand-accent inline-block pb-2 transition-colors">
              Capabilities
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-brand-accent hover:translate-x-1 transition-all duration-300 text-sm block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-brand-accent/30 hover:border-brand-accent inline-block pb-2 transition-colors">
              Sectors
            </h4>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link
                    href="/industries"
                    className="text-slate-400 hover:text-brand-accent hover:translate-x-1 transition-all duration-300 text-sm block"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="sm:pl-8 lg:pl-0">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-brand-accent/30 hover:border-brand-accent inline-block pb-2 transition-colors">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm block">About Us</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm block">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm block">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm block">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect & Locations */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-brand-accent/30 hover:border-brand-accent inline-block pb-2 transition-colors">
              Our Locations
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 mb-8">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 group-hover:text-white transition-colors" />
                <span>Bengaluru, India</span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 group-hover:text-white transition-colors" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 group-hover:text-white transition-colors" />
                <span>Kanpur, India</span>
              </li>
            </ul>

            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-brand-accent/30 inline-block pb-2">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              <a href="https://x.com/kaycore" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/kaycore" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/kaycore" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/kaycore" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5"></div>

        {/* Bottom Bar */}
        <div className="mt-8">
          <p className="text-xs text-gray-600 text-center uppercase tracking-widest hover:text-gray-500 transition-colors cursor-default">
            &copy; {currentYear} Kaycore Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
