import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Sparkles, Award, ChefHat, UserPlus, Flower2, ShieldCheck, BadgeDollarSign } from 'lucide-react';
import { COMMUNITY_CONTENT } from '../../data/content';

interface StatCardProps {
    number: string;
    label: string;
    description: string;
    bgColor: string;
    textColor: string;
    icon: React.ReactNode;
    badges: string[];
}

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
    users: Users,
    heart: Heart,
    sparkles: Sparkles,
    award: Award,
    chefHat: ChefHat,
    userPlus: UserPlus,
    flower2: Flower2,
    shieldCheck: ShieldCheck,
    badgeDollarSign: BadgeDollarSign,
};

const StatCard: React.FC<StatCardProps> = ({
    number,
    label,
    description,
    bgColor,
    textColor,
    icon,
    badges,
}) => (
    <div
        className={`${bgColor} ${textColor} rounded-[2.5rem] md:rounded-[3rem] border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group cursor-default`}
    >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        {/* Card Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
            {/* Icon */}
            <div className="w-20 h-20 bg-white border-2 border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform duration-300 shrink-0">
                {icon}
            </div>

            {/* Number Counter */}
            <div className="">
                <span className="block text-6xl md:text-8xl font-display font-black leading-none tracking-tighter">
                    {number}
                </span>
                <h3 className="text-xl md:text-3xl font-display font-black uppercase leading-tight mt-2 opacity-90">
                    {label}
                </h3>
            </div>
        </div>

        {/* Description */}
        <p className={`relative z-10 font-sans text-base md:text-xl font-medium mb-8 leading-relaxed max-w-lg ${textColor === 'text-white' ? 'opacity-90' : 'opacity-80'}`}>
            {description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 relative z-10">
            {badges.map((badge, index) => (
                <span
                    key={index}
                    className="bg-white/20 backdrop-blur-sm border-2 border-black/10 px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide"
                >
                    {badge}
                </span>
            ))}
        </div>
    </div>
);

const Community: React.FC = () => {
    return (
        <section id="community" className="relative py-24 md:py-32 bg-pop-cream overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #1A1A1A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            {/* Decorative Elements - Keeping these as simple CSS or loop animations if preferred, but user said remove 'entering' animation. Keeping rotation loops as they are decorative. */}
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 right-20 w-32 h-32 border-4 border-dashed border-pop-orange/30 rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-40 left-10 w-24 h-24 border-4 border-dashed border-pop-blue/30 rounded-full pointer-events-none"
            />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 md:mb-28">
                    <div
                        className="inline-block bg-pop-green border-2 border-black px-6 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8"
                    >
                        <span className="font-bold uppercase tracking-widest text-xs md:text-sm text-white flex items-center gap-2">
                            <Users size={16} />
                            {COMMUNITY_CONTENT.badge.text}
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] mb-6 md:mb-12 text-pop-dark uppercase tracking-tight break-words w-full"
                    >
                        {COMMUNITY_CONTENT.title.line1} <br />
                        <span className="text-pop-blue relative inline-block">
                            {COMMUNITY_CONTENT.title.line2}
                            <div className="absolute -z-10 bottom-2 left-0 w-full h-4 bg-pop-yellow -rotate-2 opacity-60" />
                        </span>
                    </h2>

                    <p
                        className="font-sans text-xl md:text-2xl font-medium text-black/70 max-w-2xl mx-auto"
                    >
                        {COMMUNITY_CONTENT.subtitle}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-20 md:mb-28">
                    {COMMUNITY_CONTENT.stats.map((stat, index) => {
                        const IconComponent = iconMap[stat.iconType];
                        return (
                            <StatCard
                                key={index}
                                number={stat.number}
                                label={stat.label}
                                description={stat.description}
                                bgColor={stat.bgColor}
                                textColor={stat.textColor}
                                icon={<IconComponent size={32} className="text-black" />}
                                badges={stat.badges}
                            />
                        );
                    })}
                </div>

                {/* Core Values Row */}
                <div className="max-w-6xl mx-auto mb-20 md:mb-24">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {COMMUNITY_CONTENT.values.map((val, i) => {
                            const IconComponent = iconMap[val.iconType];
                            return (
                                <div
                                    key={i}
                                    className="bg-white rounded-[1.5rem] border-2 border-black p-6 flex flex-col items-center text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                                >
                                    <div className={`w-12 h-12 ${val.color} rounded-full border-2 border-black flex items-center justify-center mb-4 shadow-sm`}>
                                        <IconComponent size={28} />
                                    </div>
                                    <h4 className="font-display font-black uppercase text-lg mb-1">{val.title}</h4>
                                    <p className="font-sans text-xs md:text-sm font-medium text-pop-dark/60">{val.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="text-center">
                    <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white border-4 border-black rounded-[2rem] px-8 md:px-12 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto">
                        <div className="flex -space-x-4">
                            {COMMUNITY_CONTENT.bottomMessage.iconColors.map((color, i) => {
                                const IconComponent = iconMap[COMMUNITY_CONTENT.bottomMessage.icons[i]];
                                return (
                                    <div
                                        key={i}
                                        className={`w-12 h-12 md:w-14 md:h-14 ${color} rounded-full border-2 border-black flex items-center justify-center text-black shadow-sm`}
                                    >
                                        <IconComponent size={20} />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="text-center md:text-left">
                            <p className="font-display font-black text-xl md:text-2xl uppercase mb-1">{COMMUNITY_CONTENT.bottomMessage.title}</p>
                            <p className="font-sans text-base text-pop-dark/60 font-medium">{COMMUNITY_CONTENT.bottomMessage.description}</p>
                        </div>
                        <Sparkles size={32} className="text-pop-yellow hidden md:block ml-auto" fill="currentColor" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
