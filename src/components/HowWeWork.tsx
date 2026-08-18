import React from 'react';
import { HOW_WE_WORK } from '../data/siteData';

export const HowWeWork: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-brand-blue uppercase tracking-wider shadow-soft">
            Execution Roadmap
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            From Idea to Working Solution
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            A structured, transparent engineering process tailored to deliver high-reliability business software.
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {HOW_WE_WORK.map((item, index) => (
            <div
              key={item.step}
              className="light-card rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-brand-blue/50 transition-all duration-300 relative group flex flex-col justify-between bg-white"
            >
              <div>
                {/* Step Number Badge */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 shadow-soft flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <span className="font-mono text-base font-extrabold text-brand-blue group-hover:text-white transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Phase 0{index + 1}</span>
                <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-brand-blue transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
