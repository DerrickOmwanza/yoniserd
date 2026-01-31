import React, { useState, useEffect, useCallback, useRef, useMemo, memo } from 'react';
import { preloadImagesMobile, getCarouselSpeed, shouldReduceMotion } from '../utils/mobileOptimization';

/**
 * Mobile-Optimized ImageSlideshow
 * - Aggressive lazy loading for mobile
 * - Slower transitions on slow networks
 * - Reduced animations on low-end devices
 * - Progressive image loading
 */
const MobileOptimizedImageSlideshow = memo(({
  images,
  descriptions,
  containerHeight = "h-64 sm:h-72 md:h-[480px]",
  onSlideChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingImages, setLoadingImages] = useState(new Set());
  const timerRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  // Get carousel speed based on device
  const SLIDE_INTERVAL = useMemo(() => getCarouselSpeed(), []);

  // Preload images with mobile optimization
  useEffect(() => {
    if (images && images.length > 0) {
      preloadImagesMobile(images, false) // false = not aggressive
        .then(() => setImagesLoaded(true))
        .catch(() => setImagesLoaded(true)); // Continue even if fails
    }
  }, [images]);

  const totalSlides = useMemo(() => images?.length || 0, [images]);

  // Reset timer with mobile-optimized interval
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setDirection('next');
      setCurrentIndex((current) => (current + 1) % totalSlides);
    }, SLIDE_INTERVAL);
  }, [totalSlides, SLIDE_INTERVAL]);

  // Auto-advance slides
  useEffect(() => {
    if (totalSlides <= 0) return;
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer, totalSlides]);

  // Notify parent when slide changes
  useEffect(() => {
    if (onSlideChange) onSlideChange(currentIndex);
  }, [currentIndex, onSlideChange]);

  // Navigation
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

  const getSlideClass = (index) => {
    if (index === currentIndex) return 'active';
    if (direction === 'next') {
      return index < currentIndex ? 'previous' : '';
    }
    return index > currentIndex ? '' : 'previous';
  };

  // Handle image load
  const handleImageLoad = useCallback((index) => {
    setLoadingImages((prev) => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  }, []);

  // Check if should skip animations on mobile
  const skipAnimation = shouldReduceMotion();

  if (!imagesLoaded) {
    return (
      <div className={`relative max-w-4xl mx-auto w-full ${containerHeight} bg-gray-300 rounded-xl flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-gray-600 font-medium">Loading images...</p>
          <p className="text-sm text-gray-500 mt-1">Please wait</p>
        </div>
      </div>
    );
  }

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
          contain: 'layout style paint',
          transition: skipAnimation ? 'none' : 'opacity 0.3s ease-in-out',
        }}
      >
        {images && images.map((img, index) => {
          const slideClass = getSlideClass(index);
          const isLoading = loadingImages.has(index);

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
                opacity: index === currentIndex ? 1 : 0,
                transition: skipAnimation ? 'none' : 'opacity 0.3s ease-in-out',
                pointerEvents: index === currentIndex ? 'auto' : 'none',
              }}
            >
              {/* Loading placeholder */}
              {isLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}

              <img
                ref={(el) => (imagesRef.current[index] = el)}
                src={img}
                alt={descriptions?.[index] || `Slide ${index + 1}`}
                className="w-full h-full object-cover block"
                loading={index <= currentIndex + 1 ? 'eager' : 'lazy'}
                decoding="async"
                draggable="false"
                onLoad={() => handleImageLoad(index)}
                style={{
                  willChange: index === currentIndex ? 'opacity' : 'auto',
                  backfaceVisibility: 'hidden',
                  perspective: '1000px',
                }}
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white p-3 md:p-4">
                <p className="text-sm md:text-base font-medium truncate">
                  {descriptions?.[index]}
                </p>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows - Hidden on very small mobile */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors z-10 text-xs md:text-base"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors z-10 text-xs md:text-base"
          aria-label="Next image"
        >
          →
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-1 md:gap-2 mt-2 md:mt-4">
        {images && images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentIndex}
            className={`rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white scale-110 w-2 h-2 md:w-3 md:h-3'
                : 'bg-white/40 hover:bg-white/60 w-1.5 h-1.5 md:w-2 md:h-2'
            }`}
            aria-label={`Go to image ${index + 1}`}
            style={{
              transition: skipAnimation ? 'none' : 'all 0.2s ease-in-out',
            }}
          />
        ))}
      </div>
    </div>
  );
});

MobileOptimizedImageSlideshow.displayName = 'MobileOptimizedImageSlideshow';

export default MobileOptimizedImageSlideshow;
