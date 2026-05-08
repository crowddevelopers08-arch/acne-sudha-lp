# Component Guide - LUMINA SKIN

## Overview
This document provides detailed information about each React component in the LUMINA SKIN landing page.

---

## Components

### 1. **Navigation** (`Navigation.tsx`)
**Purpose**: Top navigation bar (fixed position)

**Key Features**:
- Logo/brand name
- Navigation links (Science, Products, Our Story, Reviews)
- Search and shopping bag icons
- "Shop Now" CTA button
- Responsive design with mobile support

**Props**: None (stateless)

**Styling Classes**:
- `fixed top-0 w-full z-50` - Fixed positioning
- `bg-white/70 backdrop-blur-md` - Glass effect
- `border-b border-stone-200/50` - Subtle border

---

### 2. **HeroSection** (`HeroSection.tsx`)
**Purpose**: Full-height hero section with background image

**Key Features**:
- Full viewport height
- Background image with gradient overlay
- Large headline and subheading
- Dual CTA buttons (primary and secondary)
- Animated scroll indicator

**Props**: None

**Sections**:
- Brand positioning: "CLINICAL LUXURY"
- Main headline: "Your Most Radiant Self, Revealed."
- Description text
- Buttons: "Shop the Collection" & "The Science"

---

### 3. **LuminaDifference** (`LuminaDifference.tsx`)
**Purpose**: Value proposition section with 3 columns

**Key Features**:
- 3-column grid layout (responsive)
- Icon-based cards with hover effects
- Section header with decorative line

**Card Data**:
1. **Clean Ingredients** (eco icon)
2. **Clinical Results** (biotech icon)
3. **Ethical Sourcing** (public icon)

**Props**: None

---

### 4. **ProductCard** (`ProductCard.tsx`)
**Purpose**: Reusable product card component

**Props**:
```typescript
interface ProductCardProps {
  title: string;        // Product name
  description: string;  // Product ingredients/features
  price: string;        // Price in format "$XX.00"
  image: string;        // Image URL
  badge?: string;       // Optional badge (e.g., "BEST SELLER")
}
```

**Features**:
- Product image with hover zoom effect
- Optional badge positioning
- Title and description
- Price display
- "Add to Bag" button

---

### 5. **FeaturedCollection** (`FeaturedCollection.tsx`)
**Purpose**: Product grid showcase

**Key Features**:
- Responsive grid (1 col mobile, 3 cols desktop)
- Section header with "View All Products" link
- Uses `ProductCard` component

**Products Included**:
1. Radiance Glow Serum ($84.00) - "BEST SELLER"
2. Floral Dew Mist ($42.00) - "NEW ARRIVAL"
3. Deep Hydra Cream ($76.00)

---

### 6. **RitualSection** (`RitualSection.tsx`)
**Purpose**: 2-column layout with ritual steps

**Key Features**:
- Left: Stacked images with glass-morphism overlay
- Right: 3-step ritual description
- Numbered steps with descriptions
- "Learn the Ritual" CTA button

**Ritual Steps**:
1. **Cleanse** - Gentle Gel Cleanser
2. **Treat** - Radiance Glow Serum
3. **Hydrate** - Deep Hydra Cream

---

### 7. **ReviewCard** (`ReviewCard.tsx`)
**Purpose**: Customer testimonial card

**Props**:
```typescript
interface ReviewCardProps {
  rating: number;       // Star rating (1-5)
  quote: string;        // Customer testimonial
  name: string;         // Customer name
  title: string;        // Status (e.g., "Verified Customer")
  image: string;        // Customer avatar URL
}
```

**Features**:
- 5-star rating display
- Customer quote in italics
- Customer avatar (circular)
- Name and verification badge

---

### 8. **SocialProof** (`SocialProof.tsx`)
**Purpose**: Testimonials/reviews section

**Key Features**:
- 3-column grid of review cards
- Section header: "Community Voices"
- Uses `ReviewCard` component

**Featured Testimonials**:
- Sarah J. - Quick skin transformation
- Mark T. - Holy grail cream
- Elena R. - Luxury science definition

---

### 9. **NewsletterSection** (`NewsletterSection.tsx`)
**Purpose**: Email subscription CTA

**Key Features**:
- Glass-morphism card styling
- Email input with border-bottom focus effect
- Subscribe button
- Privacy policy disclaimer
- Form submission handling

**Form Fields**:
- Email input (required)
- Subscribe button
- Privacy policy text

---

### 10. **Footer** (`Footer.tsx`)
**Purpose**: Website footer with links and info

**Key Features**:
- 4-column layout:
  1. Brand info + social icons
  2. Shop links
  3. Information links
  4. Contact/hours
- Copyright and terms links

**Links Categories**:
- **Shop**: All Products, Best Sellers, New Arrivals, Gifts & Sets
- **Information**: Sustainability, Privacy, Shipping, Contact
- **Contact**: Address, Hours
- **Social**: Website, Instagram, Email

---

## Component Hierarchy

```
App
├── Navigation
├── HeroSection
├── LuminaDifference
├── FeaturedCollection
│   └── ProductCard (×3)
├── RitualSection
├── SocialProof
│   └── ReviewCard (×3)
├── NewsletterSection
└── Footer
```

---

## Styling System

### Custom Classes (in `globals.css`)
```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.glow-accent {
  box-shadow: 0 0 40px rgba(253, 116, 90, 0.1);
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
```

### Font Classes (from Tailwind config)
- `font-headline-xl` - 64px, serif, main headlines
- `font-headline-lg` - 48px, serif, section headers
- `font-headline-md` - 32px, serif, subsections
- `font-body-lg` - 18px, sans-serif, large body text
- `font-body-md` - 16px, sans-serif, regular body text
- `font-label-caps` - 12px, sans-serif, uppercase labels

### Color Palette
All colors are defined in `tailwind.config.ts` with design tokens like:
- `primary`, `secondary`, `tertiary`
- `on-surface`, `on-primary`, `on-secondary`
- `surface`, `surface-variant`, `surface-container`
- `secondary-container`, `outline`, `error`

---

## Responsive Design

### Breakpoints
- **Base** (mobile): 0px - 640px
- **md** (tablet): 640px+
- **lg** (desktop): 1024px+

### Examples
```tsx
// 1 column mobile, 3 columns on lg
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// Hidden on mobile, visible on md+
<div className="hidden md:flex items-center space-x-8">

// Full width mobile, max-width on desktop
<div className="max-w-7xl mx-auto px-6">
```

---

## Key Customization Points

### Adding New Products
Edit `FeaturedCollection.tsx` and add to the `products` array:
```typescript
{
  title: 'New Product',
  description: 'Ingredients',
  price: '$XX.00',
  image: 'url',
  badge: 'NEW ARRIVAL'
}
```

### Adding New Testimonials
Edit `SocialProof.tsx` and add to the `reviews` array:
```typescript
{
  rating: 5,
  quote: 'Customer feedback...',
  name: 'NAME',
  title: 'Verified Customer',
  image: 'url'
}
```

### Updating Colors
Edit `tailwind.config.ts` and modify color values in `extend.colors`.

### Changing Navigation Links
Edit `Navigation.tsx` and `Footer.tsx` href attributes.

---

## Performance Optimization

- Images use external URLs (can be replaced with Next.js `<Image>` component)
- Components are code-split by Next.js
- Tailwind CSS provides optimized utility classes
- No unused CSS is shipped

---

## Future Enhancements

- [ ] Add product filtering to FeaturedCollection
- [ ] Implement newsletter form submission
- [ ] Add dark mode toggle
- [ ] Create product detail pages
- [ ] Add shopping cart functionality
- [ ] Implement image optimization with Next.js Image
- [ ] Add SEO metadata per page
- [ ] Add analytics tracking

---

**Last Updated**: 2026-04-25
**Version**: 1.0
**Created for**: LUMINA SKIN Landing Page
