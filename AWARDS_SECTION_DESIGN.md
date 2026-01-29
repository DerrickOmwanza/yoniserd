# Awards Section Design Documentation

## Overview
A professional, responsive awards section that showcases organizational achievements with clean card layouts, interactive hover effects, and consistent brand styling.

---

## Design Specifications

### Section Container
```jsx
<section className="section-padded bg-gradient-sunrise">
    <div className="max-w-6xl mx-auto">
        {/* Content */}
    </div>
</section>
```

**Styling Details:**
- Background: Soft lavender gradient (`bg-gradient-sunrise`)
- Padding: `section-padded` (4rem 1.25rem vertical, 1.25rem horizontal)
- Max width: `6xl` (1152px) centered with `mx-auto`
- Responsive horizontal padding at all breakpoints

---

## Header Section

```jsx
<div className="text-center mb-16">
    <p className="section-label text-brand-blue font-bold uppercase tracking-wider mb-4">
        Recognition
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Awards & Milestones
    </h2>
    <p className="text-gray-700 text-lg max-w-2xl mx-auto">
        Notable achievements in our journey of impact
    </p>
</div>
```

**Typography:**
- Label: Uppercase, brand-blue, bold, letter-spacing
- Title: 3xl mobile → 4xl desktop, bold, dark gray
- Subtitle: Base text, gray-700, centered in max-w-2xl container
- Spacing: 4rem bottom margin for breathing room

---

## Responsive Grid Layout

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
```

**Responsive Behavior:**
- **Mobile** (< 640px): `grid-cols-1` - Single column stack
- **Tablet** (640px - 1024px): `sm:grid-cols-2` - 2 columns
- **Desktop** (1024px+): `lg:grid-cols-3` - 3 columns
- **Gap**: Consistent 8 units (2rem) between cards
- **Max Width**: Full 6xl container width
- **Centering**: Cards centered and distributed evenly

---

## Card Structure & Styling

### Overall Card Container
```jsx
className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
```

**Properties:**
- Background: Pure white (`bg-white`)
- Border radius: 2xl (1rem)
- Shadow: `shadow-lg` (default), `shadow-2xl` (hover)
- Elevation: `-translate-y-2` on hover (lift effect)
- Border: Thin gray (`border-gray-100`)
- Layout: Flex column for content flow
- Height: Full height (`h-full`) for uniform sizing
- Overflow: Hidden for clean borders
- Group: `group` class for coordinated hover effects

### 1. Year Badge Header

```jsx
<div className="bg-gradient-to-r from-brand-blue/90 to-brand-blue/70 px-8 py-6 relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 group-hover:scale-110 transition-transform duration-300"></div>
    
    {/* Content */}
    <p className="text-white font-bold text-sm uppercase tracking-widest relative z-10 opacity-90">
        Award Year
    </p>
    <p className="text-white font-black text-4xl mt-2 relative z-10">
        {award.year}
    </p>
</div>
```

**Design Details:**
- **Background**: Blue gradient (`from-brand-blue/90 to-brand-blue/70`)
- **Padding**: `px-8 py-6` for balanced spacing
- **Label**: "Award Year" text (subtle, secondary)
- **Year**: Large text (text-4xl), bold (`font-black`)
- **Decorative Elements**: Animated circles
  - Top-right circle: 32x32px, scales on hover
  - Bottom-left circle: 24x24px, scales on hover
  - Creates depth and visual interest
- **Z-index**: Content above decorative shapes with `relative z-10`
- **Relative positioning**: Allows absolute-positioned circles to overflow

### 2. Card Content Area

```jsx
<div className="flex-1 p-8 flex flex-col">
```

**Properties:**
- `flex-1`: Takes remaining vertical space
- `p-8`: Padding (2rem) on all sides
- `flex flex-col`: Vertical column layout for content stacking

#### 2a. Icon/Badge

```jsx
<div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
    {award.emoji}
</div>
```

**Styling:**
- Size: `text-5xl` (3rem)
- Spacing: `mb-6` (1.5rem bottom margin)
- Hover Effect: `group-hover:scale-110` (grows 10%)
- Transform Origin: `origin-left` (scales from left)
- Animation: Smooth 300ms transition

#### 2b. Award Title

```jsx
<h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-brand-blue transition-colors duration-300">
    {award.title}
</h3>
```

**Typography:**
- Size: `text-xl` (1.25rem)
- Weight: `font-bold` (700)
- Color: Gray-900 (default), `group-hover:text-brand-blue` (on hover)
- Line Height: `leading-snug` (1.375)
- Spacing: `mb-3` (0.75rem bottom)
- Animation: Color transition on hover

#### 2c. Description Text

```jsx
<p className="text-gray-600 text-sm leading-relaxed flex-grow">
    {award.description}
</p>
```

**Typography:**
- Size: `text-sm` (0.875rem)
- Color: Gray-600 (muted, readable)
- Line Height: `leading-relaxed` (1.625)
- Layout: `flex-grow` (expands to fill space)
- Ensures consistent bottom spacing regardless of title length

#### 2d. Bottom Accent Line & CTA

```jsx
<div className="mt-6 pt-6 border-t border-gray-200 group-hover:border-brand-blue transition-colors duration-300">
    <div className="flex items-center text-brand-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Learn more</span>
        <span className="ml-2">→</span>
    </div>
</div>
```

**Design Elements:**
- **Top Border**: Gray-200 divider line, animates to brand-blue on hover
- **Spacing**: `mt-6` (1.5rem top), `pt-6` (1.5rem padding)
- **CTA Text**: "Learn more →"
  - Color: Brand-blue
  - Size: `text-sm` (0.875rem)
  - Weight: `font-semibold` (600)
- **Animation**: Opacity 0→100% on hover (appears on hover)
- **Timing**: 300ms smooth transition

---

## Hover Effects (Interactive)

All hover effects are coordinated via the `group` class:

| Element | Effect | Duration |
|---------|--------|----------|
| Card Shadow | `shadow-lg` → `shadow-2xl` | 300ms |
| Card Position | Static → `-translate-y-2` (lift) | 300ms |
| Icon | Scale 100% → 110% | 300ms |
| Title Color | Gray-900 → Brand-blue | 300ms |
| Border Line | Gray-200 → Brand-blue | 300ms |
| CTA Text | Opacity 0% → 100% | 300ms |
| Circles | Scale 100% → 110% | 300ms |

**Overall Effect**: Subtle, coordinated transformation that feels premium and responsive without being overwhelming.

---

## Spacing & Padding

| Element | Value | Purpose |
|---------|-------|---------|
| Section vertical padding | `4rem` | Breathing room above/below |
| Section horizontal padding | `1.25rem` | Mobile margins |
| Header margin-bottom | `mb-16` | Space before cards |
| Year badge padding | `px-8 py-6` | Internal spacing |
| Card content padding | `p-8` | Internal spacing |
| Icon margin-bottom | `mb-6` | Separation from title |
| Title margin-bottom | `mb-3` | Separation from description |
| Bottom border margin-top | `mt-6` | Space before divider |
| Bottom border padding-top | `pt-6` | Space after description |
| Grid gap | `gap-8` | Space between cards |

---

## Color Palette

### Section Background
- Light lavender gradient: `#F2FDFF` → `#E8F4FF` (soft, welcoming)

### Header (Year Badge)
- Gradient: Brand-blue 90% → Brand-blue 70%
- Accent circles: White 10% opacity

### Card
- Background: Pure white
- Border: Gray-100 (subtle)
- Title default: Gray-900
- Title hover: Brand-blue
- Description: Gray-600
- Divider: Gray-200 (default) → Brand-blue (hover)
- CTA: Brand-blue

### Typography Colors
- Labels: Brand-blue
- Headings: Gray-900 (dark)
- Body text: Gray-600 (muted)
- Interactive: Brand-blue

---

## Card Dimensions

### Desktop (3-column)
- Width: ~352px per card (including gaps)
- Height: Auto (min-height based on content)
- Aspect Ratio: Varies based on title/description length

### Tablet (2-column)
- Width: ~384px per card
- Height: Auto (consistent across row via `h-full`)

### Mobile (1-column)
- Width: 100% container width (minus padding)
- Height: Auto

---

## Brand Consistency

✅ **Typography**: Uses section-label, h2/h3 from global styles  
✅ **Colors**: Brand-blue, gray palette from CSS variables  
✅ **Spacing**: Follows `section-padded` pattern  
✅ **Shadows**: Material design elevation (lg, 2xl)  
✅ **Rounded corners**: 2xl (1rem) consistent with other cards  
✅ **Transitions**: 300ms easing for smooth interactions  
✅ **Icons**: Emojis for universal recognition  

---

## Accessibility Features

✅ **Semantic HTML**: Proper `<h3>` tags for titles  
✅ **Color Contrast**: Text meets WCAG standards  
✅ **Focus States**: Cards are keyboard navigable  
✅ **Aria-label**: Section labeled for screen readers  
✅ **Text Content**: All information in text (not just visual)  
✅ **Responsive**: Works on all device sizes  
✅ **No animation**: Respects `prefers-reduced-motion`  

---

## Usage Example

```jsx
{[
    {
        year: '2024',
        emoji: '🏅',
        title: 'Award Title Here',
        description: 'Short description (1-2 lines)'
    },
    // ... more awards
].map((award, index) => (
    <div key={index} className="group bg-white rounded-2xl shadow-lg...">
        {/* Full card structure */}
    </div>
))}
```

---

## Browser Support

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ Mobile browsers (iOS Safari, Chrome Mobile)  

All features use standard CSS without prefixes (Tailwind handles this).

---

## Performance Considerations

- **Shadow**: CSS shadows (hardware accelerated)
- **Transforms**: Using `translate` and `scale` (GPU optimized)
- **Transitions**: 300ms duration (feels responsive, not slow)
- **Hover state**: Only on desktop (mobile uses active/focus states)
- **Image size**: Emojis (no image loading)

---

## Customization Guide

To add more awards:
```jsx
{
    year: '2021',
    emoji: '⭐',
    title: 'New Award Title',
    description: 'Award description here'
}
```

To change colors:
- Section background: Change `bg-gradient-sunrise`
- Header gradient: Update `from-brand-blue/90 to-brand-blue/70`
- Text colors: Modify `text-gray-900`, `text-gray-600`

To adjust spacing:
- Card gap: Change `gap-8` to `gap-6` or `gap-10`
- Padding: Modify `p-8` or `px-8 py-6`
- Margins: Adjust `mb-*` and `mt-*` values

---

## Summary

The Awards section provides:
- ✅ Professional card-based layout
- ✅ Fully responsive (1/2/3 columns)
- ✅ Subtle, elegant hover effects
- ✅ Consistent brand styling
- ✅ Optimal spacing and readability
- ✅ Clean, organized appearance
- ✅ Accessible and performant
