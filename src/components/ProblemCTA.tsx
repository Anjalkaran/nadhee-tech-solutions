import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

interface ProblemCTAProps {
  onOpenConsultation: () => void;
}

export const ProblemCTA: React.FC<ProblemCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#F5F9FF] to-white border-y border-[#DCE6F5] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DCE6F5] text-xs sm:text-sm font-semibold text-[#155EEF] shadow-sm">
          <Sparkles className="w-4 h-4 text-[#155EEF]" />
          <span>Direct Technology Consulting</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F4B] tracking-tight leading-tight font-sans">
          Have a Business Problem? <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#155EEF] to-[#1688FF]">
            Let's Build the Solution.
          </span>
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
          You don't need to know the technical terms. Just tell us what you want to improve, automate or build.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#155EEF] hover:bg-[#1688FF] text-white font-bold text-base shadow-sm hover:shadow-md transition-all duration-150 flex items-center justify-center gap-2"
          >
            <span>Request Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={SITE_CONFIG.consultant.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-emerald-50 border-2 border-emerald-600 text-emerald-700 font-semibold text-base transition-all duration-150 flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageSquare className="w-5 h-5 text-emerald-600" />
            <span>WhatsApp Us</span>
          </a>
        </div>

      </div>
    </section>
  );
};
