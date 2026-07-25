import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Layers, 
  Award, 
  TrendingUp, 
  Terminal 
} from 'lucide-react';

interface HeroProps {
  theme: 'dark' | 'light';
  onOpenEnroll: () => void;
  onJumpToLms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, onOpenEnroll, onJumpToLms }) => {
  const [showGoldenRatio, setShowGoldenRatio] = useState(true);

  const isDark = theme === 'dark';

  return (
    <section className={`relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-radial-glow bg-[#0b0e14]' : 'bg-radial-glow-parchment bg-[#FAF7F0] text-stone-900'
    }`}>
      {/* Ancient Blueprint background grid */}
      <div className="absolute inset-0 bg-grid-gold opacity-80 pointer-events-none"></div>

      {/* Subtle classical architectural circle ambient rings in background */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full border border-amber-500/10 pointer-events-none animate-spin-slow" style={{ animationDuration: '60s' }}></div>
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full border border-sky-500/10 pointer-events-none" style={{ animationDuration: '45s' }}></div>

      <div className="max-w-[98%] w-full mx-auto px-2 sm:px-3 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Classical Storytelling & Modern Value Prop */}
          <div className="lg:col-span-7 text-left space-y-7">
            
            {/* Tag / Herald */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-sans tracking-wide uppercase font-semibold border transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-sm shadow-amber-500/10 bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-sky-500/15 border-amber-500/30 text-amber-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>A Renaissance in Online Learning & Enterprise LMS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            </div>

            {/* Majestic Headline */}
            <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              <span className={isDark ? 'text-white' : 'text-stone-900'}>Where Classical Wisdom</span> <br />
              <span className="font-garamond italic font-normal text-amber-400 tracking-normal text-5xl sm:text-6xl lg:text-7xl">
                Meets Modern Mastery
              </span>
            </h1>

            {/* Subheadline description */}
            <p className={`font-sans text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-stone-700 font-normal'
            }`}>
              An artisanal eLearning landing platform and modern LMS concept created for forward-thinking academies, corporate training pantheons, and passionate autodidacts. Experience cinematic course galleries, golden ratio typography, and our interactive conversational <span className="text-amber-400 font-semibold italic">Socrates AI Tutor</span>.
            </p>

            {/* Quick Interactive Benefit Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2">
              <div className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                isDark ? 'bg-[#151b29]/80 border-amber-500/20' : 'bg-white border-amber-900/15 shadow-sm'
              }`}>
                <Compass className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className={`text-xs font-sans font-bold uppercase tracking-wider ${isDark ? 'text-amber-300' : 'text-amber-900'}`}>Socratic AI Engine</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">Deep intellectual dialectic vs formulaic quizzes.</p>
                </div>
              </div>

              <div className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                isDark ? 'bg-[#151b29]/80 border-amber-500/20' : 'bg-white border-amber-900/15 shadow-sm'
              }`}>
                <Layers className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className={`text-xs font-sans font-bold uppercase tracking-wider ${isDark ? 'text-sky-300' : 'text-sky-900'}`}>Sensory Typography</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">Cormorant Garamond serifs & linear perspective depth.</p>
                </div>
              </div>

              <div className={`col-span-2 sm:col-span-1 p-3 rounded-xl border flex items-start gap-2.5 ${
                isDark ? 'bg-[#151b29]/80 border-amber-500/20' : 'bg-white border-amber-900/15 shadow-sm'
              }`}>
                <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className={`text-xs font-sans font-bold uppercase tracking-wider ${isDark ? 'text-emerald-300' : 'text-emerald-900'}`}>94.2% Completion</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">4x retention compared to traditional enterprise software.</p>
                </div>
              </div>
            </div>

            {/* CTA Button Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="#salon"
                className="px-7 py-4 rounded-full font-cinzel text-sm sm:text-base font-bold tracking-wider uppercase bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-stone-950 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-amber-300 flex items-center gap-2.5"
              >
                <span>Enter Masterclass Salon</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button 
                onClick={onJumpToLms}
                className={`px-6 py-4 rounded-full font-sans font-semibold text-sm sm:text-base border transition-all duration-200 flex items-center gap-2 group ${
                  isDark
                    ? 'bg-[#181f30]/90 border-sky-500/40 text-sky-300 hover:bg-sky-500/10 hover:border-sky-400 shadow-md'
                    : 'bg-stone-900 text-amber-300 border-amber-500 hover:bg-stone-800'
                }`}
              >
                <Terminal className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform" />
                <span>Test Drive Live LMS</span>
              </button>

              <button 
                onClick={onOpenEnroll}
                className="px-5 py-4 rounded-full font-sans font-medium text-xs sm:text-sm text-amber-300/90 border border-amber-500/30 hover:bg-amber-500/10 transition-colors"
              >
                Book Institutional Demo →
              </button>
            </div>

            {/* Social proof academic logos/text */}
            <div className="pt-6 border-t border-amber-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-amber-500/30 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Student 1" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-amber-500/30 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Student 2" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-amber-500/30 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Student 3" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-amber-500/30 object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80" alt="Student 4" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <span>★★★★★</span>
                    <span className="text-slate-200">4.98 / 5.0</span>
                  </div>
                  <p className="text-xs text-slate-400">Adopted by 14,000+ scholars, engineering heads, and university deans.</p>
                </div>
              </div>

              <div className="text-right hidden xl:block">
                <span className="text-[11px] uppercase tracking-widest text-amber-400 font-mono block font-bold">Guaranteed by The Medici Guild</span>
                <span className="text-xs text-slate-400">SOC-2 Certified & Global University Compatible</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Hero Visual & Analytical Glass Widgets */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Image Artwork Card */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative glowing gold frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-amber-500/40 via-amber-300/20 to-sky-500/30 blur-md animate-gold-pulse"></div>
              
              <div className={`relative rounded-2xl overflow-hidden border-2 transition-all ${
                isDark ? 'border-amber-500/30 bg-[#0e131d]' : 'border-amber-700/40 bg-stone-900 shadow-2xl'
              }`}>
                
                {/* The Renaissance Custom Art Hero Image */}
                <div className="relative h-[480px] sm:h-[540px] w-full overflow-hidden group">
                  <img 
                    src="/images/hero-renaissance.jpg" 
                    alt="Renaissance Architecture & Modern Glass Interface" 
                    className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                  />
                  
                  {/* Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/40 to-transparent"></div>

                  {/* INTERACTIVE FIBONACCI WIREFRAME OVERLAY */}
                  {showGoldenRatio && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center animate-fadeIn">
                      {/* Golden spiral simulation circles */}
                      <div className="w-72 h-72 rounded-full border-2 border-amber-400/30 border-dashed absolute animate-spin" style={{ animationDuration: '80s' }}></div>
                      <div className="w-96 h-96 rounded-full border border-sky-400/25 absolute animate-spin" style={{ animationDuration: '100s', animationDirection: 'reverse' }}></div>
                      <div className="w-48 h-48 rounded-full border border-amber-300/40 absolute"></div>
                      
                      {/* Grid crosshairs */}
                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent absolute top-1/2"></div>
                      <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-amber-400/40 to-transparent absolute left-1/2"></div>
                      <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-sky-400/30 to-transparent absolute left-1/3"></div>
                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent absolute top-1/3"></div>

                      <div className="absolute top-6 left-6 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-amber-500/40 text-[10px] text-amber-300 font-mono tracking-widest uppercase flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                        <span>Phi Ratio (1.618) Spatial Grid Active</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Interactive Golden Ratio Button Control positioned over image */}
                <div className="absolute top-4 right-4 z-20">
                  <button 
                    onClick={() => setShowGoldenRatio(!showGoldenRatio)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider border shadow-lg backdrop-blur-md transition-all flex items-center gap-1.5 ${
                      showGoldenRatio 
                        ? 'bg-amber-500 text-stone-950 font-bold border-amber-300 shadow-amber-500/30' 
                        : 'bg-black/70 text-slate-300 border-white/20 hover:border-amber-400'
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>{showGoldenRatio ? "Hide Fibonacci Grid" : "Show Fibonacci Grid"}</span>
                  </button>
                </div>

                {/* Floating Interactive Live Node 1: Top Left Socratic Tutor */}
                <div className="absolute top-16 left-4 sm:left-6 -mt-2 z-20 w-[270px] bg-[#0e1422]/90 backdrop-blur-md border border-amber-500/30 rounded-xl p-3.5 shadow-2xl animate-float">
                  <div className="flex items-center justify-between pb-2 border-b border-amber-500/15">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                      <span className="text-xs font-mono font-bold text-amber-300 uppercase">Socrates AI Tutor</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded">Active 24/7</span>
                  </div>
                  <p className="text-xs text-slate-200 mt-2 font-garamond italic leading-snug">
                    &quot;Before we run code, tell me: why does Self-Attention need quadratic computation? Can we simplify it via Da Vinci’s equilibrium?&quot;
                  </p>
                  <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-sky-400">
                    <span className="flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-amber-400" /> Socratic guidance vs syntax feeding
                    </span>
                  </div>
                </div>

                {/* Floating Interactive Live Node 2: Bottom Right Completion Metric */}
                <div className="absolute bottom-16 right-4 sm:right-6 z-20 w-[240px] bg-[#111726]/90 backdrop-blur-md border border-sky-500/30 rounded-xl p-3.5 shadow-2xl animate-float-slow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-sans font-bold text-sky-300 uppercase flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-sky-400" /> Mastery Metrica
                    </span>
                    <span className="text-[11px] font-mono font-extrabold text-amber-400">+312% vs Corp LMS</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-300">
                      <span>L&apos;Accademia Learners</span>
                      <span className="font-bold text-emerald-400">94.2% Completion</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-500 via-emerald-400 to-sky-400 h-1.5 rounded-full w-[94%]"></div>
                    </div>
                  </div>
                  <div className="mt-2 text-[10px] text-slate-400 italic">
                    Measured across 600+ corporate engineers & university students.
                  </div>
                </div>

                {/* Bottom interactive course preview bar */}
                <div className="absolute bottom-0 inset-x-0 bg-[#0b0e14]/95 border-t border-amber-500/25 p-3.5 z-20 flex items-center justify-between backdrop-blur-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 font-cinzel font-bold">
                      VI
                    </div>
                    <div>
                      <h5 className="text-xs font-sans font-bold text-white leading-none">Featured Salon Lecture</h5>
                      <span className="text-[11px] text-amber-300 font-garamond italic">The Architecture of AI & Neural Geometry</span>
                    </div>
                  </div>
                  <button 
                    onClick={onJumpToLms}
                    className="px-3 py-1.5 bg-amber-500 text-stone-950 font-sans font-bold text-xs rounded-lg hover:bg-amber-400 transition-colors shadow-md shrink-0 flex items-center gap-1"
                  >
                    <span>Preview Live</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
