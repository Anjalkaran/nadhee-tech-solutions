import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, BUDGET_OPTIONS, SERVICE_OPTIONS } from '../data/siteData';
import { MaduraiMapVisual } from './MaduraiMapVisual';

interface ContactSectionProps {
  prefilledService?: string;
  onSuccessToast?: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService = '', onSuccessToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    serviceNeeded: prefilledService || '',
    budget: BUDGET_OPTIONS[1],
    preferredContact: 'WhatsApp',
    details: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your mobile number';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `*New Consultation Request - NADHEE TECH SOLUTIONS*
---------------------------------------
*Name:* ${formData.name}
*Mobile:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Business/Org:* ${formData.business || 'Individual'}
*Requirement:* ${formData.serviceNeeded || 'General Technology Solution'}
*Budget Range:* ${formData.budget}
*Preferred Contact:* ${formData.preferredContact}
*Additional Notes:* ${formData.details || 'None'}
---------------------------------------`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919384390750?text=${encodedMessage}`;

    setIsSubmitted(true);
    if (onSuccessToast) {
      onSuccessToast('Consultation request recorded! Redirecting to WhatsApp...');
    }

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  const handleDirectWhatsApp = () => {
    window.open(SITE_CONFIG.consultant.whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-brand-blue uppercase tracking-wider shadow-soft">
            Start A Conversation
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Let's Build Something Useful.
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Tell us about your project or business goal. We will provide practical guidance and an honest estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="light-card rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg bg-white relative">
              
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-1">
                  Tell Us What You Need
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Fill out this simple form and we will get back to you promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Thank You!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your request has been prepared. If WhatsApp did not open automatically, you can click below to connect directly with Ramamoorthy K.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleDirectWhatsApp}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-soft"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Chat</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.name ? 'border-rose-500' : 'border-slate-200 focus:border-brand-blue focus:bg-white'
                        } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.phone ? 'border-rose-500' : 'border-slate-200 focus:border-brand-blue focus:bg-white'
                        } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email & Business */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. ramesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.email ? 'border-rose-500' : 'border-slate-200 focus:border-brand-blue focus:bg-white'
                        } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Business / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sri Krishna Traders"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Needed & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        What do you need?
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
                      >
                        <option value="">Select a service category</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
                      >
                        {BUDGET_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['WhatsApp', 'Phone Call', 'Email'].map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: method })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                            formData.preferredContact === method
                              ? 'bg-blue-50 border-brand-blue text-brand-blue shadow-soft font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Summary / Details */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Brief Description of Your Goal <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. I need an automated billing and inventory app for my wholesale shop..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-brand-blue hover:bg-brand-blue-electric text-white font-bold text-sm shadow-glow hover:shadow-glow-lg transition-all duration-200 flex items-center justify-center gap-2 group"
                    >
                      <span>Request Free Consultation</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Contact Details & Madurai Location Hub */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Consultant Contact Card */}
            <div className="light-card rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-1 font-display">
                Direct Contact Information
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Reach out directly to our technology solutions consultant.
              </p>

              {/* Consultant Name Card */}
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 mb-6 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  RK
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 font-display">
                    {SITE_CONFIG.consultant.name}
                  </div>
                  <div className="text-xs text-brand-blue font-semibold">
                    {SITE_CONFIG.consultant.title}
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
                <a
                  href={`tel:${SITE_CONFIG.consultant.phone}`}
                  className="py-3 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Call Now</span>
                </a>

                <a
                  href={SITE_CONFIG.consultant.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.consultant.email}`}
                  className="py-3 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Email Us</span>
                </a>
              </div>

              {/* Detail List */}
              <div className="space-y-3 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500 font-medium">Phone:</span>
                  <a href={`tel:${SITE_CONFIG.consultant.phone}`} className="font-mono font-semibold text-slate-900 hover:text-brand-blue transition-colors">
                    {SITE_CONFIG.consultant.phoneFormatted}
                  </a>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500 font-medium">Email:</span>
                  <a href={`mailto:${SITE_CONFIG.consultant.email}`} className="font-semibold text-slate-900 hover:text-brand-blue transition-colors">
                    {SITE_CONFIG.consultant.email}
                  </a>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500 font-medium">Website:</span>
                  <a href={`https://${SITE_CONFIG.consultant.website}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 hover:text-brand-blue transition-colors">
                    {SITE_CONFIG.consultant.website}
                  </a>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500 font-medium">Location:</span>
                  <span className="font-semibold text-slate-900">
                    {SITE_CONFIG.consultant.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Madurai Visual Hub Map Card */}
            <MaduraiMapVisual />

          </div>

        </div>

      </div>
    </section>
  );
};
