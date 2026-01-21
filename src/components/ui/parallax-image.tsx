'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  intensity?: number; // 0.1 to 0.5 recommended
  direction?: 'up' | 'down';
  scale?: boolean;
  children?: ReactNode;
}

/**
 * Apple-inspired Parallax Image
 * Smooth scroll-based parallax with configurable intensity
 */
export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  intensity = 0.2,
  direction = 'up',
  scale = true,
  children,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate parallax offset based on direction
  const yRange = direction === 'up' ? [100 * intensity, -100 * intensity] : [-100 * intensity, 100 * intensity];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  // Optional scale effect
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], scale ? [1.1, 1, 1.1] : [1, 1, 1]);

  return (
    <div ref={ref} className={cn('relative overflow-hidden', containerClassName)}>
      <motion.div
        style={{ y, scale: scaleValue }}
        className="w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          className={cn('w-full h-full object-cover', className)}
          loading="lazy"
        />
      </motion.div>
      {children && (
        <div className="absolute inset-0 z-10">
          {children}
        </div>
      )}
    </div>
  );
}

interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  direction?: 'up' | 'down';
}

/**
 * Generic Parallax Container
 * Apply parallax to any content
 */
export function ParallaxContainer({
  children,
  className,
  intensity = 0.15,
  direction = 'up',
}: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yRange = direction === 'up' ? [50 * intensity, -50 * intensity] : [-50 * intensity, 50 * intensity];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <div ref={ref} className={cn('relative', className)}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxTextProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

/**
 * Parallax Text Effect
 * Smooth text movement on scroll
 */
export function ParallaxText({
  children,
  className,
  intensity = 0.1,
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30 * intensity, -30 * intensity]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <div ref={ref} className={cn('relative', className)}>
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </div>
  );
}

export default ParallaxImage;
