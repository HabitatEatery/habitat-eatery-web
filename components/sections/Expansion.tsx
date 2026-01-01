import React from 'react';
import { Construction } from 'lucide-react';
import { EXPANSION_CONTENT } from '../../data/content';

const Expansion: React.FC = () => {
    return (
        <section id="new-habitat" className="relative py-16 md:py-32 bg-pop-dark text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div
                    className="border-2 md:border-4 border-dashed border-pop-yellow rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 relative bg-black/50 backdrop-blur-md mt-6 md:mt-0"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pop-yellow text-black px-4 md:px-6 py-1.5 md:py-2 rounded-full font-bold uppercase border-2 border-black flex items-center gap-2 text-[10px] md:text-base whitespace-nowrap shadow-lg z-20 cursor-help transition-transform hover:scale-105 hover:rotate-2">
                        <Construction size={14} className="md:w-5 md:h-5" />
                        {EXPANSION_CONTENT.badge}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="w-full lg:w-1/2 pt-4 md:pt-0">
                            <h2 className="text-3xl md:text-7xl font-display font-black uppercase mb-4 md:mb-6 leading-tight text-center md:text-left">
                                {EXPANSION_CONTENT.title.line1} <br /> <span className="text-pop-blue">{EXPANSION_CONTENT.title.line2}</span>
                            </h2>
                            <p className="font-mono text-white/60 mb-6 md:mb-8 text-xs md:text-lg text-center md:text-left">Project Code: {EXPANSION_CONTENT.projectCode}</p>
                            <ul className="space-y-3 md:space-y-6">
                                {EXPANSION_CONTENT.features.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 md:gap-4 bg-white/5 p-3 md:p-4 rounded-xl border border-white/10 cursor-default transition-all duration-300 hover:translate-x-2 hover:bg-white/10"
                                    >
                                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-pop-green flex-shrink-0 mt-0.5 md:mt-1 flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-pop-green rounded-full animate-pulse"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm md:text-xl uppercase">{item.title}</h4>
                                            <p className="text-white/60 text-[10px] md:text-sm">{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-square rounded-[1.5rem] md:rounded-[2rem] border-2 border-white/20 overflow-hidden group cursor-none transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1" data-hover="true">
                                <img src={EXPANSION_CONTENT.image.url} className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 transition-opacity duration-500" alt={EXPANSION_CONTENT.image.alt} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <a
                                        href={EXPANSION_CONTENT.location.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-pop-blue/90 p-4 md:p-6 rounded-full backdrop-blur-md border-2 border-white transform rotate-12 shadow-xl hover:scale-110 hover:bg-pop-blue transition-all cursor-pointer group/orb pointer-events-auto"
                                    >
                                        <span className="font-display font-black text-lg md:text-2xl uppercase text-center block leading-tight text-white group-hover/orb:text-white">
                                            {EXPANSION_CONTENT.location.buttonText.line1}<br />
                                            {EXPANSION_CONTENT.location.buttonText.line2}<br />
                                            <span className="text-xs font-sans tracking-wide">{EXPANSION_CONTENT.location.buttonText.line3}</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expansion;