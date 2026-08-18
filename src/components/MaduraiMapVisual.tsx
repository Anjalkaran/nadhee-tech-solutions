import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

export const MaduraiMapVisual: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps/place/Madurai,+Tamil+Nadu";

  return (
    <div className="light-card rounded-2xl p-6 sm:p-8 border border-slate-200 bg-white relative overflow-hidden shadow-lg">
      <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
        <div>
          <div className="flex items-center gap-2 text-brand-blue text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-4 h-4" />
            <span>Regional Headquarters</span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
            Madurai, Tamil Nadu, India
          </h3>
          
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            Serving businesses across Madurai, Tamil Nadu, and pan-India with modern software engineering and automation solutions.
          </p>

          {/* Regional Tech Highlights */}
          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 font-mono pt-2">
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-900 block font-semibold">Location</span>
              <span>Madurai Hub</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-900 block font-semibold">Coordinates</span>
              <span>9.9252° N, 78.1198° E</span>
            </div>
          </div>
        </div>

        {/* Visual Map Node Representation */}
        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 relative overflow-hidden flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-brand-blue animate-ping absolute opacity-75"></div>
              <div className="w-3 h-3 rounded-full bg-brand-blue relative z-10"></div>
            </div>
            <span className="text-xs font-bold text-slate-900">Madurai Digital Tech Corridor</span>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-brand-blue hover:text-brand-blue-dark flex items-center gap-1 transition-colors"
          >
            <span>View on Map</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
