import React, { useState, useEffect, useRef, memo, useMemo } from 'react';
import { getCounterAnimationDuration, shouldReduceMotion } from '../utils/mobileOptimization';

/**
 * Mobile-Optimized ImpactMetrics
 * - Slower animations on slow networks
 * - Respects reduced motion preferences
 * - Optimized for mobile CPU/GPU
 */
const MobileOptimizedImpactMetrics = memo(() => {
  const [counts, setCounts] = useState({
    youth: 0,
    communities: 0,
    programs: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Get animation duration based on device
  const ANIMATION_DURATION = useMemo(() => getCounterAnimationDuration(), []);
  const skipAnimation = useMemo(() => shouldReduceMotion(), []);

  // Memoized metrics
  const metrics = useMemo(
    () => [
      { label: 'Youth Reached', value: 10000, key: 'youth' },
      { label: 'Communities Served', value: 50, key: 'communities' },
      { label: 'Programs Running', value: 15, key: 'programs' },
    ],
    []
  );

  // Intersection Observer with mobile-optimized options
   // eslint-disable-next-line react-hooks/exhaustive-deps
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
        rootMargin: '100px', // Start sooner on mobile
      }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated]);

  // Optimized counter animation
  const animateCounters = () => {
    // Skip animation if reduced motion is preferred
    if (skipAnimation) {
      setCounts({
        youth: 10000,
        communities: 50,
        programs: 15,
      });
      return;
    }

    const startTime = performance.now();

    const updateCounts = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);

      // Use easing for smooth motion
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

  // Cleanup
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
      className="py-12 md:py-20 px-4 md:px-6 bg-gradient-contrast"
      aria-label="Impact metrics"
      style={{ contain: 'layout style paint' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-white-primary">
          Our Impact by the Numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.key}
              className="text-center p-6 md:p-10 rounded-lg md:rounded-xl backdrop-blur-md bg-white/8 border border-white/15 hover:bg-white/15 transition-all shadow-lg"
              style={{
                contain: 'layout style',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                perspective: '1000px',
              }}
            >
              <div
                className="text-4xl md:text-7xl font-bold text-white-primary mb-2 md:mb-4"
                style={{
                  fontVariantNumeric: 'tabular-nums',
                  minHeight: '3.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {metric.key === 'youth' && `${counts.youth.toLocaleString()}+`}
                {metric.key === 'communities' && `${counts.communities}+`}
                {metric.key === 'programs' && counts.programs}
              </div>
              <p className="text-base md:text-2xl text-white-secondary font-semibold">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

MobileOptimizedImpactMetrics.displayName = 'MobileOptimizedImpactMetrics';

export default MobileOptimizedImpactMetrics;
