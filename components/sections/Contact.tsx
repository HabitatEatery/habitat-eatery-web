import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Copy, Check, MapPin, Clock } from 'lucide-react';
import { CONTACT_METHODS, BUSINESS_INFO } from '../../data/contactData';
import { CONTACT_CONTENT } from '../../data/content';
import { ContactMethod } from '../../types';
import { WhatsAppIcon } from '../icons';
import PhoneModal from '../ui/PhoneModal';

// WhatsAppIcon imported from shared icons

const iconMap: Record<string, React.ElementType> = {
    whatsapp: WhatsAppIcon,
    email: Mail,
    phone: Phone,
};

interface ContactCardProps {
    option: ContactMethod;
    isMobile?: boolean;
    copied: string | null;
    onCopy: (text: string, id: string) => void;
    onHover: (id: string | null) => void;
    onPhoneClick?: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ option, isMobile = false, copied, onCopy, onHover, onPhoneClick }) => {
    const Icon = iconMap[option.id] || Mail;
    return (
        <motion.div
            className={`
               relative rounded-[2.5rem] border-4 border-black flex flex-col justify-between overflow-hidden cursor-pointer group transition-all duration-500 
               ${option.color} 
               ${isMobile
                    ? 'w-[85vw] h-[45vh] flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] p-6'
                    : 'w-full h-[500px] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2'
                }
            `}
            onMouseEnter={() => !isMobile && onHover(option.id)}
            onMouseLeave={() => !isMobile && onHover(null)}
        >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors duration-500" />

            {/* Header */}
            <div className={`relative z-10 flex justify-between items-start ${option.textColor}`}>
                <div className="p-3 bg-black/5 rounded-2xl backdrop-blur-sm border border-black/5 group-hover:scale-110 transition-transform duration-300 origin-top-left">
                    <Icon size={isMobile ? 24 : 32} />
                </div>
                <div className="p-3 bg-white border-2 border-black rounded-full shadow-sm">
                    <ArrowUpRight size={isMobile ? 16 : 20} className="text-black" />
                </div>
            </div>

            {/* Content Middle */}
            <div className={`relative z-10 mt-auto mb-4 ${option.textColor}`}>
                <h3 className={`${isMobile ? 'text-2xl' : 'text-5xl'} font-display font-black uppercase mb-2 leading-none break-words`}>
                    {option.label}
                </h3>
                <p className={`font-sans ${isMobile ? 'text-sm' : 'text-lg'} font-bold opacity-80 leading-tight max-w-[95%]`}>
                    {option.description}
                </p>
            </div>

            {/* Action Area (Bottom) */}
            <div className="relative z-10 space-y-3">
                <div className="flex gap-2">
                    {option.id === 'phone' ? (
                        <button
                            onClick={onPhoneClick}
                            className={`flex-1 bg-black text-white py-3 rounded-xl font-bold uppercase tracking-wider ${isMobile ? 'text-xs' : 'text-sm'} flex items-center justify-center gap-2 border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all group/btn`}
                        >
                            <span>{option.action}</span>
                            <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                    ) : (
                        <a
                            href={option.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 bg-black text-white py-3 rounded-xl font-bold uppercase tracking-wider ${isMobile ? 'text-xs' : 'text-sm'} flex items-center justify-center gap-2 border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all group/btn`}
                        >
                            <span>{option.action}</span>
                            <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                    )}

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onCopy(option.value, option.id);
                        }}
                        className="w-12 bg-white border-2 border-black rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-colors relative"
                    >
                        <AnimatePresence mode="wait">
                            {copied === option.id ? (
                                <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                    <Check size={18} />
                                </motion.div>
                            ) : (
                                <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                    <Copy size={18} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>

                <div className="bg-white/20 border border-black/10 rounded-lg p-2 text-center backdrop-blur-sm">
                    <span className={`font-mono ${isMobile ? 'text-[10px]' : 'text-sm'} font-bold ${option.textColor} uppercase tracking-widest break-all`}>
                        {option.value}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const InfoCard = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`
        bg-white border-4 border-black rounded-[2.5rem] p-6 flex flex-col justify-center gap-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        ${isMobile ? 'w-[85vw] h-[45vh] flex-shrink-0' : 'w-full h-full min-h-[300px]'}
    `}>
        <div>
            <div className="w-12 h-12 bg-pop-orange rounded-full border-2 border-black flex items-center justify-center flex-shrink-0 mb-3 shadow-md">
                <MapPin size={20} className="text-white" />
            </div>
            <h4 className="font-display font-black uppercase text-lg md:text-xl mb-4">Our Locations</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
                {BUSINESS_INFO.locations.map((loc, i) => (
                    <a
                        key={i}
                        href={loc.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/loc flex items-center gap-1 font-sans font-bold text-base md:text-lg text-black hover:text-pop-orange transition-colors relative"
                    >
                        <span className="relative">
                            {loc.name}
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black scale-x-0 group-hover/loc:scale-x-100 transition-transform origin-left"></span>
                        </span>
                        <ArrowUpRight size={16} className="text-black group-hover/loc:translate-x-0.5 group-hover/loc:-translate-y-0.5 transition-transform" />
                    </a>
                ))}
            </div>
        </div>

        <div className="w-full h-px bg-pop-dark/20"></div>

        <div>
            <div className="w-12 h-12 bg-pop-blue rounded-full border-2 border-black flex items-center justify-center flex-shrink-0 mb-3 shadow-md">
                <Clock size={20} className="text-white" />
            </div>
            <h4 className="font-display font-black uppercase text-lg md:text-xl mb-1">{BUSINESS_INFO.hoursLabel}</h4>
            <p className="font-sans font-medium text-sm md:text-base text-pop-dark/60">{BUSINESS_INFO.hours}</p>
        </div>
    </div>
);

const Contact: React.FC = () => {
    const [copied, setCopied] = useState<string | null>(null);
    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
    // Note: activeCard state removed - was set but never read

    // Mobile Scroll Logic
    const mobileTargetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: mobileTargetRef,
    });

    // Calculate horizontal movement for mobile
    const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-260vw"]);

    const handleCopy = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <>
            {/* Scroll Anchor for Navigation Links */}
            <div id="contact" />

            {/* =========================================
        DESKTOP: STANDARD GRID
       ========================================= */}
            <section id="contact-desktop" className="hidden lg:block relative py-32 bg-pop-cream overflow-hidden">
                {/* Dynamic Backgrounds */}
                <motion.div
                    animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-pop-blue/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                    animate={{ rotate: [360, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pop-pink/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"
                />

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    {/* Header */}
                    <div className="flex flex-col items-center mb-20 text-center">
                        <motion.div
                            initial={{ scale: 0, rotate: -10 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border-2 border-black px-6 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6"
                        >
                            <span className="font-bold uppercase tracking-widest text-sm text-black">
                                {CONTACT_CONTENT.badge}
                            </span>
                        </motion.div>

                        <h2 className="text-9xl font-display font-black uppercase leading-[0.85] tracking-tighter mb-8 text-pop-dark">
                            {CONTACT_CONTENT.title.line1} <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "2px black" }}>{CONTACT_CONTENT.title.line2}</span>
                        </h2>

                        <p className="font-sans text-xl font-medium max-w-2xl text-pop-dark/60">
                            {CONTACT_CONTENT.subtitle}
                        </p>
                    </div>

                    {/* Standard Grid */}
                    <div className="grid grid-cols-3 gap-8 mb-12">
                        {CONTACT_METHODS.map((option) => (
                            <ContactCard
                                key={option.id}
                                option={option}
                                copied={copied}
                                onCopy={handleCopy}
                                onHover={() => { }} // Placeholder for future hover state functionality
                                onPhoneClick={() => setIsPhoneModalOpen(true)}
                            />
                        ))}
                    </div>

                    {/* Bottom Info Grid */}
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-white border-4 border-black rounded-[2.5rem] p-8 flex items-start gap-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-pop-orange rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                                <MapPin size={32} className="text-white" />
                            </div>
                            <div>
                                <h4 className="font-display font-black uppercase text-2xl mb-3">Our Locations</h4>
                                <div className="flex flex-wrap gap-x-6 gap-y-2">
                                    {BUSINESS_INFO.locations.map((loc, i) => (
                                        <a
                                            key={i}
                                            href={loc.mapLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/loc flex items-center gap-1 font-sans font-bold text-lg text-black hover:text-pop-orange transition-colors relative"
                                        >
                                            <span className="relative">
                                                {loc.name}
                                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black scale-x-0 group-hover/loc:scale-x-100 transition-transform origin-left"></span>
                                            </span>
                                            <ArrowUpRight size={18} className="text-black group-hover/loc:translate-x-0.5 group-hover/loc:-translate-y-0.5 transition-transform" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border-4 border-black rounded-[2.5rem] p-8 flex items-center gap-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-pop-blue rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                                <Clock size={32} className="text-white" />
                            </div>
                            <div>
                                <h4 className="font-display font-black uppercase text-2xl mb-1">{BUSINESS_INFO.hoursLabel}</h4>
                                <p className="font-sans font-medium text-lg text-pop-dark/60">{BUSINESS_INFO.hours}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================
        MOBILE: CINEMATIC STICKY SCROLL 
       ========================================= */}
            <section ref={mobileTargetRef} id="contact-mobile" className="lg:hidden relative h-[250vh] bg-pop-cream">
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-end pb-12">

                    {/* Sticky Title (Fixed Background) */}
                    <div className="absolute top-0 left-0 w-full p-4 pt-20 z-0 pointer-events-none">
                        <div className="bg-white border-2 border-black px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block w-max mb-4">
                            <span className="font-bold uppercase tracking-widest text-[8px] text-black">
                                {CONTACT_CONTENT.badge}
                            </span>
                        </div>

                        {/* Reduced size to 12vw for airiness */}
                        <h2 className="text-[12vw] font-display font-black uppercase leading-[0.85] tracking-tighter text-pop-dark">
                            {CONTACT_CONTENT.title.line1} <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px black" }}>{CONTACT_CONTENT.title.line2}</span>
                        </h2>
                    </div>

                    {/* Moving Cards */}
                    <motion.div style={{ x }} className="flex gap-4 items-end w-max z-10 pl-6 mb-6">
                        {CONTACT_METHODS.map((option) => (
                            <ContactCard
                                key={option.id}
                                option={option}
                                isMobile={true}
                                copied={copied}
                                onCopy={handleCopy}
                                onHover={() => { }} // Placeholder for future hover state functionality
                                onPhoneClick={() => setIsPhoneModalOpen(true)}
                            />
                        ))}
                        <InfoCard isMobile={true} />
                        {/* Spacer to ensure last card doesn't hit edge */}
                        <div className="w-4 shrink-0" />
                    </motion.div>
                </div>
            </section>

            {/* Phone Modal */}
            <PhoneModal isOpen={isPhoneModalOpen} onClose={() => setIsPhoneModalOpen(false)} />
        </>
    );
};

export default Contact;