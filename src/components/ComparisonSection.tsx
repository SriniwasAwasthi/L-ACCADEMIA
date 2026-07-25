import React from 'react';
import { X, Award, Compass, Heart } from 'lucide-react';

interface ComparisonSectionProps {
  theme: 'dark' | 'light';
  onOpenEnroll: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ theme, onOpenEnroll }) => {
  const isDark = theme === 'dark';

  const comparisons = [
    {
      feature: "Visual Aesthetics & UI Comfort",
      standard: "Clinical monochrome tables, sterile corporate portals, fast digital screen fatigue.",
      accademia: "Golden Ratio (Phi) optical spacing, Cormorant Garamond serifs, Chiaroscuro & Uffizi modes."
    },
    {
      feature: "AI Engagement & Testing Method",
      standard: "Passive video playback with superficial multiple-choice rote quiz checkpoints.",
      accademia: "Conversational Socrates AI Tutor that challenges logic & conducts live epistemic debates."
    },
    {
      feature: "Average Course Completion Rate",
      standard: "18% - 24% industry average (often completed out of forced compliance).",
      accademia: "94.2% documented completion driven by immersive storytelling and Bottega peer guilds."
    },
    {
      feature: "Course Authoring & Creator Studio",
      standard: "Clunky legacy SCORM uploaders requiring specialized third-party desktop authoring tools.",
      accademia: "Native cloud Bottega with generative AI syllabus authoring and automated aesthetic formatting."
    },
    {
      feature: "Institutional Licensing & Analytics",
      standard: "Rigid per-user pricing tiers with basic pass/fail spreadsheets.",
      accademia: "Custom Medici white-glove deployments with real-time conceptual cognition mapping & SOC-2 compliance."
    }
  ];

  return (
    <section id="comparison" className={`py-28 relative transition-colors duration-500 ${
      isDark ? 'bg-[#0b0e16] text-slate-100' : 'bg-[#FAF7F0] text-stone-900'
    }`}>
      <div className="max-w-[98%] w-full mx-auto px-2 sm:px-3">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>The Renaissance Upgrade</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Standard LMS vs L&apos;Accademia Engine
          </h2>
          <p className={`mt-3 font-garamond italic text-lg sm:text-2xl ${
            isDark ? 'text-slate-300' : 'text-stone-700'
          }`}>
            Why settle for software that treats human curiosity as a corporate compliance task? Discover the difference when engineering marries classical Humanism.
          </p>
        </div>

        {/* Comparative Cards Table */}
        <div className="overflow-hidden rounded-3xl border border-amber-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#121824] text-slate-100 divide-y lg:divide-y-0 lg:divide-x divide-amber-500/20">
            
            {/* Left standard column */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-[#0f141e]/90 space-y-8">
              <div className="text-center sm:text-left pb-4 border-b border-rose-500/20">
                <span className="text-xs font-mono text-rose-400 font-semibold block uppercase tracking-wider">The Old Standard</span>
                <h3 className="font-sans text-2xl font-extrabold text-slate-300 mt-1">Traditional Corporate LMS</h3>
                <p className="text-xs text-slate-400 mt-1 font-sans">Fragmented, uninspiring, compliance-focused platforms.</p>
              </div>

              <div className="space-y-6">
                {comparisons.map((row, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase">{row.feature}</span>
                    <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#171e2e]/50 border border-rose-500/10 text-rose-200/80 text-xs sm:text-sm font-sans">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{row.standard}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right L'Accademia winner column */}
            <div className="lg:col-span-7 p-6 sm:p-10 bg-gradient-to-b from-[#141b2b] to-[#0e1422] space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 border-b border-amber-500/30">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> The Artisanal Future
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">L&apos;Accademia Veneziano</h3>
                  <p className="text-xs text-amber-300/80 font-garamond italic">Where classical dignity meets modern cloud computation.</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-500 text-stone-950 font-cinzel font-bold text-xs shadow-lg hidden sm:inline-block">
                  Medici Verified
                </div>
              </div>

              <div className="space-y-6">
                {comparisons.map((row, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase">{row.feature}</span>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-[#182136] to-[#151d30] border border-amber-500/40 text-slate-100 text-xs sm:text-sm font-sans shadow-md">
                      <div className="w-5 h-5 rounded-full bg-emerald-400 text-stone-950 flex items-center justify-center shrink-0 font-bold mt-0.5 text-[10px]">
                        ✓
                      </div>
                      <span className="font-medium leading-relaxed">{row.accademia}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-amber-500/25 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-300 font-sans flex items-center gap-2">
                  <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Migrate your academy or corporate portal with zero loss of student history.</span>
                </span>
                <button 
                  onClick={onOpenEnroll}
                  className="px-8 py-3 rounded-full bg-amber-500 text-stone-950 font-cinzel font-bold text-xs sm:text-sm uppercase hover:bg-amber-400 shadow-xl shadow-amber-500/30 transition-transform hover:scale-105"
                >
                  Schedule Custom Migration
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
