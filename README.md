# LUMINA SKIN - Next.js 15 Landing Page

A modern, responsive landing page for LUMINA SKIN built with **Next.js 15**, **React**, and **Tailwind CSS**. This project is a complete replica of the original HTML design, organized into reusable React components.

## 🎨 Design Features

- **Custom Color Palette**: Material Design-inspired colors with modern skin care aesthetics
- **Typography**: Google Fonts (Manrope for body text, Noto Serif for headlines)
- **Material Design Icons**: Material Symbols Outlined for consistent iconography
- **Glass Morphism Effects**: Modern frosted glass card effects
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Smooth Animations**: Tailwind CSS transitions and scroll animations

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Google Fonts
│   ├── page.tsx            # Main page combining all components
│   └── globals.css         # Global styles & custom CSS
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── HeroSection.tsx     # Hero section with CTA buttons
│   ├── LuminaDifference.tsx # 3-column value proposition section
│   ├── ProductCard.tsx     # Individual product card component
│   ├── FeaturedCollection.tsx # Product grid/collection section
│   ├── RitualSection.tsx   # 3-step ritual with images
│   ├── ReviewCard.tsx      # Customer review card
│   ├── SocialProof.tsx     # Testimonials/reviews section
│   ├── NewsletterSection.tsx # Email subscription form
│   ├── Footer.tsx          # Footer with links & info
│   └── index.ts            # Component exports
├── tailwind.config.ts      # Custom Tailwind configuration
└── next.config.ts          # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js v20.19.0 or higher
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧩 Component Documentation

### Navigation
- Fixed header with logo, navigation links, and CTA buttons
- Responsive design with mobile menu support
- Active state indicator for current section

### HeroSection
- Full-height hero with background image
- Headline, subheading, and dual CTA buttons
- Scroll indicator animation

### LuminaDifference
- 3-column value proposition layout
- Icon-based visual representation
- Hover effects on cards

### FeaturedCollection
- Grid layout for product cards (1 column mobile, 3 columns desktop)
- Product badges (Best Seller, New Arrival)
- Add to Bag button functionality

### RitualSection
- 2-column layout with image and text
- Overlaid glass-morphism image card
- 3-step numbered process

### SocialProof
- 3-column testimonial cards
- 5-star ratings
- Customer avatars and verified badges

### NewsletterSection
- Email subscription form
- Glass-morphism styling
- Privacy policy disclaimer

### Footer
- 4-column footer layout
- Links organized by category
- Social media icons
- Address and hours information

## 🎯 Key Features

✨ **Component-Based Architecture**: Each section is a standalone React component for easy maintenance and reusability

📱 **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop

🎨 **Tailwind CSS**: Custom color palette and spacing tokens defined in `tailwind.config.ts`

🔤 **Custom Fonts**: Integrated Google Fonts (Manrope & Noto Serif) with CSS variables

⚡ **Performance**: Built with Next.js 15 for optimal performance and SEO

♿ **Accessibility**: Semantic HTML and proper ARIA labels

## 🛠 Available Scripts

```bash
npm run dev       # Start development server (hot reload)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## 📦 Dependencies

- **Next.js 15**: React framework
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Manrope and Noto Serif

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette. All design colors are defined in the `extend.colors` object.

### Typography
Font configurations are in `src/app/layout.tsx`. Update font imports and CSS variables as needed.

### Spacing & Layout
Custom spacing values (stack-sm, stack-md, section-padding, etc.) are defined in `tailwind.config.ts` under `extend.spacing`.

### Images
All product and testimonial images use external URLs. Update these in respective component files:
- `FeaturedCollection.tsx` - Product images
- `RitualSection.tsx` - Ritual images
- `SocialProof.tsx` - Customer avatars
- `HeroSection.tsx` - Hero background

## 📱 Responsive Breakpoints

- **Mobile**: Default (up to 640px)
- **Tablet**: `md:` (640px and up)
- **Desktop**: `lg:` (1024px and up)

## 🔗 Navigation Links

All navigation links are currently set to `#` and ready for your actual routes. Update these in:
- `Navigation.tsx` - Main navigation
- `Footer.tsx` - Footer links

## 📝 Environment Variables

No environment variables are required for the basic setup. Add any API endpoints or configuration to `.env.local` as needed.

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
# Deploy the .next folder to your hosting platform
```

## 🐛 Troubleshooting

### Fonts not loading
Ensure Google Fonts URLs in `globals.css` are accessible and CDN is not blocked.

### Images not displaying
Check that external image URLs are accessible and not blocked by CORS policies.

### Tailwind styles not applying
Clear the `.next` build folder and rebuild:
```bash
rm -rf .next
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Development Notes

- Components use the `'use client'` directive for Next.js 15 client-side rendering
- All styling is done with Tailwind CSS utilities - no separate CSS files needed
- Custom CSS classes (glass-card, glow-accent) are defined in `globals.css`
- Material Symbols Outlined icons are used throughout for consistent iconography

---

**Built with ❤️ using Next.js 15, React, and Tailwind CSS**
