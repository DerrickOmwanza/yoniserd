import React, { useEffect, useCallback, useRef, useState } from 'react';
import { throttle } from '../utils/performanceOptimization';

/**
 * Custom hook for optimized scroll handling
 * Prevents excessive re-renders and lag
 * @param {Function} callback - Callback function
 * @param {number} throttleDelay - Throttle delay in ms
 * @returns {Object} State and methods
 */
export const useOptimizedScroll = (callback, throttleDelay = 100) => {
  const throttledCallbackRef = useRef(null);

  useEffect(() => {
    if (!throttledCallbackRef.current) {
      throttledCallbackRef.current = throttle(callback, throttleDelay);
    }

    window.addEventListener('scroll', throttledCallbackRef.current, { passive: true });

    return () => {
      if (throttledCallbackRef.current) {
        window.removeEventListener('scroll', throttledCallbackRef.current);
      }
    };
  }, [callback, throttleDelay]);
};

/**
 * Hook for lazy loading with IntersectionObserver
 * Fixes blank sections when scrolling
 * @param {React.RefObject} ref - Reference to element
 * @param {number} threshold - Visibility threshold (0-1)
 * @param {string} rootMargin - Margin for early loading
 * @returns {Object} isVisible state
 */
export const useIntersectionObserver = (ref, threshold = 0.3, rootMargin = '50px') => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold, rootMargin]);

  return { isVisible };
};

/**
 * Hook for debounced values
 * Prevents excessive state updates
 * @param {*} value - Value to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {*} Debounced value
 */
export const useDebouncedValue = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Hook for memoized callback with dependencies
 * Prevents unnecessary re-renders of child components
 * @param {Function} callback - Callback function
 * @param {Array} dependencies - Dependency array
 * @returns {Function} Memoized callback
 */
export const useStableCallback = React.useCallback;

/**
 * Hook to measure component render time
 * @param {string} componentName - Component name for logging
 * @returns {void}
 */
export const useRenderTime = (componentName) => {
  useEffect(() => {
    const startTime = performance.now();
    return () => {
      const endTime = performance.now();
      console.log(`${componentName} render: ${(endTime - startTime).toFixed(2)}ms`);
    };
  }, [componentName]);
};

/**
 * Hook for managing animation frame
 * Ensures smooth animations without frame drops
 * @param {Function} callback - Animation callback
 * @param {boolean} enabled - Whether to run animation
 * @returns {void}
 */
export const useAnimationFrame = (callback, enabled = true) => {
  const requestRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const animate = () => {
      callback();
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [callback, enabled]);
};

/**
 * Hook for prefetch data
 * Loads data before component mounts
 * @param {string} url - URL to prefetch
 * @returns {Object} Data state and error
 */
export const usePrefetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    fetch(url, { priority: 'low' })
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => setError(err));
  }, [url]);

  return { data, error };
};
