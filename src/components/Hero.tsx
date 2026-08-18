import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Code, Zap, Terminal, BarChart2, Check } from 'lucide-react';

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
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F9FF] border border-[#DCE6F5] text-xs sm:text-sm font-semibold text-[#155EEF] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#155EEF]" />
              <span>Technology Solutions Company • Madurai</span>
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

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#475569] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We build practical software, web applications and automation solutions designed around the way your business works.
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
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#155EEF]" />
              </button>
            </div>

            {/* Supporting Line with 3 Value Props */}
            <div className="pt-4 sm:pt-6 border-t border-[#DCE6F5] flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-[#0B1F4B]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#155EEF] stroke-[2.5]" />
                <span>Custom-built</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#155EEF] stroke-[2.5]" />
                <span>Business-focused</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#155EEF] stroke-[2.5]" />
                <span>Scalable</span>
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
                    <span className="ml-2 text-xs font-semibold text-[#0B1F4B]">Nadhee Business Suite</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#155EEF] bg-[#F5F9FF] px-2.5 py-0.5 rounded-full border border-[#DCE6F5]">
                    v2.4 Production
                  </span>
                </div>

                {/* Dashboard Metric Modules */}
                <div className="space-y-3 font-sans text-xs">
                  
                  {/* Module 1: Workflow Engine */}
                  <div className="p-3.5 rounded-xl bg-[#F5F9FF] border border-[#DCE6F5] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#DCE6F5] flex items-center justify-center text-[#155EEF] shadow-sm">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-[#0B1F4B]">Workflow Engine</div>
                        <div className="text-[11px] text-[#475569]">Automated task pipeline</div>
                      </div>
                    </div>
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold">
                      Active
                    </span>
                  </div>

                  {/* Module 2: Automation Status */}
                  <div className="p-3.5 rounded-xl bg-[#F5F9FF] border border-[#DCE6F5] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#DCE6F5] flex items-center justify-center text-amber-500 shadow-sm">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-[#0B1F4B]">Operations Automation</div>
                        <div className="text-[11px] text-[#475569]">Billing & CRM Sync</div>
                      </div>
                    </div>
                    <span className="text-[#155EEF] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-[10px] font-bold">
                      Optimized
                    </span>
                  </div>

                  {/* Module 3: Real-Time Insights Chart */}
                  <div className="p-3.5 rounded-xl bg-[#F5F9FF] border border-[#DCE6F5] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#DCE6F5] flex items-center justify-center text-[#155EEF] shadow-sm">
                        <BarChart2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-[#0B1F4B]">Reports & Data</div>
                        <div className="text-[11px] text-[#475569]">Live decision analytics</div>
                      </div>
                    </div>
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold">
                      Connected
                    </span>
                  </div>

                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-3.5 border-t border-[#DCE6F5] flex items-center justify-between text-xs text-[#475569]">
                  <span className="font-bold text-[#0B1F4B]">NADHEE TECH SOLUTIONS</span>
                  <span className="text-[11px] font-semibold text-[#155EEF]">Madurai, TN</span>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-4 -right-2 sm:-right-4 z-20 bg-white rounded-xl p-3 border border-[#DCE6F5] shadow-md animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#DCE6F5] flex items-center justify-center text-[#155EEF]">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1F4B]">Custom Software</div>
                    <div className="text-[10px] text-[#475569]">Built to Specification</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 z-20 bg-white rounded-xl p-3 border border-[#DCE6F5] shadow-md animate-float-slow">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#155EEF]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1F4B]">Automation</div>
                    <div className="text-[10px] text-[#475569]">Smarter Workflows</div>
                  </div>
                </div>
              </div>

              {/* Decorative Outlines */}
              <div className="absolute inset-0 -m-6 border border-[#DCE6F5]/70 rounded-3xl -z-10 pointer-events-none"></div>
              <div className="absolute inset-0 -m-12 border border-[#DCE6F5]/40 rounded-[32px] -z-20 pointer-events-none hidden sm:block"></div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
