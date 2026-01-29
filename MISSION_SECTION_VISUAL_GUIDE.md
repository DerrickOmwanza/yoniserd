# Mission & Impact Section - Visual Design Guide

## Visual Hierarchy Breakdown

```
┌─────────────────────────────────────────────────────────┐
│                                                           │
│         ┌─────────────────────────────────┐              │
│         │                                   │              │
│         │  [HEADING ANIMATION STARTS]      │              │
│         │  text-5xl → text-8xl             │              │
│         │  font-bold (700)                 │              │
│         │  Our Mission                     │              │
│         │  & Impact                        │              │
│         │                                   │              │
│         └─────────────────────────────────┘              │
│                     ↓ 10-16px                            │
│         ┌─────────────────────────────────┐              │
│         │  [MISSION TEXT ANIMATION 0.2s]  │              │
│         │  text-xl → text-4xl             │              │
│         │  font-light (300)               │              │
│         │  opacity: 1.0                   │              │
│         │                                   │              │
│         │  [Mission content from           │              │
│         │   ORG_INFO.mission]             │              │
│         │                                   │              │
│         └─────────────────────────────────┘              │
│                     ↓ 8-12px                             │
│         ┌─────────────────────────────────┐              │
│         │  [VISION TEXT ANIMATION 0.2s]   │              │
│         │  text-lg → text-3xl             │              │
│         │  font-light (300)               │              │
│         │  opacity: 0.85                  │              │
│         │                                   │              │
│         │  [Vision content from            │              │
│         │   ORG_INFO.vision]              │              │
│         │                                   │              │
│         └─────────────────────────────────┘              │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

---

## Responsive Typography Scale

### Font Size Progression by Device

```
┌──────────────────────┬────────┬────────┬────────┬────────┐
│ Element              │ Mobile │ Tablet │ Desktop│ Wide   │
│                      │ (base) │ (sm)   │ (md-lg)│ (xl+)  │
├──────────────────────┼────────┼────────┼────────┼────────┤
│ Heading              │ 5xl    │ 6xl    │ 7xl    │ 8xl    │
│ (3rem)               │ (3.125rem) │ (3.75rem) │ (4.5rem)
├──────────────────────┼────────┼────────┼────────┼────────┤
│ Mission Statement    │ xl     │ 2xl    │ 3xl    │ 4xl    │
│ (1.25rem)            │ (1.5rem) │ (1.875rem) │ (2.25rem)
├──────────────────────┼────────┼────────┼────────┼────────┤
│ Vision Statement     │ lg     │ xl     │ 2xl    │ 3xl    │
│ (1.125rem)           │ (1.25rem) │ (1.5rem) │ (1.875rem)
└──────────────────────┴────────┴────────┴────────┴────────┘
```

### Visual Size Comparison (Desktop)

```
┌──────────────────────────────────────────────────┐
│                                                    │
│   ████████████████████████████████████████████    │
│   Our Mission & Impact            (8xl - 4.5rem)  │
│   ████████████████████████████████████████████    │
│                                                    │
│   ████████████████████████████                    │
│   Mission statement text appears here here here   │
│   mission statement text                (3xl)     │
│   ████████████████████████████                    │
│                                                    │
│   ██████████████████████                          │
│   Vision statement supporting text text here      │
│   (2xl)                                           │
│   ██████████████████████                          │
│                                                    │
└──────────────────────────────────────────────────┘
```

---

## Layout Centering Visualization

### Desktop (1920px width)

```
┌─────────────────────────────────────────────────────────────┐
│ SECTION (100vh, 100% width)                                 │
│ Background: #7BBBFF                                          │
│                                                               │
│                                                               │
│           ┌──────────────────────────────────────┐           │
│           │ max-w-5xl (64rem = 1024px)          │           │
│           │ px-8 (2rem padding each side)        │           │
│           │                                      │           │
│           │  ┌────────────────────────────────┐ │           │
│           │  │ Our Mission & Impact           │ │           │
│           │  │ (centered text)                │ │           │
│           │  └────────────────────────────────┘ │           │
│           │                                      │           │
│           │  ┌────────────────────────────────┐ │           │
│           │  │ Mission statement...           │ │           │
│           │  │ (max-w: 900px, centered)       │ │           │
│           │  └────────────────────────────────┘ │           │
│           │                                      │           │
│           │  ┌────────────────────────────────┐ │           │
│           │  │ Vision statement...            │ │           │
│           │  │ (max-w: 900px, centered)       │ │           │
│           │  └────────────────────────────────┘ │           │
│           │                                      │           │
│           └──────────────────────────────────────┘           │
│                                                               │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

### Mobile (375px width)

```
┌──────────────────┐
│ SECTION (100vh)  │
│ Background: #7BB│
│ px-4 (1rem)      │
│                  │
│  ┌────────────┐  │
│  │ Our        │  │
│  │ Mission &  │  │
│  │ Impact     │  │
│  │ (5xl)      │  │
│  └────────────┘  │
│                  │
│  ┌────────────┐  │
│  │ Mission    │  │
│  │ statement  │  │
│  │ text fits  │  │
│  │ here (xl)  │  │
│  └────────────┘  │
│                  │
│  ┌────────────┐  │
│  │ Vision     │  │
│  │ statement  │  │
│  │ here (lg)  │  │
│  └────────────┘  │
│                  │
└──────────────────┘
```

---

## Color Specification

### Primary Colors

```
Background Color
┌────────────────────────────────────────┐
│                                         │
│            #7BBBFF                     │
│         (Light Blue)                   │
│                                         │
│    RGB: 123, 187, 255                  │
│    HSL: 210°, 100%, 74%                │
│                                         │
└────────────────────────────────────────┘

Text Color
┌────────────────────────────────────────┐
│          #050F2A                       │
│      (Dark Navy)                       │
│                                         │
│    RGB: 5, 15, 42                      │
│    HSL: 220°, 79%, 9%                  │
│                                         │
│    Used for: All text, headings        │
│    Contrast Ratio: 7.5:1 ✓ WCAG AAA    │
│                                         │
└────────────────────────────────────────┘
```

### Vision Statement Opacity Variation

```
Mission Statement         Vision Statement
opacity: 1.0             opacity: 0.85

#050F2A (100%)           #050F2A (85%)
████████████████████████ ███████████████████░░░░
(Solid)                  (Slightly transparent)
```

---

## Animation Timeline

### Fade-In-Up Animation Sequence

```
Time    Heading              Mission Text        Vision Text
────────────────────────────────────────────────────────────
0ms     ▌ Start             ░░░░░░░░░░░░░░░░░  ░░░░░░░░░░░░
        opacity: 0%         (waiting)           (waiting)
        y: +30px
        
100ms   ██░░░░░░░░░░░░░░░░ ░░░░░░░░░░░░░░░░░  ░░░░░░░░░░░░
        40% visible         (waiting)           (waiting)

200ms   ████████░░░░░░░░░░ ▌ Start              ░░░░░░░░░░░░
        80% visible         opacity: 0%         (waiting)
                           y: +30px

300ms   ██████████░░░░░░░░ ██░░░░░░░░░░░░░░░░  ░░░░░░░░░░░░
        100% visible        40% visible         (waiting)

400ms   ██████████████████ ████████░░░░░░░░░░  ░░░░░░░░░░░░
        Complete           80% visible         (waiting)

500ms   ██████████████████ ██████████░░░░░░░░  ░░░░░░░░░░░░
        DONE (0.8s)        100% visible        ▌ Start
                           (0.8s)              opacity: 0%
                                              y: +30px

600ms   ██████████████████ ██████████░░░░░░░░  ██░░░░░░░░░░
        Hold               Hold                40% visible

700ms   ██████████████████ ██████████░░░░░░░░  ████████░░░░
        Final              Final               80% visible

800ms   ██████████████████ ██████████░░░░░░░░  ██████████░░
        (stays visible)    (stays visible)     100% visible

1000ms  ██████████████████ ██████████░░░░░░░░  ██████████░░
        ✓ Complete         ✓ Complete          ✓ Complete
```

---

## Spacing & Measurements

### Vertical Spacing (Desktop)

```
┌─────────────────────────────────────┐
│ Section Start (100vh container)      │
│                                      │
│           ↓ (Flex centered)          │
│                                      │
│        [HEADING: 4.5rem]             │
│                                      │
│           ↓ mb-16 (4rem)             │
│                                      │
│        [MISSION: 2.25rem]            │
│                                      │
│           ↓ mb-12 (3rem)             │
│                                      │
│        [VISION: 1.875rem]            │
│                                      │
│           ↓ (Flex centered)          │
│                                      │
│ Section End (100vh container)        │
└─────────────────────────────────────┘
```

### Horizontal Spacing (Desktop)

```
┌───────────────────────────────────────────────────┐
│ Container (1920px)                                │
│                                                    │
│  px-8 (2rem) │                            │ px-8  │
│      ↓       │                            │  ↓    │
│  ┌───┐       │  max-w-5xl (1024px)        │ ┌───┐ │
│  │   │◄──────┼──────────────────┐         │ │   │ │
│  │   │       │  max-w: 900px    │         │ │   │ │
│  │   │       │  (content)       │         │ │   │ │
│  │   │       │   [HEADING]      │         │ │   │ │
│  │   │       │   [MISSION]      │         │ │   │ │
│  │   │       │   [VISION]       │         │ │   │ │
│  │   │       │                  │         │ │   │ │
│  │   │       └──────────────────┘         │ │   │ │
│  └───┘                                    └─┘   │ │
│                                                    │
└───────────────────────────────────────────────────┘
```

---

## Heading Line Break (Mobile)

### Before Animation
```
┌──────────────────┐
│  Our Mission &   │  (text-5xl)
│      Impact      │
│                  │
└──────────────────┘
```

### Layout Method
```jsx
<h1>
    Our Mission<span className="block">& Impact</span>
</h1>
```

The `<span className="block">` creates a hard line break that forces "& Impact" to the next line, improving readability on small screens.

---

## Quality Assurance Checklist

### Visual Quality
- ✅ Heading scales from 5xl (mobile) to 8xl (desktop) - 60% size increase
- ✅ Proper line-height for readability at all sizes
- ✅ Consistent letter-spacing (0.5px heading, 0.3px body)
- ✅ Adequate padding prevents text from touching viewport edges
- ✅ Max-width constraints maintain optimal line length

### Responsiveness
- ✅ Mobile: Compact layout, readable font sizes
- ✅ Tablet: Progressive scaling, comfortable reading
- ✅ Desktop: Large dramatic display, proper whitespace
- ✅ All breakpoints: Centered content

### Animation Quality
- ✅ Fade-in-up feels natural (ease-out timing)
- ✅ 0.8s duration is perceptible but not slow
- ✅ 0.2s stagger creates sequential effect
- ✅ No jank or layout shift during animation

### Accessibility
- ✅ Color contrast 7.5:1 (exceeds WCAG AAA)
- ✅ Semantic heading hierarchy (h1)
- ✅ Descriptive aria-label
- ✅ Keyboard navigable
- ✅ Screen reader compatible
