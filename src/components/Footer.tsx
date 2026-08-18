import React from 'react';
import { Phone, Mail, MapPin, Globe, ArrowUp, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#F5F9FF] text-[#475569] pt-16 pb-12 relative overflow-hidden border-t border-[#DCE6F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#DCE6F5]">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <img 
                src="/logo.png" 
                alt="NADHEE Tech Solutions" 
                className="h-10 w-auto object-contain self-start"
              />
              <span className="text-[9.5px] font-extrabold tracking-[0.25em] text-[#155EEF] uppercase pl-1 mt-0.5 font-sans">
                TECH SOLUTIONS
              </span>
            </div>

            <p className="text-sm font-semibold text-[#155EEF] italic">
              "{SITE_CONFIG.tagline}"
            </p>

            <p className="text-xs text-[#475569] leading-relaxed max-w-sm">
              We build practical software, web applications and automation solutions designed around the way your business works.
            </p>

            <div className="pt-1">
              <a
                href={SITE_CONFIG.consultant.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold hover:bg-emerald-100 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Consultant</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#0B1F4B] uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Solutions', href: '#solutions' },
                { name: 'Our Work', href: '#work' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#475569] hover:text-[#155EEF] transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#0B1F4B] uppercase tracking-wider font-mono">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Custom Software',
                'Web Applications',
                'Mobile Applications',
                'Business Automation',
                'Dashboards & Reports',
                'AI Solutions',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="text-[#475569] hover:text-[#155EEF] transition-colors block py-0.5"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#0B1F4B] uppercase tracking-wider font-mono">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs text-[#475569]">
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#155EEF] flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.consultant.phone}`} className="hover:text-[#155EEF] transition-colors font-mono font-medium text-[#0B1F4B]">
                  {SITE_CONFIG.consultant.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#155EEF] flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.consultant.email}`} className="hover:text-[#155EEF] transition-colors text-[#0B1F4B]">
                  {SITE_CONFIG.consultant.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-[#155EEF] flex-shrink-0" />
                <a href={SITE_CONFIG.consultant.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#155EEF] transition-colors text-[#0B1F4B]">
                  {SITE_CONFIG.consultant.websiteDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#155EEF] flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.consultant.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#475569]">
          <div>
            © 2026 {SITE_CONFIG.fullName}. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#475569]">
              Technology. Built for Business.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white border border-[#DCE6F5] hover:border-[#155EEF] text-[#475569] hover:text-[#155EEF] transition-colors flex items-center gap-1 shadow-sm"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
