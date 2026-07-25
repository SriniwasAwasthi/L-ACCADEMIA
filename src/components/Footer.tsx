import React, { useState } from 'react';
import { Compass, Sparkles, Send, ShieldCheck, Heart, Globe, Share2, Bookmark } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FooterProps {
  theme: 'dark' | 'light';
  onOpenEnroll: (title?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onOpenEnroll }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const isDark = theme === 'dark';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    } catch {
      // Fallback
    }
  };

  return (
    <footer className={`relative pt-20 pb-12 transition-colors duration-500 border-t ${
      isDark 
        ? 'bg-[#080a0f] border-amber-500/20 text-slate-400' 
        : 'bg-[#1A1816] border-amber-900/30 text-stone-400'
    }`}>
      <div className="max-w-[98%] w-full mx-auto px-2 sm:px-3">
        
        {/* Top News & Journal Banner */}
        <div className="pb-16 border-b border-amber-500/20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>The Florentine Journal of EdTech & Wisdom</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-tight">
              Receive Weekly Essays on Classical Design & AI Systems
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-garamond italic">
              Join 35,000+ university deans, engineers, and autodidacts exploring the intersection of Renaissance aesthetics and contemporary interactive software.
            </p>
          </div>

          <div className="lg:col-span-6">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your academic or personal email..." 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-[#131926] border border-amber-500/30 text-white text-xs sm:text-sm outline-none focus:border-amber-400 transition-colors font-sans placeholder:text-slate-500"
                />
                <button 
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-amber-500 text-stone-950 font-cinzel font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-amber-400 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20 shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs font-mono text-center flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>✓ Welcome to our scholarship distribution! Issue #42 has been dispatched to {email}.</span>
              </div>
            )}
          </div>
        </div>

        {/* Directory Links Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-xs font-sans">
          
          <div className="col-span-2 space-y-4 pr-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#131927] border border-amber-400 text-amber-400 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-cinzel-dec font-extrabold tracking-widest text-lg text-white block">L&apos;ACCADEMIA</span>
                <span className="text-[9px] font-garamond italic text-amber-300">Where Classical Wisdom Meets Modern Mastery</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              An architectural eLearning landing concept and functional enterprise LMS engineered to eliminate digital sensory burnout through classical proportion, high-contrast typography, and live Socratic AI dialogue.
            </p>
            <div className="flex items-center space-x-4 pt-2 text-slate-400">
              <a href="#salon" title="Global University Observatory" className="hover:text-amber-400 transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#lms-demo" title="Share Socratic Discourse" className="hover:text-amber-400 transition-colors"><Share2 className="w-5 h-5" /></a>
              <a href="#pricing" title="Bookmark Patron Registry" className="hover:text-amber-400 transition-colors"><Bookmark className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-cinzel font-bold text-sm text-white uppercase tracking-wider">Faculties</h4>
            <ul className="space-y-2.5 font-medium text-slate-400">
              <li><a href="#salon" className="hover:text-amber-400 transition-colors">Alchemical AI & Computation</a></li>
              <li><a href="#salon" className="hover:text-amber-400 transition-colors">Classical Design & Proportion</a></li>
              <li><a href="#salon" className="hover:text-amber-400 transition-colors">Philosophy & Ethics of Systems</a></li>
              <li><a href="#salon" className="hover:text-amber-400 transition-colors">Architectural Enterprise Leadership</a></li>
              <li><a href="#salon" className="hover:text-amber-400 transition-colors">Astronomy & Data Science</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-cinzel font-bold text-sm text-white uppercase tracking-wider">Platform Suite</h4>
            <ul className="space-y-2.5 font-medium text-slate-400">
              <li><a href="#lms-demo" className="hover:text-amber-400 transition-colors">Socrates AI Tutor Engine</a></li>
              <li><a href="#lms-demo" className="hover:text-amber-400 transition-colors">Interactive Cinema Canvas</a></li>
              <li><a href="#creator-studio" className="hover:text-amber-400 transition-colors">Institutional Bottega Workshop</a></li>
              <li><a href="#creator-studio" className="hover:text-amber-400 transition-colors">Chiaroscuro Cognition Metrica</a></li>
              <li><a href="#comparison" className="hover:text-amber-400 transition-colors">Renaissance UI Architecture</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-cinzel font-bold text-sm text-white uppercase tracking-wider">Medici Patronage</h4>
            <ul className="space-y-2.5 font-medium text-slate-400">
              <li><button onClick={() => onOpenEnroll("Scholar Fellowship Plan")} className="hover:text-amber-400 transition-colors">Scholar Fellowship Trial</button></li>
              <li><button onClick={() => onOpenEnroll("Master Artisan Patron Plan")} className="hover:text-amber-400 transition-colors">Master Artisan Patronage</button></li>
              <li><button onClick={() => onOpenEnroll("Medici Enterprise Institution")} className="hover:text-amber-400 transition-colors">Medici Enterprise Suite</button></li>
              <li><button onClick={() => onOpenEnroll("Custom University SSO Enclave")} className="hover:text-amber-400 transition-colors">University White-Labeling</button></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Cryptographic Diplomas</a></li>
            </ul>
          </div>

        </div>

        {/* Colophon bottom bar */}
        <div className="pt-8 border-t border-amber-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© 2026 L&apos;Accademia Veneziano Inc. All rights reserved.</span>
            <span>•</span>
            <span className="text-amber-400/80">SOC-2 & GDPR COMPLIANT</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#salon" className="hover:underline">Terms of Fellowship</a>
            <a href="#salon" className="hover:underline">Privacy Enclave</a>
            <a href="#salon" className="hover:underline">Academic Security</a>
            <span className="flex items-center gap-1 text-slate-400">
              Built with <Heart className="w-3 h-3 text-amber-500 fill-amber-500" /> for Renaissance EdTech
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
