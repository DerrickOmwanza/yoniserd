import React, { useState, useEffect, useRef, useCallback } from 'react';

const SLIDE_INTERVAL = 5000; // 5 seconds
const SWIPE_THRESHOLD = 50; // minimum distance for a swipe

const ImageSlideshow = ({ images, descriptions, containerHeight = "h-64 sm:h-96 md:h-[480px]" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  // removed isDragging (unused) to satisfy linter
  const [showTouchHint, setShowTouchHint] = useState(true);
  const timerRef = useRef(null);

  // Reset and start timer
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setDirection('next');
      setCurrentIndex((current) => (current + 1) % images.length);
    }, SLIDE_INTERVAL);
  }, [images.length]);

  // Auto-advance slides
  useEffect(() => {
    resetTimer();

    // Hide touch hint after 5 seconds
    const hideHintTimer = setTimeout(() => {
      setShowTouchHint(false);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      clearTimeout(hideHintTimer);
    };
  }, [resetTimer]);

  // Navigation functions
  const goToNext = () => {
    setDirection('next');
    setCurrentIndex((current) => (current + 1) % images.length);
    resetTimer();
  };

  const goToPrevious = () => {
    setDirection('prev');
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
    resetTimer();
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    resetTimer();
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    if (showTouchHint) setShowTouchHint(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    // end of touch
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > SWIPE_THRESHOLD;
    const isRightSwipe = distance < -SWIPE_THRESHOLD;

    if (isLeftSwipe) {
      setDirection('next');
      goToNext();
    } else if (isRightSwipe) {
      setDirection('prev');
      goToPrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
    resetTimer();
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div 
        className={`relative overflow-hidden rounded-xl panel slideshow-container ${containerHeight}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide absolute inset-0 ${
              index === currentIndex ? 'active' : 
              direction === 'next' ? 
                (index < currentIndex ? 'previous' : '') :
                (index > currentIndex ? '' : 'previous')
            }`}
            style={{ 
              touchAction: 'none',
              userSelect: 'none'
            }}
          >
            <img
              src={img}
              alt={descriptions[index]}
              className="w-full h-full object-cover object-center select-none"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 backdrop-blur-sm">
              <p className="text-sm md:text-base">{descriptions[index]}</p>
            </div>
          </div>
        ))}
        
        {/* Touch Hint */}
        <div className={`touch-indicator ${showTouchHint ? 'visible' : ''}`}>
          Swipe to navigate
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 btn-accent p-2 rounded-full flex items-center justify-center"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 btn-accent p-2 rounded-full flex items-center justify-center"
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
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white scale-110'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
