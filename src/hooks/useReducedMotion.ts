import { useEffect, useState } from 'react';

/**
 * Custom hook to detect if user prefers reduced motion
 * Respects the prefers-reduced-motion media query
 *
 * @returns boolean - true if user prefers reduced motion
 *
 * @example
 * ```tsx
 * const prefersReducedMotion = useReducedMotion();
 *
 * return (
 *   <motion.div
 *     animate={{ opacity: 1 }}
 *     transition={{
 *       duration: prefersReducedMotion ? 0 : 0.3
 *     }}
 *   >
 *     Content
 *   </motion.div>
 * );
 * ```
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if matchMedia is supported
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    // Create media query
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Create event listener for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add event listener
    // Using addEventListener for better browser support
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
}

/**
 * Get animation duration based on reduced motion preference
 *
 * @param normalDuration - Normal animation duration in seconds
 * @param prefersReducedMotion - Whether user prefers reduced motion
 * @returns number - 0 if reduced motion preferred, normalDuration otherwise
 *
 * @example
 * ```tsx
 * const prefersReducedMotion = useReducedMotion();
 * const duration = getMotionDuration(0.3, prefersReducedMotion);
 * ```
 */
export function getMotionDuration(
  normalDuration: number,
  prefersReducedMotion: boolean
): number {
  return prefersReducedMotion ? 0 : normalDuration;
}

/**
 * Get animation config with reduced motion support
 *
 * @param config - Animation configuration object
 * @param prefersReducedMotion - Whether user prefers reduced motion
 * @returns Modified config with instant transitions if reduced motion preferred
 *
 * @example
 * ```tsx
 * const prefersReducedMotion = useReducedMotion();
 * const animateConfig = getMotionConfig(
 *   { opacity: 1, y: 0, transition: { duration: 0.3 } },
 *   prefersReducedMotion
 * );
 * ```
 */
export function getMotionConfig<T extends Record<string, any>>(
  config: T,
  prefersReducedMotion: boolean
): T {
  if (!prefersReducedMotion) return config;

  // Deep clone the config
  const modifiedConfig = JSON.parse(JSON.stringify(config));

  // If there's a transition property, set duration to 0
  if (modifiedConfig.transition) {
    modifiedConfig.transition.duration = 0;
  }

  return modifiedConfig;
}
