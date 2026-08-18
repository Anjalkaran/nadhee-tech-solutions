import React from 'react';
import { Check, ArrowRight, Info, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/siteData';

interface PricingProps {
  onRequestQuote: (planTitle?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onRequestQuote }) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-brand-blue uppercase tracking-wider shadow-soft">
            Transparent Pricing
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Technology That Fits Your Budget
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Affordable starting prices for businesses. Final pricing depends on project requirements and scope.
          </p>

          <div className="inline-block pt-1">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 shadow-soft">
              Affordable Technology. Professional Results.
            </span>
          </div>
        </div>

        {/* 5 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-white border-2 border-brand-blue shadow-xl -translate-y-1'
                  : 'bg-white border border-slate-200 hover:border-brand-blue/60 shadow-sm hover:shadow-card-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[10px] font-extrabold uppercase tracking-wider py-1 px-3 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-1 font-display">
                  {plan.title}
                </h3>

                <p className="text-[11px] text-slate-500 mb-4 min-h-[32px] font-normal">
                  {plan.idealFor}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <span className="text-xs text-slate-500 font-medium block">Starting from</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                      {plan.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                      <Check className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onRequestQuote(plan.title)}
                className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
                  plan.popular
                    ? 'bg-brand-blue hover:bg-brand-blue-electric text-white font-bold shadow-soft'
                    : 'bg-slate-50 border border-slate-200 hover:bg-brand-blue hover:text-white text-slate-700'
                }`}
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          ))}
        </div>

        {/* Starting Prices Disclaimer Banner */}
        <div className="mt-12 p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center gap-2.5 text-center text-xs sm:text-sm text-slate-700 shadow-soft">
          <Info className="w-4 h-4 text-brand-blue flex-shrink-0" />
          <span>
            <strong className="text-slate-900">Note:</strong> Starting prices only. Final quotation depends on project scope and requirements.
          </span>
        </div>

      </div>
    </section>
  );
};
