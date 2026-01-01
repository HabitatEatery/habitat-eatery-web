import React, { useState, useEffect } from 'react';
import { Phone, Mail, X, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from '../icons';
import { CONTACT_METHODS } from '../../data/contactData';
import PhoneModal from './PhoneModal';

// Get contact links from centralized data
const whatsappMethod = CONTACT_METHODS.find(m => m.id === 'whatsapp');
const emailMethod = CONTACT_METHODS.find(m => m.id === 'email');
// Phone method link will be handled via modal

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.9) {
          setIsVisible(false);
          setIsOpen(false);
        } else {
          setIsVisible(true);
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <PhoneModal isOpen={isPhoneModalOpen} onClose={() => setIsPhoneModalOpen(false)} />

      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <div className={`flex flex-col gap-3 mb-1 items-end transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          {[
            { icon: WhatsAppIcon, color: 'bg-pop-green', href: whatsappMethod?.link || '#', label: 'WhatsApp', variant: 'filled' as const, onClick: undefined },
            { icon: Mail, color: 'bg-pop-pink', href: emailMethod?.link || '#', label: 'Email', variant: undefined, onClick: undefined },
            {
              icon: Phone,
              color: 'bg-pop-yellow',
              href: '#',
              label: 'Call',
              variant: undefined,
              onClick: (e: React.MouseEvent) => {
                e.preventDefault();
                setIsPhoneModalOpen(true);
              }
            }
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 transition-all duration-300"
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
            >
              <span className="text-xs font-bold uppercase bg-black text-white px-2 py-1 rounded shadow-md hidden md:block">{item.label}</span>
              <a
                href={item.href}
                onClick={item.onClick}
                target={item.onClick ? undefined : "_blank"}
                rel={item.onClick ? undefined : "noreferrer"}
                className={`w-12 h-12 md:w-14 md:h-14 ${item.color} rounded-full border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer`}
                data-hover="true"
              >
                <item.icon size={20} className="text-black" />
              </a>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 md:w-16 md:h-16 ${isOpen ? 'bg-black text-white' : 'bg-white text-black'} rounded-full border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all z-50`}
          data-hover="true"
          aria-label="Quick Connect"
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-100' : 'rotate-0 opacity-0'}`}><X size={24} /></div>
            <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
              <MessageSquare size={24} className="fill-current" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-pop-orange rounded-full animate-ping" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-pop-orange rounded-full border border-white" />
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default FloatingContact;