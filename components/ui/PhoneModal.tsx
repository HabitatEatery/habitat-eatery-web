import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import { CONTACT_CONTENT } from '../../data/content';

interface PhoneModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PhoneModal: React.FC<PhoneModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-pop-yellow border-4 border-black rounded-[2rem] p-8 max-w-md w-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black border-2 border-black transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Header */}
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-black rounded-full border-2 border-black flex items-center justify-center mb-4">
                                    <Phone size={32} className="text-pop-yellow" />
                                </div>
                                <h3 className="text-4xl font-display font-black uppercase leading-none mb-2">Call Us</h3>
                                <p className="font-sans text-sm font-medium text-gray-700">Choose a location to call</p>
                            </div>

                            {/* Phone Numbers */}
                            <div className="space-y-4">
                                {CONTACT_CONTENT.phoneNumbers.map((phone, index) => (
                                    <a
                                        key={index}
                                        href={`tel:${phone.number}`}
                                        className="block bg-white border-2 border-black rounded-xl p-4 hover:bg-black hover:text-white transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-display font-bold uppercase text-sm mb-1 opacity-70">{phone.label}</div>
                                                <div className="font-mono font-bold text-xl">{phone.number}</div>
                                            </div>
                                            <div className="w-12 h-12 bg-black group-hover:bg-white border-2 border-black rounded-full flex items-center justify-center transition-colors">
                                                <Phone size={20} className="text-white group-hover:text-black" />
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Footer Note */}
                            <div className="mt-6 p-4 bg-black/5 rounded-lg border border-black/10">
                                <p className="text-xs font-mono font-bold text-black text-center uppercase tracking-wider">
                                    {CONTACT_CONTENT.operatingHours}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PhoneModal;
