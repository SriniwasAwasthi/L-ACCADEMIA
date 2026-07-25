import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const current = (totalScroll / windowHeight) * 100;
        setScrollProgress(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-amber-500 via-amber-300 to-sky-400 transition-all duration-150 ease-out shadow-lg shadow-amber-500/50 relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {scrollProgress > 1 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-200 shadow-[0_0_10px_3px_rgba(212,175,55,0.8)] animate-pulse" />
        )}
      </div>
    </div>
  );
};
