/**
 * CONTENT DATA - Single Source of Truth
 * All text, copy, and data used across the application
 * Update this file to change content throughout the entire site
 */

// =============================================================================
// HERO SECTION
// =============================================================================
export const HERO_CONTENT = {
    topBadge: 'Est. 2014 — Tradition & Innovation',
    mainTitle: {
        line1: 'TRADITION',
        line2: 'EVOLVED',
    },
    heroImage: {
        url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000&auto=format&fit=crop',
        alt: 'Healthy Food Table Spread',
    },
    tagline: {
        title: 'From Our Home to Your Table',
    },
    cta: {
        text: 'SIGNAL HQ',
        link: '#contact',
    },
} as const;

// =============================================================================
// INTRO/LOADING SECTION
// =============================================================================
export const INTRO_CONTENT = {
    brandName: 'HABITAT',
    badge: 'Prepare your senses',
    loadingText: 'Initializing',
} as const;

// =============================================================================
// MANIFESTO SECTION
// =============================================================================
export const MANIFESTO_CONTENT = {
    badge: 'Our Philosophy',
    title: {
        line1: 'We Craft Flavors',
        line2: 'That Spark Joy.',
    },
    quote: '"Born in a grandmother\'s kitchen, raised by community, and serving joy to your table since 2014."',
} as const;

// =============================================================================
// COMMUNITY SECTION
// =============================================================================
export const COMMUNITY_CONTENT = {
    badge: {
        text: 'Our Family',
    },
    title: {
        line1: 'Powered by',
        line2: 'Community',
    },
    subtitle: 'More than a food business—we\'re a growing ecosystem of talented individuals united by passion.',
    stats: [
        {
            number: '30+',
            label: 'Direct Team',
            description: 'Dedicated staff members who bring their passion and expertise to craft every product with care.',
            bgColor: 'bg-pop-blue',
            textColor: 'text-white',
            iconType: 'users',
            badges: ['Quality Focused', 'Trained Experts', 'Family Values'],
        },
        {
            number: '20+',
            label: 'Local Artisans',
            description: 'Skilled local mothers in our neighborhood who supply products exclusively to us.',
            bgColor: 'bg-pop-yellow',
            textColor: 'text-black',
            iconType: 'heart',
            badges: ['Women Empowerment', 'Local First', 'Handcrafted'],
        },
    ],
    values: [
        {
            iconType: 'shieldCheck',
            title: 'Tradition',
            description: 'Honoring the past.',
            color: 'bg-pop-pink',
        },
        {
            iconType: 'award',
            title: 'Quality',
            description: 'No shortcuts.',
            color: 'bg-pop-blue',
        },
        {
            iconType: 'badgeDollarSign',
            title: 'Value',
            description: 'Accessible luxury.',
            color: 'bg-pop-yellow',
        },
        {
            iconType: 'sparkles',
            title: 'Hygiene',
            description: 'Safety first.',
            color: 'bg-pop-green',
        },
    ],
    bottomMessage: {
        title: 'Growing Together',
        description: 'Impacting 50+ lives daily through sustainable work.',
        iconColors: ['bg-pop-pink', 'bg-pop-blue', 'bg-pop-yellow', 'bg-pop-green', 'bg-pop-orange'],
        icons: ['chefHat', 'userPlus', 'heart', 'users', 'flower2'],
    },
} as const;

// =============================================================================
// EXPANSION SECTION
// =============================================================================
export const EXPANSION_CONTENT = {
    badge: 'Coming Soon',
    title: {
        line1: 'The Next',
        line2: 'Evolution',
    },
    projectCode: 'EXPANSION_02',
    features: [
        {
            title: 'Centralized Kitchen',
            description: 'A 5,000 sqft innovation lab.',
        },
        {
            title: 'Healthy Menu 2.0',
            description: 'Macros calculated. Flavor maximized.',
        },
        {
            title: 'Gourmet Retail Range',
            description: 'Take the Habitat magic home.',
        },
    ],
    image: {
        url: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?q=80&w=2600&auto=format&fit=crop',
        alt: 'Blueprint',
    },
    location: {
        mapLink: 'https://maps.app.goo.gl/4He2RxYiDCTAQcXc6?g_st=ipc',
        buttonText: {
            line1: 'Coming',
            line2: 'Soon',
            line3: 'View Location ↗',
        },
    },
} as const;

// =============================================================================
// CONTACT SECTION
// =============================================================================
export const CONTACT_CONTENT = {
    badge: 'Communication Portal',
    title: {
        line1: 'Signal',
        line2: 'Us',
    },
    subtitle: 'Choose your frequency. Our team is standing by to secure your habitat.',
    phoneNumbers: [
        {
            number: '9947109629',
            label: 'Chiyyaram',
        },
        {
            number: '8606109629',
            label: 'Vadookara',
        },
    ],
    operatingHours: 'Operating Hours: 05:00 AM — 08:00 PM',
} as const;

// =============================================================================
// FOOTER
// =============================================================================
export const FOOTER_CONTENT = {
    title: {
        line1: 'Let\'s make',
        line2: 'History',
    },
    social: [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/connect.habitat/?igsh=enB3MGc4Z3ZiMnh0&utm_source=qr',
            external: true,
        },
    ],
    legal: [
        {
            name: 'Privacy',
            url: '/privacy',
        },
    ],
    copyright: '© 2014 Habitat',
    location: 'Kerala — India',
    brandName: 'HABITAT',
} as const;

// =============================================================================
// TYPE EXPORTS (for TypeScript IntelliSense)
// =============================================================================
export type HeroContent = typeof HERO_CONTENT;
export type IntroContent = typeof INTRO_CONTENT;
export type ManifestoContent = typeof MANIFESTO_CONTENT;
export type CommunityContent = typeof COMMUNITY_CONTENT;
export type ExpansionContent = typeof EXPANSION_CONTENT;
export type ContactContent = typeof CONTACT_CONTENT;
export type FooterContent = typeof FOOTER_CONTENT;
