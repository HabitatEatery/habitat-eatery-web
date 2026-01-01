import React from 'react';
import { INTRO_CONTENT } from '../../data/content';

interface IntroOverlayProps {
  isExiting?: boolean;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ isExiting }) => {
  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-pop-green text-white overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="relative flex flex-col items-center w-full max-w-md px-6 animate-scale-in">
        <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-center">
          {INTRO_CONTENT.brandName}
        </h1>

        <div className="mt-6 md:mt-8 bg-pop-yellow text-black px-6 py-2 rounded-full font-bold uppercase text-xs md:text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-fade-up delay-200">
          {INTRO_CONTENT.badge}
        </div>

        {/* Indeterminate Loading Bar */}
        <div className="mt-12 w-full max-w-[240px] h-2 bg-black/20 rounded-full overflow-hidden border border-white/20 relative animate-fade-in delay-300">
          <div className="absolute top-0 left-0 h-full bg-white w-full animate-[loading_1.5s_ease-in-out_infinite]"
            style={{
              animation: 'slideIndeterminate 1.5s ease-in-out infinite'
            }}
          />
          <style>{`
                @keyframes slideIndeterminate {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>

        <p className="mt-3 font-mono text-[10px] uppercase opacity-60 tracking-widest animate-pulse">
          {INTRO_CONTENT.loadingText}
        </p>
      </div>

      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#FFFDF5 1px, transparent 1px), linear-gradient(90deg, #FFFDF5 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
      />
    </div>
  );
};

export default IntroOverlay;