/**
 * Apple-Grade Motion Presets
 * Centralized animation configurations inspired by Apple's design language
 */

import { Variants, Transition, TargetAndTransition } from 'framer-motion';

// ============================================
// Transition Presets
// ============================================

export const transitions = {
  // Fast micro-interactions
  fast: {
    duration: 0.15,
    ease: [0.16, 1, 0.3, 1], // ease-out-expo
  } as Transition,

  // Standard transitions
  normal: {
    duration: 0.3,
    ease: [0.16, 1, 0.3, 1],
  } as Transition,

  // Smooth, deliberate animations
  slow: {
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1],
  } as Transition,

  // Hero animations
  slower: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  } as Transition,

  // Spring physics for playful interactions
  spring: {
    type: 'spring',
    stiffness: 400,
    damping: 25,
  } as Transition,

  // Bouncy spring for emphasis
  springBounce: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  } as Transition,

  // Gentle spring for subtle movements
  springGentle: {
    type: 'spring',
    stiffness: 200,
    damping: 30,
  } as Transition,
} as const;

// ============================================
// Animation Variants
// ============================================

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ============================================
// Stagger Container Variants
// ============================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ============================================
// Interactive States
// ============================================

export const hoverScale: TargetAndTransition = {
  scale: 1.02,
  transition: transitions.fast,
};

export const tapScale: TargetAndTransition = {
  scale: 0.98,
  transition: transitions.fast,
};

export const hoverLift: TargetAndTransition = {
  y: -4,
  transition: transitions.normal,
};

export const magneticHover = (offsetX: number, offsetY: number): TargetAndTransition => ({
  x: offsetX * 0.1,
  y: offsetY * 0.1,
  transition: transitions.springGentle,
});

// ============================================
// Page Transitions
// ============================================

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ============================================
// Scroll-triggered Animations
// ============================================

export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scrollRevealLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scrollRevealRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ============================================
// Number Counter Animation
// ============================================

export const countUp = (end: number, duration: number = 2): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      ease: 'easeOut',
    },
  },
});

// ============================================
// Rivalry-specific Animations
// ============================================

export const messiReveal: Variants = {
  hidden: {
    opacity: 0,
    x: -120,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const ronaldoReveal: Variants = {
  hidden: {
    opacity: 0,
    x: 120,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const vsReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.5,
    },
  },
};

// ============================================
// Utility Hook Types
// ============================================

export interface UseAppleMotionReturn {
  fadeUp: Variants;
  fadeDown: Variants;
  fadeIn: Variants;
  scaleIn: Variants;
  slideInLeft: Variants;
  slideInRight: Variants;
  staggerContainer: Variants;
  staggerContainerSlow: Variants;
  staggerItem: Variants;
  scrollReveal: Variants;
  scrollRevealLeft: Variants;
  scrollRevealRight: Variants;
  pageTransition: Variants;
  messiReveal: Variants;
  ronaldoReveal: Variants;
  vsReveal: Variants;
  transitions: typeof transitions;
  hoverScale: TargetAndTransition;
  tapScale: TargetAndTransition;
  hoverLift: TargetAndTransition;
}

/**
 * Hook to access all Apple-grade motion presets
 */
export const useAppleMotion = (): UseAppleMotionReturn => {
  return {
    fadeUp,
    fadeDown,
    fadeIn,
    scaleIn,
    slideInLeft,
    slideInRight,
    staggerContainer,
    staggerContainerSlow,
    staggerItem,
    scrollReveal,
    scrollRevealLeft,
    scrollRevealRight,
    pageTransition,
    messiReveal,
    ronaldoReveal,
    vsReveal,
    transitions,
    hoverScale,
    tapScale,
    hoverLift,
  };
};

export default useAppleMotion;
