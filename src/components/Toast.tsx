import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 4000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl p-4 bg-slate-900 text-white border border-slate-700 shadow-xl flex items-center justify-between gap-3 animate-float">
      <div className="flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <span className="text-xs sm:text-sm font-medium text-white">{message}</span>
      </div>
      <button 
        onClick={onClose}
        className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
