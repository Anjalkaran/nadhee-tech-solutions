import React from 'react';
import { Home } from 'lucide-react';

interface NotFoundProps {
  onGoHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-navy-dark px-4 py-20 bg-circuit-pattern">
      <div className="max-w-md w-full glass-card rounded-3xl p-8 sm:p-10 border border-brand-navy-border text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 text-brand-accent mx-auto flex items-center justify-center font-mono font-extrabold text-2xl border border-brand-blue/40 shadow-glow">
          404
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-300">
            The page or resource you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onGoHome}
            className="w-full py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-electric text-white font-semibold text-sm shadow-glow flex items-center justify-center gap-2 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
        </div>
      </div>
    </div>
  );
};
