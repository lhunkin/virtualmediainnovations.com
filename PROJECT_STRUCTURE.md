# Virtual Media Innovations - Next.js Project Structure

## Project Overview
A dark/cyberpunk-themed creative studio website built with Next.js, featuring:
- Electric blue (#00A6FF), neon green (#00FF1A), and yellow (#FBFF8C) on black
- Space Grotesk font
- Glass-morphism cards with glow effects
- Canvas particle animations (no Three.js)
- Framer Motion animations

## File Structure

### Components (src/components/)

1. **Navigation.tsx** - Fixed navigation bar
   - Logo with gradient text
   - Desktop and mobile navigation links
   - Glass morphism effect on scroll
   - Mobile hamburger menu with AnimatePresence
   - "Start a Project" CTA button

2. **ParticleField.tsx** - Canvas-based particle animation
   - 50 floating particles in blue, green, yellow
   - Particle connections with distance-based opacity
   - Smooth drift animation using requestAnimationFrame
   - Glow effects on particles

3. **Hero.tsx** - Full viewport hero section
   - Dynamic ParticleField background
   - Ambient glow blobs
   - "We Build Virtual Worlds" headline with gradient
   - Service subtitle
   - Dual CTAs with animations
   - Animated scroll indicator

4. **Services.tsx** - 6-column service grid
   - Virtual World Design
   - Concept Art & Illustration
   - Video Game Assets
   - RPG & Tabletop Design
   - Animation & Motion
   - Creative Direction
   - Hover glow effects and icon transitions

5. **Portfolio.tsx** - Filterable project grid
   - 5 category filters (All, Worlds, Characters, Environments, Motion)
   - 6 placeholder projects with gradients
   - AnimatePresence for smooth transitions
   - Tags and descriptions

6. **FlagshipProject.tsx** - World of Asphodel showcase
   - Hero banner with gradient overlay
   - 4 feature cards with checkmarks
   - Link to worldofasphodel.com
   - "Coming Soon" badge for World Builder

7. **WorldBuilder.tsx** - Coming Soon section
   - 4-step process visualization
   - Email waitlist signup form
   - Feature messaging for platform
   - Success state after submission

8. **About.tsx** - About section with stats
   - Split layout (decorative left, content right)
   - 4 stat cards (50+ Projects, 12 Worlds, 5K+ Assets, 100% Satisfaction)
   - Company description
   - Gradient decorative elements

9. **Team.tsx** - Team member showcase
   - Larry Hunkin (Founder & Creative Director) with social links
   - 2 open position placeholders
   - Gradient ring avatars
   - "Apply Now" buttons for positions

10. **FAQ.tsx** - 7 accordion items
    - Services questions
    - World of Asphodel info
    - World Builder platform details
    - 5e SRD compatibility
    - Pricing and collaboration options
    - Animated expand/collapse

11. **Contact.tsx** - Contact form and info
    - Name, email, project type, message fields
    - 3 info cards (email, location, response time)
    - Success state with CheckCircle icon
    - Glass-card styling

12. **Footer.tsx** - 4-column footer
    - Brand column with logo and social icons
    - Studio links
    - Projects links
    - Resources links
    - Copyright and legal links

13. **BlogList.tsx** (in src/components/) - Blog post listings
    - 3 placeholder "Coming Soon" posts
    - Date and read time
    - Category tags
    - Hover effects

### Pages (src/app/)

14. **page.tsx** - Home page
    - Composes all main sections
    - Navigation → Hero → Services → Portfolio → FlagshipProject → WorldBuilder → About → Team → FAQ → Contact → Footer

15. **blog/page.tsx** - Blog listing page
    - Navigation and Footer
    - Blog introduction
    - BlogList component

16. **blog/BlogList.tsx** - Blog list component
    - Same structure as src/components/BlogList.tsx
    - Separate file for blog page

17. **next-env.d.ts** - TypeScript declarations
    - Standard Next.js type definitions

## Design System

### Colors
- **Primary (Blue)**: #00A6FF
- **Neon (Green)**: #00FF1A
- **Yellow**: #FBFF8C
- **Background**: Black (#000000)

### Tailwind Classes Used
- Glass morphism: `glass`, `glass-strong`, `glass-card`
- Gradients: `text-gradient-blue-green`, `text-gradient-blue-yellow`, `text-gradient-green-yellow`
- Glows: `glow-blue`, `glow-green`, `shadow-glow`, `shadow-glow-green`, `shadow-glow-yellow`

### Typography
- Font: Space Grotesk (via Tailwind config)
- Responsive sizing with Tailwind breakpoints

### Animations
- **Framer Motion**: Container stagger, fade-in, slide-up, scale animations
- **Canvas**: Particle drift with connecting lines
- **CSS**: Animate-pulse for glow blobs, scrolling chevron animation

## Key Features

- **No Three.js**: Uses canvas for particle effects
- **Mobile Responsive**: Mobile hamburger menu, responsive grids
- **Glass Morphism**: Frosted glass cards and navigation
- **Dark Cyberpunk Theme**: Dark background with neon accents
- **Animation-Rich**: Entry animations, hover effects, scroll indicators
- **Accessibility**: Proper semantic HTML, ARIA labels where needed
- **Performance**: Dynamic imports for heavy components (ParticleField)

## Dependencies
- Next.js (App Router)
- React 18+
- Framer Motion
- Lucide React (icons)
- Tailwind CSS

## Notes
- All image placeholders use gradient divs instead of Image components
- "use client" directives used for client-side components
- Server components (pages) don't have "use client"
- Proper TypeScript typing throughout
- No external Three.js or 3D libraries
