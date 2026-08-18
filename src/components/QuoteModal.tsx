import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { BUDGET_OPTIONS, SERVICE_OPTIONS } from '../data/siteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onSuccessToast?: (msg: string) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  onSuccessToast
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');
  const [service, setService] = useState(initialService || SERVICE_OPTIONS[0]);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[1]);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please enter your name';
    if (!phone.trim()) {
      errs.phone = 'Please enter your mobile number';
    } else if (!/^[0-9+ -]{10,14}$/.test(phone.trim())) {
      errs.phone = 'Please enter a valid mobile number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `*Consultation & Quote Request - NADHEE TECH SOLUTIONS*
---------------------------------------
*Name:* ${name}
*Mobile:* ${phone}
*Email:* ${email || 'Not provided'}
*Business:* ${business || 'Not specified'}
*Service/Project:* ${service}
*Budget Range:* ${budget}
*Notes:* ${notes || 'None'}
---------------------------------------`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/919384390750?text=${encoded}`;

    if (onSuccessToast) {
      onSuccessToast('Opening WhatsApp with your request...');
    }

    setTimeout(() => {
      window.open(waUrl, '_blank');
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl bg-white my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 shadow-soft">
            Free Consultation & Estimate
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mt-2 font-display">
            Request A Custom Quote
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Let's discuss how technology can solve your business challenge.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Anand"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 text-sm focus:outline-none transition-all"
            />
            {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9384390750"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 text-sm focus:outline-none transition-all"
              />
              {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 text-sm focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Business / Entity
              </label>
              <input
                type="text"
                placeholder="Company Name"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 text-sm focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Required Solution
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 text-sm focus:outline-none transition-all"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Estimated Budget
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 text-sm focus:outline-none transition-all"
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Project Details <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
            </label>
            <textarea
              rows={2}
              placeholder="Tell us what you want to achieve..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 text-sm focus:outline-none transition-all resize-none"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-electric text-white font-bold text-sm shadow-glow flex items-center justify-center gap-2 transition-all"
            >
              <span>Submit & Open WhatsApp</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
