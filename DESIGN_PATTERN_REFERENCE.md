# Design Pattern Reference - Home & About Page

## Identical Patterns Used

### Section Container
```jsx
<section className="section-padded [BACKGROUND]">
    <div className="max-w-6xl mx-auto">
        {/* Centered content */}
    </div>
</section>
```

### Section Header
```jsx
<div className="text-center mb-16">
    <p className="section-label text-brand-blue font-bold uppercase tracking-wider mb-4">
        Category Label
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Main Heading
    </h2>
    <p className="text-gray-700 text-lg max-w-2xl mx-auto">
        Subheading description
    </p>
</div>
```

### Grid Layout (3 Columns)
```jsx
<div className="grid md:grid-cols-3 gap-8 max-w-[width] mx-auto">
    {items.map((item) => (
        <div key={item.id} className="[CARD_STYLES]">
            {/* Card content */}
        </div>
    ))}
</div>
```

### Card Styles
```jsx
className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
```

---

## Background Color Classes Used

### Light Backgrounds (Reading Content)
```
bg-white          // Pure white (testimonials, timeline)
bg-light          // Light gradient: #F2FDFF → #E8F4FF (mission section)
bg-gradient-sunrise // Lavender gradient: #E8F4FF → #F5ECFF (stats, values)
```

### Dark Backgrounds (Impactful Sections)
```
brand-hero        // Dark blue gradient (hero, awards, CTA)
```

---

## About Page Color Distribution

| Section | Class | Purpose |
|---------|-------|---------|
| Page Header | `brand-hero` | Dark, engaging |
| Mission & Vision | `bg-light` | Light blue, readable |
| Organization Details | `bg-gradient-sunrise` | Soft lavender |
| CEO Message | `bg-white` | Clean, focused |
| Leadership | `bg-gradient-sunrise` | Soft lavender |
| Journey Timeline | `bg-white` | Clean, minimal |
| Awards & Milestones | `brand-hero` | Dark, celebratory |
| Impact Stats | `bg-gradient-sunrise` | Soft lavender |
| Testimonials | `bg-white` | Clean, personal |
| Core Values | `bg-gradient-sunrise` | Soft lavender |
| Final CTA | `brand-hero` | Dark, action-oriented |

**Pattern**: Alternates between 2 light colors and dark hero sections

---

## Typography System

### Headings
```
h1 (Page Title):      4xl md:5xl lg:6xl font-bold text-white
h2 (Section Title):   3xl md:4xl font-bold text-gray-900
h3 (Card Title):      2xl font-bold text-gray-900
p (Body):             base lg:leading-relaxed text-gray-700/800
```

### Labels
```
.section-label:       uppercase tracking-wider text-brand-blue font-bold text-xs
```

---

## Spacing System

### Section Padding
```
.section-padded:      padding: 4rem 1.25rem (top/bottom, left/right)
```

### Element Gaps
```
Card grids:           gap-8 (most common)
Content areas:        mb-16 (heading sections)
Inner spacing:        mb-4, mb-6 (text elements)
```

---

## Button Styles

### Primary Button
```jsx
className="bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
```

### Secondary Button (Bordered)
```jsx
className="border-2 border-brand-blue text-brand-blue font-bold py-3 px-6 rounded-lg hover:bg-brand-blue/10 hover:-translate-y-1 transition-all duration-300"
```

---

## Responsive Breakpoints

```
Mobile (< 768px):    Single column, stacked
Tablet (768px):      md: prefix for 2-3 columns
Desktop (1024px+):   Full 3-4 column grids
```

---

## Shadow & Elevation

```
Light cards:         shadow-lg (0 10px 15px)
Hover state:         shadow-2xl hover:-translate-y-2
No shadow:           (testimonials, clean sections)
```

---

## Hover Effects

```
Cards:               hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
Links:               hover:text-brand-blue transition-colors
Buttons:             hover:bg-[darker] hover:-translate-y-1 transition-all
```

---

## Key Principles

1. **Centered Content**: All sections use `max-w-6xl mx-auto`
2. **Alternating Backgrounds**: Prevents monotony and guides visual flow
3. **Consistent Spacing**: Standard gaps and padding throughout
4. **Symmetric Layouts**: Left and right space balanced
5. **Clear Hierarchy**: Large headings, clear labels, organized content
6. **Professional Colors**: Dark navy, light lavender, white
7. **Micro-interactions**: Hover states, transitions, elevations

---

## How to Apply to New Sections

1. Use `section-padded [background-class]` wrapper
2. Center with `max-w-6xl mx-auto`
3. Add `.text-center mb-16` header section
4. Use standard card grid: `grid md:grid-cols-[cols] gap-8`
5. Apply consistent styling to cards
6. Use brand colors for accents

This ensures consistency across the entire website.
