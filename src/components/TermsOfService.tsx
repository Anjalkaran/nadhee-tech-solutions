import React, { useEffect } from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Terms of Service | Nadhee Tech Solutions';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Terms of Service for Nadhee Tech Solutions, governing the use of our software, ERP, and Nadhee AI Commerce Meta integration.'
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
            <FileText className="w-3.5 h-3.5" />
            <span>User Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F4B] tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-[#475569] leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern the access and use of websites, custom software, ERP systems, conversational workflows, and applications provided by Nadhee Tech Solutions (&quot;Nadhee&quot;, &quot;we&quot;, &quot;us&quot;), including our Meta developer application <strong className="text-[#0B1F4B]">Nadhee AI Commerce</strong> (Meta App ID: <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded text-[#0B1F4B]">934938482334534</span>).
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#475569] pt-4 mt-6 border-t border-[#DCE6F5]">
            <div><strong>Effective Date:</strong> October 18, 2026</div>
            <div>•</div>
            <div><strong>Last Updated:</strong> October 18, 2026</div>
            <div>•</div>
            <div><strong>Jurisdiction:</strong> India</div>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE6F5] shadow-sm space-y-10 text-sm sm:text-base text-[#475569] leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">01.</span>
              Acceptance of Terms
            </h2>
            <p>
              By accessing our website, subscribing to our services, contracting custom software development, or connecting your business communications to Nadhee AI Commerce, you agree to be legally bound by these Terms. If you are accepting on behalf of an entity, company, or organization, you represent and warrant that you have full legal authority to bind that entity.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">02.</span>
              Description of Services
            </h2>
            <p>
              Nadhee provides practical software engineering, cloud web applications, mobile tools, billing and enterprise resource planning (ERP) modules, AI-assisted commerce mechanisms, and WhatsApp business conversational automations. Services are customized or provisioned based on specific work orders, proposals, and feature selections.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">03.</span>
              Business Accounts &amp; Authorized Users
            </h2>
            <p>
              Customers must maintain current, accurate, and complete registration information. You are solely responsible for all activities occurring under your administrative accounts and for safeguarding login credentials and API tokens. You agree to notify Nadhee immediately of any suspected unauthorized access or security breach.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">04.</span>
              Connected Third-Party Platforms
            </h2>
            <p>
              Our services may interoperate with third-party software, cloud servers, messaging gateways, payment services, or developer platforms. You acknowledge that your relationship with and usage of such third-party providers is governed by their respective terms, policies, and API availability. Nadhee is not responsible for outages, rate limits, or unilateral policy modifications imposed by third-party platforms.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">05.</span>
              WhatsApp &amp; Meta Integrations
            </h2>
            <p>
              When utilizing WhatsApp Business connectivity via the Meta Developer App <strong>Nadhee AI Commerce</strong> (Meta App ID: 934938482334534):
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>You agree to comply with all Meta Developer Terms, WhatsApp Business Messaging Policies, and Commerce Policies.</li>
              <li>You warrant that you have obtained lawful consent and opt-ins from end consumers before sending notifications or promotional messages.</li>
              <li>You acknowledge that Nadhee provides technical software connectivity and is not Meta Platforms, Inc., nor an affiliate of Meta.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">06.</span>
              Customer Responsibilities
            </h2>
            <p>
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>The legality, accuracy, and quality of data, catalogues, pricing, and text uploaded to our platform.</li>
              <li>Ensuring full compliance with applicable local, national, and international consumer protection and privacy laws.</li>
              <li>Obtaining all necessary consents, licenses, and permits required to sell your goods or render your services.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">07.</span>
              Acceptable Use
            </h2>
            <p>
              You agree not to use Nadhee systems, APIs, or connected Meta apps to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Transmit unsolicited spam, misleading commercial claims, or illegal bulk solicitations.</li>
              <li>Violate the intellectual property, privacy, or legal rights of any third party.</li>
              <li>Distribute malicious code, viruses, automated scraping agents, or denial-of-service scripts.</li>
              <li>Engage in deceptive, fraudulent, or harassing commercial communications.</li>
              <li>Attempt to reverse-engineer, decompile, or compromise the underlying infrastructure of the platform.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">08.</span>
              Data and Content
            </h2>
            <p>
              As between Nadhee and the customer, you retain all ownership rights in your proprietary business data and content. You grant Nadhee a non-exclusive, worldwide, royalty-free license to host, store, transfer, and process your content strictly to provide, maintain, and secure the agreed software services.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">09.</span>
              AI-Assisted Features
            </h2>
            <p>
              Where AI features are enabled within Nadhee AI Commerce or related modules, you acknowledge that artificial intelligence outputs are generated probabilistically and are intended to assist business operations. You remain responsible for supervising conversational output, configuring business rules, verifying pricing, and handling customer escalation where appropriate.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">10.</span>
              Orders &amp; Commerce Features
            </h2>
            <p>
              Nadhee provides technological infrastructure enabling orders, billing, and inventory tracking. The underlying commercial transaction for goods or services is solely between the business client and their end customer. Nadhee is not a party to the sale, warranty, or delivery of products sold by clients using our tools.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">11.</span>
              Payments &amp; Third-Party Payment Providers
            </h2>
            <p>
              Where billing or commerce tools interface with payment gateways (such as UPI, banking partners, or online payment processors), transactions are governed by the payment gateway&apos;s legal terms. Nadhee does not store credit/debit card credentials. Any transaction disputes, chargebacks, or refunds must be resolved directly between the merchant, end customer, and payment processor.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">12.</span>
              Availability &amp; Changes to Service
            </h2>
            <p>
              We make reasonable efforts to maintain high platform availability and service stability. However, services may occasionally experience downtime for maintenance, updates, hardware failures, or telecommunications disruptions. We reserve the right to modify, enhance, or discontinue features upon reasonable notice.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">13.</span>
              Intellectual Property
            </h2>
            <p>
              All software code, user interface designs, architectural frameworks, logos, and proprietary algorithms developed by Nadhee Tech Solutions remain the exclusive intellectual property of Nadhee or its licensors, except where expressly transferred under signed, written contract agreements.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">14.</span>
              Confidentiality
            </h2>
            <p>
              Each party agrees to maintain the confidentiality of non-public business information, proprietary technical workflows, customer lists, and financial terms disclosed during the provision of software development and consulting services.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">15.</span>
              Suspension &amp; Termination
            </h2>
            <p>
              We may suspend or terminate access to our services, APIs, or integration connectors if you breach these Terms, fail to remediate payment defaults, or engage in conduct that threatens the security, integrity, or reputation of the platform or other users.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">16.</span>
              Disclaimer of Warranties
            </h2>
            <p className="text-xs sm:text-sm">
              TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, THE SERVICES, PLATFORMS, AND APPLICATIONS ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, STATUTORY, OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE COMPLETELY ERROR-FREE, UNINTERRUPTED, OR FREE OF TEMPORARY DELAYS.
            </p>
          </section>

          {/* Section 17 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">17.</span>
              Limitation of Liability
            </h2>
            <p className="text-xs sm:text-sm">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL NADHEE TECH SOLUTIONS, ITS CONSULTANTS, EMPLOYEES, OR AGENTS BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, GOODWILL, OR BUSINESS INTERRUPTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OF OUR PLATFORM OR CONNECTED THIRD-PARTY APIS.
            </p>
          </section>

          {/* Section 18 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">18.</span>
              Indemnification
            </h2>
            <p>
              You agree to defend, indemnify, and hold harmless Nadhee Tech Solutions against any third-party claims, liabilities, damages, and reasonable legal expenses arising from your misuse of the platform, violation of these Terms, breach of third-party platform rules (including WhatsApp/Meta policies), or infringement of third-party rights.
            </p>
          </section>

          {/* Section 19 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">19.</span>
              Changes to Terms
            </h2>
            <p>
              We reserve the right to amend these Terms at our discretion. Notice of substantial revisions will be provided by posting the updated Terms on this website with an updated revision date. Continued use of our software after such posting constitutes acceptance.
            </p>
          </section>

          {/* Section 20 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">20.</span>
              Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms and any dispute or claim arising out of or related to their subject matter shall be governed by and construed in accordance with the laws of <strong>India</strong>, without regard to conflict of law principles.
            </p>
          </section>

          {/* Section 21 */}
          <section className="space-y-4 pt-4 border-t border-[#DCE6F5]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F4B] flex items-center gap-2">
              <span className="text-[#155EEF] text-base font-mono">21.</span>
              Contact Us
            </h2>
            <p>
              For legal inquiries, contractual questions, or formal notices regarding these Terms of Service, please contact:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5 text-[#0B1F4B]">
              <div className="font-bold text-base">{SITE_CONFIG.fullName}</div>
              <div>Attn: Legal &amp; Contract Administration</div>
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
