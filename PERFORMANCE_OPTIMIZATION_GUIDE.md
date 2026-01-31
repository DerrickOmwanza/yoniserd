# Performance Optimization Guide - YNIS-RD Website

## Problem Summary
The website experiences:
- **Scrolling lag** when scrolling fast across the Home page
- **Blank sections** appearing during fast scrolling
- **Poor page load performance**
- **Visual glitches** and rendering delays

## Root Causes
1. **Missing image preloading** - Images load on-demand, causing blank sections
2. **Inefficient scroll handlers** - No throttling/debouncing of scroll events
3. **Unnecessary re-renders** - Components re-render even when props don't change
4. **Missing CSS optimization** - No GPU acceleration hints for animations
5. **Heavy animations** - Counter animations cause layout thrashing
6. **Poor image delivery** - No lazy loading or responsive image sizing

---

## Solution Overview

### 1. Performance Optimization Utilities (`src/utils/performanceOptimization.js`)

#### Core Functions

**Debounce & Throttle**
```javascript
import { debounce, throttle } from './utils/performanceOptimization';

// Debounce - waits 150ms after event stops before firing
const handleSearch = debounce((query) => {
  // Search logic
}, 150);

// Throttle - fires at most once every 100ms
const handleScroll = throttle(() => {
  // Scroll logic
}, 100);
```

**Image Preloading** - Prevents blank sections
```javascript
import { preloadImages } from './utils/performanceOptimization';

useEffect(() => {
  preloadImages([img1, img2, img3]).then(() => {
    setImagesLoaded(true);
  });
}, []);
```

**Scroll Listener Optimization**
```javascript
import { createScrollListener } from './utils/performanceOptimization';

useEffect(() => {
  const cleanup = createScrollListener(() => {
    // Scroll handler - automatically throttled
  }, 100);

  return cleanup;
}, []);
```

**Animation Frame Management**
```javascript
import { createAnimationFrame } from './utils/performanceOptimization';

const cleanup = createAnimationFrame(() => {
  // Animation logic - smooth 60fps
});

// Later cleanup
cleanup();
```

**Lazy Loading**
```javascript
import { setupLazyLoading } from './utils/performanceOptimization';

useEffect(() => {
  const observer = setupLazyLoading(imgElement, imageSrc);
  return () => observer.unobserve(imgElement);
}, []);
```

---

### 2. Optimized React Hooks (`src/hooks/useOptimizedScroll.js`)

**useOptimizedScroll** - Prevents re-render spam during scrolling
```javascript
import { useOptimizedScroll } from './hooks/useOptimizedScroll';

function MyComponent() {
  useOptimizedScroll(() => {
    // Automatically throttled scroll handler
  }, 100); // 100ms throttle delay
}
```

**useIntersectionObserver** - Triggers animations when section enters viewport
```javascript
import { useIntersectionObserver } from './hooks/useOptimizedScroll';

function MySection() {
  const sectionRef = useRef(null);
  const { isVisible } = useIntersectionObserver(sectionRef);

  useEffect(() => {
    if (isVisible) {
      // Start animation only when visible
    }
  }, [isVisible]);

  return <section ref={sectionRef}>Content</section>;
}
```

**useDebouncedValue** - Prevents excessive state updates
```javascript
import { useDebouncedValue } from './hooks/useOptimizedScroll';

function SearchComponent() {
  const [input, setInput] = useState('');
  const debouncedValue = useDebouncedValue(input, 300);

  useEffect(() => {
    // Search only on debounced value changes
    performSearch(debouncedValue);
  }, [debouncedValue]);
}
```

**useAnimationFrame** - Smooth animations without frame drops
```javascript
import { useAnimationFrame } from './hooks/useOptimizedScroll';

function AnimatedComponent() {
  const [rotation, setRotation] = useState(0);

  useAnimationFrame(() => {
    setRotation((prev) => prev + 1);
  }, true); // enable = true
}
```

---

### 3. Optimized Components

#### OptimizedImageSlideshow
```javascript
import OptimizedImageSlideshow from './components/OptimizedImageSlideshow';

// Drop-in replacement for ImageSlideshow
<OptimizedImageSlideshow
  images={homeImages}
  descriptions={homeDescriptions}
  containerHeight="h-64 sm:h-72 md:h-[480px]"
/>
```

**Features:**
- ✅ Preloads all images on mount
- ✅ Uses React.memo to prevent unnecessary re-renders
- ✅ Optimized animations with GPU acceleration
- ✅ CSS containment for paint optimization
- ✅ Keyboard navigation (arrow keys)
- ✅ No blank sections during scroll

#### OptimizedImpactMetrics
```javascript
import OptimizedImpactMetrics from './components/OptimizedImpactMetrics';

// Drop-in replacement for ImpactMetrics
<OptimizedImpactMetrics />
```

**Features:**
- ✅ Smooth easing animation using requestAnimationFrame
- ✅ Prefers reduced motion detection
- ✅ CSS containment for performance
- ✅ Early trigger with rootMargin
- ✅ Memoized metrics

---

## Implementation Steps

### Step 1: Update Home.jsx
Replace existing components with optimized versions:

```javascript
// OLD (remove these)
import ImageSlideshow from '../components/ImageSlideshow';
import ImpactMetrics from '../components/ImpactMetrics';

// NEW (add these)
import OptimizedImageSlideshow from '../components/OptimizedImageSlideshow';
import OptimizedImpactMetrics from '../components/OptimizedImpactMetrics';

// In the render:
// OLD:
<ImageSlideshow images={homeImages} descriptions={homeDescriptions} />

// NEW:
<OptimizedImageSlideshow images={homeImages} descriptions={homeDescriptions} />

// OLD:
<ImpactMetrics />

// NEW:
<OptimizedImpactMetrics />
```

### Step 2: Add Performance Monitoring (Optional)
```javascript
import { monitorPerformance } from './utils/performanceOptimization';

// In App.js or index.js
monitorPerformance((metrics) => {
  console.log(`${metrics.metric}: ${metrics.value}ms`);
});
```

### Step 3: Enable CSS Containment
Add to your global CSS (index.css):
```css
/* Performance optimization */
img {
  contain: content;
  backface-visibility: hidden;
}

.slideshow-container {
  contain: layout style paint;
}

button {
  will-change: auto;
}

button:hover {
  will-change: transform;
}
```

---

## Performance Best Practices

### 1. Image Optimization
```javascript
// ✅ GOOD - Preload + Lazy load
<OptimizedImageSlideshow images={images} descriptions={descriptions} />

// ❌ BAD - No preloading
<img src={largeImage} />
```

### 2. Scroll Event Handling
```javascript
// ✅ GOOD - Throttled
const handleScroll = throttle(() => {
  // Do expensive work
}, 100);

// ❌ BAD - Fires on every scroll pixel
window.addEventListener('scroll', () => {
  // Do expensive work
});
```

### 3. Animation Performance
```javascript
// ✅ GOOD - RequestAnimationFrame
const cleanup = createAnimationFrame(() => {
  element.style.transform = `rotate(${angle}deg)`;
});

// ❌ BAD - setTimeout creates jank
setInterval(() => {
  element.style.transform = `rotate(${angle}deg)`;
}, 16);
```

### 4. Component Re-renders
```javascript
// ✅ GOOD - Memoized
const MyComponent = memo(({ data }) => {
  return <div>{data}</div>;
});

// ❌ BAD - Renders on every parent render
function MyComponent({ data }) {
  return <div>{data}</div>;
}
```

### 5. Effect Cleanup
```javascript
// ✅ GOOD - Cleanup on unmount
useEffect(() => {
  const handler = throttle(handleScroll, 100);
  window.addEventListener('scroll', handler);
  return () => window.removeEventListener('scroll', handler);
}, []);

// ❌ BAD - Memory leak
useEffect(() => {
  window.addEventListener('scroll', () => {
    // Do work
  });
}, []);
```

---

## Performance Metrics to Monitor

### Core Web Vitals
1. **LCP (Largest Contentful Paint)** - Target < 2.5s
2. **FID (First Input Delay)** - Target < 100ms
3. **CLS (Cumulative Layout Shift)** - Target < 0.1

### Monitor with:
```javascript
import { monitorPerformance } from './utils/performanceOptimization';

monitorPerformance((metrics) => {
  console.log(metrics);
  // Send to analytics service
});
```

---

## Testing Performance

### 1. Chrome DevTools
- Press `F12` → Performance tab
- Record page scroll → Analyze frame drops
- Look for > 16ms frames (causes jank at 60fps)

### 2. Lighthouse
- Chrome DevTools → Lighthouse
- Run Performance audit
- Target scores: > 90

### 3. Scroll Performance
```bash
# Test scrolling smoothness
npm start
# Open DevTools > Performance
# Record scroll → Look for red bars (dropped frames)
```

---

## Troubleshooting

### Issue: Still seeing blank sections during fast scroll
**Solution:**
1. Increase preload timeout in OptimizedImageSlideshow
2. Reduce SLIDE_INTERVAL (currently 8000ms)
3. Use smaller/compressed images

### Issue: Animations still choppy
**Solution:**
1. Check if requestAnimationFrame is being used
2. Reduce animation complexity
3. Use `transform` and `opacity` only (GPU-accelerated)
4. Avoid animating `width`, `height`, `left`, `top`

### Issue: React DevTools shows unnecessary re-renders
**Solution:**
1. Wrap component with `memo()`
2. Use `useCallback` for event handlers
3. Use `useMemo` for expensive calculations
4. Check dependency arrays in useEffect

---

## File Reference

- `src/utils/performanceOptimization.js` - All utility functions
- `src/hooks/useOptimizedScroll.js` - Custom React hooks
- `src/components/OptimizedImageSlideshow.jsx` - Fast image carousel
- `src/components/OptimizedImpactMetrics.jsx` - Smooth counter animation

---

## Migration Checklist

- [ ] Create utils folder and performanceOptimization.js
- [ ] Create hooks folder and useOptimizedScroll.js
- [ ] Create OptimizedImageSlideshow.jsx
- [ ] Create OptimizedImpactMetrics.jsx
- [ ] Update Home.jsx to use optimized components
- [ ] Test scrolling performance (no blank sections)
- [ ] Test on mobile (slower devices)
- [ ] Run Lighthouse audit
- [ ] Monitor Core Web Vitals

---

## Expected Results

**Before:**
- ❌ Blank sections during fast scroll
- ❌ Lag and jank at 30fps
- ❌ Images pop in with delay
- ❌ Lighthouse score: 60-70

**After:**
- ✅ Smooth 60fps scrolling
- ✅ No blank sections
- ✅ Instant image display
- ✅ Lighthouse score: 85-95+
