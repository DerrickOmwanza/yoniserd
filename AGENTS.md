# AGENTS.md - Development Guidelines for YNIS-RD Website

## Commands

- **Start dev server**: `npm start` (runs on localhost:3000)
- **Build for production**: `npm run build`
- **Run tests**: `npm test` (interactive watch mode)
- **Single test run**: `npm test -- --testPathPattern=<test-name> --watchAll=false`
- **Lint**: ESLint is configured via Create React App (extends react-app/jest presets)

## Architecture & Structure

**Tech Stack**: React 19, React Router 7, TailwindCSS, PostCSS  
**No database** - static site with hardcoded content

**Key directories**:
- `src/pages/` - Route pages (Home, About, Contact, Programs, OurWork, News, Impact, NotFound)
- `src/components/` - Reusable components (Navbar, Footer, Layout, ImageSlideshow, ImpactMetrics)
- `src/assets/` - Images and static files
- `src/constants/` - Config values (contact info, social links, etc.)
- `src/index.css` - Global Tailwind styles
- `public/` - Static HTML/assets

**Key Components**:
- **Layout.jsx** - Wrapper providing Navbar/Footer/main content structure
- **Navbar.jsx** - Sticky navigation with desktop dropdowns and mobile hamburger menu
- **Footer.jsx** - Site footer with links and contact info
- **ImpactMetrics.jsx** - Stats display component
- **ImageSlideshow.jsx** - Carousel/image gallery component

**Routing** handled in App.js with React Router v7 (BrowserRouter, Routes, Route).

## Code Style & Conventions

**File naming**: Use `.jsx` for component files (not `.js`)  
**Functional components** - Use React hooks (useState, useEffect, etc.)  
**Props**: No PropTypes (consider adding for type safety)  

**Imports**: Group as:
1. React/Router imports first
2. Internal components/utils
3. Assets last

**Styling**: TailwindCSS utility classes (no separate CSS files except global); semantic HTML with ARIA labels  

**Naming**: camelCase for variables/functions, PascalCase for components  
**Error handling**: No error boundaries yet - add ErrorBoundary component for production  
**Testing**: React Testing Library setup included (setupTests.js configures jest-dom)  

**Code quality**: Follow recommendations in STANDARDIZATION_RECOMMENDATIONS.md - accessibility (WCAG 2.1), mobile-responsive, semantic HTML, proper heading hierarchy, ARIA labels

## Accessibility Standards (WCAG 2.1 Level AA)

**Skip Link**: Already implemented in Layout.jsx - press `Tab` to reveal
**Heading Hierarchy**: h1 for pages, h2 for sections, h3 for subsections (no skipping levels)
**Keyboard Focus**: Blue outline (#7EBBBFF) on all interactive elements via `:focus-visible`
**Mobile Menu**: Fully keyboard accessible with `aria-expanded` on dropdowns
**Reduced Motion**: Respects `prefers-reduced-motion` system setting for animations
**Color Contrast**: Target AA standard (4.5:1 for normal text)
**Image Alt Text**: All images must have descriptive alt text or `alt=""`

**Testing**: See ACCESSIBILITY_TESTING_GUIDE.md and QUICK_A11Y_CHECK.md for verification steps
