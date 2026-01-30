import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';

const SLIDE_INTERVAL = 8000; // 8 seconds - slower on mobile for better performance

const ImageSlideshow = ({ images, descriptions, containerHeight = "h-64 sm:h-72 md:h-[480px]" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  // Memoized slide count
  const totalSlides = useMemo(() => images.length, [images.length]);

  // Reset and start timer
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
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer]);

  // Simplified navigation without complex state
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
    <div className="relative max-w-4xl mx-auto w-full" ref={containerRef}>
      <div 
        className={`relative overflow-hidden rounded-xl slideshow-container ${containerHeight}`}
        style={{ 
          touchAction: 'pan-y',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {images.map((img, index) => {
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
              }}
            >
              <img
                src={img}
                alt={descriptions[index] || `Slide ${index + 1}`}
                className="w-full h-full object-cover block"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white p-3 md:p-4">
                <p className="text-sm md:text-base font-medium">{descriptions[index]}</p>
              </div>
            </div>
          );
        })}
        
        {/* Navigation Arrows - smaller on mobile */}
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
      <div className="flex justify-center gap-1.5 md:gap-2 mt-3 md:mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
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
};

export default ImageSlideshow;
