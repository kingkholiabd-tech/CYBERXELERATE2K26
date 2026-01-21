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

  // Football moves from left edge (0%) to right edge (100%) using left position
  const leftPosition = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  
  // Football rotates as it moves (rolling effect) - 4 full spins
  const rotation = useTransform(smoothProgress, [0, 1], [0, 1440]);

  // Slight scale effect
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]);

  return (
    <div
      ref={containerRef}
      className="relative h-24 sm:h-32 lg:h-40 bg-surface-base overflow-hidden"
    >
      {/* Track line */}
      <div className="absolute top-1/2 left-0 right-0  bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Football */}
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
        <img
          src="/events/image.png"
          alt="Football"
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
}

