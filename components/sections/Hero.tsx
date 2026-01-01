import React from 'react';
import { HERO_CONTENT } from '../../data/content';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative z-20 w-full min-h-[95vh] md:min-h-screen bg-pop-green flex flex-col justify-between pt-28 md:pt-32 pb-0 px-6 md:px-12 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#FFFDF5 1px, transparent 1px), linear-gradient(90deg, #FFFDF5 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />

            {/* Background Doodles (Preserved) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <svg className="absolute top-[15%] left-[10%] w-12 h-12 text-pop-yellow animate-spin-slow opacity-80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
                <svg className="absolute bottom-[40%] right-[10%] w-16 h-16 text-pop-pink animate-float delay-200 opacity-60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
                    <path d="M10,50 Q25,25 50,50 T90,50" />
                </svg>
                <svg className="absolute top-[25%] right-[20%] w-8 h-8 text-white animate-pulse delay-500" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>

            {/* Top Bar / Badge */}
            <div className="relative z-10 w-full flex justify-center md:justify-start items-start pointer-events-none">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full pointer-events-auto opacity-0 animate-fade-in delay-300">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-black shadow-black drop-shadow-md">{HERO_CONTENT.topBadge}</span>
                </div>
            </div>

            {/* Main Title Area */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-start md:justify-center pt-[15vh] md:pt-0 my-0">
                <div className="relative text-center leading-[0.8] md:leading-[0.85] ">
                    {/* Top Text */}
                    <h1 className="font-display font-black text-[10vw]  text-white tracking-tighter mix-blend-overlay opacity-0 animate-fade-up drop-shadow-sm mb-4 md:mb-8">
                        {HERO_CONTENT.mainTitle.line1}
                    </h1>

                    <div className="relative mt-[-2vw] md:mt-[-3vw]">
                        {/* Floating Image (Behind Text) */}
                        <div className="absolute left-1/2 top-1/4 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] md:w-[22vw] aspect-square z-20 pointer-events-none opacity-0 animate-scale-in delay-300">
                            <div className="w-full h-full rounded-full border-4 md:border-[6px] border-white shadow-2xl overflow-hidden bg-black animate-float">
                                <img src={HERO_CONTENT.heroImage.url} alt={HERO_CONTENT.heroImage.alt} className="w-full h-full object-cover scale-110" />
                            </div>
                        </div>

                        {/* Bottom Text (Overlay/Stroke) */}
                        <h1 className="font-display font-black text-[10vw] text-pop-yellow relative z-30 pointer-events-none opacity-0 animate-fade-up delay-100">
                            {HERO_CONTENT.mainTitle.line2}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Bottom Content & Wave */}
            <div className="relative z-20 w-full flex flex-col md:flex-row justify-between items-end gap-8 pb-32 md:pb-40 opacity-0 animate-fade-in delay-500 px-4 md:px-0">
                {/* Sticky Note Component */}
                <div className="hidden md:block relative z-20 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300 group">
                    <div className="relative drop-shadow-xl transition-transform duration-300 group-hover:scale-105">
                        <div
                            className="bg-pop-pink w-[20rem] p-8 pb-12 text-left relative"
                            style={{
                                clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)',
                                backgroundImage: 'linear-gradient(transparent 1.9rem, rgba(0,0,0,0.15) 2rem)',
                                backgroundSize: '100% 2rem',
                            }}
                        >
                            {/* Content */}
                            <h3 className="font-display font-black text-2xl mb-3 text-black uppercase tracking-wider leading-tight">
                                {HERO_CONTENT.tagline.title}
                            </h3>
                        </div>

                        {/* The Fold (Curled Corner) */}
                        <div
                            className="absolute bottom-0 right-0 w-[15%] h-[15%] bg-black/20"
                            style={{
                                clipPath: 'polygon(0 0, 0 100%, 100% 0)',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(0,0,0,0.1))'
                            }}
                        />
                        {/* Fold Backing */}
                        <div
                            className="absolute bottom-0 right-0 w-[15%] h-[15%] bg-pink-600 rounded-bl-lg" // Slightly darker pink for the back of the paper
                            style={{
                                clipPath: 'polygon(0 0, 0 100%, 100% 0)',
                            }}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 mx-auto md:mx-0">
                    <a
                        href={HERO_CONTENT.cta.link}
                        className="bg-pop-yellow text-black font-display font-black text-lg md:text-xl px-10 py-4 md:px-12 md:py-6 rounded-[2rem] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2 transform hover:rotate-1"
                    >
                        {HERO_CONTENT.cta.text} <span className="text-xl md:text-2xl">↗</span>
                    </a>
                </div>
            </div>

            {/* Wave Separator - Preserved */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-1">
                <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        fill="#FFFDF5"
                        className="fill-pop-cream"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;