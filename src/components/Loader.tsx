'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Apple-inspired Loading Screen
 * Displays while assets load with brand animation
 */
export function Loader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 300);
          return 100;
        }
        // Accelerate near the end
        const increment = prev < 80 ? Math.random() * 15 + 5 : Math.random() * 5 + 2;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-surface-base flex flex-col items-center justify-center"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-12"
          >
            {/* Animated rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 -m-8"
            >
              <div className="w-full h-full rounded-full border border-rivalry-red/20" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 -m-12"
            >
              <div className="w-full h-full rounded-full border border-rivalry-blue/20" />
            </motion.div>

            {/* Logo Text */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-black tracking-tight"
              >
                <span className="gradient-text-rivalry">CX</span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4, type: 'spring' }}
                  className="text-text-primary"
                >
                  3.0
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-48 sm:w-64">
            <div className="h-1 bg-surface-elevated rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--rivalry-red)), hsl(var(--rivalry-blue)))',
                }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-xs text-text-tertiary mt-4 font-mono"
            >
              {Math.round(progress)}%
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-12 text-sm text-text-tertiary"
          >
            Loading the rivalry...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
