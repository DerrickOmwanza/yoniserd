import React, { useState, useEffect, useRef, memo, useMemo, useCallback } from 'react';
import { getCounterAnimationDuration, shouldReduceMotion } from '../utils/mobileOptimization';

/**
 * Mobile-Optimized ImpactMetrics
 * - Slower animations on slow networks
 * - Respects reduced motion preferences
 * - Optimized for mobile CPU/GPU
 */
const MobileOptimizedImpactMetrics = memo(() => {
    // Show numbers immediately, animate from 0
    const [counts, setCounts] = useState({
        youth: 0,
        communities: 0,
        programs: 0,
    });
    const [isVisible, setIsVisible] = useState(false);
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

    // Optimized counter animation with immediate visible values
    const animateCounters = useCallback(() => {
        // Always show full values immediately on mobile to prevent blank section
        setCounts({
            youth: 10000,
            communities: 50,
            programs: 15,
        });

        // Skip animation if reduced motion is preferred or on slow networks
        if (skipAnimation) {
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
        }, [skipAnimation, ANIMATION_DURATION]);

    // Aggressive Intersection Observer - triggers immediately when ANY part visible
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        // Note: animateCounters is wrapped in useCallback so dependency is stable
        const currentRef = sectionRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Trigger animation immediately when section becomes visible
                    if (!hasAnimated) {
                        setHasAnimated(true);
                        // Small delay to ensure state updates
                        setTimeout(() => {
                            animateCounters();
                        }, 50);
                    }
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0, // Trigger when ANY part is visible (0%)
                rootMargin: '50px', // Start loading 50px before visible
            }
        );

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef);
        };
    }, [hasAnimated, animateCounters]);

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
                                    opacity: isVisible ? 1 : 0.5,
                                    transition: 'opacity 0.3s ease-in-out',
                                }}
                            >
                                {metric.key === 'youth' && `${(counts.youth || 0).toLocaleString()}+`}
                                {metric.key === 'communities' && `${counts.communities || 0}+`}
                                {metric.key === 'programs' && (counts.programs || 0)}
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
