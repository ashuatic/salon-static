# SPIN Unisex Salon - Static Marketing Website

## Overview
This is a static marketing website for SPIN Unisex Salon Bellandur, built with modern web technologies. The site showcases the salon's services, menu, testimonials, and location information with a luxurious and inviting design.

## Tech Stack
- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3.4.1 (downgraded from v4 for stability)
- **Fonts**: Google Fonts (Playfair Display, Inter)

## Project Structure
```
├── public/               # Static assets
│   ├── *.png            # Service and testimonial images from partner site
│   └── CNAME            # GitHub Pages custom domain config
├── src/
│   ├── App.tsx          # Main application component with all content
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind directives
├── vite.config.ts       # Vite configuration (configured for Replit)
└── tailwind.config.js   # Tailwind customization (brand colors, fonts)
```

## Development Setup (Replit)
- **Development Server**: Runs on port 5000 at 0.0.0.0
- **Hot Module Replacement**: Enabled for instant updates
- **Workflow**: `npm run dev` starts the Vite dev server

## Key Features
- Modern hero section with centered "Welcome to SPIN SALON" branding
- Dual call-to-action buttons (Call and Locate Us)
- Three-card highlights section showcasing key selling points
- Service categories with high-quality images and hover effects (Hair, Skin, Makeup, Nails, Bridal)
- Complete salon menu with all services listed
- Customer testimonials with profile images
- Stats section highlighting company achievements (Years, States, Branches, Professionals)
- Location information for Bellandur branch with embedded map
- Feedback and rewards section
- Comprehensive footer with contact information and social media links

## Deployment
The site is configured for static deployment using Replit's autoscale option:
- **Build**: `npm run build` generates optimized static files in `dist/`
- **Production**: `npm run preview` serves the production build

## Recent Changes
- **2025-11-08**: Updated testimonials and contact information
  - Replaced placeholder testimonials with real Google reviews from actual customers (Priya S., Arjun M., Sneha R.)
  - Updated Support section with Bellandur-specific contact information:
    - Phone: +91 70227 93131, +91 95911 13131
    - Email: info@spinsalonbellandur.in
  - Removed Careers and Franchise links from footer
  - Footer now shows only Support and Follow Us sections
  
- **2025-11-08**: Design cleanup and refinements
  - Removed "Head Office" section from location area and footer for cleaner layout
  - Lightened gradient overlay on service images for better image visibility
  - Footer now uses 2-column layout (Support and Follow Us only)
  
- **2025-11-08**: Fixed image loading and Tailwind CSS issues
  - Downgraded Tailwind CSS from v4 to v3.4.1 for stability in Replit environment
  - Renamed postcss.config.js to postcss.config.cjs to fix ESM/CommonJS conflict
  - Replaced small partner site icons with high-quality stock images for service categories
  - Service images now use professional stock photos (hair.jpg, skin.jpg, makeup.jpg, nails.jpg, bridal.jpg)
  - Testimonial images remain from partner site (jenny.png, gabril.png, tony.png)
  - All images properly loading and displaying with vibrant purple-pink gradient design

- **2025-11-08**: Homepage redesign to match partner website
  - Redesigned homepage to match https://spinsalon.in/ aesthetic
  - Updated hero section with centered "Welcome to SPIN SALON" design
  - Added dedicated highlights section showcasing key selling points
  - Maintained all original content and CTAs while modernizing the layout
  - All images stored in /public folder for static serving

- **2025-11-08**: Initial Replit setup
  - Configured Vite for Replit environment (port 5000, host 0.0.0.0)
  - Set up development workflow
  - Configured deployment settings for static hosting
  - All dependencies installed and tested

## Custom Brand Colors
- Brand Light: #F7A8A0
- Brand Default: #E57373
- Brand Dark: #C62828

## External Resources
- Service images: High-quality stock photos for Hair, Skin, Makeup, Nails, and Bridal categories
- Testimonial images: Profile photos from partner website (Jenny, Gabril, Tony)
- Custom fonts loaded from Google Fonts (Playfair Display, Inter)
- Map: Google Maps embed for Bellandur location
