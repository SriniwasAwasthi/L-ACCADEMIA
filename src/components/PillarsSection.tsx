import React, { useState } from 'react';
import { Sparkles, Compass, Users, CheckCircle, ArrowRight, BookOpen, Layers, ShieldCheck } from 'lucide-react';

interface PillarsSectionProps {
  theme: 'dark' | 'light';
  onExploreCourse: (id: string) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ theme, onExploreCourse }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const isDark = theme === 'dark';

  const pillars = [
    {
      number: 'I',
      title: 'Socratic Dialectic vs Formulaic Quizzes',
      subtitle: 'Don’t merely consume video content; engage in rigorous intellectual conversation.',
      icon: Sparkles,
      image: '/images/statue-ai.jpg',
      quote: "I cannot teach anybody anything. I can only make them think.",
      author: "Socrates of Athens",
      content: "Traditional LMS training relies on passive video streaming followed by superficial multi-choice exams. At L’Accademia, we reconstruct learning around classical dialectic. Our custom conversational AI Socrates sits beside every lecture, probing your intuition, challenging your technical premises, and adapting arguments to your professional discipline.",
      bullets: [
        "Real-time dialectical debates that test conceptual synthesis over rote memorization",
        "Contextual AI citations grounded in philosophical treatises & official SDK documentation",
        "Adaptive challenge levels: from initiated novice to defending master laureate",
        "Instant Export of your Socratic study dialogue into structured PDF architectural notes"
      ],
      ctaText: "Preview AI Socratic Course",
      targetCourseId: "course-1"
    },
    {
      number: 'II',
      title: 'Sensory Typography & Linear Perspective UX',
      subtitle: 'Why should enterprise education look cold, clinical, or cluttered?',
      icon: Compass,
      image: '/images/vitruvian-tech.jpg',
      quote: "Beauty is the harmony and concordance of all the parts achieved in such a manner that nothing could be added or taken away.",
      author: "Leon Battista Alberti (De Re Aedificatoria, 1452)",
      content: "Modern digital tool burnout stems from unnatural visual repetition and abrasive UI pacing. By integrating Brunelleschi’s laws of linear perspective, classical book typography (Cormorant Garamond serifs), and Renaissance pigments, our interface guides human focus effortlessly. We transform your learning platform from a corporate chore into a tranquil Renaissance library.",
      bullets: [
        "Fibonacci geometric grids that naturally direct focus and reduce optical strain",
        "Tactile glassmorphic panels and subtle marble & gold foil texture shaders",
        "Dark Velvet Chiaroscuro Night mode & Uffizi Tuscan Parchment Day mode",
        "Submillisecond page navigation powered by reactive React & Tailwind architecture"
      ],
      ctaText: "Explore Digital Proportion Course",
      targetCourseId: "course-2"
    },
    {
      number: 'III',
      title: 'The Bottega Workshop & Guild Apprenticeship',
      subtitle: 'We treat software engineers, designers, and academics as masters of a unified craft.',
      icon: Users,
      image: 'https://images.pexels.com/photos/31267820/pexels-photo-31267820.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      quote: "To develop a complete mind: Study the science of art; Study the art of science. Learn how to see.",
      author: "Leonardo Da Vinci",
      content: "In Renaissance Florence, artists and scientific engineers were not isolated in academic silos—they trained together in vibrant guild workshops called 'Bottegas'. Our institutional LMS models this exact social topology. Whether you are leading 500 developers or an academic faculty, L'Accademia facilitates collaborative peer critique, verified cryptographic artisan badges, and shared code canvases.",
      bullets: [
        "Guild-based learning cohorts with async Socratic peer code and design review",
        "Verified Cryptographic Artisan Seals upon completing Capstone Masterworks",
        "Institutional creator tools to author your academy's internal proprietary curriculum",
        "SOC-2 compliance and zero-downtime reliability for global enterprise teams"
      ],
      ctaText: "Discover Strategic Systems Course",
      targetCourseId: "course-3"
    }
  ];

  const current = pillars[activeTab];

  return (
    <section className={`py-24 transition-colors duration-500 relative ${
      isDark ? 'bg-[#0f1420] text-slate-100' : 'bg-[#F3EFE6] text-stone-900 border-y border-stone-300'
    }`}>
      <div className="max-w-[98%] w-full mx-auto px-2 sm:px-3">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Pedagogical Architecture</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            The Three Pillars of L&apos;Accademia
          </h2>
          <p className={`mt-4 font-garamond italic text-xl sm:text-2xl ${isDark ? 'text-slate-300' : 'text-stone-700'}`}>
            How our blending of classical Humanist instruction and reactive cloud architecture elevates online education from passive video watching into transformative mastery.
          </p>
        </div>

        {/* Interactive Pillar Navigation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={pillar.number}
                onClick={() => setActiveTab(idx)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 border relative overflow-hidden flex flex-col justify-between group ${
                  isActive 
                    ? isDark 
                      ? 'bg-gradient-to-b from-[#1c2438] to-[#121826] border-amber-400 shadow-xl shadow-amber-500/10 scale-[1.02]' 
                      : 'bg-white border-amber-700 shadow-xl shadow-stone-400/30 scale-[1.02]'
                    : isDark
                      ? 'bg-[#121724]/60 border-amber-500/15 hover:border-amber-500/40 hover:bg-[#151b2c]' 
                      : 'bg-stone-200/60 border-stone-300 hover:border-amber-700/50 hover:bg-stone-100'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-sky-400 to-amber-500"></div>
                )}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-cinzel-dec font-extrabold text-2xl px-3 py-1 rounded-lg border ${
                      isActive 
                        ? 'bg-amber-500 text-stone-950 border-amber-400 font-bold' 
                        : isDark ? 'bg-slate-800 text-amber-400 border-amber-500/30' : 'bg-amber-100 text-amber-900 border-amber-800/30'
                    }`}>
                      Pillar {pillar.number}
                    </span>
                    <Icon className={`w-6 h-6 transition-transform duration-300 group-hover:rotate-12 ${
                      isActive ? 'text-amber-400' : 'text-slate-500'
                    }`} />
                  </div>
                  <h3 className={`font-cinzel text-lg sm:text-xl font-bold leading-tight ${
                    isActive ? isDark ? 'text-white' : 'text-stone-900' : isDark ? 'text-slate-300' : 'text-stone-700'
                  }`}>
                    {pillar.title}
                  </h3>
                </div>
                <p className={`text-xs mt-3 line-clamp-2 font-sans ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>
                  {pillar.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Showcase Card */}
        <div className={`rounded-3xl border transition-all overflow-hidden shadow-2xl ${
          isDark ? 'bg-[#121824] border-amber-500/30 shadow-amber-950/20' : 'bg-white border-amber-900/20 shadow-xl'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left Image & Classical Quote Panel */}
            <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full overflow-hidden bg-[#0b0e14]">
              <img 
                src={current.image} 
                alt={current.title} 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>
              
              <div className="absolute bottom-6 inset-x-6 p-6 rounded-2xl bg-black/70 backdrop-blur-md border border-amber-500/30 text-white space-y-3">
                <p className="font-garamond italic text-base sm:text-lg text-amber-200 leading-snug">
                  &quot;{current.quote}&quot;
                </p>
                <div className="text-right font-cinzel font-bold text-xs text-amber-400 tracking-wider">
                  — {current.author}
                </div>
              </div>
            </div>

            {/* Right Interactive Text & Bullets Panel */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    Pillar {current.number} Specification
                  </span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold">
                  {current.title}
                </h3>
                <p className={`font-sans text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-stone-700'
                }`}>
                  {current.content}
                </p>

                <div className="space-y-3.5 pt-2">
                  <h4 className={`text-xs font-sans uppercase font-bold tracking-wider ${isDark ? 'text-amber-400' : 'text-amber-800'}`}>
                    Key Architectural Capabilities:
                  </h4>
                  {current.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-sm sm:text-base font-sans ${isDark ? 'text-slate-200' : 'text-stone-800'}`}>
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="pt-6 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-sky-400 font-mono font-semibold">
                  <Layers className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>Integrated directly into our Live Socrates LMS Engine</span>
                </div>

                <button 
                  onClick={() => onExploreCourse(current.targetCourseId)}
                  className="px-6 py-3 rounded-full font-sans text-sm font-semibold bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom banner: Institutional assurance */}
        <div className="mt-12 text-center flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-400 font-sans">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>All three architectural pillars are included in standard Scholar Fellowships and Enterprise University deployments.</span>
        </div>

      </div>
    </section>
  );
};
