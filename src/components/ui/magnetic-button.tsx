'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, ReactNode, MouseEvent } from 'react';
import { cn } from '../../lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  magneticStrength?: number;
  onClick?: () => void;
  disabled?: boolean;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

/**
 * Apple-inspired Magnetic Button
 * Pulls toward cursor on hover with smooth spring physics
 */
export function MagneticButton({
  children,
  className,
  magneticStrength = 0.3,
  onClick,
  disabled = false,
  as = 'button',
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for magnetic effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth movement
  const springConfig = { stiffness: 300, damping: 20 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Scale on hover
  const scale = useSpring(1, { stiffness: 400, damping: 25 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current || disabled) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * magneticStrength);
    y.set(distanceY * magneticStrength);
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsHovered(true);
    scale.set(1.02);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  const handleMouseDown = () => {
    if (disabled) return;
    scale.set(0.98);
  };

  const handleMouseUp = () => {
    if (disabled) return;
    scale.set(isHovered ? 1.02 : 1);
  };

  const Component = as === 'a' ? motion.a : motion.button;

  return (
    <Component
      ref={ref as any}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        x: springX,
        y: springY,
        scale,
      }}
      className={cn(
        'relative inline-flex items-center justify-center',
        'transition-colors duration-200',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {/* Ripple effect on click */}
      <motion.span
        className="absolute inset-0 rounded-inherit overflow-hidden"
        initial={false}
      >
        {isHovered && (
          <motion.span
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-white/20 rounded-full"
            style={{
              transformOrigin: 'center',
            }}
          />
        )}
      </motion.span>
      {children}
    </Component>
  );
}

export default MagneticButton;
