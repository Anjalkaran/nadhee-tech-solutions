import React from 'react';
import { CheckCircle, Monitor, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/siteData';

export const OurWork: React.FC = () => {
  return (
    <section id="work" className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-brand-blue uppercase tracking-wider shadow-soft">
            Portfolio & Case Studies
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Built With Real-World Experience
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Practical technology created to solve real problems.
          </p>
        </div>

        {/* Project Cards (Grid of 2 Impressive Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="light-card rounded-3xl border border-slate-200 hover:border-brand-blue/60 transition-all duration-300 shadow-md hover:shadow-card-hover overflow-hidden flex flex-col justify-between bg-white group"
            >
              <div>
                {/* Simulated UI Window Preview Header */}
                <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="ml-2 text-xs font-mono font-medium text-slate-500 truncate max-w-[200px] sm:max-w-none">
                      {project.website.replace('https://', '')}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-brand-blue text-[11px] font-bold border border-blue-200">
                    {project.badge}
                  </span>
                </div>

                {/* Project Visual Showcase */}
                <div className="p-6 sm:p-8">
                  
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 font-display">
                    {project.name}
                  </h3>

                  <p className="text-sm font-semibold text-brand-blue mb-4">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Key Capabilities */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Highlights & Architecture:
                    </div>
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                        <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                  <Monitor className="w-4 h-4 text-brand-blue" />
                  <span>Live Production Platform</span>
                </div>

                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-electric text-white text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-soft hover:shadow-glow group/btn"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
