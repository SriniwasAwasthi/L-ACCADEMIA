import React, { useState } from 'react';
import { PLAN_TIERS } from '../data/courses';
import { Check, Sparkles, Shield, Building, Crown } from 'lucide-react';

interface PricingPatronsProps {
  theme: 'dark' | 'light';
  onOpenEnroll: (planId?: string) => void;
}

export const PricingPatrons: React.FC<PricingPatronsProps> = ({ theme, onOpenEnroll }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const isDark = theme === 'dark';

  return (
    <section id="pricing" className={`py-28 relative transition-colors duration-500 ${
      isDark ? 'bg-[#0f1420] text-slate-100' : 'bg-[#FAF7F0] text-stone-900 border-t border-stone-300'
    }`}>
      <div className="max-w-[98%] w-full mx-auto px-2 sm:px-3 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>Patronage & Licensing Plans</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Invest in Classical Modern Mastery
          </h2>
          <p className={`mt-3 font-garamond italic text-lg sm:text-2xl ${
            isDark ? 'text-slate-300' : 'text-stone-700'
          }`}>
            Whether you are a solo software architect refining your craftsmanship or a University Dean deploying our LMS for 5,000 scholars, we have an honored place in our guild.
          </p>

          {/* Billing Switch Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-sans font-semibold ${!isAnnual ? (isDark ? 'text-amber-300 font-bold' : 'text-amber-900 font-bold') : 'text-slate-400'}`}>
              Monthly Scholar
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)} 
              className={`w-14 h-7 rounded-full p-1 transition-colors relative border ${
                isAnnual ? 'bg-amber-500 border-amber-400' : 'bg-slate-700 border-slate-600'
              }`}
            >
              <div className={`w-5 h-5 rounded-full bg-stone-950 transition-transform ${
                isAnnual ? 'translate-x-7' : 'translate-x-0'
              }`} />
            </button>
            <span className={`text-sm font-sans font-semibold flex items-center gap-2 ${isAnnual ? (isDark ? 'text-amber-300 font-bold' : 'text-amber-900 font-bold') : 'text-slate-400'}`}>
              <span>Annual Patron</span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500 text-stone-950 font-extrabold shadow-sm">
                Save 25% + Free Symposiums
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLAN_TIERS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const highlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between p-8 relative overflow-hidden transform hover:-translate-y-1.5 ${
                  highlighted
                    ? isDark 
                      ? 'bg-gradient-to-b from-[#192236] to-[#121929] border-2 border-amber-400 shadow-2xl shadow-amber-500/25 scale-[1.02]'
                      : 'bg-white border-2 border-amber-600 shadow-2xl scale-[1.02]'
                    : isDark 
                      ? 'bg-[#121824] border-amber-500/20 hover:border-amber-500/50' 
                      : 'bg-white border-stone-300 shadow-xl'
                }`}
              >
                {highlighted && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500 text-stone-950 font-cinzel font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3 text-stone-950" />
                    <span>Medici Recommended</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider block mb-1 ${
                      highlighted ? 'text-amber-400' : 'text-sky-400'
                    }`}>
                      {plan.id === 'medici-institution' ? '🏫 Institutional Suite' : '👤 Scholar Fellowship'}
                    </span>
                    <h3 className={`font-cinzel text-2xl font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs mt-2 min-h-[36px] font-sans ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Banner */}
                  <div className="py-5 border-y border-amber-500/20 my-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-mono font-extrabold text-amber-400">${price}</span>
                      <span className="text-xs font-mono text-slate-400">/ user / {isAnnual ? 'month (billed annually)' : 'month'}</span>
                    </div>
                    {isAnnual && (
                      <span className="text-[11px] text-emerald-400 font-mono mt-1 block">
                        ✓ Includes verified cryptographic diploma certificate upon Capstone.
                      </span>
                    )}
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs font-mono uppercase font-bold text-slate-400 block mb-2">Included Architectural Features:</span>
                    {plan.features.map((ft, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold ${
                          highlighted ? 'bg-amber-500 text-stone-950' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        }`}>
                          ✓
                        </div>
                        <span className={`text-xs sm:text-sm font-sans ${isDark ? 'text-slate-200' : 'text-stone-800'}`}>
                          {ft}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenEnroll(plan.name)}
                  className={`w-full py-4 rounded-full font-cinzel font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg ${
                    highlighted
                      ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-stone-950 hover:opacity-95 transform hover:scale-[1.02] shadow-amber-500/30'
                      : isDark 
                        ? 'bg-[#192134] border border-amber-500/40 text-amber-300 hover:bg-amber-500/20' 
                        : 'bg-stone-900 text-amber-300 hover:bg-stone-800'
                  }`}
                >
                  {plan.id === 'medici-institution' ? <Building className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                  <span>{plan.ctaText}</span>
                </button>

              </div>
            );
          })}
        </div>

        {/* Enterprise custom footnote */}
        <div className="mt-16 p-8 rounded-3xl bg-[#141b2b] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-cinzel text-lg font-bold text-white">Need a Custom White-Label University Enclave?</h4>
              <p className="text-xs text-slate-300 font-sans mt-1">We integrate with existing Okta SSO, SCORM registries, and regional European / global compliance standards.</p>
            </div>
          </div>
          <button 
            onClick={() => onOpenEnroll('Custom Enterprise University Enclave')}
            className="px-7 py-3 rounded-full bg-slate-800 text-amber-300 border border-amber-500/40 hover:bg-slate-700 font-sans font-bold text-xs shrink-0"
          >
            Contact Chief Architect →
          </button>
        </div>

      </div>
    </section>
  );
};
