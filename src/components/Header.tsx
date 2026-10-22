import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ['home', 'platform', 'services', 'why-us', 'solutions', 'work', 'pricing', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home', id: 'home' },
    { name: 'SaaS Platform', href: '/#platform', id: 'platform' },
    { name: 'Services', href: '/#services', id: 'services' },
    { name: 'WhatsApp Integration', href: '/whatsapp-business-platform', id: 'whatsapp' },
    { name: 'Solutions', href: '/#solutions', id: 'solutions' },
    { name: 'Our Work', href: '/#work', id: 'work' },
    { name: 'Pricing', href: '/#pricing', id: 'pricing' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    setMobileMenuOpen(false);

    if (href === '/whatsapp-business-platform') {
      if (window.location.pathname === '/whatsapp-business-platform') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (window.location.pathname !== '/') {
      window.location.href = href;
      return;
    }

    if (href.startsWith('/#')) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md border-b border-[#DCE6F5] shadow-xs py-2.5' 
          : 'bg-white/95 backdrop-blur-sm border-b border-[#DCE6F5]/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Official Uploaded Image */}
          <a 
            href="/" 
            onClick={(e) => handleNavClick(e, '/', 'home')}
            className="flex items-center gap-2.5 group focus:outline-none rounded-lg p-0.5"
          >
            <div className="flex flex-col">
              <div className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="NADHEE Tech Solutions Logo" 
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>
              <span className="text-[8.5px] sm:text-[9.5px] font-extrabold tracking-[0.25em] text-[#155EEF] uppercase pl-1 sm:pl-1.5 -mt-0.5 font-sans">
                TECH SOLUTIONS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isRouteActive = 
                link.href === '/whatsapp-business-platform' 
                  ? window.location.pathname === '/whatsapp-business-platform'
                  : window.location.pathname === '/' && activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 ${
                    isRouteActive 
                      ? 'text-[#155EEF] bg-[#F5F9FF] font-semibold border border-[#DCE6F5]' 
                      : 'text-[#0B1F4B] hover:text-[#155EEF] hover:bg-[#F5F9FF]/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${SITE_CONFIG.consultant.phone}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#0B1F4B] hover:text-[#155EEF] px-3 py-2 rounded-lg hover:bg-[#F5F9FF] transition-colors"
              title="Call Technology Consultant"
            >
              <Phone className="w-3.5 h-3.5 text-[#155EEF]" />
              <span>{SITE_CONFIG.consultant.phoneFormatted}</span>
            </a>
            
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2.5 rounded-xl bg-[#155EEF] hover:bg-[#1688FF] text-white font-semibold text-xs shadow-xs hover:shadow-md transition-all duration-150 flex items-center gap-1.5 active:scale-95"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Quick Action Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SITE_CONFIG.consultant.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 hover:bg-emerald-100 transition-colors"
              aria-label="WhatsApp Us"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#F5F9FF] border border-[#DCE6F5] text-[#0B1F4B] hover:bg-[#DCE6F5]/50 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden transition-all duration-200 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[550px] opacity-100 border-b border-[#DCE6F5] bg-white shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-1.5">
          {navLinks.map((link) => {
            const isRouteActive = 
              link.href === '/whatsapp-business-platform' 
                ? window.location.pathname === '/whatsapp-business-platform'
                : window.location.pathname === '/' && activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`block px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isRouteActive 
                    ? 'text-[#155EEF] bg-[#F5F9FF] font-semibold border border-[#DCE6F5]' 
                    : 'text-[#0B1F4B] hover:text-[#155EEF] hover:bg-[#F5F9FF]'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-4 mt-2 border-t border-[#DCE6F5] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#155EEF] hover:bg-[#1688FF] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${SITE_CONFIG.consultant.phone}`}
              className="w-full py-2.5 px-4 rounded-xl bg-[#F5F9FF] border border-[#DCE6F5] text-[#0B1F4B] font-medium text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#155EEF]" />
              <span>Call: {SITE_CONFIG.consultant.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
