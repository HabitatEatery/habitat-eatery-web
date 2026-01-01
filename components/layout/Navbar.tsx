import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "Our Story", href: "#story" },
    { label: "Menu", href: "#menu" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-4 md:p-8 z-50 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <a href="#hero" className="block bg-white border-2 border-black px-5 py-2 md:px-6 md:py-2 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
            <span className="text-lg md:text-xl font-display font-black uppercase text-black tracking-tight">
              Habitat<span className="text-pop-blue">.</span>
            </span>
          </a>
        </div>

        <div className="pointer-events-auto">
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="w-12 h-12 md:w-14 md:h-14 bg-pop-yellow rounded-full border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group z-50 relative"
            data-hover="true"
          >
            <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
              <Menu size={20} className={`absolute transition-all duration-300 md:w-6 md:h-6 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} aria-hidden="true" />
              <X size={20} className={`absolute transition-all duration-300 md:w-6 md:h-6 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} aria-hidden="true" />
            </div>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-pop-blue z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav role="navigation" aria-label="Main navigation" className="relative z-10 flex flex-col items-center gap-4 md:gap-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-4xl md:text-6xl font-display font-black text-white hover:text-pop-yellow hover:scale-110 transition-all duration-300 uppercase tracking-tight transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-hover="true"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;