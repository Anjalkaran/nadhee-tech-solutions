import React from 'react';
import { Cpu, Globe, Smartphone, Zap, BarChart3, Sparkles, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/siteData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#155EEF]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#155EEF]" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-[#155EEF]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#155EEF]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#155EEF]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#155EEF]" />;
      default: return <Cpu className="w-6 h-6 text-[#155EEF]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative border-t border-[#DCE6F5]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F9FF] border border-[#DCE6F5] text-xs font-semibold text-[#155EEF] uppercase tracking-wider">
            Our Core Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F4B] tracking-tight font-sans">
            Technology Solutions for Real Business Needs
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            From business websites to powerful custom applications, we build technology around your requirements.
          </p>
        </div>

        {/* 6 Clean White Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-[#DCE6F5] hover:border-[#155EEF] shadow-sm hover:shadow-[0_16px_32px_-8px_rgba(21,94,239,0.12)] transition-all duration-200 hover:-translate-y-1 relative"
            >
              <div>
                {/* Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 p-3.5 rounded-xl bg-[#F5F9FF] border border-[#DCE6F5] flex items-center justify-center group-hover:bg-[#155EEF] group-hover:text-white transition-colors duration-200">
                    <span className="group-hover:text-white [&>svg]:group-hover:text-white transition-colors">
                      {getIcon(service.icon)}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#155EEF] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-xl font-bold text-[#0B1F4B] mb-2.5 group-hover:text-[#155EEF] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 pt-4 border-t border-[#DCE6F5]/70">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-[#475569]">
                      <Check className="w-3.5 h-3.5 text-[#155EEF] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F5F9FF] hover:bg-[#155EEF] text-xs font-semibold text-[#0B1F4B] hover:text-white border border-[#DCE6F5] hover:border-[#155EEF] transition-all duration-150 flex items-center justify-center gap-2 group/btn"
              >
                <span>Enquire About {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
