import React from 'react';
import { 
  Database, 
  Radio, 
  Workflow, 
  CheckCircle2, 
  ArrowRight,
  Server,
  Lock
} from 'lucide-react';

export const PlatformSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F9FF] relative border-t border-[#DCE6F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DCE6F5] text-xs font-semibold text-[#155EEF] uppercase tracking-wider shadow-xs">
            <Server className="w-3.5 h-3.5 text-[#155EEF]" />
            <span>SaaS Architecture &amp; Delivery</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F4B] tracking-tight font-sans">
            Business Software Built for Growing Businesses
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Nadhee provides cloud-based SaaS applications that businesses can use to manage sales, customers, inventory, billing, communication and operational workflows from a unified platform.
          </p>
        </div>

        {/* 3 Main Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Pillar 1: Unified Cloud ERP */}
          <div className="bg-white rounded-3xl p-8 border border-[#DCE6F5] shadow-xs hover:border-[#155EEF] hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#155EEF] mb-6">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F4B] mb-3">
                Cloud ERP &amp; Operations
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Replace fragmented spreadsheets with a synchronized cloud ERP covering point-of-sale, multi-counter billing, real-time inventory, customer ledgers, and automated reporting.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-[#DCE6F5]/80 text-xs font-medium text-[#475569]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0" />
                <span>Centralized billing &amp; customer profiles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0" />
                <span>Live stock &amp; low-inventory notifications</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0" />
                <span>Fast web &amp; mobile staff access</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: WhatsApp Commerce & Integrations */}
          <div className="bg-white rounded-3xl p-8 border border-[#DCE6F5] shadow-xs hover:border-[#155EEF] hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F4B] mb-3">
                WhatsApp Business Platform
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Connect your authorized WhatsApp Business Account with your ERP. Automate customer product enquiries, order bookings, invoice dispatches, payment links, and dispatch alerts.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-[#DCE6F5]/80 text-xs font-medium text-[#475569]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Customer-authorized WABA integration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Instant order confirmation receipts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Automated dispatch &amp; courier tracking</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Tenant Data Isolation */}
          <div className="bg-white rounded-3xl p-8 border border-[#DCE6F5] shadow-xs hover:border-[#155EEF] hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F4B] mb-3">
                Strict Client Data Isolation
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Each customer&apos;s business data, catalogues, customer conversations, and configurations are maintained separately. Client data is never shared across unrelated businesses.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-[#DCE6F5]/80 text-xs font-medium text-[#475569]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>Isolated tenant data partition</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>Never monetize or sell conversation data</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>Secure role-based staff permissions</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Informational Callout Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE6F5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#155EEF] flex-shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-[#0B1F4B]">
                Looking for WhatsApp-Enabled Commerce &amp; Workflow Automation?
              </h4>
              <p className="text-xs sm:text-sm text-[#475569]">
                Learn how Nadhee bridges your Meta WhatsApp Business Platform assets with operational software.
              </p>
            </div>
          </div>

          <a
            href="/whatsapp-business-platform"
            className="px-5 py-2.5 rounded-xl bg-[#155EEF] hover:bg-[#1688FF] text-white font-semibold text-xs sm:text-sm transition-colors flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Explore WhatsApp Integration</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
