import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  BookOpen, 
  Award 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export interface EnrollmentDetails {
  fullName: string;
  email: string;
  organization?: string;
  roleType: 'scholar' | 'institution' | 'creator';
  selection: string;
}

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelection?: string;
  theme: 'dark' | 'light';
  onCompleteEnrollment?: (details: EnrollmentDetails) => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  initialSelection = "Master Artisan Patron Plan",
  theme,
  onCompleteEnrollment
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [roleType, setRoleType] = useState<'scholar' | 'institution' | 'creator'>('scholar');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [interests, setInterests] = useState<string[]>([
    "Socratic AI Tutoring Engine",
    "Golden Ratio UX Design & Typography"
  ]);

  const isDark = theme === 'dark';

  if (!isOpen) return null;

  const handleToggleInterest = (item: string) => {
    setInterests(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    if (onCompleteEnrollment) {
      onCompleteEnrollment({
        fullName: fullName || "Valued Scholar",
        email,
        organization: roleType === 'institution' ? organization : undefined,
        roleType,
        selection: initialSelection
      });
    }
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#38bdf8', '#10b981', '#ffffff']
      });
    } catch {
      // Fallback if canvas confetti fails
    }
  };

  const resetAndClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className={`relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border shadow-2xl my-auto p-6 sm:p-10 ${
        isDark ? 'bg-[#121826] border-amber-500/40 text-slate-100' : 'bg-[#FAF7F0] border-amber-900/30 text-stone-900'
      }`}>
        
        {/* Close Button */}
        <button 
          onClick={resetAndClose} 
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white hover:bg-amber-500 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase font-bold tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>The Guild Admissions Salon</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold leading-tight">
                Claim Your Renaissance Seat
              </h3>
              <p className={`text-xs sm:text-sm mt-1 font-garamond italic ${isDark ? 'text-slate-300' : 'text-stone-700'}`}>
                You are initiating admission for: <span className="font-sans font-bold text-amber-400 not-italic">{initialSelection}</span>
              </p>
            </div>

            {/* Role / Objective selector */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-400 uppercase mb-2">
                1. What is your architectural objective?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'scholar', label: 'Solo Scholar', sub: 'Masterclasses & AI Socrates' },
                  { id: 'institution', label: 'University / Corporate', sub: 'White-glove Enterprise LMS' },
                  { id: 'creator', label: 'Faculty / Architect', sub: 'Authoring via Bottega Studio' }
                ].map(opt => {
                  const active = roleType === opt.id;
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setRoleType(opt.id as 'scholar' | 'institution' | 'creator')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        active 
                          ? 'bg-amber-500 text-stone-950 border-amber-400 font-bold shadow-md shadow-amber-500/20' 
                          : isDark ? 'bg-[#0f1420] border-amber-500/20 text-slate-300 hover:border-amber-500/40' : 'bg-white text-stone-800 border-stone-300'
                      }`}
                    >
                      <div className="text-xs font-sans font-bold">{opt.label}</div>
                      <div className={`text-[10px] ${active ? 'text-stone-950 font-medium' : 'text-slate-400'}`}>{opt.sub}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-400 mb-1">
                  Full Name / Honorific
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g., Elena Vescovi, M.Des"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a0e16] border border-slate-700 text-white text-xs sm:text-sm outline-none focus:border-amber-400 font-sans"
                />
              </div>
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-400 mb-1">
                  Professional or Institutional Email
                </label>
                <input 
                  type="email"
                  required
                  placeholder="name@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a0e16] border border-slate-700 text-white text-xs sm:text-sm outline-none focus:border-amber-400 font-sans"
                />
              </div>
            </div>

            {roleType === 'institution' && (
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-400 mb-1">
                  Institution or Engineering Organization Name
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g., Politecnico di Milano or Global Robotics Lab"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a0e16] border border-slate-700 text-white text-xs sm:text-sm outline-none focus:border-amber-400 font-sans"
                />
              </div>
            )}

            {/* Interest checkboxes */}
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-400 mb-2">
                Which architectural capacities interest your studies? (Select multiple)
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Socratic AI Tutoring Engine", 
                  "Golden Ratio UX Design & Typography", 
                  "Chiaroscuro Data Science Visuals", 
                  "Bottega Creator Studio & SCORM", 
                  "SOC-2 Global Server Enclaves",
                  "Verified Cryptographic Diplomas"
                ].map((item) => {
                  const checked = interests.includes(item);
                  return (
                    <button
                      type="button"
                      key={item}
                      onClick={() => handleToggleInterest(item)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-sans transition-all border ${
                        checked 
                          ? 'bg-amber-500/20 text-amber-300 border-amber-400 font-bold' 
                          : 'bg-[#0f1420] text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {checked ? '✓ ' : '+ '}{item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Notice */}
            <div className="p-3.5 rounded-xl bg-[#0f1420] border border-amber-500/20 flex items-center gap-3 text-xs text-slate-300 font-sans">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>No immediate payment required for individual scholar 14-day discovery trials or institutional architecture evaluations.</span>
            </div>

            {/* Action Submit */}
            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-5 py-3 rounded-full text-xs font-mono text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-stone-950 font-cinzel font-bold text-sm uppercase hover:opacity-95 transform hover:scale-105 shadow-xl shadow-amber-500/30 flex items-center gap-2"
              >
                <span>Confirm Guild Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        ) : (
          <div className="text-center py-6 space-y-6 animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border-2 border-emerald-400 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                ✦ Guild Admissions Confirmed ✦
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Welcome to L&apos;Accademia, Scholar {fullName || 'Artisan'}!
              </h3>
              <p className={`font-garamond italic text-lg max-w-md mx-auto ${isDark ? 'text-slate-300' : 'text-stone-700'}`}>
                Your application for <span className="text-amber-300 font-bold">{initialSelection}</span> has been inscribed into our Medici Ledger.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0e1420] border border-amber-500/30 text-left space-y-3 max-w-lg mx-auto font-sans text-xs">
              <div className="flex items-center justify-between text-amber-400 font-mono pb-2 border-b border-amber-500/20">
                <span>Warrant ID: #MEDICI-2026-8891</span>
                <span>Status: PRE-VERIFIED</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-200">
                <BookOpen className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Your Socrates AI conversational session and 4K Masterclass salon passes have been dispatched to <strong>{email}</strong>.</span>
              </div>
              {roleType === 'institution' && (
                <div className="flex items-start gap-2.5 text-sky-300">
                  <Award className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>An Enterprise Institutional Architect has been assigned to coordinate your white-glove LMS rollout for <strong>{organization}</strong>.</span>
                </div>
              )}
            </div>

            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="px-8 py-3.5 rounded-full bg-amber-500 text-stone-950 font-cinzel font-bold text-sm uppercase hover:bg-amber-400 shadow-xl shadow-amber-500/30 transition-transform hover:scale-105"
              >
                Enter Your Study Salon →
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
