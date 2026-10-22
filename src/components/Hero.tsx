import React from 'react';
import { ArrowRight, Server, Check, BarChart2, Radio, Database } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreServices }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white bg-faint-circuit">
      {/* Soft Ambient Light Gradient */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#F5F9FF] rounded-full blur-3xl pointer-events-none -z-10 opacity-80"></div>
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Top Badge: Clear SaaS / Technology positioning */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F9FF] border border-[#DCE6F5] text-xs sm:text-sm font-semibold text-[#155EEF] shadow-sm">
              <Server className="w-3.5 h-3.5 text-[#155EEF]" />
              <span>Cloud ERP • SaaS Solutions • WhatsApp Integrations • Madurai</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] font-sans">
              <span className="text-[#0B1F4B] block">
                Technology.
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#155EEF] via-[#1688FF] to-[#0052CC] block mt-1">
                Built for Business.
              </span>
            </h1>

            {/* Supporting Text: Clear, professional SaaS positioning */}
            <p className="text-base sm:text-lg md:text-xl text-[#475569] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Nadhee Tech Solutions provides cloud-based business software, ERP, WhatsApp Business integrations and digital solutions that help businesses manage operations, customer communication and commerce.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-1">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-4 rounded-xl bg-[#155EEF] hover:bg-[#1688FF] text-white font-semibold text-base shadow-sm hover:shadow-md transition-all duration-150 flex items-center justify-center gap-2 group active:scale-[0.99]"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-6 py-4 rounded-xl bg-white hover:bg-[#F5F9FF] text-[#155EEF] font-semibold text-base border-2 border-[#155EEF] transition-all duration-150 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-[#155EEF]" />
              </button>

              <a
                href="/whatsapp-business-platform"
                className="px-6 py-4 rounded-xl bg-[#F5F9FF] hover:bg-blue-50 text-[#0B1F4B] font-semibold text-base border border-[#DCE6F5] transition-all duration-150 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>WhatsApp Solutions</span>
                <ArrowRight className="w-4 h-4 text-[#155EEF]" />
              </a>
            </div>

            {/* Supporting Line with 4 Value Props */}
            <div className="pt-4 sm:pt-6 border-t border-[#DCE6F5] flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-[#0B1F4B]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#155EEF] stroke-[2.5]" />
                <span>Cloud SaaS ERP</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#155EEF] stroke-[2.5]" />
                <span>WhatsApp Business Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#155EEF] stroke-[2.5]" />
                <span>Isolated Client Data</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#155EEF] stroke-[2.5]" />
                <span>Zero Data Monetization</span>
              </div>
            </div>

          </div>

          {/* Right Column: Redesigned Light SaaS / Dashboard Illustration */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main White SaaS Application Card */}
              <div className="relative z-10 bg-white rounded-2xl p-6 border border-[#DCE6F5] shadow-lg overflow-hidden">
                
                {/* Application Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#DCE6F5]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="ml-2 text-xs font-semibold text-[#0B1F4B]">Nadhee Cloud ERP Suite</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#155EEF] bg-[#F5F9FF] px-2.5 py-0.5 rounded-full border border-[#DCE6F5]">
                    SaaS Platform
                  </span>
                </div>

                {/* Dashboard Metric Modules */}
                <div className="space-y-3 font-sans text-xs">
                  
                  {/* Module 1: WhatsApp Business Platform Sync */}
                  <div className="p-3.5 rounded-xl bg-[#F5F9FF] border border-[#DCE6F5] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#DCE6F5] flex items-center justify-center text-emerald-600 shadow-sm">
                        <Radio className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-[#0B1F4B]">WhatsApp Business Platform</div>
                        <div className="text-[11px] text-[#475569]">Orders, Invoices &amp; Alerts</div>
                      </div>
                    </div>
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold">
                      Connected
                    </span>
                  </div>

                  {/* Module 2: Tenant Data Isolation */}
                  <div className="p-3.5 rounded-xl bg-[#F5F9FF] border border-[#DCE6F5] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#DCE6F5] flex items-center justify-center text-indigo-600 shadow-sm">
                        <Database className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-[#0B1F4B]">Tenant Data Partition</div>
                        <div className="text-[11px] text-[#475569]">Client data strictly isolated</div>
                      </div>
                    </div>
                    <span className="text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded text-[10px] font-bold">
                      Isolated
                    </span>
                  </div>

                  {/* Module 3: Real-Time Insights Chart */}
                  <div className="p-3.5 rounded-xl bg-[#F5F9FF] border border-[#DCE6F5] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#DCE6F5] flex items-center justify-center text-[#155EEF] shadow-sm">
                        <BarChart2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-[#0B1F4B]">Billing &amp; Stock Reports</div>
                        <div className="text-[11px] text-[#475569]">Live ledger reconciliations</div>
                      </div>
                    </div>
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold">
                      Live
                    </span>
                  </div>

                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-3.5 border-t border-[#DCE6F5] flex items-center justify-between text-xs text-[#475569]">
                  <span className="font-bold text-[#0B1F4B]">NADHEE TECH SOLUTIONS</span>
                  <span className="text-[11px] font-semibold text-[#155EEF]">Madurai, India</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
