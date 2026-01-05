import { Variants } from 'framer-motion';

/**
 * Motion duration constants (in seconds)
 * These align with CSS custom properties from the design system
 */
export const DURATION = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.4,
  slow: 0.5,
} as const;

/**
 * Easing curves for natural motion
 */
export const EASING = {
  // Smooth easing for most animations
  smooth: [0.4, 0, 0.2, 1],
  // Emphasis for important elements
  emphasis: [0.4, 0, 0.1, 1],
  // Subtle for background/supporting elements
  subtle: [0.25, 0.1, 0.25, 1],
} as const;

/**
 * Fade in animation
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.fast,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: DURATION.instant,
      ease: EASING.smooth,
    },
  },
};

/**
 * Fade up animation (common for content reveals)
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: DURATION.fast,
      ease: EASING.smooth,
    },
  },
};

/**
 * Stagger children animation
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/**
 * Card hover effect
 */
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      duration: DURATION.fast,
      ease: EASING.emphasis,
    },
  },
  tap: {
    scale: 0.98,
  },
};

/**
 * Button glow effect
 */
export const buttonGlow: Variants = {
  rest: {
    boxShadow: '0 0 0 0 rgba(var(--primary-azure-rgb), 0)',
  },
  hover: {
    boxShadow: '0 0 20px 0 rgba(var(--primary-azure-rgb), 0.3)',
    transition: {
      duration: DURATION.fast,
      ease: EASING.smooth,
    },
  },
  tap: {
    scale: 0.95,
  },
};

/**
 * Focus ring animation
 */
export const focusRing = {
  initial: {
    boxShadow: '0 0 0 0 rgba(var(--primary-azure-rgb), 0)',
  },
  focus: {
    boxShadow: '0 0 0 3px rgba(var(--primary-azure-rgb), 0.4)',
    transition: {
      duration: DURATION.instant,
    },
  },
};

/**
 * Slide in from left
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
};

/**
 * Slide in from right
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
};

/**
 * Scale in animation
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.fast,
      ease: EASING.smooth,
    },
  },
};

/**
 * Page transition
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: DURATION.fast,
      ease: EASING.smooth,
    },
  },
};

/**
 * Get reduced motion safe variant
 * Returns instant transitions if user prefers reduced motion
 */
export function getReducedMotionVariant(variants: Variants, prefersReducedMotion: boolean): Variants {
  if (!prefersReducedMotion) return variants;

  // Create a new variant with instant transitions
  const reducedVariants: Variants = {};

  for (const [key, value] of Object.entries(variants)) {
    if (typeof value === 'object' && value !== null) {
      reducedVariants[key] = {
        ...value,
        transition: {
          duration: 0,
        },
      };
    } else {
      reducedVariants[key] = value;
    }
  }

  return reducedVariants;
}
