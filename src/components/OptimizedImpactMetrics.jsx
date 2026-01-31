import React, { useState, useEffect, useRef, memo, useMemo } from 'react';

/**
 * Optimized ImpactMetrics Component
 * - Uses memo to prevent unnecessary re-renders
 * - Optimized animation with requestAnimationFrame
 * - IntersectionObserver for visibility detection
 * - Prevents blank section issues during scroll
 */
const OptimizedImpactMetrics = memo(() => {
  const [counts, setCounts] = useState({
    youth: 0,
    communities: 0,
    programs: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Memoized metrics to prevent recalculation
  const metrics = useMemo(
    () => [
      { label: 'Youth Reached', value: 10000, key: 'youth' },
      { label: 'Communities Served', value: 50, key: 'communities' },
      { label: 'Programs Running', value: 15, key: 'programs' },
    ],
    []
  );

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '50px', // Start animation before fully visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  // Optimized counter animation using requestAnimationFrame
  const animateCounters = () => {
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();

    const updateCounts = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Use easing function for smoother animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);

      setCounts({
        youth: Math.floor(10000 * easeOutQuad),
        communities: Math.floor(50 * easeOutQuad),
        programs: Math.floor(15 * easeOutQuad),
      });

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(updateCounts);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateCounts);
  };

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-6 bg-gradient-contrast"
      aria-label="Impact metrics"
      style={{ contain: 'layout style paint' }} // CSS containment for performance
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white-primary">
          Our Impact by the Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.key}
              className="text-center p-8 md:p-10 rounded-xl backdrop-blur-md bg-white/8 border border-white/15 hover:bg-white/15 hover:scale-105 transition-all shadow-xl"
              style={{
                contain: 'layout style',
                willChange: 'transform', // GPU acceleration hint
                backfaceVisibility: 'hidden',
                perspective: '1000px',
              }}
            >
              <div className="text-5xl md:text-7xl font-bold text-white-primary mb-4" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {metric.key === 'youth' && `${counts.youth.toLocaleString()}+`}
                {metric.key === 'communities' && `${counts.communities}+`}
                {metric.key === 'programs' && counts.programs}
              </div>
              <p className="text-xl md:text-2xl text-white-secondary font-semibold">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

OptimizedImpactMetrics.displayName = 'OptimizedImpactMetrics';

export default OptimizedImpactMetrics;
