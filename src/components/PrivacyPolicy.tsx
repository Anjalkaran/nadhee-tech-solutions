import React, { useEffect } from 'react';
import { ShieldCheck, ArrowLeft, ArrowRight, CheckCircle2, Radio } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Privacy Policy | Nadhee Tech Solutions';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Privacy Policy for Nadhee Tech Solutions and connected services including Nadhee AI Commerce (Meta App ID: 934938482334534) and WhatsApp Business Platform integrations.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#155EEF] uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F4B] tracking-tight mb-3 font-sans">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#475569] leading-relaxed">
            Nadhee Tech Solutions (&quot;Nadhee&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) provides cloud-based business software, ERP systems, AI-assisted commerce tools, WhatsApp Business Platform integrations, and digital workflow automation services. This Privacy Policy explains how information is processed when you use our website, services, and software applications, including the Meta developer application <strong className="text-[#0B1F4B]">Nadhee AI Commerce</strong> (Meta App ID: <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded text-[#0B1F4B]">934938482334534</span>).
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#475569] pt-4 mt-6 border-t border-[#DCE6F5]">
            <div><strong>Company:</strong> Nadhee Tech Solutions</div>
            <div>•</div>
            <div><strong>Effective Date:</strong> October 18, 2026</div>
            <div>•</div>
            <div><strong>Last Updated:</strong> October 23, 2026</div>
            <div>•</div>
            <div><strong>Website:</strong> <a href="https://nadheetechsolutions.com" className="text-[#155EEF] hover:underline">https://nadheetechsolutions.com</a></div>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE6F5] shadow-sm space-y-10 text-sm sm:text-base text-[#475569] leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">01.</span>
              Introduction
            </h2>
            <p>
              Nadhee Tech Solutions develops practical, business-focused digital solutions for enterprises, retail merchants, educational bodies, and service operations. When client businesses configure or connect our platforms—such as our cloud ERP tools, SaaS modules, or the <strong>Nadhee AI Commerce</strong> app—to communicate with their end customers, we act as a technology service provider and data processor assisting that business.
            </p>
            <p>
              We respect your privacy and process personal information strictly in accordance with applicable Indian laws and the principles outlined in this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">02.</span>
              Information We Process
            </h2>
            <p>
              Depending on the specific Nadhee services, features, and modules enabled by the business client, we may process the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <strong className="text-[#0B1F4B]">Business &amp; Account Information:</strong> Business name, contact person name, authorized user credentials, billing details, and administrative contact information.
              </li>
              <li>
                <strong className="text-[#0B1F4B]">WhatsApp &amp; Messaging Identifiers:</strong> WhatsApp Business Account (WABA) IDs, phone numbers, phone number IDs, sender display names, message delivery status callbacks, and message timestamps transmitted through the Meta/WhatsApp Business Platform.
              </li>
              <li>
                <strong className="text-[#0B1F4B]">Operational Communications &amp; Inquiries:</strong> Inbound customer messages, customer queries, automated conversational responses, message metadata, and operational communications routed through connected business channels.
              </li>
              <li>
                <strong className="text-[#0B1F4B]">Media &amp; Document Attachments:</strong> Images, PDF bills, receipts, product catalogues, or documents specifically uploaded by business users or transmitted by customers during an interaction.
              </li>
              <li>
                <strong className="text-[#0B1F4B]">Commerce &amp; Order Data:</strong> Cart selections, items ordered, quantities, delivery addresses, dispatch identifiers, order statuses, and transaction references needed for fulfillment.
              </li>
              <li>
                <strong className="text-[#0B1F4B]">Payment Status &amp; Reconciliation References:</strong> Payment confirmation identifiers, gateway transaction references, and payment status updates (e.g., Paid, Pending, Failed). <span className="font-semibold text-[#0B1F4B]">We do not collect, process, or store credit/debit card numbers or CVVs</span>; payment processing is handled independently by authorized third-party payment gateways.
              </li>
              <li>
                <strong className="text-[#0B1F4B]">Technical Logs &amp; Telemetry:</strong> IP addresses, browser types, HTTP access logs, diagnostic error logs, and system performance metrics necessary for platform security and debugging.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">03.</span>
              How We Use Information
            </h2>
            <p>
              We process information only for legitimate, defined business and technological purposes, including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0 mt-0.5" />
                <span>Operating core cloud ERP, billing, inventory, and order management features.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0 mt-0.5" />
                <span>Delivering automated WhatsApp order notifications and dispatch updates.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0 mt-0.5" />
                <span>Enabling customer query routing and catalogue browsing.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0 mt-0.5" />
                <span>Generating invoices, GST summaries, and delivery reports.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0 mt-0.5" />
                <span>Providing technical customer support, bug fixes, and troubleshooting.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] flex-shrink-0 mt-0.5" />
                <span>Maintaining tenant isolation, system security, and auditability.</span>
              </div>
            </div>
          </section>

          {/* Section 4: WhatsApp / Meta Platform Data Explanation */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">04.</span>
              WhatsApp &amp; Meta Platform Data Processing
            </h2>
            <p>
              Businesses may connect their Meta Developer Accounts, WhatsApp Business Accounts (WABA), and Meta Cloud APIs to our solutions, including through the <strong>Nadhee AI Commerce</strong> app (Meta App ID: 934938482334534).
            </p>
            
            {/* Required Meta Platform Data Statement */}
            <div className="p-5 rounded-2xl bg-[#F5F9FF] border border-[#DCE6F5] text-xs sm:text-sm text-[#0B1F4B] space-y-2.5">
              <div className="font-bold flex items-center gap-2 text-[#155EEF]">
                <Radio className="w-4 h-4 text-emerald-600" />
                <span>Meta Platform Data Usage Notice:</span>
              </div>
              <p className="leading-relaxed">
                When a business authorizes Nadhee to connect with the WhatsApp Business Platform, Nadhee may process information provided through Meta APIs, including WhatsApp Business Account information, phone number information and messaging-related data required to provide the requested service.
              </p>
              <p className="leading-relaxed">
                This information is used only to operate the services authorized by that business, such as customer communication, enquiries, orders, notifications and related workflows.
              </p>
              <p className="leading-relaxed font-semibold">
                Each client&apos;s information is handled separately and is not used to provide another unrelated client&apos;s service.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#475569]">
              <strong className="text-[#0B1F4B]">Technology Provider Clarification:</strong> Nadhee Tech Solutions is an independent technology and software engineering consultancy. We are not Meta Platforms, Inc., nor an official Meta Business Partner. We build integrations that operate over Meta&apos;s published APIs.
            </div>
          </section>

          {/* Section 5: Client Data Isolation */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">05.</span>
              Client Data Isolation &amp; Multi-Tenant Protection
            </h2>
            <p>
              Nadhee operates a multi-tenant cloud SaaS infrastructure engineered around strict data partitioning:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Each business customer&apos;s operational data, contact directories, conversation histories, catalogues, and financial ledgers are assigned distinct tenant boundaries.</li>
              <li>Data belonging to one business is strictly isolated from and never accessible to another unrelated client.</li>
              <li>Platform administrative access is governed by restricted role-based controls and operational logging.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">06.</span>
              AI Processing
            </h2>
            <p>
              Where AI-assisted commerce or conversational features are enabled by a business client, relevant message texts or catalogue queries may be processed via secure, configured AI service providers (such as cloud-hosted LLM endpoints). This processing occurs strictly to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Understand customer intent and parse product requests.</li>
              <li>Generate relevant, contextual replies and product recommendations.</li>
              <li>Assist staff with draft responses and operational summaries.</li>
            </ul>
            <p>
              We do not use customer proprietary data or conversational messages to independently train public foundational AI models without explicit customer instruction.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">07.</span>
              Service Providers &amp; Infrastructure
            </h2>
            <p>
              To deliver high availability, enterprise uptime, and reliable connectivity, Nadhee relies on reputable technical infrastructure providers, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Secure cloud hosting and Content Delivery Networks (Google Cloud / Firebase Hosting).</li>
              <li>Managed transactional databases and serverless computing environments.</li>
              <li>Configured AI service providers for automated natural language processing.</li>
              <li>Business messaging gateways (Meta WhatsApp Cloud API).</li>
              <li>Authorized banking and payment gateways selected by clients.</li>
            </ul>
            <p>
              All service providers receive only the data necessary to perform their technical roles, subject to standard contractual confidentiality obligations.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">08.</span>
              Data Sharing &amp; Non-Sale of Data
            </h2>
            <p className="font-semibold text-[#0B1F4B]">
              Nadhee Tech Solutions does not sell, rent, monetize, or trade your personal or business data to third-party data brokers or marketing aggregators.
            </p>
            <p>
              We share data only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong className="text-[#0B1F4B]">Service Delivery:</strong> With technical service providers as described above to execute required operations.</li>
              <li><strong className="text-[#0B1F4B]">Client Direction:</strong> To fulfill actions explicitly requested by the account owner (e.g., dispatching order data to a third-party courier).</li>
              <li><strong className="text-[#0B1F4B]">Legal Compliance:</strong> When compelled by enforceable governmental, judicial, or regulatory mandates under Indian law.</li>
              <li><strong className="text-[#0B1F4B]">Protection of Rights:</strong> Where necessary to detect fraud, security threats, or protect the integrity of our systems and users.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">09.</span>
              Data Retention
            </h2>
            <p>
              We retain personal and transaction information only for as long as reasonably necessary to provide the contracted services, meet contractual or legal obligations, resolve disputes, maintain security, and enforce agreements.
            </p>
            <p>
              When data is no longer required for operational, tax, statutory, or audit purposes, it is securely deleted, permanently purged, or rendered non-identifiable through irreversible anonymization.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">10.</span>
              Security Safeguards
            </h2>
            <p>
              We implement reasonable technical, operational, and organizational safeguards designed to protect personal data against accidental loss, unauthorized access, disclosure, alteration, and misuse. These measures include TLS/HTTPS transport encryption, restricted role-based administrative access, and isolated application environments.
            </p>
            <p className="text-xs text-[#475569]">
              Please note that no method of electronic storage or transmission over the internet can be guaranteed as 100% impenetrable. While we strive to protect your information with industry-standard practices, absolute security cannot be guaranteed.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">11.</span>
              Cookies &amp; Analytics
            </h2>
            <p>
              Our public website uses minimal essential session mechanisms required for navigation and server security. We do not deploy third-party advertising cookies or cross-site tracking scripts.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">12.</span>
              User &amp; Customer Rights
            </h2>
            <p>
              Under applicable regulations, individuals and business clients have rights regarding their personal data, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Requesting confirmation of whether we process personal data relating to them.</li>
              <li>Requesting access to or a copy of processed personal information.</li>
              <li>Requesting correction or rectification of inaccurate or outdated details.</li>
              <li>Requesting deletion or erasure of eligible personal data.</li>
            </ul>
            <p>
              To exercise any of these rights, please write to us at{' '}
              <a href="mailto:info@nadheetechsolutions.com" className="text-[#155EEF] font-semibold hover:underline">
                info@nadheetechsolutions.com
              </a>.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3 p-6 rounded-2xl bg-[#F5F9FF] border border-[#DCE6F5]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">13.</span>
              User Data Deletion
            </h2>
            <p>
              If you wish to delete your data, remove your WhatsApp business account connection, or purge account records associated with the <strong>Nadhee AI Commerce</strong> application or WhatsApp Business Platform integrations, please follow our dedicated deletion procedure.
            </p>
            <div className="pt-2">
              <a
                href="/data-deletion"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#155EEF] hover:bg-[#1688FF] text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <span>View User Data Deletion Instructions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-xs text-[#475569] pt-2">
              Direct URL: <a href="https://nadheetechsolutions.com/data-deletion" className="text-[#155EEF] underline">https://nadheetechsolutions.com/data-deletion</a>
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">14.</span>
              Children&apos;s Privacy
            </h2>
            <p>
              Our business software, enterprise ERP, and commercial integration services are strictly intended for business enterprises and commercial users. We do not knowingly solicit, collect, or process personal data from children under the age of 18.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">15.</span>
              Updates to This Policy
            </h2>
            <p>
              We may periodically update this Privacy Policy to reflect enhancements in our services, newly added integrations, or evolving legal and regulatory requirements. The updated version will be posted on this page with an updated &quot;Last Updated&quot; date.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-4 pt-4 border-t border-[#DCE6F5]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">16.</span>
              Contact Us
            </h2>
            <p>
              For any questions, clarifications, access requests, or privacy concerns regarding this Privacy Policy or our software services, please contact:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5 text-[#0B1F4B]">
              <div className="font-bold text-base">{SITE_CONFIG.fullName}</div>
              <div>Attn: Privacy &amp; Data Protection Officer</div>
              <div>Location: {SITE_CONFIG.consultant.location}</div>
              <div>
                Email:{' '}
                <a href={`mailto:${SITE_CONFIG.consultant.email}`} className="text-[#155EEF] font-semibold hover:underline">
                  {SITE_CONFIG.consultant.email}
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
