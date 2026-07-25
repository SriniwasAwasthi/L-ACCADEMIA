import React, { useState } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  Users, 
  Plus, 
  BarChart2, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  FileText,
  Trash2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CreatorBottegaProps {
  theme: 'dark' | 'light';
  onOpenEnroll: () => void;
}

export const CreatorBottega: React.FC<CreatorBottegaProps> = ({ theme, onOpenEnroll }) => {
  const [studioMode, setStudioMode] = useState<'author' | 'analytics'>('author');
  const [generatedModules, setGeneratedModules] = useState<string[]>([
    "Module I: Architectural Foundations & Classical Geometry",
    "Module II: Designing Socratic Dialectical Checkpoints",
    "Module III: Capstone Guild Review & Artisan Validation"
  ]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');

  const isDark = theme === 'dark';

  const handleGenerateModule = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const topic = customPrompt.trim() 
        ? customPrompt 
        : "Module IV: Autonomous AI Fine-Tuning inside High-Security Enclaves";
      setGeneratedModules(prev => [...prev, topic]);
      setCustomPrompt('');
      setIsGenerating(false);
      try {
        confetti({ particleCount: 50, spread: 50, origin: { y: 0.7 } });
      } catch {
        // Fallback
      }
    }, 900);
  };

  const handleDeleteModule = (idx: number) => {
    setGeneratedModules(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <section id="creator-studio" className={`py-28 relative transition-colors duration-500 ${
      isDark ? 'bg-[#0f1420] text-slate-100' : 'bg-[#F3EFE6] text-stone-900 border-b border-stone-300'
    }`}>
      <div className="max-w-[98%] w-full mx-auto px-2 sm:px-3">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>Institutional Creator Bottega & Analytics</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Build Courses Like an Old Master
          </h2>
          <p className={`mt-4 font-garamond italic text-lg sm:text-2xl ${
            isDark ? 'text-slate-300' : 'text-stone-700'
          }`}>
            Why struggle with antiquated corporate learning management systems? L&apos;Accademia provides instructional design deans with an artisanal workshop to publish courses in minutes and track deep conceptual cognition.
          </p>
        </div>

        {/* Studio Mode Switcher */}
        <div className="flex justify-center mb-10">
          <div className={`p-1.5 rounded-full border flex items-center gap-2 ${
            isDark ? 'bg-[#151d2d] border-amber-500/30' : 'bg-white border-amber-800/30 shadow-md'
          }`}>
            <button
              onClick={() => setStudioMode('author')}
              className={`px-6 py-2.5 rounded-full font-sans text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                studioMode === 'author' 
                  ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Syllabus Architect Blueprint</span>
            </button>

            <button
              onClick={() => setStudioMode('analytics')}
              className={`px-6 py-2.5 rounded-full font-sans text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                studioMode === 'analytics' 
                  ? 'bg-sky-500 text-stone-950 shadow-lg shadow-sky-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Chiaroscuro Cognition Analytics</span>
            </button>
          </div>
        </div>

        {/* THE BOTTEGA SHOWCASE CONTAINER */}
        <div className={`rounded-3xl border shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 ${
          isDark ? 'bg-[#131927] border-amber-500/30 shadow-amber-950/20' : 'bg-white border-stone-300 shadow-xl'
        }`}>
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-amber-500/20">
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider block">
                {studioMode === 'author' ? '✦ AI Socratic Syllabus Architect' : '✦ Real-Time Student Metrica'}
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold">
                {studioMode === 'author' 
                  ? "Transform Text Prompts into Interactive Salons" 
                  : "Measure Conceptual Epistemic Growth vs Clumsy Test Scores"}
              </h3>
              <p className={`font-sans text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-stone-700'
              }`}>
                {studioMode === 'author'
                  ? "Our generative Socratic engine drafts comprehensive lecture syllabi, automates high-contrast Garamond typography layouts, and injects dialectical checkpoint challenges directly into your video timeline."
                  : "Go far beyond standard 'percent completed' charts. Our Chiaroscuro engine maps where learners encounter intellectual resistance in Socratic chat, enabling professors and engineering directors to host timely live interventions."}
              </p>

              <div className="space-y-3 pt-2">
                {studioMode === 'author' ? (
                  <>
                    <div className="flex items-center gap-2 text-xs font-sans text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Auto-generates dialectical debater checkpoints</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-sans text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>One-click exports to SCORM, LTI, and Custom Enterprise Enclaves</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 text-xs font-sans text-sky-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Live identification of team skill gaps & hallucinations</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-sans text-sky-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>94.2% course completion rate across verified cohorts</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-amber-500/20">
              <button 
                onClick={onOpenEnroll}
                className="w-full py-4 rounded-full font-cinzel text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 hover:opacity-95 transition-transform hover:scale-[1.02] shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <span>Request University & Institutional Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column Interactive Studio Simulation */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#0b0f19] flex flex-col justify-between">
            
            {studioMode === 'author' ? (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></span>
                    <h4 className="font-cinzel font-bold text-sm text-white">Live Syllabus Draft Workshop</h4>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded">
                    Bottega Engine Active
                  </span>
                </div>

                {/* Module List */}
                <div className="space-y-3 max-h-[340px] overflow-y-auto pr-2">
                  {generatedModules.map((mod, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#131b2e] border border-amber-500/30 flex items-center justify-between gap-4 group">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <span className="w-7 h-7 rounded-lg bg-amber-500 text-stone-950 font-cinzel font-bold text-xs flex items-center justify-center shrink-0">
                          0{idx + 1}
                        </span>
                        <div className="overflow-hidden">
                          <h5 className="text-xs sm:text-sm font-sans font-bold text-slate-100 truncate">{mod}</h5>
                          <span className="text-[11px] text-amber-300/90 font-garamond italic block">Contains Socratic AI Quiz</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-mono text-slate-400 group-hover:text-amber-400">Ready ✓</span>
                        <button
                          onClick={() => handleDeleteModule(idx)}
                          title="Delete this module"
                          className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                  {isGenerating && (
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 border-dashed animate-pulse flex items-center justify-center gap-2 text-xs font-mono text-amber-300">
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>Socrates Architect is computing geometry for next module...</span>
                    </div>
                  )}
                </div>

                {/* Generator Interactive Form */}
                <div className="p-4 rounded-2xl bg-[#141d30] border border-amber-500/30 space-y-3">
                  <span className="text-xs font-mono uppercase font-bold text-amber-400 block">
                    ⚡ Try Generating a Module Now:
                  </span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input 
                      type="text"
                      placeholder="e.g., 'Module V: Quantum Cryptography & Classical Logic'"
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter' && !isGenerating) handleGenerateModule(); }}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-[#0b0e18] border border-slate-700 text-white text-xs sm:text-sm outline-none focus:border-amber-400 transition-colors placeholder:text-slate-500"
                    />
                    <button
                      onClick={handleGenerateModule}
                      disabled={isGenerating}
                      className="px-6 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-cinzel font-bold text-xs hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shrink-0 shadow-md shadow-amber-500/20"
                    >
                      <Plus className="w-4 h-4 text-stone-950" />
                      <span>Generate Module</span>
                    </button>
                  </div>
                </div>

              </div>
            ) : (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
                  <span className="font-cinzel font-bold text-sm text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-sky-400" />
                    <span>Cohort Analytical Metrica (Politecnico & Enterprise AI Labs)</span>
                  </span>
                  <span className="text-xs font-mono text-sky-300 bg-sky-950/80 px-2 py-1 rounded border border-sky-500/30">
                    Live Stream Data
                  </span>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-[#141b2c] border border-amber-500/20 text-center">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Active Scholars</span>
                    <span className="font-mono font-extrabold text-2xl text-white mt-1 block">3,420</span>
                    <span className="text-[10px] text-emerald-400 font-mono">↑ 24% this month</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#141b2c] border border-sky-500/30 text-center">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Retention Rate</span>
                    <span className="font-mono font-extrabold text-2xl text-sky-400 mt-1 block">94.2%</span>
                    <span className="text-[10px] text-sky-300 font-mono">vs 22% Industry Avg</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#141b2c] border border-emerald-500/30 text-center">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Socratic Dialogues</span>
                    <span className="font-mono font-extrabold text-2xl text-emerald-400 mt-1 block">48.2k</span>
                    <span className="text-[10px] text-amber-300 font-mono">99% concept synthesis</span>
                  </div>
                </div>

                {/* Visual Fake Bar Chart */}
                <div className="p-5 rounded-2xl bg-[#121827] border border-amber-500/20 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Weekly Epistemic Synthesis Mastery</span>
                    <span>Goal: 95% threshold</span>
                  </div>

                  <div className="grid grid-cols-6 gap-3 items-end h-36 pt-4 px-2">
                    {[
                      { label: "Wk 1", h: "60%", color: "bg-slate-700" },
                      { label: "Wk 2", h: "72%", color: "bg-sky-500/80" },
                      { label: "Wk 3", h: "85%", color: "bg-amber-500/80" },
                      { label: "Wk 4", h: "91%", color: "bg-amber-400" },
                      { label: "Wk 5", h: "93%", color: "bg-emerald-400" },
                      { label: "Wk 6", h: "98%", color: "bg-gradient-to-t from-amber-500 to-emerald-400" }
                    ].map((bar, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end group">
                        <span className="text-[10px] font-mono text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          {bar.h}
                        </span>
                        <div 
                          className={`w-full rounded-t-lg transition-all duration-500 transform group-hover:brightness-125 ${bar.color}`}
                          style={{ height: bar.h }}
                        ></div>
                        <span className="text-[11px] font-mono text-slate-400">{bar.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 px-2 font-mono">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-amber-400" /> Exportable to HR & Academic Credential Registries
                  </span>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
