"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function FootballScroller() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Football moves from left edge (0%) to right edge (100%)
  const leftPosition = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  
  // Football rotates as it moves (rolling effect) - 4 full spins
  const rotation = useTransform(smoothProgress, [0, 1], [0, 1440]);

  // Scale effect - grows in the middle
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <div
      ref={containerRef}
      className="relative h-24 sm:h-32 lg:h-40 bg-surface-base"
    >   
      {/* Trail effect - follows the ball */}
      <motion.div
        style={{
          left: leftPosition,
          translateX: "-100%",
        }}
        className="absolute top-1/2 -translate-y-1/2 w-16 h-6 bg-gradient-to-r from-transparent via-red-800/40 to-blue-800/40 blur-lg animate-pulse"
      />

      {/* Football with glow */}
      <motion.div
        style={{
          left: leftPosition,
          rotate: rotation,
          scale: scale,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute top-1/2 will-change-transform"
      >
        {/* Outer glow ring with pulse */}
        <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-r from-red-800/80 to-blue-800/80 blur-lg opacity-70 animate-pulse" />
        
        {/* Inner glow with pulse */}
        <div className="absolute inset-0 -m-1 rounded-full bg-white/30 blur-md opacity-50 animate-pulse" />

        {/* Football image */}
        <img
          src="/events/image.png"
          alt="Football"
          className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Sparkle particles with pulse */}
      <motion.div
        style={{ left: leftPosition, translateX: "-200%" }}
        className="absolute top-1/2 -translate-y-1/2"
      >
        <span className="absolute w-2 h-2 bg-white/60 rounded-full blur-sm animate-pulse" />
      </motion.div>
    </div>
  );
}


