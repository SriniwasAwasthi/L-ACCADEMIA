import React, { useState } from 'react';
import { 
  Compass, 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  GraduationCap, 
  Sparkles, 
  Menu, 
  X, 
  ShieldCheck 
} from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  enrolledCount: number;
  onOpenEnrollModal: (courseId?: string) => void;
  onOpenMyCourses: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  enrolledCount,
  onOpenEnrollModal,
  onOpenMyCourses
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAudioToast, setShowAudioToast] = useState(false);

  const toggleAudio = () => {
    const nextState = !isPlayingAudio;
    setIsPlayingAudio(nextState);
    setShowAudioToast(true);
    setTimeout(() => setShowAudioToast(false), 3500);
  };

  const isDark = theme === 'dark';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
      isDark 
        ? 'bg-[#0b0e14]/90 border-amber-500/20 text-slate-100 shadow-xl shadow-amber-950/20' 
        : 'bg-[#FAF7F0]/90 border-amber-900/20 text-stone-800 shadow-md shadow-stone-300/30'
    }`}>
      {/* Audio mood indicator Toast */}
      {showAudioToast && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 px-4 py-2 bg-amber-500 text-stone-900 text-xs font-semibold rounded-full shadow-lg flex items-center gap-2 animate-bounce">
          <Volume2 className="w-4 h-4 text-stone-900 animate-pulse" />
          <span>
            {isPlayingAudio 
              ? 'Ambient Symphony Enabled: "Florence Cathedral Strings & Distant Rain"' 
              : 'Ambient Classical Soundtrack Muted'}
          </span>
        </div>
      )}

      <div className="max-w-[98%] w-full mx-auto px-2 sm:px-3">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Emblem */}
          <a href="#" className="flex items-center gap-3.5 group cursor-pointer">
            <div className={`relative w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-700 group-hover:rotate-45 border ${
              isDark ? 'bg-[#141a29] border-amber-500/50 text-amber-400 shadow-inner shadow-amber-500/20' : 'bg-amber-100 border-amber-700 text-amber-800'
            }`}>
              <Compass className="w-6 h-6 stroke-[1.5]" />
              <div className="absolute inset-1 rounded-full border border-amber-500/20 pointer-events-none"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className={`font-cinzel-dec tracking-[0.2em] font-bold text-lg sm:text-xl transition-colors ${
                  isDark ? 'text-white group-hover:text-amber-300' : 'text-stone-900 group-hover:text-amber-700'
                }`}>
                  L&apos;ACCADEMIA
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40">
                  LMS 3.0
                </span>
              </div>
              <span className={`text-[10px] font-garamond italic tracking-wider uppercase -mt-0.5 ${
                isDark ? 'text-amber-300/80' : 'text-stone-600'
              }`}>
                Classical Wisdom • Modern Mastery
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7 font-sans text-sm font-medium">
            <a 
              href="#salon" 
              className={`transition-colors hover:text-amber-400 py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all ${
                isDark ? 'text-slate-200' : 'text-stone-700 hover:text-amber-700'
              }`}
            >
              Masterclass Salon
            </a>
            <a 
              href="#lms-demo" 
              className={`flex items-center gap-1.5 transition-colors hover:text-amber-400 py-2 relative group ${
                isDark ? 'text-amber-300' : 'text-amber-800 font-semibold'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Socrates AI Tutor</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full font-sans">
                Interactive
              </span>
            </a>
            <a 
              href="#creator-studio" 
              className={`transition-colors hover:text-amber-400 py-2 ${
                isDark ? 'text-slate-300' : 'text-stone-700'
              }`}
            >
              Institutional Bottega
            </a>
            <a 
              href="#comparison" 
              className={`transition-colors hover:text-amber-400 py-2 ${
                isDark ? 'text-slate-300' : 'text-stone-700'
              }`}
            >
              Why Renaissance UI?
            </a>
            <a 
              href="#pricing" 
              className={`transition-colors hover:text-amber-400 py-2 ${
                isDark ? 'text-slate-300' : 'text-stone-700'
              }`}
            >
              Patronage & Licensing
            </a>
          </nav>

          {/* Action Tools & Buttons */}
          <div className="flex items-center space-x-3">
            
            {/* Ambient Audio Toggle */}
            <button 
              onClick={toggleAudio}
              title="Toggle Classical Study Ambiance"
              className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
                isPlayingAudio 
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md shadow-amber-500/20' 
                  : isDark 
                    ? 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200' 
                    : 'bg-stone-200/80 border-stone-300 text-stone-600 hover:text-stone-900'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                  <span className="hidden lg:inline text-[11px]">Symphony On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden lg:inline text-[11px]">Ambiance</span>
                </>
              )}
            </button>

            {/* Theme Mode Toggle */}
            <button 
              onClick={onToggleTheme} 
              title={isDark ? "Switch to Uffizi Studio (Light Parchment Mode)" : "Switch to Chiaroscuro (Dark Velvet Mode)"}
              className={`p-2 rounded-full border transition-transform hover:scale-105 ${
                isDark 
                  ? 'bg-[#1b2234] border-amber-500/30 text-amber-300 shadow-sm' 
                  : 'bg-amber-100 border-amber-700/40 text-amber-800 shadow-sm'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-900" />}
            </button>

            {/* Enrolled Courses Button */}
            <button 
              onClick={onOpenMyCourses}
              className={`relative p-2 sm:px-3.5 sm:py-1.5 rounded-full border transition-all flex items-center gap-2 ${
                enrolledCount > 0
                  ? isDark 
                    ? 'bg-amber-500 text-stone-950 font-bold border-amber-400 shadow-lg shadow-amber-500/30'
                    : 'bg-amber-700 text-white font-bold border-amber-800 shadow-lg shadow-amber-700/30'
                  : isDark
                    ? 'bg-[#1b2234] border-amber-500/20 text-slate-300 hover:border-amber-500/50'
                    : 'bg-stone-200 border-stone-300 text-stone-700 hover:border-amber-700'
              }`}
              title="My Enrolled Masterclasses"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="hidden lg:inline text-xs font-sans">My Salon</span>
              {enrolledCount > 0 && (
                <span className={`w-5 h-5 rounded-full text-[11px] flex items-center justify-center font-extrabold ${
                  isDark ? 'bg-stone-900 text-amber-300' : 'bg-amber-100 text-amber-900'
                }`}>
                  {enrolledCount}
                </span>
              )}
            </button>

            {/* Main CTA */}
            <button
              onClick={() => onOpenEnrollModal()}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans font-semibold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-amber-500/25 border border-amber-300 font-cinzel"
            >
              <span>Join Renaissance</span>
              <ShieldCheck className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-6 pt-4 pb-6 space-y-4 border-b ${
          isDark ? 'bg-[#0f141f] border-amber-500/30 text-white' : 'bg-[#FAF7F0] border-amber-900/30 text-stone-800'
        }`}>
          <div className="flex flex-col space-y-3 font-sans font-medium text-base">
            <a onClick={() => setMobileMenuOpen(false)} href="#salon" className="hover:text-amber-400 py-1 border-b border-amber-500/10">Masterclass Salon (Courses)</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#lms-demo" className="hover:text-amber-400 py-1 border-b border-amber-500/10 flex items-center gap-2 text-amber-400 font-semibold"><Sparkles className="w-4 h-4" /> Live AI Socrates Tutor Demo</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#creator-studio" className="hover:text-amber-400 py-1 border-b border-amber-500/10">Institutional Bottega & Creators</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#comparison" className="hover:text-amber-400 py-1 border-b border-amber-500/10">Why Renaissance vs Traditional LMS?</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#pricing" className="hover:text-amber-400 py-1 border-b border-amber-500/10">Patronage Plans & Pricing</a>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); toggleAudio(); }}
              className="w-full py-2.5 rounded-lg border border-amber-500/40 text-amber-300 text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span>{isPlayingAudio ? "Mute Classical Symphony" : "Play Ambient Symphonic Cello"}</span>
            </button>
            
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenEnrollModal(); }}
              className="w-full py-3 rounded-full bg-amber-500 text-slate-950 font-cinzel font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>Apply For Fellowship & LMS Demo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
