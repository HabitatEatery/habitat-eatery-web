export type BrandColor = 'bg-pop-blue' | 'bg-pop-pink' | 'bg-pop-yellow' | 'bg-pop-orange' | 'bg-pop-green' | 'bg-pop-cream' | 'bg-pop-dark';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'starter' | 'main' | 'dessert' | 'cocktail';
  featured?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  link: string;
  // We store the icon name or component reference separately if needed, 
  // but for data files we usually keep it simple. 
  // Here we will map IDs to Icons in the component to keep data serializable.
  color: BrandColor;
  textColor: string;
  description: string;
  action: string;
}

export interface Location {
  name: string;
  mapLink: string;
}

export interface BusinessInfo {
  locations: Location[];
  hours: string;
  hoursLabel: string;
}