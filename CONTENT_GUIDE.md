# Content Management Guide

## Single Source of Truth

All text content, copy, and data across the Habitat Eatery website is now centralized in **`/data/content.ts`**. This makes it easy to update content throughout the entire site from one location.

## File Structure

```
/data
  ├── content.ts       # Main content data (NEW - Single source of truth)
  ├── contactData.ts   # Contact methods and business info
  └── menuData.ts      # Menu items and categories
```

## How to Update Content

### 1. Hero Section
**File**: `data/content.ts` → `HERO_CONTENT`

```typescript
export const HERO_CONTENT = {
  topBadge: 'Est. 2014 — Future Gastronomy',
  mainTitle: {
    line1: 'TASTE',
    line2: 'BOLDLY',
  },
  heroImage: {
    url: '...', 
    alt: 'Signature Dish',
  },
  // ... more fields
}
```

### 2. Manifesto Section
**File**: `data/content.ts` → `MANIFESTO_CONTENT`

Update the philosophy badge, title, and quote from here.

### 3. Community Section
**File**: `data/content.ts` → `COMMUNITY_CONTENT`

Includes:
- Team statistics (30+ Direct Team, 20+ Local Artisans)
- Core values (Tradition, Quality, Value, Hygiene)
- Bottom message

**Note**: Icons are mapped automatically using the `iconType` field. Available icon types:
- `users`, `heart`, `sparkles`, `award`, `chefHat`, `userPlus`, `flower2`, `shieldCheck`, `badgeDollarSign`

### 4. Expansion (Coming Soon) Section
**File**: `data/content.ts` → `EXPANSION_CONTENT`

Update:
- Project code
- Features list
- Location map link
- Images

### 5. Contact Section
**File**: `data/content.ts` → `CONTACT_CONTENT`

Includes:
- Section title and badge
- Phone numbers for modal (Chiyyaram, Vadookara)
- Operating hours

**Note**: Contact methods (WhatsApp, Email, Phone) are still in `/data/contactData.ts`

### 6. Footer
**File**: `data/content.ts` → `FOOTER_CONTENT`

Update:
- Social media links
- Legal links
- Copyright text
- Location

## Example: Changing Hero Title

**Before** (hardcoded in component):
```tsx
<h1>TASTE</h1>
<h1>BOLDLY</h1>
```

**After** (centralized):
1. Edit `/data/content.ts`:
```typescript
export const HERO_CONTENT = {
  mainTitle: {
    line1: 'EAT',      // Changed from 'TASTE'
    line2: 'FEARLESSLY', // Changed from 'BOLDLY'
  },
  // ...
}
```

2. The change automatically appears on the website!

## Benefits

✅ **Single Update, Everywhere**: Change content once, updates everywhere  
✅ **Easy Maintenance**: All copy in one place  
✅ **Type Safety**: TypeScript ensures data structure consistency  
✅ **Clear Organization**: Grouped by section  
✅ **No Component Changes**: Update content without touching React components  

## Important Files

| File | Purpose |
|------|---------|
| `/data/content.ts` | **Main content** - All text, titles, descriptions |
| `/data/contactData.ts` | Contact methods, locations, business hours |
| `/data/menuData.ts` | Menu items and categories |
| `/constants.ts` | Design system (colors, shadows, animations) |

## Tips

- Always update content through data files, never directly in components
- Use descriptive names when adding new content fields
- Keep the structure organized by section
- Add type exports for better TypeScript IntelliSense
