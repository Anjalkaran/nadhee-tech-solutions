import React, { useEffect } from 'react';
import { 
  MessageSquare, 
  ShieldCheck, 
  Database, 
  Lock, 
  CheckCircle2, 
  Send, 
  ShoppingBag, 
  FileText, 
  Truck, 
  Headphones, 
  Building2, 
  Layers, 
  Radio
} from 'lucide-react';

export const WhatsAppBusinessPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'WhatsApp Business Platform Integration | Nadhee Tech Solutions';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Integrate your WhatsApp Business Platform with Nadhee cloud ERP and SaaS tools. Direct customer enquiries, catalogue discovery, automated order notifications, billing, and strict tenant data isolation.'
      );
    }
  }, []);

  const useCases = [
    {
      title: 'Customer Enquiries & Discovery',
      description: 'Receive inbound product queries and enable interactive catalogue browsing directly inside customer WhatsApp conversations.',
      icon: <MessageSquare className="w-5 h-5 text-[#155EEF]" />
    },
    {
      title: 'Order Booking & Confirmation',
      description: 'Automate order capture, cart summaries, and send instant, branded order confirmation receipts upon customer checkout.',
      icon: <ShoppingBag className="w-5 h-5 text-[#155EEF]" />
    },
    {
      title: 'Invoice & Billing Delivery',
      description: 'Dispatch GST-compliant invoice summaries and official payment receipts via WhatsApp as soon as counter billing is generated.',
      icon: <FileText className="w-5 h-5 text-[#155EEF]" />
    },
    {
      title: 'Payment Links & Reminders',
      description: 'Send secure digital payment links (UPI, payment gateway references) and automated balance due reminders on client approval.',
      icon: <Send className="w-5 h-5 text-[#155EEF]" />
    },
    {
      title: 'Packing, Dispatch & Tracking',
      description: 'Notify buyers at each milestone—when order is packed, dispatched with delivery partner, or out for doorstep delivery.',
      icon: <Truck className="w-5 h-5 text-[#155EEF]" />
    },
    {
      title: 'Customer Support & ERP Sync',
      description: 'Centralize support communications with staff dashboards, synchronizing conversation context directly with backend ERP records.',
      icon: <Headphones className="w-5 h-5 text-[#155EEF]" />
    }
  ];

  const safetyPillars = [
    {
      title: 'Customer-Authorized Integration',
      description: 'Each business connects and authorizes its own WhatsApp Business Account (WABA). Nadhee acts strictly as your technology solution provider.',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />
    },
    {
      title: 'Strict Client Data Isolation',
      description: 'Business data is isolated between customers and is not shared between unrelated businesses. Multi-tenant storage enforces strict tenant boundaries.',
      icon: <Database className="w-5 h-5 text-[#155EEF]" />
    },
    {
      title: 'Purpose-Limited Processing',
      description: 'Nadhee uses authorized WhatsApp Business Platform information only to provide services requested by that specific business.',
      icon: <Lock className="w-5 h-5 text-indigo-600" />
    },
    {
      title: 'Zero Data Monetization',
      description: 'Nadhee does not sell customer conversation data or rent message logs to third-party data aggregators or advertisers.',
      icon: <ShieldCheck className="w-5 h-5 text-amber-600" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-[#0B1F4B] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Top Tag */}
        <div className="mb-6 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#155EEF] hover:underline"
          >
            ← Back to Home
          </a>
          <span className="text-xs font-mono text-slate-500 bg-white px-2.5 py-1 rounded-md border border-[#DCE6F5]">
            Integration: WhatsApp Business Platform
          </span>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE6F5] shadow-sm mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-50/60 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-5">
            <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Messaging &amp; Commerce Technology</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F4B] tracking-tight mb-4 font-sans leading-tight">
            WhatsApp Business Platform Integration
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl mb-6">
            Nadhee Tech Solutions helps businesses connect their own WhatsApp Business accounts with core business applications, cloud ERP, billing software, and automated customer communication workflows.
          </p>

          {/* Key Statement Callout */}
          <div className="p-5 rounded-2xl bg-[#F5F9FF] border border-[#DCE6F5] text-xs sm:text-sm text-[#0B1F4B] space-y-2">
            <p className="font-semibold text-sm">
              &quot;Each business connects and authorizes its own WhatsApp Business Account. Nadhee uses authorized WhatsApp Business Platform information only to provide services requested by that business.&quot;
            </p>
            <p className="text-[#475569] text-xs">
              Business data is strictly isolated between customers and is not shared between unrelated businesses. Nadhee does not sell customer conversation data.
            </p>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE6F5] shadow-sm mb-10">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#155EEF] uppercase tracking-wider mb-2">
              Operational Workflows
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F4B]">
              How Businesses Use Nadhee WhatsApp Integrations
            </h2>
            <p className="text-sm text-[#475569] mt-2">
              Transform repetitive customer messaging into automated, ERP-synchronized business workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#F5F9FF] border border-[#DCE6F5] hover:border-[#155EEF] hover:bg-white transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#DCE6F5] flex items-center justify-center mb-4 shadow-sm">
                    {uc.icon}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-[#0B1F4B] mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {uc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Architecture & Data Isolation */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE6F5] shadow-sm mb-10">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#155EEF] uppercase tracking-wider mb-2">
              Architecture &amp; Trust
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F4B]">
              Tenant Data Isolation &amp; Security Principles
            </h2>
            <p className="text-sm text-[#475569] mt-2">
              We engineer our software on strict tenant isolation principles so client operational data remains protected and partitioned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {safetyPillars.map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {pillar.icon}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-[#0B1F4B]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Meta Platform Data Explanation Callout */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0B1F4B] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#155EEF]">
              <Layers className="w-4 h-4" />
              <span>Meta Platform Data Usage Notice</span>
            </div>
            <p className="leading-relaxed text-[#475569]">
              When a business authorizes Nadhee to connect with the WhatsApp Business Platform, Nadhee may process information provided through Meta APIs, including WhatsApp Business Account information, phone number information, and messaging-related data required to provide the requested service.
            </p>
            <p className="leading-relaxed text-[#475569]">
              This information is used only to operate the services authorized by that business, such as customer communication, enquiries, orders, notifications, and related workflows. Each client&apos;s information is handled separately and is not used to provide another unrelated client&apos;s service.
            </p>
          </div>
        </div>

        {/* Clear Relationship Clarification */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DCE6F5] shadow-sm mb-10 text-xs sm:text-sm text-[#475569] space-y-3">
          <h3 className="text-base font-bold text-[#0B1F4B] flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#155EEF]" />
            Technology Provider Clarification
          </h3>
          <p>
            Nadhee Tech Solutions is an independent enterprise software and technology solutions consultancy. We build technology solutions for WhatsApp-enabled customer engagement using public, authorized APIs from the Meta WhatsApp Business Platform.
          </p>
          <p>
            WhatsApp is a registered trademark of Meta Platforms, Inc. Use of the WhatsApp Business Platform is subject to Meta&apos;s Developer Terms and WhatsApp Business Policies.
          </p>
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-[#0B1F4B] to-[#155EEF] rounded-3xl p-8 sm:p-12 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold font-sans">
              Connect WhatsApp to Your Business Workflows
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Speak directly with our technology consultant to review your operational requirements and discuss tailored WhatsApp Business Platform integration.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <a
              href="/#contact"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-blue-50 text-[#0B1F4B] font-bold text-xs sm:text-sm transition-colors text-center shadow-sm"
            >
              Get a Free Consultation
            </a>
            <a
              href="mailto:info@nadheetechsolutions.com?subject=WhatsApp%20Business%20Platform%20Inquiry"
              className="px-6 py-3.5 rounded-xl bg-[#155EEF]/50 hover:bg-[#155EEF]/70 text-white border border-white/20 font-bold text-xs sm:text-sm transition-colors text-center"
            >
              Email Consultant
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
