import React, { useState, useEffect, useCallback, useRef, useMemo, memo } from 'react';
import { preloadImages, debounce, optimizeElementForAnimation } from '../utils/performanceOptimization';

const SLIDE_INTERVAL = 8000; // 8 seconds

/**
 * Optimized ImageSlideshow Component
 * - Uses memo to prevent unnecessary re-renders
 * - Preloads images to prevent blank sections
 * - Optimized for smooth scrolling
 */
const OptimizedImageSlideshow = memo(({ 
  images, 
  descriptions, 
  containerHeight = "h-64 sm:h-72 md:h-[480px]", 
  onSlideChange 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const timerRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  // Preload images on mount
  useEffect(() => {
    if (images && images.length > 0) {
      preloadImages(images)
        .then(() => setImagesLoaded(true))
        .catch((err) => {
          console.warn('Failed to preload images:', err);
          setImagesLoaded(true); // Still continue even if preload fails
        });
    }
  }, [images]);

  // Memoized slide count to prevent unnecessary calculations
  const totalSlides = useMemo(() => images?.length || 0, [images]);

  // Reset and start timer - memoized to prevent excessive re-renders
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setDirection('next');
      setCurrentIndex((current) => (current + 1) % totalSlides);
    }, SLIDE_INTERVAL);
  }, [totalSlides]);

  // Auto-advance slides
  useEffect(() => {
    if (totalSlides <= 0) return;
    
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer, totalSlides]);

  // Notify parent when slide changes
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentIndex);
    }
  }, [currentIndex, onSlideChange]);

  // Optimize container element for animation
  useEffect(() => {
    if (containerRef.current) {
      optimizeElementForAnimation(containerRef.current);
    }
  }, []);

  // Navigation functions - memoized
  const goToNext = useCallback(() => {
    setDirection('next');
    setCurrentIndex((current) => (current + 1) % totalSlides);
    resetTimer();
  }, [totalSlides, resetTimer]);

  const goToPrevious = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((current) => (current - 1 + totalSlides) % totalSlides);
    resetTimer();
  }, [totalSlides, resetTimer]);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    resetTimer();
  }, [currentIndex, resetTimer]);

  // Debounced keyboard navigation
   // eslint-disable-next-line react-hooks/exhaustive-deps
   const handleKeyDown = useCallback(
     debounce((e) => {
       if (e.key === 'ArrowLeft') goToPrevious();
       if (e.key === 'ArrowRight') goToNext();
     }, 50),
     [goToPrevious, goToNext]
   );

  // Add keyboard navigation
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!imagesLoaded) {
    // Show placeholder while loading
    return (
      <div className={`relative max-w-4xl mx-auto w-full ${containerHeight} bg-gray-200 animate-pulse rounded-xl`}>
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Loading...
        </div>
      </div>
    );
  }

  // Determine slide position class
  const getSlideClass = (index) => {
    if (index === currentIndex) return 'active';
    if (direction === 'next') {
      return index < currentIndex ? 'previous' : '';
    } else {
      return index > currentIndex ? '' : 'previous';
    }
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto w-full" 
      ref={containerRef}
      role="region"
      aria-label="Image carousel"
    >
      <div 
        className={`relative overflow-hidden rounded-xl slideshow-container ${containerHeight}`}
        style={{ 
          touchAction: 'pan-y',
          WebkitOverflowScrolling: 'touch',
          contain: 'layout style paint', // CSS containment for performance
        }}
      >
        {images && images.map((img, index) => {
          const slideClass = getSlideClass(index);
          
          return (
            <div
              key={index}
              className={`slide ${slideClass}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                contain: 'content',
              }}
            >
              <img
                ref={(el) => (imagesRef.current[index] = el)}
                src={img}
                alt={descriptions?.[index] || `Slide ${index + 1}`}
                className="w-full h-full object-cover block"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                draggable="false"
                style={{
                  willChange: index === currentIndex ? 'transform' : 'auto',
                  backfaceVisibility: 'hidden',
                  perspective: '1000px',
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white p-3 md:p-4">
                <p className="text-sm md:text-base font-medium">{descriptions?.[index]}</p>
              </div>
            </div>
          );
        })}
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors z-10"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors z-10"
          aria-label="Next image"
        >
          →
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-1.5 md:gap-2 mt-3 md:mt-4" role="tablist" aria-label="Image selection">
        {images && images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentIndex}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white scale-110'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

OptimizedImageSlideshow.displayName = 'OptimizedImageSlideshow';

export default OptimizedImageSlideshow;
