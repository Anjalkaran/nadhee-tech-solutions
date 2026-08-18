import React from 'react';
import { Store, GraduationCap, Briefcase, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_SOLUTIONS } from '../data/siteData';

interface BusinessSolutionsProps {
  onOpenConsultation: () => void;
}

export const BusinessSolutions: React.FC<BusinessSolutionsProps> = ({ onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store': return <Store className="w-6 h-6 text-brand-blue" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-brand-blue" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-brand-blue" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-brand-blue" />;
      default: return <Building2 className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-brand-blue uppercase tracking-wider shadow-soft">
            Tailored Industry Solutions
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Solutions Designed for Your Business
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Technology should fit your business—not force your business to change.
          </p>
        </div>

        {/* 4 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_SOLUTIONS.map((sol, index) => (
            <div
              key={index}
              className="light-card light-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200 bg-white group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(sol.icon)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                  {sol.title}
                </h3>

                <p className="text-xs text-slate-500 mb-6">
                  {sol.subtitle}
                </p>

                <ul className="space-y-3 mb-6 pt-4 border-t border-slate-100">
                  {sol.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-mono font-semibold text-brand-blue uppercase tracking-wider">
                  Customizable Module
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-white">Have a unique business requirement or custom workflow?</h4>
            <p className="text-sm text-slate-300">We analyze your specific challenges and build an exact-fit system.</p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-electric text-white font-semibold text-sm shadow-glow transition-all duration-200 flex items-center gap-2 flex-shrink-0"
          >
            <span>Tell Us What Your Business Needs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
