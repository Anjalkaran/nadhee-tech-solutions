import React, { useEffect } from 'react';
import { Trash2, ArrowLeft, AlertCircle, CheckCircle2, ShieldAlert, Radio } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const DataDeletion: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Data Deletion | Nadhee Tech Solutions';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'User Data Deletion Instructions for Nadhee Tech Solutions, Nadhee AI Commerce (Meta App ID: 934938482334534) and WhatsApp Business Platform integrations.'
      );
    }
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-[#0B1F4B] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#155EEF] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </a>
        </div>

        {/* Header Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DCE6F5] shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-600 uppercase tracking-wider mb-4">
            <Trash2 className="w-3.5 h-3.5" />
            <span>Compliance &amp; User Rights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F4B] tracking-tight mb-3 font-sans">
            User Data Deletion Instructions
          </h1>
          <p className="text-sm text-[#475569] leading-relaxed">
            In compliance with Meta Platform Policies and consumer privacy best practices, this page provides clear, step-by-step instructions on how users, business clients, and customers can request the deletion, unlinking, or anonymization of data associated with our software services, WhatsApp Business Platform integrations, and the Meta Developer App <strong className="text-[#0B1F4B]">Nadhee AI Commerce</strong> (Meta App ID: <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded text-[#0B1F4B]">934938482334534</span>).
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#475569] pt-4 mt-6 border-t border-[#DCE6F5]">
            <div><strong>Company:</strong> Nadhee Tech Solutions</div>
            <div>•</div>
            <div><strong>Contact:</strong> <a href="mailto:info@nadheetechsolutions.com" className="text-[#155EEF] hover:underline">info@nadheetechsolutions.com</a></div>
            <div>•</div>
            <div><strong>Status:</strong> Active</div>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE6F5] shadow-sm space-y-10 text-sm sm:text-base text-[#475569] leading-relaxed">

          {/* Quick Summary Banner */}
          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200">
            <h3 className="text-base font-bold text-[#0B1F4B] mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#155EEF]" />
              Quick Summary: How to Request Data Deletion
            </h3>
            <p className="text-xs sm:text-sm text-[#0B1F4B]">
              To request complete deletion, unlinking, or anonymization of your data from Nadhee Tech Solutions, send an email to{' '}
              <a href="mailto:info@nadheetechsolutions.com?subject=Data%20Deletion%20Request" className="font-bold underline text-[#155EEF]">
                info@nadheetechsolutions.com
              </a>{' '}
              with the subject line <strong className="font-mono text-xs bg-white px-2 py-0.5 rounded border border-blue-200">Data Deletion Request</strong>. No passwords or sensitive authentication credentials are required.
            </p>
          </div>

          {/* Step-by-Step Instructions */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">01.</span>
              Step-by-Step Deletion Process
            </h2>
            <div className="space-y-4 pt-2">
              
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-[#155EEF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#0B1F4B] text-sm">Send an Email Request</h4>
                  <p className="text-xs sm:text-sm text-[#475569]">
                    Draft an email from your authorized business email address to{' '}
                    <a href="mailto:info@nadheetechsolutions.com" className="text-[#155EEF] font-semibold hover:underline">
                      info@nadheetechsolutions.com
                    </a>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-[#155EEF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#0B1F4B] text-sm">Subject Line</h4>
                  <p className="text-xs sm:text-sm text-[#475569]">
                    Set the email subject to: <strong className="font-mono text-xs bg-white px-2 py-1 rounded border border-slate-300 text-[#0B1F4B]">Data Deletion Request</strong>
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-[#155EEF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-[#0B1F4B] text-sm">Provide Account &amp; Integration Identifiers</h4>
                  <p className="text-xs sm:text-sm text-[#475569]">
                    Include sufficient information for our technical team to locate your records:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#475569]">
                    <li>Business or organization name</li>
                    <li>Registered contact email address</li>
                    <li>Connected WhatsApp Business phone number (if applicable)</li>
                    <li>Meta Business Account ID or WhatsApp Phone Number ID (if applicable)</li>
                  </ul>
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center gap-2 mt-2">
                    <ShieldAlert className="w-4 h-4 flex-shrink-0 text-amber-600" />
                    <span><strong>Security Note:</strong> Do NOT include account passwords, API secret keys, OTPs, or financial pins in your email.</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-[#155EEF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#0B1F4B] text-sm">Verification</h4>
                  <p className="text-xs sm:text-sm text-[#475569]">
                    To prevent fraudulent or unauthorized deletion of business operations, our technical support desk will verify the identity of the requester through an authorized contact confirmation.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-[#155EEF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  5
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#0B1F4B] text-sm">Execution &amp; Confirmation</h4>
                  <p className="text-xs sm:text-sm text-[#475569]">
                    Once verified, Nadhee will delete, unlink, or permanently anonymize the requested records within a reasonable timeframe (typically within 30 days) and send an email confirmation of completion with status details.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Scope of Deletion */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">02.</span>
              What Data Is Deleted
            </h2>
            <p>Upon verification of your deletion request, we will remove:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Stored WhatsApp message logs, conversation threads, and media attachments associated with the integration.</li>
              <li>Customer profile details and directory records stored in the Nadhee application database.</li>
              <li>Connected Meta access credentials, webhook subscriptions, and token links.</li>
              <li>Operational caches, contact tags, and marketing preference profiles.</li>
            </ul>
          </section>

          {/* Legal and Statutory Exceptions */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">03.</span>
              Statutory Record-Keeping Exceptions
            </h2>
            <p>
              Please note that certain financial and operational records cannot be instantly purged where retention is mandatory under Indian laws, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Invoices, tax records, and GST compliance data required for statutory accounting audits.</li>
              <li>Transaction settlement ledgers required for fraud mitigation, banking compliance, and dispute resolution.</li>
              <li>Security audit logs necessary to investigate system incidents or enforce contractual remedies.</li>
            </ul>
            <p className="text-xs text-[#475569]">
              Any data retained under statutory obligations is strictly archived, access-controlled, and segregated from regular operational processing.
            </p>
          </section>

          {/* Third-Party Data Clarification */}
          <section className="space-y-3 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Third-Party Platform Data Notice
            </h2>
            <p className="text-sm">
              Requesting data deletion from Nadhee Tech Solutions removes records residing inside Nadhee&apos;s systems and application databases. It does <strong>not</strong> automatically delete data independently collected or stored by:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm">
              <li><strong>Meta Platforms &amp; WhatsApp:</strong> Messages and interactions logged on Meta&apos;s servers or end-user devices remain subject to Meta&apos;s and WhatsApp&apos;s data policies.</li>
              <li><strong>Payment Gateways:</strong> Payment processors independently retain transaction history as mandated by banking and anti-money laundering regulations.</li>
              <li><strong>Third-Party Couriers:</strong> Delivery data dispatched to external logistics providers.</li>
            </ul>
            <p className="text-xs text-[#475569] pt-1">
              To delete data held directly by those platforms, you will need to submit requests directly to those third-party providers.
            </p>
          </section>

          {/* Contact Details */}
          <section className="space-y-4 pt-4 border-t border-[#DCE6F5]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <Radio className="w-5 h-5 text-[#155EEF]" />
              Direct Deletion Contact
            </h2>
            <p>
              If you have any questions or require assistance submitting your deletion request, please reach out directly:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5 text-[#0B1F4B]">
              <div className="font-bold text-base">{SITE_CONFIG.fullName}</div>
              <div>Data Privacy &amp; Compliance Team</div>
              <div>Location: {SITE_CONFIG.consultant.location}</div>
              <div>
                Email:{' '}
                <a href="mailto:info@nadheetechsolutions.com?subject=Data%20Deletion%20Request" className="text-[#155EEF] font-semibold hover:underline">
                  info@nadheetechsolutions.com
                </a>
              </div>
              <div>
                Website:{' '}
                <a href={SITE_CONFIG.consultant.website} target="_blank" rel="noopener noreferrer" className="text-[#155EEF] font-semibold hover:underline">
                  {SITE_CONFIG.consultant.websiteDisplay}
                </a>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
