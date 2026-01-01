import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MENU_ITEMS } from '../../data/menuData';
import MenuCard from '../ui/MenuCard';

interface FeaturedMenuProps {
    onOpenFullMenu: () => void;
}

const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ onOpenFullMenu }) => {
    const featuredItems = MENU_ITEMS.filter(item => item.featured);

    // Desktop Scroll Logic
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["2%", "-75%"]);

    return (
        <div id="menu" className="w-full">
            {/* =========================================
            MOBILE: NATIVE HORIZONTAL SCROLL
           ========================================= */}
            <section className="md:hidden py-20 bg-pop-orange overflow-hidden">
                <div className="container mx-auto px-6 mb-8">
                    <div className="bg-white px-6 py-2 rounded-full border-2 border-black inline-block transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="text-xl font-display font-black uppercase tracking-tight text-black">
                            Featured Plates
                        </h3>
                    </div>
                </div>

                <div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory hide-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
                    {featuredItems.map((item, index) => (
                        <MenuCard
                            key={item.id}
                            item={item}
                            index={index}
                            className="snap-center flex-shrink-0 w-[85vw] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]"
                        />
                    ))}

                    <div className="snap-center flex-shrink-0 w-[85vw] bg-white rounded-[2.5rem] border-4 border-black flex flex-col items-center justify-center p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                        <h4 className="text-4xl font-display font-black uppercase mb-6 text-black">Hungry for More?</h4>
                        <button onClick={onOpenFullMenu} className="px-8 py-4 bg-pop-blue text-white font-bold rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" data-hover="true">View Full Menu</button>
                    </div>
                    <div className="w-4 shrink-0" />
                </div>
            </section>

            {/* =========================================
            DESKTOP: STICKY SCROLL FRAME
           ========================================= */}
            <section ref={targetRef} className="hidden md:block relative h-[400vh] bg-pop-orange">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <div className="absolute top-20 left-20 z-20">
                        <div className="bg-white px-6 py-2 rounded-full border-2 border-black inline-block transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-xl font-display font-black uppercase tracking-tight text-black">
                                Featured Plates
                            </h3>
                        </div>
                    </div>

                    <motion.div style={{ x }} className="flex gap-8 px-20 items-center h-full will-change-transform">
                        {featuredItems.map((item, index) => (
                            <MenuCard
                                key={item.id}
                                item={item}
                                index={index}
                                className="group relative w-[500px] h-[60vh] flex-shrink-0 p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-transform duration-300"
                            />
                        ))}

                        <div className="w-[400px] h-[60vh] flex-shrink-0 bg-white rounded-[3rem] border-4 border-black flex flex-col items-center justify-center p-8 text-center shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]">
                            <h4 className="text-5xl font-display font-black uppercase mb-6 text-black">Hungry for More?</h4>
                            <button onClick={onOpenFullMenu} className="px-8 py-4 bg-pop-blue text-white font-bold rounded-full border-2 border-black hover:scale-105 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1" data-hover="true">View Full Menu</button>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-10 flex items-center gap-2 z-10 pointer-events-none mix-blend-multiply">
                    <div className="w-1.5 h-12 bg-black/20 rounded-full overflow-hidden">
                        <motion.div style={{ height: scrollYProgress }} className="w-full bg-black h-full origin-top" />
                    </div>
                    <span className="font-mono text-xs uppercase font-bold text-pop-dark/40 rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
                </div>
            </section>
        </div>
    );
};

export default FeaturedMenu;