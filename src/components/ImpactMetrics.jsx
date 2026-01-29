import React, { useState, useEffect, useRef } from 'react';

const ImpactMetrics = () => {
  const [counts, setCounts] = useState({
    youth: 0,
    communities: 0,
    programs: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const metrics = [
    { label: 'Youth Reached', value: 10000, key: 'youth' },
    { label: 'Communities Served', value: 50, key: 'communities' },
    { label: 'Programs Running', value: 15, key: 'programs' },
  ];

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
      { threshold: 0.3 }
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

  // Animate counter from 0 to target value
  const animateCounters = () => {
    const duration = 1500; // 1.5 seconds
    const startTime = Date.now();

    const updateCounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        youth: Math.floor(10000 * progress),
        communities: Math.floor(50 * progress),
        programs: Math.floor(15 * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      }
    };

    requestAnimationFrame(updateCounts);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-6 bg-gradient-contrast"
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
            >
              <div className="text-5xl md:text-7xl font-bold text-white-primary mb-4">
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
};

export default ImpactMetrics;
