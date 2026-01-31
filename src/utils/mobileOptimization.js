/**
 * Mobile Performance Optimization
 * Handles slow mobile networks and CPUs
 */

/**
 * Detect if device is mobile
 * @returns {boolean} True if mobile device
 */
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Detect connection speed
 * @returns {string} '4g', '3g', '2g', 'slow-4g', or 'unknown'
 */
export const getConnectionSpeed = () => {
  if (!navigator.connection) return 'unknown';
  
  const type = navigator.connection.effectiveType;
  return type; // Returns: slow-4g, 4g, 3g, 2g
};

/**
 * Check if user is on slow connection
 * @returns {boolean} True if slow network detected
 */
export const isSlowConnection = () => {
  const speed = getConnectionSpeed();
  return speed === 'slow-4g' || speed === '3g' || speed === '2g';
};

/**
 * Adaptive image quality based on device
 * @param {string} basePath - Base path without extension
 * @returns {object} Path with appropriate quality suffix
 */
export const getAdaptiveImagePath = (basePath) => {
  const isMobile = isMobileDevice();
  const isSlowNet = isSlowConnection();
  
  // Mobile + Slow network = lowest quality
  if (isMobile && isSlowNet) {
    return `${basePath}-sm.jpg`;
  }
  
  // Mobile = medium quality
  if (isMobile) {
    return `${basePath}-md.jpg`;
  }
  
  // Desktop = full quality
  return `${basePath}.jpg`;
};

/**
 * Reduce animation frame rate on mobile
 * @returns {number} Delay in milliseconds
 */
export const getMobileAnimationFrameDelay = () => {
  if (!isMobileDevice()) return 16; // 60fps on desktop
  if (isSlowConnection()) return 32; // 30fps on slow mobile
  return 20; // 50fps on fast mobile
};

/**
 * Lazy load with mobile-specific options
 * @param {HTMLElement} element - Image element
 * @param {string} src - Image source
 * @param {string} placeholder - Placeholder while loading
 */
export const lazyLoadMobileImage = (element, src, placeholder = null) => {
  if (!element) return;

  // Set placeholder immediately on mobile
  if (isMobileDevice() && placeholder) {
    element.src = placeholder;
    element.style.filter = 'blur(8px)';
  }

  // Longer threshold for mobile (start loading 200px before visible)
  const rootMargin = isMobileDevice() ? '200px' : '50px';

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // Add small delay on slow networks to prevent jank
        const delay = isSlowConnection() ? 100 : 0;
        
        setTimeout(() => {
          element.src = src;
          element.style.filter = 'blur(0)';
          element.style.transition = 'filter 0.3s ease-in-out';
        }, delay);

        observer.unobserve(element);
      }
    },
    { rootMargin }
  );

  observer.observe(element);
  return observer;
};

/**
 * Preload images with mobile optimization
 * @param {Array<string>} imageSrcs - Image URLs
 * @param {boolean} aggressive - Aggressive preloading (false for mobile)
 */
export const preloadImagesMobile = (imageSrcs, aggressive = true) => {
  const isMobile = isMobileDevice();
  const isSlowNet = isSlowConnection();

  // Skip preloading on very slow connections
  if (isMobile && isSlowNet) {
    return Promise.resolve([]);
  }

  // Load fewer images on mobile
  const imagesToPreload = isMobile ? imageSrcs.slice(0, 3) : imageSrcs;

  const promises = imagesToPreload.map((src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => resolve(null); // Don't fail on error
      img.src = src;
    });
  });

  return Promise.allSettled(promises);
};

/**
 * Mobile-optimized debounce with longer delay
 * @param {Function} func - Function to debounce
 * @param {number} delay - Base delay in ms
 */
export const debounceForMobile = (func, delay = 150) => {
  const mobileDelay = isMobileDevice() ? delay * 1.5 : delay;
  let timeoutId;

  return function debounced(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), mobileDelay);
  };
};

/**
 * Mobile-optimized throttle with adaptive timing
 * @param {Function} func - Function to throttle
 * @param {number} limit - Base limit in ms
 */
export const throttleForMobile = (func, limit = 100) => {
  const mobileLimit = isMobileDevice() ? limit * 2 : limit;
  let inThrottle;

  return function throttled(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), mobileLimit);
    }
  };
};

/**
 * Reduce animation complexity on mobile
 * @returns {object} Animation config for mobile
 */
export const getMobileAnimationConfig = () => {
  const isMobile = isMobileDevice();
  const isSlowNet = isSlowConnection();

  return {
    duration: isMobile ? 2000 : 1500, // Slower on mobile
    easing: 'ease-out',
    useGPU: !isSlowNet, // Disable GPU on very slow networks
    skipAnimationIfSlowDevice: isSlowNet,
    reduceMotion: false,
  };
};

/**
 * Check if should use reduced motion
 * @returns {boolean} True if should reduce motion
 */
export const shouldReduceMotion = () => {
  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  const isSlowNet = isSlowConnection();
  const isMobile = isMobileDevice();

  // Reduce motion on mobile + slow networks, or if user prefers
  return prefersReduced || (isMobile && isSlowNet);
};

/**
 * Optimize element rendering for mobile
 * @param {HTMLElement} element - Element to optimize
 */
export const optimizeForMobileRendering = (element) => {
  if (!element) return;

  const isMobile = isMobileDevice();
  const isSlowNet = isSlowConnection();

  if (isMobile) {
    // Reduce transformation complexity
    element.style.backfaceVisibility = 'hidden';
    element.style.perspective = 'none';
    element.style.transform = 'translateZ(0)';

    if (isSlowNet) {
      // Disable complex filters on slow networks
      element.style.filter = 'none';
    }
  }
};

/**
 * Get optimal carousel transition speed for mobile
 * @returns {number} Milliseconds for carousel transition
 */
export const getCarouselSpeed = () => {
  if (!isMobileDevice()) return 8000; // 8 seconds on desktop
  if (isSlowConnection()) return 12000; // 12 seconds on slow mobile
  return 10000; // 10 seconds on fast mobile
};

/**
 * Get optimal counter animation duration for mobile
 * @returns {number} Milliseconds for animation
 */
export const getCounterAnimationDuration = () => {
  if (!isMobileDevice()) return 1500; // 1.5 seconds on desktop
  if (isSlowConnection()) return 2500; // 2.5 seconds on slow mobile
  return 2000; // 2 seconds on fast mobile
};

/**
 * Mobile-aware fetch with timeout
 * @param {string} url - URL to fetch
 * @param {number} timeout - Timeout in ms
 */
export const fetchWithMobileTimeout = (url, timeout = 5000) => {
  const mobileTimeout = isMobileDevice() ? timeout * 2 : timeout;

  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error('Fetch timeout')),
        mobileTimeout
      )
    ),
  ]);
};

/**
 * Check if device has enough resources
 * @returns {boolean} True if good device performance
 */
export const hasGoodDevicePerformance = () => {
  if (!navigator.deviceMemory) return true; // Assume good if unknown
  return navigator.deviceMemory >= 4; // 4GB+ is good
};

/**
 * Get device memory in GB
 * @returns {number} Device memory in GB, or null if unknown
 */
export const getDeviceMemory = () => {
  return navigator.deviceMemory || null;
};

/**
 * Get number of logical processors
 * @returns {number} Number of cores
 */
export const getDeviceCores = () => {
  return navigator.hardwareConcurrency || 1;
};

/**
 * Should use minimal rendering on mobile
 * @returns {boolean} True if should minimize rendering
 */
export const shouldMinimizeRendering = () => {
  return (
    isMobileDevice() &&
    (isSlowConnection() || !hasGoodDevicePerformance())
  );
};

/**
 * Mobile performance report
 * @returns {object} Device and network info
 */
export const getMobilePerformanceReport = () => {
  return {
    isMobile: isMobileDevice(),
    connectionSpeed: getConnectionSpeed(),
    isSlowConnection: isSlowConnection(),
    deviceMemory: getDeviceMemory(),
    deviceCores: getDeviceCores(),
    hasGoodPerformance: hasGoodDevicePerformance(),
    shouldReduceMotion: shouldReduceMotion(),
    shouldMinimizeRendering: shouldMinimizeRendering(),
    userAgent: navigator.userAgent.substring(0, 50),
  };
};

/**
 * Log mobile performance data for debugging
 */
export const logMobilePerformanceData = () => {
  if (process.env.NODE_ENV === 'development') {
    const report = getMobilePerformanceReport();
    console.log('📱 Mobile Performance Report:', report);
  }
};
