import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/courses';
import { Quote, ArrowLeft, ArrowRight, Star, Building2 } from 'lucide-react';

interface TestimonialsProps {
  theme: 'dark' | 'light';
  onOpenEnroll: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ theme, onOpenEnroll }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const isDark = theme === 'dark';
  const current = TESTIMONIALS[activeIdx];

  const handleNext = () => setActiveIdx((activeIdx + 1) % TESTIMONIALS.length);
  const handlePrev = () => setActiveIdx((activeIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className={`py-28 relative transition-colors duration-500 overflow-hidden ${
      isDark ? 'bg-[#0a0d15] text-slate-100' : 'bg-[#FAF7F0] text-stone-900'
    }`}>
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-[98%] w-full mx-auto px-2 sm:px-3 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Voices of the Guild</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Praise from Institutional Laureates
          </h2>
          <p className={`mt-3 font-garamond italic text-lg sm:text-2xl ${
            isDark ? 'text-slate-300' : 'text-stone-700'
          }`}>
            Why the world’s leading design studios and AI engineering observatories replace conventional corporate LMS platforms with L’Accademia.
          </p>
        </div>

        {/* Selected Highlight Card */}
        <div className={`rounded-3xl border shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto ${
          isDark ? 'bg-[#121825] border-amber-500/30 shadow-amber-950/30' : 'bg-white border-amber-900/20 shadow-2xl'
        }`}>
          
          {/* Left Library Image Photo */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-black">
            <img 
              src={current.bgImage} 
              alt={current.institution} 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121825] via-[#121825]/40 to-transparent"></div>
            
            <div className="absolute bottom-6 inset-x-6">
              <div className="flex items-center gap-2 text-amber-400 font-bold mb-2">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-xs text-white font-mono ml-1">5.0 / 5.0</span>
              </div>
              <span className="text-xs font-mono uppercase font-bold text-sky-400 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-amber-400" />
                {current.institution}
              </span>
            </div>
          </div>

          {/* Right Quote details */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <Quote className="w-10 h-10 text-amber-400/40" />
              <p className={`font-garamond text-xl sm:text-2xl italic leading-relaxed ${
                isDark ? 'text-amber-100' : 'text-stone-800'
              }`}>
                &quot;{current.quote}&quot;
              </p>
            </div>

            <div className="pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src={current.avatar} 
                  alt={current.author} 
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-500/40"
                />
                <div>
                  <h4 className="font-cinzel font-bold text-base sm:text-lg text-amber-300">{current.author}</h4>
                  <p className="text-xs text-slate-300 font-sans">{current.role}</p>
                  <span className="text-[11px] font-mono text-emerald-400">Verified Medici Patron</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrev}
                  className={`p-3 rounded-full border transition-colors ${
                    isDark ? 'bg-[#182033] border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-stone-950' : 'bg-stone-200 text-stone-800 border-stone-300'
                  }`}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className={`p-3 rounded-full border transition-colors ${
                    isDark ? 'bg-[#182033] border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-stone-950' : 'bg-stone-200 text-stone-800 border-stone-300'
                  }`}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Thumbnail Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIdx ? 'w-10 bg-amber-400' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Institutional partner footer summary */}
        <div className="mt-16 text-center">
          <button 
            onClick={onOpenEnroll}
            className="text-xs font-mono uppercase font-bold text-amber-400 hover:underline inline-flex items-center gap-1.5"
          >
            <span>Would your institution like to join our Guild Review? Inquire here →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
