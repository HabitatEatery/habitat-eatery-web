import React, { useEffect, useRef } from 'react';
import { MANIFESTO_CONTENT } from '../../data/content';

const Manifesto: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pop-pink/10 rounded-full blur-[100px] pointer-events-none animate-spin-slow" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pop-blue/10 rounded-full blur-[100px] pointer-events-none animate-spin-slow" style={{ animationDirection: 'reverse' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            ref={ref}
            className="reveal-on-scroll bg-pop-cream rounded-[2rem] md:rounded-[3rem] border-2 md:border-4 border-black p-6 md:p-20 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden"
          >
            <div className="absolute -top-3 -left-3 md:top-10 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-pop-yellow border-2 border-black rounded-full flex items-center justify-center animate-spin-slow z-20 shadow-md">
              <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>

            <div className="flex flex-col items-center relative z-10">
              <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full border-2 border-black bg-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-12 hover:bg-black hover:text-white transition-colors cursor-default shadow-sm">
                {MANIFESTO_CONTENT.badge}
              </span>

              <h2 className="text-3xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] mb-6 md:mb-12 text-pop-dark uppercase tracking-tight break-words w-full">
                {MANIFESTO_CONTENT.title.line1} <br />
                <span className="text-pop-blue inline-block transform -rotate-1 decoration-wavy underline decoration-pop-yellow decoration-4 underline-offset-8">{MANIFESTO_CONTENT.title.line2}</span>
              </h2>

              <p className="font-sans text-base md:text-2xl font-medium text-pop-dark/70 max-w-3xl mx-auto leading-relaxed mb-4 md:mb-8">
                {MANIFESTO_CONTENT.quote}
              </p>
            </div>

            <div className="absolute bottom-[-10%] right-[-10%] w-40 h-40 md:w-64 md:h-64 opacity-20 pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFADDD" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.8,34.3C59.4,45.5,47.9,54.2,35.6,60.7C23.3,67.2,10.2,71.5,-1.9,74.8C-14,78.1,-29.9,80.4,-43.3,74.6C-56.7,68.8,-67.6,54.9,-75.6,39.6C-83.6,24.3,-88.7,7.6,-86.3,-7.8C-83.9,-23.2,-74,-37.3,-62.4,-47.1C-50.8,-56.9,-37.5,-62.4,-24.6,-68.2C-11.7,-74,-1.3,-79.9,10.8,-82.1C22.9,-84.3,44.7,-82.7,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;