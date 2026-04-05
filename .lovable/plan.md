
# DC Men's Zone — Ultra-Premium Luxury Website

## Overview
A 5-page cinematic luxury website for DC Men's Zone (Dhian Chand & Co.), a bespoke men's tailoring brand in Amritsar. Warm ivory palette, serif headings, smooth scroll animations, and high-end visual storytelling.

## Design System
- **Colors**: Warm ivory (#F5F2ED), soft beige (#EFEAE3), deep black (#1A1A1A), grey (#6B6B6B), accent red (#C62828), WhatsApp green (#25D366), call green (#34A853)
- **Typography**: Playfair Display (headings), Inter (body) via Google Fonts
- **Animations**: Intersection Observer fade-in/slide-up, hover zoom on images, parallax hero, smooth page transitions

## Global Elements
- **Navbar**: Transparent → solid on scroll, elegant logo text, nav links to all 5 pages
- **Sticky CTAs**: Fixed bottom-right WhatsApp + Call circle buttons with hover lift/glow
- **Footer**: Brand info, quick links, social icons, contact details

## Pages

### 1. Homepage
- Full-width hero with slow-zoom background, blur overlay, heading "Crafted for the Modern Gentleman", two CTA buttons
- Brand intro section (text + image side by side)
- 3 service preview cards (Bespoke / Ready-Made / Premium Fabrics)
- Fabric texture showcase section with blur overlay
- Gallery preview grid (hover zoom)
- Final CTA banner

### 2. Services
- Three full-width alternating sections (image left/right) for each service
- Each with description, Book Appointment + Call buttons
- Fade-in scroll animations

### 3. Gallery
- Filter tabs: All / Suits / Wedding / Fabrics / Store
- Masonry grid layout with hover zoom effect
- Lightbox modal for full-screen image viewing
- "See more on Instagram" CTA link

### 4. Our Craft
- 4-step storytelling: Consultation → Fabric Selection → Measurements → Final Fitting
- Full-width alternating image+text sections with timeline/step indicators
- Fade-in animations per section
- Final CTA: "Book Your Fitting Now" → WhatsApp

### 5. Contact Us
- Address, phone numbers, WhatsApp button
- Social links (Instagram, Facebook)
- Embedded Google Map
- Contact form / Book Appointment CTA

## Technical Notes
- React Router for multi-page navigation
- Intersection Observer hook for scroll animations
- All images use Unsplash placeholders (suit/tailoring/fabric themed) ready for client replacement
- Framer Motion-free — pure CSS animations for performance
