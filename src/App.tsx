import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { CourseSalon } from './components/CourseSalon';
import { LmsWorkspaceDemo } from './components/LmsWorkspaceDemo';
import { CreatorBottega } from './components/CreatorBottega';
import { ComparisonSection } from './components/ComparisonSection';
import { PricingPatrons } from './components/PricingPatrons';
import { Testimonials } from './components/Testimonials';
import { EnrollmentModal, EnrollmentDetails } from './components/EnrollmentModal';
import { MyCoursesDrawer } from './components/MyCoursesDrawer';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollReveal } from './components/ScrollReveal';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>(['course-1', 'course-2']);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Modals state
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedPlanOrCourse, setSelectedPlanOrCourse] = useState<string>("Master Artisan Patron Plan");
  const [myCoursesDrawerOpen, setMyCoursesDrawerOpen] = useState(false);
  const [activeDemoCourseId, setActiveDemoCourseId] = useState<string>('course-1');

  // Sync theme class with document root
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0b0e14';
      document.body.style.color = '#f1f5f9';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#FAF7F0';
      document.body.style.color = '#1c1917';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenEnrollModal = (title = "Master Artisan Patron Plan") => {
    setSelectedPlanOrCourse(title);
    setEnrollModalOpen(true);
  };

  const handleEnrollInCourse = (courseId: string) => {
    if (!enrolledCourseIds.includes(courseId)) {
      setEnrolledCourseIds(prev => [...prev, courseId]);
      setToastMessage(`✓ Course successfully added to your Study Salon!`);
      setTimeout(() => setToastMessage(null), 3500);
    } else {
      // If already enrolled, open the drawer
      setMyCoursesDrawerOpen(true);
    }
  };

  const handleRemoveCourse = (courseId: string) => {
    setEnrolledCourseIds(prev => prev.filter(id => id !== courseId));
    setToastMessage(`Removed course from your active Study Salon.`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleJumpToLms = (courseId = 'course-1') => {
    setActiveDemoCourseId(courseId);
    const elem = document.getElementById('lms-demo');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCompleteEnrollment = (details: EnrollmentDetails) => {
    setToastMessage(`✦ Welcome to L'Accademia, ${details.fullName}! Your Medici Warrant is Confirmed.`);
    setTimeout(() => setToastMessage(null), 5000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans relative ${
      theme === 'dark' ? 'bg-[#0b0e14] text-slate-100' : 'bg-[#FAF7F0] text-stone-900'
    }`}>
      {/* Interactive Animated Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Global Status Toast for Details & Actions */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[80] animate-fadeIn px-5 py-3.5 rounded-2xl bg-amber-500 text-stone-950 font-sans font-bold text-xs sm:text-sm shadow-2xl border border-amber-300 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-stone-950 animate-ping"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Interactive Navigation */}
      <Navbar 
        theme={theme} 
        onToggleTheme={toggleTheme}
        enrolledCount={enrolledCourseIds.length}
        onOpenEnrollModal={() => handleOpenEnrollModal("Scholar Fellowship Trial")}
        onOpenMyCourses={() => setMyCoursesDrawerOpen(true)}
      />

      {/* Main Content Sections with Smooth Scroll Reveal Animation */}
      <main>
        <Hero 
          theme={theme} 
          onOpenEnroll={() => handleOpenEnrollModal("Medici Institutional LMS Suite")}
          onJumpToLms={() => handleJumpToLms('course-1')}
        />

        <ScrollReveal delay={100}>
          <PillarsSection 
            theme={theme}
            onExploreCourse={() => {
              const elem = document.getElementById('salon');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <CourseSalon 
            theme={theme}
            enrolledCourseIds={enrolledCourseIds}
            onEnrollCourse={handleEnrollInCourse}
            onJumpToLms={handleJumpToLms}
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <LmsWorkspaceDemo 
            theme={theme}
            defaultCourseId={activeDemoCourseId}
            onOpenEnroll={() => handleOpenEnrollModal("Master Artisan Patron Plan")}
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <CreatorBottega 
            theme={theme}
            onOpenEnroll={() => handleOpenEnrollModal("University & Corporate Creator Suite")}
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ComparisonSection 
            theme={theme}
            onOpenEnroll={() => handleOpenEnrollModal("Custom Enterprise University Enclave")}
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <PricingPatrons 
            theme={theme}
            onOpenEnroll={handleOpenEnrollModal}
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Testimonials 
            theme={theme}
            onOpenEnroll={() => handleOpenEnrollModal("Institutional Guild Review & Partnership")}
          />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <ScrollReveal delay={50}>
        <Footer 
          theme={theme}
          onOpenEnroll={handleOpenEnrollModal}
        />
      </ScrollReveal>

      {/* Interactive Application / Booking Modal */}
      <EnrollmentModal 
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        initialSelection={selectedPlanOrCourse}
        theme={theme}
        onCompleteEnrollment={handleCompleteEnrollment}
      />

      {/* Interactive Enrolled Courses Salon Drawer */}
      <MyCoursesDrawer 
        isOpen={myCoursesDrawerOpen}
        onClose={() => setMyCoursesDrawerOpen(false)}
        enrolledIds={enrolledCourseIds}
        onRemoveCourse={handleRemoveCourse}
        onJumpToLms={(id) => {
          setMyCoursesDrawerOpen(false);
          handleJumpToLms(id);
        }}
        theme={theme}
      />
    </div>
  );
};

export default App;
