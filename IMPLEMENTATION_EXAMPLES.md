# Implementation Examples - Copy & Paste Ready

## Example 1: Update Home.jsx (Fastest Fix)

### Before (Has blank sections when scrolling)
```javascript
// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ImageSlideshow from '../components/ImageSlideshow';      // ← OLD
import ImpactMetrics from '../components/ImpactMetrics';        // ← OLD
import { ORG_INFO, CORE_VALUES } from '../constants';
// ... rest of imports

const Home = () => {
  // ... component code ...

  return (
    <Layout>
      <div className="min-h-screen">
        {/* ... sections ... */}

        {/* About Highlight */}
        <section className="section-padded bg-white" id="about-highlight">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* ... content ... */}
              </div>
              <div className="highlight-card">
                <ImageSlideshow                          {/* ← OLD */}
                  images={homeImages.slice(0, 3)}
                  descriptions={homeDescriptions.slice(0, 3)}
                  containerHeight="h-64 sm:h-72"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section id="impact">
          <ImpactMetrics />                              {/* ← OLD */}
        </section>

        {/* ... rest of page ... */}
      </div>
    </Layout>
  );
};

export default Home;
```

### After (Smooth scrolling, no blanks)
```javascript
// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import OptimizedImageSlideshow from '../components/OptimizedImageSlideshow';  // ← NEW
import OptimizedImpactMetrics from '../components/OptimizedImpactMetrics';    // ← NEW
import { ORG_INFO, CORE_VALUES } from '../constants';
// ... rest of imports

const Home = () => {
  // ... component code ...

  return (
    <Layout>
      <div className="min-h-screen">
        {/* ... sections ... */}

        {/* About Highlight */}
        <section className="section-padded bg-white" id="about-highlight">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* ... content ... */}
              </div>
              <div className="highlight-card">
                <OptimizedImageSlideshow                 {/* ← NEW */}
                  images={homeImages.slice(0, 3)}
                  descriptions={homeDescriptions.slice(0, 3)}
                  containerHeight="h-64 sm:h-72"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section id="impact">
          <OptimizedImpactMetrics />                    {/* ← NEW */}
        </section>

        {/* ... rest of page ... */}
      </div>
    </Layout>
  );
};

export default Home;
```

---

## Example 2: Using Performance Utilities

### Using preloadImages()
```javascript
import { preloadImages } from '../utils/performanceOptimization';

function MyGallery() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    preloadImages([img1, img2, img3, img4])
      .then(() => {
        console.log('All images ready!');
        setLoaded(true);
      })
      .catch((err) => {
        console.error('Failed to load images:', err);
        setLoaded(true); // Continue anyway
      });
  }, []);

  if (!loaded) {
    return <div className="animate-pulse">Loading gallery...</div>;
  }

  return (
    <div className="gallery">
      {/* Show images */}
    </div>
  );
}
```

### Using throttle for scroll events
```javascript
import { throttle } from '../utils/performanceOptimization';

function PageWithScroll() {
  // Method 1: Throttle directly
  const handleScroll = throttle(() => {
    const scrollPos = window.scrollY;
    console.log('Scroll position:', scrollPos);
    // Do expensive work here
  }, 100); // Max once per 100ms

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div>Scroll me!</div>;
}
```

### Using createAnimationFrame()
```javascript
import { createAnimationFrame } from '../utils/performanceOptimization';

function AnimatedBox() {
  const boxRef = useRef(null);
  let angle = 0;

  const startAnimation = () => {
    const cleanup = createAnimationFrame(() => {
      angle += 2;
      if (boxRef.current) {
        boxRef.current.style.transform = `rotate(${angle}deg)`;
      }
    });

    return cleanup;
  };

  useEffect(() => {
    const cleanup = startAnimation();
    return cleanup;
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'blue',
        margin: '50px',
      }}
    />
  );
}
```

---

## Example 3: Using Custom Hooks

### useOptimizedScroll Hook
```javascript
import { useOptimizedScroll } from '../hooks/useOptimizedScroll';

function InfiniteScroll() {
  const [items, setItems] = useState([]);

  useOptimizedScroll(() => {
    const scrollPos = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    // Load more items when near bottom
    if (scrollPos > pageHeight - 1000) {
      console.log('Near bottom, loading more...');
      loadMoreItems();
    }
  }, 100); // Throttle every 100ms

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
    </div>
  );
}
```

### useIntersectionObserver Hook
```javascript
import { useIntersectionObserver } from '../hooks/useOptimizedScroll';

function LazySection() {
  const sectionRef = useRef(null);
  const { isVisible } = useIntersectionObserver(sectionRef, 0.3, '50px');

  return (
    <section ref={sectionRef}>
      <h2>Section Title</h2>
      {isVisible ? (
        <div>
          {/* Render expensive content only when visible */}
          <HeavyDataViz />
          <ExpensiveCharts />
        </div>
      ) : (
        <div>Scroll down to load content...</div>
      )}
    </section>
  );
}
```

### useDebouncedValue Hook
```javascript
import { useDebouncedValue } from '../hooks/useOptimizedScroll';

function SearchUsers() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const debouncedQuery = useDebouncedValue(query, 300);

  // Only search when user stops typing for 300ms
  useEffect(() => {
    if (debouncedQuery) {
      fetch(`/api/search?q=${debouncedQuery}`)
        .then((res) => res.json())
        .then((data) => setResults(data));
    }
  }, [debouncedQuery]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
      />
      <ul>
        {results.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### useAnimationFrame Hook
```javascript
import { useAnimationFrame } from '../hooks/useOptimizedScroll';

function CountingAnimation() {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useAnimationFrame(() => {
    setCount((prev) => {
      if (prev >= 100) {
        setIsAnimating(false);
        return prev;
      }
      return prev + 1;
    });
  }, isAnimating);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setIsAnimating(!isAnimating)}>
        {isAnimating ? 'Stop' : 'Start'} Animation
      </button>
    </div>
  );
}
```

---

## Example 4: Performance Monitoring

### Add to App.js or index.js
```javascript
import { monitorPerformance } from './utils/performanceOptimization';

// In useEffect or at top level
useEffect(() => {
  monitorPerformance((metrics) => {
    console.log(`${metrics.metric}: ${metrics.value.toFixed(2)}ms`);

    // Optional: Send to analytics service
    if (window.gtag) {
      gtag('event', 'web_vitals', {
        event_category: 'web_vitals',
        event_label: metrics.metric,
        value: Math.round(metrics.value),
      });
    }
  });
}, []);
```

---

## Example 5: Create Reusable Optimized Component

### High-Performance Image Gallery
```javascript
import React, { memo } from 'react';
import OptimizedImageSlideshow from '../components/OptimizedImageSlideshow';

const PortfolioSection = memo(({ title, images, descriptions }) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <OptimizedImageSlideshow
          images={images}
          descriptions={descriptions}
          containerHeight="h-64 md:h-96"
        />
      </div>
    </section>
  );
});

PortfolioSection.displayName = 'PortfolioSection';

export default PortfolioSection;

// Usage
<PortfolioSection
  title="Our Projects"
  images={[img1, img2, img3]}
  descriptions={['Project 1', 'Project 2', 'Project 3']}
/>
```

### High-Performance Stats Display
```javascript
import React, { memo } from 'react';
import OptimizedImpactMetrics from '../components/OptimizedImpactMetrics';

const StatsSection = memo(() => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Our Impact
        </h2>
        <OptimizedImpactMetrics />
      </div>
    </div>
  );
});

StatsSection.displayName = 'StatsSection';

export default StatsSection;
```

---

## Example 6: Batch DOM Updates

### Using batchDOMUpdates
```javascript
import { batchDOMUpdates } from '../utils/performanceOptimization';

function BulkUpdateUI() {
  const handleBulkUpdate = () => {
    const updates = [
      () => { document.getElementById('elem1').textContent = 'Updated 1'; },
      () => { document.getElementById('elem2').textContent = 'Updated 2'; },
      () => { document.getElementById('elem3').textContent = 'Updated 3'; },
    ];

    // All updates happen in single frame
    batchDOMUpdates(updates);
  };

  return <button onClick={handleBulkUpdate}>Bulk Update</button>;
}
```

---

## Example 7: Event Delegation (Memory Efficient)

### Using delegateEvent
```javascript
import { delegateEvent } from '../utils/performanceOptimization';

function ListWithManyItems() {
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;

    // Single listener on parent, not 1000 on children
    const cleanup = delegateEvent(
      listRef.current,
      '.list-item',
      'click',
      (event, element) => {
        console.log('Clicked:', element.textContent);
      }
    );

    return cleanup;
  }, []);

  return (
    <ul ref={listRef}>
      {Array.from({ length: 1000 }, (_, i) => (
        <li key={i} className="list-item">
          Item {i + 1}
        </li>
      ))}
    </ul>
  );
}
```

---

## Example 8: Complete Optimized Page

```javascript
import React, { useEffect } from 'react';
import OptimizedImageSlideshow from '../components/OptimizedImageSlideshow';
import OptimizedImpactMetrics from '../components/OptimizedImpactMetrics';
import { monitorPerformance } from '../utils/performanceOptimization';
import { useOptimizedScroll } from '../hooks/useOptimizedScroll';

function OptimizedPageExample() {
  // Monitor performance
  useEffect(() => {
    monitorPerformance((metrics) => {
      console.log(`Performance: ${metrics.metric} = ${metrics.value.toFixed(2)}ms`);
    });
  }, []);

  // Optimized scroll handler
  useOptimizedScroll(() => {
    const scrollPos = window.scrollY;
    // Do something with scroll position
  }, 100);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16">
        <h1 className="text-4xl font-bold mb-8">Our Portfolio</h1>
        <OptimizedImageSlideshow
          images={portfolioImages}
          descriptions={portfolioDescriptions}
        />
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <OptimizedImpactMetrics />
      </section>

      {/* Content Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
        <p>Page content here...</p>
      </section>
    </div>
  );
}

export default OptimizedPageExample;
```

---

## Comparison: Before vs After Code

### Carousel Component

**BEFORE (Performance Issues)**
```javascript
function ImageSlideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Problem: No image preloading
  // Problem: No component memoization
  // Problem: Heavy re-renders

  return (
    <div>
      {images.map((img, i) => (
        <img src={img} key={i} /> {/* Renders all, loads on demand */}
      ))}
    </div>
  );
}
```

**AFTER (Optimized)**
```javascript
const OptimizedImageSlideshow = memo(({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // ✅ Preload images
  useEffect(() => {
    preloadImages(images).then(() => setImagesLoaded(true));
  }, [images]);

  // ✅ Memoized component
  // ✅ GPU acceleration hints
  // ✅ Optimized rendering

  return (
    <div style={{ contain: 'layout style paint' }}>
      {imagesLoaded && (
        images.map((img, i) => (
          <img
            key={i}
            src={img}
            loading={i === 0 ? 'eager' : 'lazy'}
            style={{ willChange: i === currentIndex ? 'transform' : 'auto' }}
          />
        ))
      )}
    </div>
  );
});
```

---

## Quick Reference

| Need | Use This | Example |
|------|----------|---------|
| Preload images | `preloadImages()` | `preloadImages([img1, img2])` |
| Smooth scroll | `useOptimizedScroll()` | `useOptimizedScroll(handler, 100)` |
| Lazy load section | `useIntersectionObserver()` | `const {isVisible} = useIntersectionObserver(ref)` |
| Smooth animation | `useAnimationFrame()` | `useAnimationFrame(animFunc, enabled)` |
| Debounce input | `useDebouncedValue()` | `const val = useDebouncedValue(input, 300)` |
| Monitor perf | `monitorPerformance()` | `monitorPerformance(callback)` |
| Fast carousel | `OptimizedImageSlideshow` | `<OptimizedImageSlideshow images={imgs} />` |
| Smooth counter | `OptimizedImpactMetrics` | `<OptimizedImpactMetrics />` |

All examples are production-ready and copy-paste friendly!
