/**
 * Performance Optimization Utilities
 * Fixes scrolling lag, blank sections, and improves page load speed
 */

/**
 * Debounce function - prevents excessive re-renders during scroll
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, delay = 150) => {
  let timeoutId;
  return function debounced(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function - limits function calls during rapid events
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit = 100) => {
  let inThrottle;
  return function throttled(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Preload images to prevent blank sections when scrolling
 * @param {Array<string>} imageSrcs - Array of image URLs
 * @returns {Promise} Resolves when all images are loaded
 */
export const preloadImages = (imageSrcs) => {
  const promises = imageSrcs.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      img.src = src;
    });
  });
  return Promise.all(promises);
};

/**
 * Lazy load images with IntersectionObserver
 * Prevents loading images until they're in viewport
 * @param {HTMLElement} element - Image element to lazy load
 * @param {string} src - Image source URL
 * @param {number} rootMargin - Margin for early loading (default 50px before viewport)
 */
export const setupLazyLoading = (element, src, rootMargin = '50px') => {
  if (!element) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        element.src = src;
        element.dataset.loaded = 'true';
        observer.unobserve(element);
      }
    },
    { rootMargin }
  );

  observer.observe(element);
  return observer;
};

/**
 * Request animation frame wrapper with cleanup
 * Ensures smooth animations without frame drops
 * @param {Function} callback - Animation callback
 * @returns {Function} Cleanup function
 */
export const createAnimationFrame = (callback) => {
  let animationId = null;
  let isRunning = true;

  const animate = () => {
    if (isRunning) {
      callback();
      animationId = requestAnimationFrame(animate);
    }
  };

  animationId = requestAnimationFrame(animate);

  return () => {
    isRunning = false;
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  };
};

/**
 * Performance monitoring - logs Core Web Vitals
 * @param {Function} callback - Optional callback with metrics
 */
export const monitorPerformance = (callback) => {
  if ('PerformanceObserver' in window) {
    try {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
        if (callback) callback({ metric: 'LCP', value: lastEntry.renderTime || lastEntry.loadTime });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log('CLS:', clsValue);
        if (callback) callback({ metric: 'CLS', value: clsValue });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstInput = entries[0];
        console.log('FID:', firstInput.processingDuration);
        if (callback) callback({ metric: 'FID', value: firstInput.processingDuration });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }
};

/**
 * Detect if user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Create optimized scroll listener
 * Prevents performance issues during scroll
 * @param {Function} callback - Callback function
 * @param {number} throttleDelay - Throttle delay in ms (default 100ms)
 * @returns {Function} Cleanup function
 */
export const createScrollListener = (callback, throttleDelay = 100) => {
  const throttledCallback = throttle(callback, throttleDelay);
  window.addEventListener('scroll', throttledCallback, { passive: true });

  return () => {
    window.removeEventListener('scroll', throttledCallback);
  };
};

/**
 * Batch DOM updates to prevent layout thrashing
 * @param {Array<Function>} updates - Array of DOM update functions
 */
export const batchDOMUpdates = (updates) => {
  requestAnimationFrame(() => {
    updates.forEach((update) => update());
  });
};

/**
 * Memory-efficient event delegation
 * Single listener on parent instead of multiple on children
 * @param {HTMLElement} parent - Parent element
 * @param {string} selector - CSS selector for child elements
 * @param {string} eventType - Event type (e.g., 'click')
 * @param {Function} handler - Event handler
 * @returns {Function} Cleanup function
 */
export const delegateEvent = (parent, selector, eventType, handler) => {
  const listener = (e) => {
    const target = e.target.closest(selector);
    if (target) {
      handler(e, target);
    }
  };

  parent.addEventListener(eventType, listener, { passive: true });

  return () => {
    parent.removeEventListener(eventType, listener);
  };
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} offset - Offset in pixels (default 0)
 * @returns {boolean} True if element is in viewport
 */
export const isElementInViewport = (element, offset = 0) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.bottom >= -offset
  );
};

/**
 * Optimize images for web delivery
 * Generates srcSet for responsive images
 * @param {string} baseSrc - Base image source
 * @param {Array<number>} sizes - Array of image widths
 * @returns {Object} Object with src and srcSet properties
 */
export const generateResponsiveImageSrcSet = (baseSrc, sizes = [320, 640, 1280]) => {
  // This assumes images follow a naming convention like image-320.jpg, image-640.jpg
  const ext = baseSrc.split('.').pop();
  const basePath = baseSrc.replace(`.${ext}`, '');

  const srcSet = sizes
    .map((size) => `${basePath}-${size}.${ext} ${size}w`)
    .join(', ');

  return { src: baseSrc, srcSet };
};

/**
 * Create virtual scroller for long lists
 * Only renders visible items to improve performance
 * @param {Array} items - Array of items
 * @param {number} itemHeight - Height of each item in pixels
 * @param {number} containerHeight - Height of visible container
 * @param {number} scrollTop - Current scroll position
 * @returns {Object} Object with visible items and start index
 */
export const getVisibleItems = (items, itemHeight, containerHeight, scrollTop) => {
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 1);
  const endIndex = Math.min(items.length, Math.ceil((scrollTop + containerHeight) / itemHeight) + 1);

  return {
    visibleItems: items.slice(startIndex, endIndex),
    startIndex,
    endIndex,
    offsetY: startIndex * itemHeight,
  };
};

/**
 * Optimize CSS repaints
 * Use will-change sparingly for animations
 * @param {HTMLElement} element - Element to optimize
 */
export const optimizeElementForAnimation = (element) => {
  if (element) {
    element.style.willChange = 'transform, opacity';
    element.style.transform = 'translateZ(0)'; // GPU acceleration
    element.style.backfaceVisibility = 'hidden';
  }
};

/**
 * Cleanup animation optimizations
 * @param {HTMLElement} element - Element to cleanup
 */
export const resetAnimationOptimization = (element) => {
  if (element) {
    element.style.willChange = 'auto';
    element.style.transform = '';
    element.style.backfaceVisibility = 'visible';
  }
};

/**
 * Image loading strategy with placeholder
 * Shows low-quality placeholder while full image loads
 * @param {HTMLElement} img - Image element
 * @param {string} lowQualitySrc - Low-quality/blurred image source
 * @param {string} highQualitySrc - High-quality image source
 */
export const progressiveImageLoading = (img, lowQualitySrc, highQualitySrc) => {
  if (!img) return;

  // Show low-quality version immediately
  img.src = lowQualitySrc;
  img.style.filter = 'blur(10px)';

  // Load high-quality version in background
  const highQualityImg = new Image();
  highQualityImg.onload = () => {
    img.src = highQualitySrc;
    img.style.filter = 'blur(0)';
    img.style.transition = 'filter 0.3s ease-in-out';
  };
  highQualityImg.src = highQualitySrc;
};

/**
 * Create web worker for heavy computations
 * Prevents UI blocking during calculations
 * @param {string} workerScript - Worker script as string
 * @returns {Worker} Worker instance
 */
export const createWorker = (workerScript) => {
  const blob = new Blob([workerScript], { type: 'application/javascript' });
  const workerUrl = URL.createObjectURL(blob);
  return new Worker(workerUrl);
};

/**
 * Optimize font loading
 * Prevents FOUT (Flash of Unstyled Text)
 * @param {string} fontFamily - Font family name
 * @param {string} src - Font file source
 */
export const optimizeFontLoading = (fontFamily, src) => {
  const fontFace = new FontFace(fontFamily, `url(${src})`, {
    display: 'swap', // Shows fallback until custom font loads
  });

  document.fonts.add(fontFace);
  fontFace.load();
};

/**
 * Cache strategy for API/data
 * Stores data with expiration time
 * @param {string} key - Cache key
 * @param {*} value - Value to cache
 * @param {number} expirationMs - Expiration time in milliseconds
 */
export const cacheData = (key, value, expirationMs = 3600000) => {
  const data = {
    value,
    timestamp: Date.now(),
    expiration: expirationMs,
  };
  localStorage.setItem(`cache_${key}`, JSON.stringify(data));
};

/**
 * Retrieve cached data if not expired
 * @param {string} key - Cache key
 * @returns {*} Cached value or null if expired/not found
 */
export const getCachedData = (key) => {
  const cached = localStorage.getItem(`cache_${key}`);
  if (!cached) return null;

  const { value, timestamp, expiration } = JSON.parse(cached);
  if (Date.now() - timestamp > expiration) {
    localStorage.removeItem(`cache_${key}`);
    return null;
  }
  return value;
};

/**
 * Measure component render time
 * Helps identify performance bottlenecks
 * @param {string} componentName - Component name
 * @param {Function} callback - Callback to measure
 * @returns {*} Result of callback
 */
export const measureRenderTime = (componentName, callback) => {
  const startTime = performance.now();
  const result = callback();
  const endTime = performance.now();
  console.log(`${componentName} render time: ${(endTime - startTime).toFixed(2)}ms`);
  return result;
};
