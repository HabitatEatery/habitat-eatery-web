import React from 'react';
import { MenuItem } from '../../types';
import { CARD_COLORS, TEXT_COLORS, WHATSAPP_ORDER_NUMBER } from '../../data/menuData';
import { CATEGORY_LABELS, MenuCategory } from '../../constants';

interface MenuCardProps {
    item: MenuItem;
    index: number;
    className?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index, className = "" }) => {
    const bgColor = CARD_COLORS[index % CARD_COLORS.length];
    const textColor = TEXT_COLORS[index % TEXT_COLORS.length];

    return (
        <div className={`${className} ${bgColor} rounded-[2.5rem] md:rounded-[3rem] border-4 border-black flex flex-col`}>
            {/* Image Container */}
            <div className="w-full aspect-square md:aspect-auto md:h-[55%] rounded-[2rem] border-2 border-black overflow-hidden mb-6 relative bg-white">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
            </div>

            {/* Content Container */}
            <div className={`flex-1 flex flex-col justify-between ${textColor} overflow-hidden`}>
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider border border-current px-2 rounded-full opacity-60">
                            {CATEGORY_LABELS[item.category as MenuCategory] || item.category}
                        </span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-display font-black leading-[0.95] mb-3 break-words">
                        {item.name}
                    </h4>
                    <p className="font-sans text-sm md:text-base font-medium opacity-90 leading-tight line-clamp-2">
                        {item.description}
                    </p>
                </div>
                <a
                    href={`https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hi! I'd like to order ${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start mt-6 md:mt-4 px-6 py-3 bg-black text-white rounded-full font-bold uppercase text-sm border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors"
                    data-hover="true"
                >
                    Order Now
                </a>
            </div>
        </div>
    );
};

export default MenuCard;