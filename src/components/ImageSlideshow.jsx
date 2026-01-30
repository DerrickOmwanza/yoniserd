import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';

const SLIDE_INTERVAL = 6000; // 6 seconds - reduced frequency for better performance

const ImageSlideshow = ({ images, descriptions, containerHeight = "h-64 sm:h-96 md:h-[480px]" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  // Memoized slide data to prevent unnecessary calculations
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

  // Navigation functions with transition handling
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setDirection('next');
    setCurrentIndex((current) => (current + 1) % totalSlides);
    resetTimer();
  }, [isTransitioning, totalSlides, resetTimer]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setDirection('prev');
    setCurrentIndex((current) => (current - 1 + totalSlides) % totalSlides);
    resetTimer();
  }, [isTransitioning, totalSlides, resetTimer]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentIndex) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    resetTimer();
  }, [isTransitioning, currentIndex, resetTimer]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div 
        className={`relative overflow-hidden rounded-xl panel slideshow-container ${containerHeight}`}
        style={{ touchAction: 'pan-y' }}
      >
        {images.map((img, index) => {
          const isActive = index === currentIndex;
          const isPrevious = direction === 'next' 
            ? index < currentIndex 
            : direction === 'prev' && index > currentIndex;

          return (
            <div
              key={index}
              className={`slide ${isActive ? 'active' : isPrevious ? 'previous' : ''}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: isActive ? 1 : 0,
                transform: isActive 
                  ? 'translateX(0)' 
                  : isPrevious 
                    ? 'translateX(-100%)' 
                    : 'translateX(100%)',
                transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              <img
                src={img}
                alt={descriptions[index] || `Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable="false"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 md:p-4">
                <p className="text-sm md:text-base">{descriptions[index]}</p>
              </div>
            </div>
          );
        })}
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors"
          aria-label="Next image"
        >
          →
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
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
