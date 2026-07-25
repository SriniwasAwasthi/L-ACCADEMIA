import React from 'react';
import { COURSES } from '../data/courses';
import { X, GraduationCap, Play, ArrowRight, Trash2, Award } from 'lucide-react';

interface MyCoursesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  enrolledIds: string[];
  onRemoveCourse: (id: string) => void;
  onJumpToLms: (courseId: string) => void;
  theme: 'dark' | 'light';
}

export const MyCoursesDrawer: React.FC<MyCoursesDrawerProps> = ({
  isOpen,
  onClose,
  enrolledIds,
  onRemoveCourse,
  onJumpToLms,
  theme
}) => {
  const isDark = theme === 'dark';
  const enrolledCourses = COURSES.filter(c => enrolledIds.includes(c.id));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className={`w-full max-w-lg h-full overflow-y-auto border-l shadow-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
        isDark ? 'bg-[#0f1420] border-amber-500/30 text-slate-100' : 'bg-white border-stone-300 text-stone-900'
      }`}>
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-amber-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400 font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-cinzel font-bold text-lg sm:text-xl text-white">My Study Salon</h3>
                <span className="text-xs font-mono text-slate-400">{enrolledCourses.length} Enrolled Masterclasses</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List of Enrolled Courses */}
          <div className="py-6 space-y-4">
            {enrolledCourses.length === 0 ? (
              <div className="text-center py-16 px-4 border border-dashed border-amber-500/20 rounded-2xl">
                <GraduationCap className="w-12 h-12 text-amber-400/40 mx-auto mb-3" />
                <h4 className="font-cinzel font-bold text-base text-slate-200">Your Salon is Empty</h4>
                <p className="text-xs text-slate-400 font-sans mt-1 leading-relaxed">
                  Browse our curated gallery below and click &quot;Enroll&quot; on any lecture series to add it to your active study list.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 rounded-full bg-amber-500 text-stone-950 font-sans font-bold text-xs shadow-md hover:bg-amber-400"
                >
                  Browse Salon Gallery
                </button>
              </div>
            ) : (
              enrolledCourses.map((course) => (
                <div 
                  key={course.id}
                  className={`p-4 rounded-2xl border transition-all space-y-3 ${
                    isDark ? 'bg-[#141b2b] border-amber-500/20 hover:border-amber-500/40' : 'bg-stone-100 border-stone-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-16 h-16 rounded-xl object-cover ring-1 ring-amber-500/40 shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono uppercase text-amber-400 font-bold truncate block">
                        {course.faculty}
                      </span>
                      <h4 className="text-xs sm:text-sm font-cinzel font-bold text-white leading-snug line-clamp-2">
                        {course.title}
                      </h4>
                      <p className="text-[11px] font-garamond italic text-slate-300 mt-0.5">
                        By {course.instructor.name}
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoveCourse(course.id)}
                      title="Remove from my study salon"
                      className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Progress simulation bar */}
                  <div className="space-y-1 pt-1 border-t border-amber-500/10">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>Socratic Dialectic Active</span>
                      <span className="text-emerald-400 font-bold">In Progress</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full w-[45%] rounded-full"></div>
                    </div>
                  </div>

                  {/* Action jump */}
                  <div className="flex justify-end pt-1">
                    <button
                      onClick={() => { onClose(); onJumpToLms(course.id); }}
                      className="px-4 py-1.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400 font-sans font-semibold text-xs hover:bg-sky-500/30 transition-all flex items-center gap-1.5"
                    >
                      <Play className="w-3 h-3 fill-sky-400" />
                      <span>Resume in Live LMS</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-amber-500/20 space-y-3">
          <div className="p-3.5 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center gap-3 text-xs text-amber-300 font-sans">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <span>Complete any Mastercourse with 90%+ Socratic score to issue your verified Medici cryptographic diploma.</span>
          </div>
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full bg-slate-800 text-slate-300 font-mono text-xs hover:bg-slate-700"
          >
            Close Drawer & Return to Platform
          </button>
        </div>

      </div>
    </div>
  );
};
