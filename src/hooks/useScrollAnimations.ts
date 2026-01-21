/**
 * Apple-Grade Scroll Utilities
 * Scroll-linked animations for true Apple-style continuous transitions
 */

import { RefObject, useEffect, useState } from 'react';
import { 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue,
  MotionValue,
  SpringOptions 
} from 'framer-motion';

// ============================================
// Device Detection
// ============================================

/**
 * Detect if user is on a touch/mobile device
 * Used to reduce animations for battery/performance
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

/**
 * Detect if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
}

// ============================================
// Scroll Progress Utilities
// ============================================

/**
 * Spring options for smooth scroll-linked animations
 */
export const scrollSpringConfig: SpringOptions = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

/**
 * Get scroll progress through a section (0 to 1)
 * @param ref - Reference to the section element
 * @param offset - Start and end scroll positions
 */
export function useSectionProgress(
  ref: RefObject<HTMLElement>,
  offset: [string, string] = ['start end', 'end start']
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });
  return scrollYProgress;
}

/**
 * Get scroll progress with smooth spring interpolation
 */
export function useSmoothProgress(
  ref: RefObject<HTMLElement>,
  offset: [string, string] = ['start end', 'end start'],
  springConfig: SpringOptions = scrollSpringConfig
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });
  return useSpring(scrollYProgress, springConfig);
}

// ============================================
// Parallax Utilities
// ============================================

/**
 * Create a parallax effect based on scroll
 * @param scrollProgress - MotionValue from useScroll
 * @param speed - Parallax speed (0.5 = half speed, 2 = double speed)
 * @param direction - 'up' or 'down'
 */
export function useParallax(
  scrollProgress: MotionValue<number>,
  speed: number = 0.5,
  direction: 'up' | 'down' = 'up'
): MotionValue<number> {
  const distance = direction === 'up' ? -100 * speed : 100 * speed;
  return useTransform(scrollProgress, [0, 1], [0, distance]);
}

/**
 * Create layered parallax with multiple speeds
 */
export function useLayeredParallax(
  scrollProgress: MotionValue<number>,
  layers: { speed: number; direction?: 'up' | 'down' }[]
) {
  return layers.map(({ speed, direction = 'up' }) => {
    const distance = direction === 'up' ? -100 * speed : 100 * speed;
    return useTransform(scrollProgress, [0, 1], [0, distance]);
  });
}

// ============================================
// Transform Utilities
// ============================================

/**
 * Smooth transform with spring physics
 */
export function useSmoothTransform(
  scrollProgress: MotionValue<number>,
  inputRange: number[],
  outputRange: number[],
  springConfig: SpringOptions = scrollSpringConfig
): MotionValue<number> {
  const transformed = useTransform(scrollProgress, inputRange, outputRange);
  return useSpring(transformed, springConfig);
}

/**
 * Create opacity fade based on scroll
 */
export function useScrollOpacity(
  scrollProgress: MotionValue<number>,
  fadeIn: [number, number] = [0, 0.3],
  fadeOut: [number, number] = [0.7, 1]
): MotionValue<number> {
  return useTransform(
    scrollProgress,
    [fadeIn[0], fadeIn[1], fadeOut[0], fadeOut[1]],
    [0, 1, 1, 0]
  );
}

/**
 * Create scale effect based on scroll
 */
export function useScrollScale(
  scrollProgress: MotionValue<number>,
  scaleRange: [number, number] = [1, 0.95],
  scrollRange: [number, number] = [0, 1]
): MotionValue<number> {
  return useTransform(scrollProgress, scrollRange, scaleRange);
}

/**
 * Create blur effect based on scroll (returns string for filter)
 */
export function useScrollBlur(
  scrollProgress: MotionValue<number>,
  blurRange: [number, number] = [0, 8],
  scrollRange: [number, number] = [0, 1]
): MotionValue<string> {
  return useTransform(
    scrollProgress,
    scrollRange,
    blurRange.map(v => `blur(${v}px)`)
  );
}

// ============================================
// Counter Animation
// ============================================

/**
 * Animate a number based on scroll progress
 */
export function useScrollCounter(
  scrollProgress: MotionValue<number>,
  target: number,
  scrollRange: [number, number] = [0.2, 0.8]
): MotionValue<number> {
  return useTransform(scrollProgress, scrollRange, [0, target]);
}

// ============================================
// Sticky Section Utilities
// ============================================

/**
 * Calculate progress through a sticky/pinned section
 * Useful for animations that span the full height of a pinned element
 */
export function useStickyProgress(
  containerRef: RefObject<HTMLElement>
) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  
  return {
    progress: scrollYProgress,
    // Transform progress to specific ranges for different effects
    entrance: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
    middle: useTransform(scrollYProgress, [0.2, 0.8], [0, 1]),
    exit: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
  };
}

// ============================================
// Viewport Progress
// ============================================

/**
 * Track element's position relative to viewport center
 * Returns -1 when above center, 0 at center, 1 when below
 */
export function useViewportProgress(ref: RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  // Map 0-1 progress to -1 to 1 (centered at 0)
  return useTransform(scrollYProgress, [0, 0.5, 1], [-1, 0, 1]);
}

// ============================================
// Performance Optimized Hook
// ============================================

/**
 * Master hook that provides scroll values with mobile optimization
 */
export function useAppleScroll(
  ref: RefObject<HTMLElement>,
  options: {
    offset?: [string, string];
    smooth?: boolean;
    disableOnMobile?: boolean;
  } = {}
) {
  const {
    offset = ['start end', 'end start'],
    smooth = true,
    disableOnMobile = false,
  } = options;

  const isMobile = useIsMobile();
  const prefersReduced = usePrefersReducedMotion();
  
  const shouldAnimate = !(disableOnMobile && isMobile) && !prefersReduced;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  const smoothProgress = useSpring(scrollYProgress, scrollSpringConfig);
  
  // Return static values if animations disabled
  const staticValue = useMotionValue(0);
  
  return {
    progress: shouldAnimate ? (smooth ? smoothProgress : scrollYProgress) : staticValue,
    rawProgress: scrollYProgress,
    isMobile,
    prefersReduced,
    shouldAnimate,
  };
}

export default {
  useIsMobile,
  usePrefersReducedMotion,
  useSectionProgress,
  useSmoothProgress,
  useParallax,
  useLayeredParallax,
  useSmoothTransform,
  useScrollOpacity,
  useScrollScale,
  useScrollBlur,
  useScrollCounter,
  useStickyProgress,
  useViewportProgress,
  useAppleScroll,
  scrollSpringConfig,
};
