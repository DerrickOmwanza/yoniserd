# YNIS-RD Website - Unified Color Scheme

## Overview
The website now uses a balanced, consistent color distribution across all pages using the established color palette from `index.css`.

## Color Classes Used

### 1. **Dark Gradients** (Hero sections, top-level content)
- **Class**: `bg-gradient-ocean`
- **Usage**: Contact page hero, News page main section
- **Colors**: Dark blue gradient (#06141B → #11212D → #253745)
- **Text**: White/Light text
- **Purpose**: Creates dramatic entry points with high contrast

### 2. **Indigo/Contrast** (Impact sections, dark backgrounds)
- **Class**: `bg-gradient-contrast`
- **Usage**: News page main grid background
- **Colors**: Very dark blue gradient (#06141B → #11212D)
- **Text**: White/Light text
- **Purpose**: Provides strong backdrop for light content cards

### 3. **Light Backgrounds** (Content sections)
- **Class**: `bg-light`
- **Usage**: Home page (About, News), Programs page (Partnerships)
- **Colors**: Light grey gradient (#CCD0CF → #E8EBEA)
- **Text**: Dark text
- **Purpose**: Clean, readable sections between dark areas

### 4. **Sunrise/Warm** (Call-to-action sections)
- **Class**: `brand-sunrise` or inline color `#8B1538`
- **Usage**: Contact page volunteer section, About page awards
- **Colors**: Warm burgundy/crimson gradient
- **Text**: White text
- **Purpose**: Energetic, action-oriented sections

### 5. **Sunrise Gradient** (Alternative light sections)
- **Class**: `bg-gradient-sunrise`
- **Usage**: Programs page main background, About page values
- **Colors**: Light grey to blue-grey gradient
- **Text**: Dark text
- **Purpose**: Alternative light section without stark white

## Page-by-Page Breakdown

### Home Page
- Hero: Dark gradient (brand-hero)
- About section: Light background (bg-light)
- Programs highlight: Warm sunrise (brand-sunrise)
- Impact metrics: Default section
- News/Stories: Light background (bg-light)
- Core values: Light background (bg-light)
- CTA: Warm sunrise (brand-sunrise)

### About Page
- Overview: Dark ocean gradient (bg-gradient-ocean)
- CEO Message: Light background (bg-light)
- Awards: Warm sunrise (brand-sunrise)
- Core Values: Sunrise gradient (bg-gradient-sunrise)

### Programs Page
- Main: Sunrise gradient (bg-gradient-sunrise)
- Partnerships: Light background (bg-light)

### News Page
- Header: Brand pink-blue gradient
- Filter section: Dark ocean gradient (bg-gradient-ocean)
- Stories grid: Dark contrast gradient (bg-gradient-contrast)
- Cards: White foreground on dark background
- CTA: Dark ocean gradient (bg-gradient-ocean)

### Contact Page
- Hero: Dark ocean gradient (bg-gradient-ocean)
- Form section: White form on dark background
- Contact info: Light cards on dark background
- Volunteer: Burgundy background (#8B1538)

### Our Work Page
- Uses: Dark indigo gradient (bg-gradient-indigo)

## Text Contrast Rules

### On Dark Backgrounds (Ocean, Contrast, Indigo)
- Headings: White (`text-white` or `text-white-primary`)
- Body text: Light white with opacity (`text-white/90` or `text-white-secondary`)
- All text has minimum contrast ratio of 7:1 for AA+ compliance

### On Light Backgrounds (Light, Sunrise)
- Headings: Dark text (`text-primary`)
- Body text: Dark secondary text (`text-secondary`)
- All text has minimum contrast ratio of 7:1 for AA+ compliance

## Color Hex Values Reference

```
--color-1 (Dark): #06141B
--color-2 (Medium-Dark): #11212D
--color-3 (Medium): #253745
--color-4 (Medium-Light): #4A5C6A
--color-5 (Light): #9BA8AB
--color-6 (Very Light): #CCD0CF

--crimson-deep: #380F17
--crimson: #8F0B13
--vermillion: #DC2011
--sandstone: #EFDFC5
--graphite: #252B2B
--slate: #4C4F54

--accent: #DC2011 (Red)
--burgundy: #8B1538 (For volunteer section)
```

## Implementation Guidelines

1. **Always use CSS classes** from `index.css` instead of inline styles when possible
2. **Maintain contrast**: Use the provided text color utilities (text-white-primary, text-secondary, etc.)
3. **Consistent spacing**: Use section-padded class for standard padding
4. **Card styling**: Use .panel or .panel-invert classes for cards on backgrounds
5. **Light sections between dark sections**: Create visual breathing room
6. **Dark sections for emphasis**: Use dark gradients for important CTAs and hero sections

## Summary Pattern

**Dark → Light → Dark → Light → Dark**

This alternating pattern creates visual interest while maintaining readability and preventing cognitive overload from too many dark backgrounds in succession.
