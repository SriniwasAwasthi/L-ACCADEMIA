import React, { useState, useMemo } from 'react';
import { 
  Mastercourse, 
  FacultyCategory, 
  DifficultyLevel 
} from '../types';
import { COURSES } from '../data/courses';
import { 
  Search, 
  BookOpen, 
  Star, 
  Users, 
  Clock, 
  GraduationCap, 
  Check, 
  ArrowRight, 
  Info, 
  X, 
  Layers, 
  Award, 
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CourseSalonProps {
  theme: 'dark' | 'light';
  enrolledCourseIds: string[];
  onEnrollCourse: (courseId: string) => void;
  onJumpToLms: (courseId: string) => void;
}

export const CourseSalon: React.FC<CourseSalonProps> = ({
  theme,
  enrolledCourseIds,
  onEnrollCourse,
  onJumpToLms
}) => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyCategory>('All Disciplines');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All Levels');
  const [inspectCourse, setInspectCourse] = useState<Mastercourse | null>(null);

  const isDark = theme === 'dark';

  const faculties: FacultyCategory[] = [
    'All Disciplines',
    'Alchemical AI & Computation',
    'Classical Design & Digital Proportion',
    'Philosophy & Ethics of Systems',
    'Architectural Leadership'
  ];

  const levels: (string | DifficultyLevel)[] = [
    'All Levels',
    'Initiating Apprentice',
    'Artisan Fellow',
    'Master Laureate'
  ];

  const filteredCourses = useMemo(() => {
    return COURSES.filter(c => {
      const matchFaculty = selectedFaculty === 'All Disciplines' || c.faculty === selectedFaculty;
      const matchLevel = selectedLevel === 'All Levels' || c.level === selectedLevel;
      const matchSearch = searchQuery === '' || 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.instructor.guild.toLowerCase().includes(searchQuery.toLowerCase());
      return matchFaculty && matchLevel && matchSearch;
    });
  }, [selectedFaculty, selectedLevel, searchQuery]);

  const handleEnrollWithConfetti = (course: Mastercourse, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!enrolledCourseIds.includes(course.id)) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#38bdf8', '#10b981', '#ffffff']
        });
      } catch {
        // Fallback if canvas confetti fails silently
      }
    }
    onEnrollCourse(course.id);
  };

  return (
    <section id="salon" className={`py-28 relative transition-colors duration-500 ${
      isDark ? 'bg-[#0b0e14] text-slate-100' : 'bg-[#FAF7F0] text-stone-900'
    }`}>
      {/* Subtle grid accent */}
      <div className="absolute inset-0 bg-grid-gold opacity-40 pointer-events-none"></div>

      <div className="max-w-[98%] w-full mx-auto px-2 sm:px-3 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b pb-8 border-amber-500/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Curated Masterclass Library</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              The Masterclass Salon
            </h2>
            <p className={`mt-3 font-garamond italic text-lg sm:text-2xl max-w-3xl ${
              isDark ? 'text-slate-300' : 'text-stone-700'
            }`}>
              Explore cinematic multi-week seminars taught by renowned computational philosophers, design architects, and systems theorists. Every lecture is infused with interactive Socratic dialogue.
            </p>
          </div>

          {/* Search Input & Filter stats */}
          <div className="w-full md:w-80 space-y-2">
            <div className={`relative rounded-full border px-4 py-2.5 flex items-center transition-all ${
              isDark ? 'bg-[#141b29] border-amber-500/30 text-slate-100 focus-within:border-amber-400' : 'bg-white border-stone-300 text-stone-900 focus-within:border-amber-700'
            }`}>
              <Search className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
              <input 
                type="text"
                placeholder="Search lectures, topics, instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-xs sm:text-sm font-sans placeholder:text-slate-400"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-white text-xs font-mono px-1">
                  ✕
                </button>
              )}
            </div>
            <div className="text-right text-xs text-slate-400 font-mono">
              Showing <span className="font-bold text-amber-400">{filteredCourses.length}</span> of {COURSES.length} Masterclasses
            </div>
          </div>
        </div>

        {/* Faculty Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className={`text-xs font-mono uppercase font-bold mr-2 ${isDark ? 'text-amber-400' : 'text-amber-900'}`}>
            Faculties:
          </span>
          {faculties.map((fac) => {
            const active = selectedFaculty === fac;
            return (
              <button
                key={fac}
                onClick={() => setSelectedFaculty(fac)}
                className={`px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all duration-200 border ${
                  active 
                    ? 'bg-amber-500 text-stone-950 font-bold border-amber-400 shadow-md shadow-amber-500/25'
                    : isDark 
                      ? 'bg-[#151c2c] text-slate-300 border-amber-500/20 hover:border-amber-500/40 hover:text-white' 
                      : 'bg-stone-200 text-stone-800 border-stone-300 hover:border-amber-700'
                }`}
              >
                {fac}
              </button>
            );
          })}
        </div>

        {/* Level Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <span className={`text-xs font-mono uppercase font-bold mr-2 ${isDark ? 'text-sky-400' : 'text-sky-900'}`}>
            Mastery Level:
          </span>
          {levels.map((lvl) => {
            const active = selectedLevel === lvl;
            return (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all border ${
                  active
                    ? 'bg-sky-500/20 text-sky-300 border-sky-400 font-bold shadow-sm'
                    : isDark
                      ? 'bg-[#111724] text-slate-400 border-slate-800 hover:border-slate-700'
                      : 'bg-stone-200/60 text-stone-700 border-stone-300 hover:border-stone-400'
                }`}
              >
                {lvl}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-amber-500/20 rounded-3xl p-8 max-w-lg mx-auto">
            <BookOpen className="w-12 h-12 text-amber-400/60 mx-auto mb-4" />
            <h3 className="font-cinzel text-xl font-bold">No Masterclasses Found</h3>
            <p className="text-sm text-slate-400 mt-2 font-sans">
              We could not find a lecture matching &quot;{searchQuery}&quot; in this faculty. Try switching faculties or adjusting your terms.
            </p>
            <button 
              onClick={() => { setSelectedFaculty('All Disciplines'); setSelectedLevel('All Levels'); setSearchQuery(''); }}
              className="mt-6 px-6 py-2 rounded-full bg-amber-500 text-stone-950 font-sans font-bold text-xs"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => {
              const isEnrolled = enrolledCourseIds.includes(course.id);
              
              return (
                <div 
                  key={course.id}
                  onClick={() => setInspectCourse(course)}
                  className={`group rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer transform hover:-translate-y-1.5 hover:shadow-2xl ${
                    isDark
                      ? 'bg-[#121824]/90 border-amber-500/20 hover:border-amber-500/50 shadow-lg shadow-amber-950/20'
                      : 'bg-white border-amber-900/20 hover:border-amber-700 shadow-xl'
                  }`}
                >
                  {/* Top Image Banner & Badges */}
                  <div>
                    <div className="relative h-56 w-full overflow-hidden bg-[#0a0e16]">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-transparent opacity-80"></div>
                      
                      {/* Faculty Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider bg-[#0b0e14]/80 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                        {course.faculty.replace(' & ', ' • ')}
                      </div>

                      {/* Featured Tag */}
                      {course.featured && (
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-cinzel font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-stone-950" />
                          <span>Medici Laureate</span>
                        </div>
                      )}

                      {/* Bottom Image metadata (Rating & Lectures) */}
                      <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-xs text-slate-200">
                        <span className="flex items-center gap-1 font-mono font-bold text-amber-400 bg-black/60 px-2.5 py-1 rounded-lg border border-amber-500/30 backdrop-blur-sm">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          {course.rating.toFixed(2)}
                        </span>
                        <span className="flex items-center gap-1.5 font-mono text-xs bg-black/60 px-2.5 py-1 rounded-lg border border-sky-500/30 text-sky-300 backdrop-blur-sm">
                          <Clock className="w-3.5 h-3.5 text-sky-400" />
                          {course.duration}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 pb-2">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[11px] font-mono font-semibold uppercase px-2 py-0.5 rounded border ${
                          course.level === 'Master Laureate'
                            ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                            : course.level === 'Artisan Fellow'
                              ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                              : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                        }`}>
                          {course.level}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Users className="w-3 h-3 text-amber-400" /> {course.enrolledCount.toLocaleString()} Scholars
                        </span>
                      </div>

                      <h3 className={`font-cinzel text-lg font-bold leading-snug group-hover:text-amber-400 transition-colors ${
                        isDark ? 'text-white' : 'text-stone-900'
                      }`}>
                        {course.title}
                      </h3>
                      
                      <p className={`text-xs mt-2 line-clamp-2 font-sans ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                        {course.subtitle}
                      </p>

                      {/* Instructor Bio Bar */}
                      <div className="mt-5 pt-4 border-t border-amber-500/15 flex items-center gap-3">
                        <img 
                          src={course.instructor.avatar} 
                          alt={course.instructor.name} 
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-500/30 shrink-0" 
                        />
                        <div className="overflow-hidden">
                          <h4 className={`text-xs font-sans font-bold leading-tight truncate ${
                            isDark ? 'text-slate-200' : 'text-stone-900'
                          }`}>
                            {course.instructor.name}
                          </h4>
                          <p className="text-[11px] text-amber-400 font-garamond italic truncate">
                            {course.instructor.guild}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action Bar */}
                  <div className="p-6 pt-4 mt-2 bg-[#182033]/60 border-t border-amber-500/15 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">Tuition / Access</span>
                      <span className="text-lg font-mono font-bold text-amber-400">${course.price}</span>
                      <span className="text-[10px] text-slate-400 ml-1">or Patron Plan</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); setInspectCourse(course); }}
                        title="View Syllabus & Modules"
                        className={`p-2.5 rounded-full border text-xs font-mono transition-colors ${
                          isDark ? 'bg-[#131927] border-amber-500/30 text-amber-300 hover:bg-amber-500/20' : 'bg-stone-200 text-stone-800 border-stone-300'
                        }`}
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => handleEnrollWithConfetti(course, e)}
                        className={`px-4 py-2.5 rounded-full text-xs font-sans font-bold transition-all duration-200 flex items-center gap-1.5 shadow-md ${
                          isEnrolled 
                            ? 'bg-emerald-500 text-stone-950 border border-emerald-400 hover:opacity-90' 
                            : 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-stone-950 hover:opacity-95 hover:scale-105'
                        }`}
                      >
                        {isEnrolled ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-stone-950 font-bold" />
                            <span>In Salon</span>
                          </>
                        ) : (
                          <>
                            <span>Enroll</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* INTERACTIVE COURSE INSPECTION / SYLLABUS MODAL */}
        {inspectCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
            <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl my-auto ${
              isDark ? 'bg-[#121826] border-amber-500/40 text-slate-100' : 'bg-white border-amber-900/30 text-stone-900'
            }`}>
              
              {/* Close Button */}
              <button 
                onClick={() => setInspectCourse(null)} 
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Banner header */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                <img 
                  src={inspectCourse.image} 
                  alt={inspectCourse.title} 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121826] via-[#121826]/60 to-transparent"></div>
                
                <div className="absolute bottom-6 inset-x-6 sm:inset-x-8">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-amber-500 text-stone-950 text-xs font-mono font-bold uppercase">
                      {inspectCourse.faculty}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-black/80 text-amber-400 text-xs font-mono border border-amber-500/40">
                      {inspectCourse.level}
                    </span>
                  </div>
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {inspectCourse.title}
                  </h2>
                </div>
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* Overview & Stats */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-amber-400 mb-2">Synopsis & Architecture</h4>
                  <p className={`font-sans text-sm sm:text-base leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-stone-700'
                  }`}>
                    {inspectCourse.summary}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 px-5 rounded-2xl bg-[#0b0e14]/70 border border-amber-500/20 text-center">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Duration</span>
                    <span className="font-mono font-bold text-sm sm:text-base text-amber-300">{inspectCourse.duration}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Lectures</span>
                    <span className="font-mono font-bold text-sm sm:text-base text-sky-300">{inspectCourse.lecturesCount} Modules</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Student Rating</span>
                    <span className="font-mono font-bold text-sm sm:text-base text-amber-400">★ {inspectCourse.rating.toFixed(2)}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Socratic Chat</span>
                    <span className="font-mono font-bold text-sm sm:text-base text-emerald-400">Included 24/7</span>
                  </div>
                </div>

                {/* Key Learnings */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-sky-400 mb-3 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-sky-400" /> What You Will Master
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {inspectCourse.keyLearnings.map((learning, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                          ✓
                        </div>
                        <span className="text-xs sm:text-sm font-sans text-slate-200 leading-snug">
                          {learning}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instructor Spotlight */}
                <div className="p-5 rounded-2xl border border-amber-500/20 bg-[#161e30]/50 flex flex-col sm:flex-row items-start gap-4">
                  <img 
                    src={inspectCourse.instructor.avatar} 
                    alt={inspectCourse.instructor.name}
                    className="w-16 h-16 rounded-2xl object-cover ring-2 ring-amber-500/40 shrink-0" 
                  />
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-400 tracking-wider">Instructor & Master Fellow</span>
                    <h5 className="font-cinzel font-bold text-base text-white">{inspectCourse.instructor.name}</h5>
                    <p className="text-xs font-garamond italic text-amber-300">{inspectCourse.instructor.title} — {inspectCourse.instructor.guild}</p>
                    <p className="text-xs text-slate-300 mt-2 font-sans leading-relaxed">{inspectCourse.instructor.bio}</p>
                  </div>
                </div>

                {/* Complete Syllabus Accordion / Modules */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-amber-400 mb-3 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-amber-400" /> Syllabus Architecture
                  </h4>
                  <div className="space-y-3">
                    {inspectCourse.syllabus.map((chapter, index) => (
                      <div key={index} className="rounded-2xl border border-amber-500/20 overflow-hidden bg-[#0e1320]">
                        <div className="p-4 bg-[#161e30] border-b border-amber-500/15 flex items-center justify-between">
                          <span className="font-cinzel font-bold text-sm text-white flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-amber-500 text-stone-950 font-sans text-xs">{chapter.chapter}</span>
                            <span>{chapter.title}</span>
                          </span>
                          <span className="text-xs font-mono text-slate-400">{chapter.lessons.length} Lectures</span>
                        </div>
                        <div className="divide-y divide-amber-500/10">
                          {chapter.lessons.map((lesson) => (
                            <div key={lesson.id} className="p-4 hover:bg-white/5 transition-colors flex items-center justify-between gap-4">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                                  <h6 className="text-xs sm:text-sm font-sans font-semibold text-slate-200">{lesson.title}</h6>
                                </div>
                                {lesson.description && (
                                  <p className="text-xs text-slate-400 pl-4 font-sans">{lesson.description}</p>
                                )}
                              </div>
                              <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 font-mono text-[11px] shrink-0">
                                {lesson.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-6 border-t border-amber-500/25 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 block">Single Seminar Price:</span>
                    <span className="text-2xl font-mono font-extrabold text-amber-400">${inspectCourse.price}</span>
                    <span className="text-xs text-slate-400 ml-2">(Or include with Master Patron Plan)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => { setInspectCourse(null); onJumpToLms(inspectCourse.id); }}
                      className="px-5 py-3 rounded-full bg-sky-500/20 text-sky-300 font-sans font-semibold text-xs sm:text-sm border border-sky-400 hover:bg-sky-500/30 transition-all flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-sky-400" />
                      <span>Test Drive Live Workspace</span>
                    </button>

                    <button
                      onClick={(e) => { handleEnrollWithConfetti(inspectCourse, e); setInspectCourse(null); }}
                      className="px-8 py-3 rounded-full bg-amber-500 text-stone-950 font-cinzel font-bold text-xs sm:text-sm uppercase hover:bg-amber-400 shadow-xl shadow-amber-500/30 transition-transform hover:scale-105 flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      <span>{enrolledCourseIds.includes(inspectCourse.id) ? "Already Enrolled • Open Salon" : "Enroll Now with Confetti"}</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
