import React from 'react';
import { Layers, ShieldCheck, Smartphone, Code2, MessageSquare, Headphones, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_NADHEE } from '../data/siteData';

export const WhyNadhee: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-6 h-6 text-brand-blue" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-brand-blue" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-brand-blue" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-brand-blue" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-brand-blue" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-brand-blue" />;
      default: return <CheckCircle className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-brand-blue uppercase tracking-wider shadow-soft">
            Our Differentiators
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Why Choose NADHEE?
          </h2>

          {/* Core Philosophy Statement */}
          <div className="pt-2">
            <blockquote className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 border-l-4 border-brand-blue border-r border-y border-blue-100 text-base sm:text-lg md:text-xl font-medium text-slate-800 shadow-soft italic">
              "We don't believe every business needs the same software. We understand your requirements first and then build the right solution."
            </blockquote>
          </div>
        </div>

        {/* 6 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_NADHEE.map((block, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/60 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                {getIcon(block.icon)}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">
                {block.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {block.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
