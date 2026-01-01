/**
 * Design System Constants
 * Centralized values for consistent styling across the application
 */

// =============================================================================
// BRAND COLORS (matching Tailwind config in index.html)
// =============================================================================
export const COLORS = {
  'pop-blue': '#2E5CFF',
  'pop-pink': '#FFADDD',
  'pop-orange': '#FF6B00',
  'pop-yellow': '#FACC15',
  'pop-green': '#25D366',
  'pop-cream': '#FFFDF5',
  'pop-dark': '#1A1A1A',
} as const;

// Tailwind class mappings
export const BG_COLORS = {
  blue: 'bg-pop-blue',
  pink: 'bg-pop-pink',
  orange: 'bg-pop-orange',
  yellow: 'bg-pop-yellow',
  green: 'bg-pop-green',
  cream: 'bg-pop-cream',
  dark: 'bg-pop-dark',
} as const;

export const TEXT_ON_BG = {
  'bg-pop-blue': 'text-white',
  'bg-pop-pink': 'text-black',
  'bg-pop-orange': 'text-white',
  'bg-pop-yellow': 'text-black',
  'bg-pop-green': 'text-white',
  'bg-pop-cream': 'text-black',
  'bg-pop-dark': 'text-white',
} as const;

// =============================================================================
// SHADOWS
// =============================================================================
export const SHADOWS = {
  /** Small shadow for buttons and small elements */
  sm: '3px_3px_0px_0px_rgba(0,0,0,1)',
  /** Medium shadow for cards and medium elements */
  md: '4px_4px_0px_0px_rgba(0,0,0,1)',
  /** Large shadow for featured elements */
  lg: '6px_6px_0px_0px_rgba(0,0,0,1)',
  /** Extra large shadow for hero elements */
  xl: '8px_8px_0px_0px_rgba(0,0,0,1)',
  /** Extra extra large shadow for desktop featured elements */
  xxl: '12px_12px_0px_0px_rgba(0,0,0,1)',
  /** Soft shadow variant */
  soft: (size: 'sm' | 'md' | 'lg' | 'xl') => {
    const values = { sm: 4, md: 8, lg: 12, xl: 16 };
    return `${values[size]}px_${values[size]}px_0px_0px_rgba(0,0,0,0.2)`;
  },
} as const;

// =============================================================================
// Z-INDEX SCALE
// =============================================================================
export const Z_INDEX = {
  /** Base content */
  base: 0,
  /** Elevated content (cards, dropdowns) */
  elevated: 10,
  /** Sticky headers */
  sticky: 20,
  /** Fixed navigation */
  fixed: 30,
  /** Floating elements (FAB, floating contact) */
  floating: 40,
  /** Navbar and header */
  navbar: 50,
  /** Full-screen overlays (menus, modals) */
  overlay: 100,
  /** Custom cursor */
  cursor: 9999,
  /** Intro/loading overlay - highest priority */
  intro: 10000,
} as const;

// =============================================================================
// ANIMATION TIMING
// =============================================================================
export const ANIMATION = {
  /** Duration in milliseconds */
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
    verySlow: 700,
    loader: 1000,
  },
  /** Transition delays in milliseconds */
  delay: {
    stagger: 50,
    short: 100,
    medium: 200,
    long: 300,
  },
  /** Easing functions */
  easing: {
    /** Default smooth easing */
    default: 'cubic-bezier(0.16, 1, 0.3, 1)',
    /** Sharp easing for quick interactions */
    sharp: 'cubic-bezier(0.76, 0, 0.24, 1)',
    /** Bounce easing for playful animations */
    bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;

// =============================================================================
// BORDER RADIUS
// =============================================================================
export const RADIUS = {
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
  '4xl': '3.5rem',
  full: '9999px',
} as const;

// =============================================================================
// BREAKPOINTS (matching Tailwind defaults)
// =============================================================================
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// =============================================================================
// MENU CATEGORIES
// =============================================================================
export type MenuCategory = 'all' | 'ready-to-cook' | 'ready-to-eat' | 'snacks' | 'packed-snacks' | 'others';

export const MENU_CATEGORIES: MenuCategory[] = [
  'all',
  'ready-to-cook',
  'ready-to-eat',
  'snacks',
  'packed-snacks',
  'others',
];

export const CATEGORY_LABELS: Record<MenuCategory, string> = {
  'all': 'All',
  'ready-to-cook': 'Ready to Cook',
  'ready-to-eat': 'Ready to Eat',
  'snacks': 'Snacks',
  'packed-snacks': 'Packed Snacks',
  'others': 'Others',
};
