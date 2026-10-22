import React from 'react';
import { MapPin, Phone, Mail, Globe, Server, Radio, Database, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 relative border-t border-[#DCE6F5]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#155EEF] uppercase tracking-wider shadow-xs">
              Company Overview
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F4B] tracking-tight font-sans">
              About Nadhee Tech Solutions
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
              <p>
                <strong className="text-[#0B1F4B]">Nadhee Tech Solutions</strong> is a technology and business software solutions company based in Madurai, Tamil Nadu, India. We specialize in building practical, affordable, and scalable cloud business software for enterprises, retailers, education providers, and service businesses.
              </p>
              
              <p>
                Our core competencies include <strong>cloud ERP solutions</strong>, <strong>SaaS business applications</strong>, <strong>WhatsApp Business Platform integrations</strong>, custom web and software applications, and operational workflow automations.
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#DCE6F5] text-[#0B1F4B] font-medium shadow-xs">
                Our approach is simple: <span className="text-[#155EEF] font-semibold">understand the business workflow first, then build technology and automated integrations that solve the actual operational problem.</span>
              </div>
            </div>

            {/* Core Commitments / Architectural Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#0B1F4B] p-2.5 rounded-lg bg-white border border-[#DCE6F5]/70">
                <Server className="w-4 h-4 text-[#155EEF] flex-shrink-0" />
                <span>Cloud SaaS &amp; ERP Architecture</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#0B1F4B] p-2.5 rounded-lg bg-white border border-[#DCE6F5]/70">
                <Radio className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>WhatsApp Business Integration</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#0B1F4B] p-2.5 rounded-lg bg-white border border-[#DCE6F5]/70">
                <Database className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>Strict Client Data Isolation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#0B1F4B] p-2.5 rounded-lg bg-white border border-[#DCE6F5]/70">
                <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Zero Data Monetization</span>
              </div>
            </div>

          </div>

          {/* Right Column: Consultant Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-[#DCE6F5] shadow-md relative overflow-hidden">
              {/* Background gradient accent */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-100/50 rounded-full blur-2xl pointer-events-none"></div>

              {/* Profile Avatar / Badge */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#155EEF] to-[#0B1F4B] flex items-center justify-center text-white shadow-xs flex-shrink-0 font-bold text-2xl font-sans">
                  RK
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F4B] font-sans">
                    {SITE_CONFIG.consultant.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#155EEF] mt-0.5">
                    {SITE_CONFIG.consultant.title}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#155EEF]" />
                    <span>Madurai, Tamil Nadu, India</span>
                  </p>
                </div>
              </div>

              {/* Contact Snapshot */}
              <div className="space-y-3 text-xs text-[#475569]">
                <a
                  href={`tel:${SITE_CONFIG.consultant.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#155EEF] hover:bg-blue-50/50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#155EEF] flex-shrink-0" />
                  <span className="font-mono font-medium text-[#0B1F4B]">{SITE_CONFIG.consultant.phoneFormatted}</span>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.consultant.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#155EEF] hover:bg-blue-50/50 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#155EEF] flex-shrink-0" />
                  <span className="font-medium text-[#0B1F4B]">{SITE_CONFIG.consultant.email}</span>
                </a>

                <a
                  href={SITE_CONFIG.consultant.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#155EEF] hover:bg-blue-50/50 transition-colors"
                >
                  <Globe className="w-4 h-4 text-[#155EEF] flex-shrink-0" />
                  <span className="font-medium text-[#0B1F4B]">{SITE_CONFIG.consultant.websiteDisplay}</span>
                </a>
              </div>

              {/* Advisory statement */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <span className="text-[11px] text-slate-500 font-mono">
                  Personalized Technology Architecture &amp; Consulting
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
