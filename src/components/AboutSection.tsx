import React from 'react';
import { MapPin, Phone, Mail, Globe, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-brand-blue uppercase tracking-wider shadow-soft">
              Company Overview
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              About NADHEE Tech Solutions
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                <strong className="text-slate-900">NADHEE Tech Solutions</strong> is a technology solutions company based in Madurai, Tamil Nadu, focused on building practical, affordable and scalable software for businesses and organizations.
              </p>
              
              <p>
                We specialize in custom software, web applications, mobile applications, business automation, dashboards, reporting systems and AI-powered solutions.
              </p>

              <p className="p-4 rounded-xl bg-white border border-blue-200 text-slate-800 font-medium shadow-soft">
                Our approach is simple: <span className="text-brand-blue font-semibold">understand the business first, then build technology that solves the actual problem.</span>
              </p>
            </div>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Zero bloated complexity</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Direct consultant engagement</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Clean, maintainable codebases</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Reliable long-term support</span>
              </div>
            </div>

          </div>

          {/* Right Column: Consultant Profile Card */}
          <div className="lg:col-span-5">
            <div className="light-card rounded-3xl p-8 border border-blue-200 shadow-xl bg-white relative overflow-hidden">
              {/* Background gradient accent */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-100/50 rounded-full blur-2xl pointer-events-none"></div>

              {/* Profile Avatar / Badge */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-blue-dark flex items-center justify-center text-white shadow-md flex-shrink-0 font-bold text-2xl font-display">
                  RK
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    {SITE_CONFIG.consultant.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-blue mt-0.5">
                    {SITE_CONFIG.consultant.title}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-blue" />
                    <span>Madurai, Tamil Nadu</span>
                  </p>
                </div>
              </div>

              {/* Contact Snapshot */}
              <div className="space-y-3 text-xs text-slate-700">
                <a
                  href={`tel:${SITE_CONFIG.consultant.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-blue hover:bg-blue-50/50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span className="font-mono font-medium text-slate-800">{SITE_CONFIG.consultant.phoneFormatted}</span>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.consultant.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-blue hover:bg-blue-50/50 transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span className="font-medium text-slate-800">{SITE_CONFIG.consultant.email}</span>
                </a>

                <a
                  href={SITE_CONFIG.consultant.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-blue hover:bg-blue-50/50 transition-colors"
                >
                  <Globe className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span className="font-medium text-slate-800">{SITE_CONFIG.consultant.websiteDisplay}</span>
                </a>
              </div>

              {/* Advisory statement */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <span className="text-[11px] text-slate-500 font-mono">
                  Personalized Technology Architecture & Consulting
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
