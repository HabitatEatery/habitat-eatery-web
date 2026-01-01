import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { MENU_ITEMS, WHATSAPP_ORDER_NUMBER } from '../../data/menuData';
import { MenuCategory, MENU_CATEGORIES, CATEGORY_LABELS } from '../../constants';

interface FullMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const FullMenu: React.FC<FullMenuProps> = ({ isOpen, onClose }) => {
    const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
    const filteredItems = activeCategory === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(item => item.category === activeCategory);

    return (
        <div
            className={`fixed inset-0 z-[100] bg-pop-cream overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        >
            <div className="flex justify-between items-center mb-12 sticky top-0 bg-pop-cream/90 backdrop-blur-md py-4 z-20 border-b-2 border-black/10 px-6 md:px-12">
                <h2 className="text-4xl md:text-8xl font-display font-black uppercase tracking-tighter">Full Menu</h2>
                <button
                    onClick={onClose}
                    aria-label="Close menu"
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-pop-pink border-2 border-black flex items-center justify-center hover:scale-110 transition-transform"
                    data-hover="true"
                >
                    <X size={24} className="md:w-8 md:h-8" aria-hidden="true" />
                </button>
            </div>

            <div className="min-h-screen relative p-6 md:p-12">
                <div className="mb-12 flex flex-wrap gap-4">
                    {MENU_CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 md:px-8 md:py-3 rounded-full border-2 border-black font-bold uppercase tracking-wider text-xs md:text-sm transition-all ${activeCategory === cat ? 'bg-black text-white' : 'bg-white text-black hover:bg-pop-blue hover:text-white'}`}
                            data-hover="true"
                        >
                            {CATEGORY_LABELS[cat]}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-white rounded-[2.5rem] border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all animate-fade-in"
                        >
                            <div className="h-64 overflow-hidden border-b-4 border-black relative">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-3xl font-display font-black uppercase leading-none mb-4">{item.name}</h3>
                                <p className="font-sans font-medium text-pop-dark/60 mb-6 line-clamp-2">{item.description}</p>
                                <div className="flex justify-between items-center mt-auto">
                                    <span className="text-xs font-bold uppercase tracking-wider bg-pop-dark/10 px-3 py-1 rounded-lg">{item.category}</span>
                                    <a
                                        href={`https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hi! I'd like to order ${encodeURIComponent(item.name)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Order ${item.name}`}
                                        className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-pop-blue transition-colors group-hover:rotate-[-45deg] transition-transform duration-300"
                                    >
                                        <ArrowRight size={18} aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullMenu;