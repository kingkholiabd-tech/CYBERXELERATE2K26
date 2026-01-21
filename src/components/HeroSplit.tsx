"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
} from "framer-motion";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { EncryptedText } from "./ui/encrypted-text";
import { messiReveal, ronaldoReveal, fadeUp } from "../hooks/useAppleMotion";
import {
  useIsMobile,
  usePrefersReducedMotion,
} from "../hooks/useScrollAnimations";

// ============================================
// Types
// ============================================

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// ============================================
// Constants
// ============================================

const NAVBAR_HEIGHT = 80;
const TARGET_DATE = new Date("2026-02-09T09:00:00").getTime();

// Apple-style easing curves
const APPLE_EASE = [0.25, 0.1, 0.25, 1] as const;

// ============================================
// Sub-components
// ============================================

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="glass-card p-2 sm:p-3 md:p-4 text-center min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
    <div className="relative h-7 sm:h-8 md:h-10 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: APPLE_EASE }}
          className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-text-primary absolute"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="text-2xs sm:text-xs font-medium tracking-wider text-text-tertiary uppercase mt-1 block">
      {label}
    </span>
  </div>
);

const ScrollIndicator = ({ opacity }: { opacity: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 1, ease: APPLE_EASE }}
    style={{ opacity }}
    className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
  >
    <span className="text-2xs sm:text-xs text-text-tertiary tracking-widest uppercase">
      Scroll
    </span>
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-text-tertiary" />
    </motion.div>
  </motion.div>
);

// ============================================
// Mobile Hero - Clean, centered design
// ============================================

const MobileHero = ({
  timeLeft,
  scrollIndicatorOpacity,
}: {
  timeLeft: TimeLeft;
  scrollIndicatorOpacity: any;
}) => {
  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 100%, hsl(var(--rivalry-red) / 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 100%, hsl(var(--rivalry-blue) / 0.15) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Player Silhouettes */}
      <div className="absolute inset-x-0 bottom-0 flex justify-between items-end pointer-events-none">
        <motion.img
          src="/Messi.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 1.2, ease: APPLE_EASE, delay: 0.3 }}
          className="h-[38vh] sm:h-[48vh] w-auto object-contain"
        />
        <motion.img
          src="/Ronaldo.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{ duration: 1.2, ease: APPLE_EASE, delay: 0.4 }}
          className="h-[38vh] sm:h-[48vh] w-auto object-contain"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 pt-8 pb-32">
        {/* Football tagline - above title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: APPLE_EASE }}
          className="text-text-tertiary text-xs italic mb-3"
        >
          Rivals, not enemies.
        </motion.p>

        {/* Event Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: APPLE_EASE, delay: 0.2 }}
          className="text-center mb-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <EncryptedText
              text="CYBERXELERATE"
              encryptedClassName="text-text-disabled"
              revealedClassName="gradient-text-rivalry"
              revealDelayMs={35}
              startDelay={600}
            />
          </h1>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8, ease: APPLE_EASE }}
            className="text-5xl sm:text-6xl font-bold text-text-primary block mt-2"
          >
            3.0
          </motion.span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8, ease: APPLE_EASE }}
          className="text-text-secondary text-sm max-w-xs text-center mb-8"
        >
          A National Level Technical Symposium
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: APPLE_EASE }}
          className="flex gap-2 sm:gap-3"
        >
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} label="Hrs" />
          <CountdownUnit value={timeLeft.minutes} label="Min" />
          <CountdownUnit value={timeLeft.seconds} label="Sec" />
        </motion.div>

        {/* Date Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6, ease: APPLE_EASE }}
          className="mt-6 px-4 py-2 rounded-full bg-surface-elevated/50 backdrop-blur-md border border-white/10"
        >
          <span className="text-xs font-medium text-text-secondary tracking-wider">
            FEBRUARY 9, 2026 • RMKCET
          </span>
        </motion.div>
      </div>

      <ScrollIndicator opacity={scrollIndicatorOpacity} />
    </div>
  );
};

// ============================================
// Main Component
// ============================================

export default function HeroSplit() {
  const containerRef = useRef<HTMLElement>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const isMobile = useIsMobile();
  const prefersReduced = usePrefersReducedMotion();

  // ============================================
  // Scroll-linked animations (Apple-style)
  // ============================================
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // Apple-style scroll transforms - subtle, refined
  const heroScale = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReduced ? [1, 1] : [1, 0.95]
  );
  const heroOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const heroBlur = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReduced ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(8px)"]
  );
  const heroY = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReduced ? [0, 0] : [0, -40]
  );

  // Memoized parallax values
  const messiParallax = useMemo(
    () => ({
      y: prefersReduced ? [0, 0] : [0, -120],
      x: prefersReduced ? [0, 0] : [0, -60],
      scale: [1, 1.05],
    }),
    [prefersReduced]
  );

  const ronaldoParallax = useMemo(
    () => ({
      y: prefersReduced ? [0, 0] : [0, -160],
      x: prefersReduced ? [0, 0] : [0, 60],
      scale: [1, 1.08],
    }),
    [prefersReduced]
  );

  // Silhouette parallax transforms
  const messiParallaxY = useTransform(smoothProgress, [0, 1], messiParallax.y);
  const messiParallaxX = useTransform(smoothProgress, [0, 1], messiParallax.x);
  const messiScale = useTransform(
    smoothProgress,
    [0, 0.5],
    messiParallax.scale
  );

  const ronaldoParallaxY = useTransform(
    smoothProgress,
    [0, 1],
    ronaldoParallax.y
  );
  const ronaldoParallaxX = useTransform(
    smoothProgress,
    [0, 1],
    ronaldoParallax.x
  );
  const ronaldoScale = useTransform(
    smoothProgress,
    [0, 0.5],
    ronaldoParallax.scale
  );

  // Scroll indicator fade
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.08],
    [1, 0]
  );

  // ============================================
  // Mouse parallax (desktop only)
  // ============================================
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 80, damping: 25 };
  const messiMouseX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [15, -15]),
    springConfig
  );
  const messiMouseY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    springConfig
  );
  const ronaldoMouseX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-15, 15]),
    springConfig
  );
  const ronaldoMouseY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    springConfig
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!containerRef.current || isMobile) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY, isMobile]
  );

  // ============================================
  // Effects
  // ============================================

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = TARGET_DATE - Date.now();
      if (diff <= 0) return clearInterval(interval);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative h-[150vh] bg-gradient-to-r from-blue-800 via-black to-red-800"
    >
      {/* Sticky container for pinned hero */}
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ paddingTop: NAVBAR_HEIGHT }}
      >
        {/* Noise Overlay */}
        <div className="absolute inset-0 noise-overlay pointer-events-none z-50" />

        {/* ============================================
            Mobile Layout
            ============================================ */}
        {isMobile ? (
          <MobileHero
            timeLeft={timeLeft}
            scrollIndicatorOpacity={scrollIndicatorOpacity}
          />
        ) : (
          /* ============================================
             Desktop Layout - Clean, centered design
             ============================================ */
          <motion.div
            style={{
              scale: heroScale,
              opacity: heroOpacity,
              filter: heroBlur,
              y: heroY,
            }}
            className="absolute inset-0 will-change-transform"
          >
            {/* Split Background with subtle gradients */}
            <div className="absolute inset-0 flex">
              {/* Messi Side */}
              <div className="w-1/2 relative">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 20% 80%, hsl(var(--rivalry-red) / 0.2) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Ronaldo Side */}
              <div className="w-1/2 relative">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 80% 80%, hsl(var(--rivalry-blue) / 0.2) 0%, transparent 50%)",
                  }}
                />
              </div>
            </div>

            {/* Messi Silhouette with parallax */}
            <motion.img
              src="/Messi.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              variants={messiReveal}
              initial="hidden"
              animate="visible"
              style={{
                x: messiMouseX,
                y: messiMouseY,
                translateY: messiParallaxY,
                translateX: messiParallaxX,
                scale: messiScale,
              }}
              className="absolute bottom-0 left-0 h-[70vh] lg:h-[80vh] w-auto object-contain z-10 select-none pointer-events-none will-change-transform"
            />

            {/* Ronaldo Silhouette with parallax */}
            <motion.img
              src="/Ronaldo.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              variants={ronaldoReveal}
              initial="hidden"
              animate="visible"
              style={{
                x: ronaldoMouseX,
                y: ronaldoMouseY,
                translateY: ronaldoParallaxY,
                translateX: ronaldoParallaxX,
                scale: ronaldoScale,
              }}
              className="absolute bottom-0 right-0 h-[70vh] lg:h-[80vh] w-auto object-contain z-10 select-none pointer-events-none will-change-transform"
            />

            {/* Main Content - Centered */}
            <div className="relative z-20 h-[calc(100vh-80px)] flex items-center justify-center px-4">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center text-center max-w-lg"
              >
                {/* Football tagline - above title */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: APPLE_EASE }}
                  className="text-text-tertiary text-xs lg:text-sm italic mb-3"
                >
                  Rivals, not enemies.
                </motion.p>

                {/* Event Title */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: APPLE_EASE, delay: 0.3 }}
                  className="mb-2"
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                    <EncryptedText
                      text="CYBERXELERATE"
                      encryptedClassName="text-text-disabled"
                      revealedClassName="gradient-text-rivalry"
                      revealDelayMs={35}
                      startDelay={500}
                    />
                  </h1>
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: APPLE_EASE }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-text-primary"
                >
                  3.0
                </motion.span>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8, ease: APPLE_EASE }}
                  className="text-text-secondary text-sm lg:text-base mt-4 max-w-md"
                >
                  A National Level Technical Symposium
                </motion.p>

                {/* Countdown */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.8, ease: APPLE_EASE }}
                  className="flex gap-2 lg:gap-3 mt-8"
                >
                  <CountdownUnit value={timeLeft.days} label="Days" />
                  <CountdownUnit value={timeLeft.hours} label="Hours" />
                  <CountdownUnit value={timeLeft.minutes} label="Min" />
                  <CountdownUnit value={timeLeft.seconds} label="Sec" />
                </motion.div>

                {/* Date Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.1, duration: 0.6, ease: APPLE_EASE }}
                  className="mt-6 px-4 py-2 rounded-full bg-surface-elevated/50 backdrop-blur-md border border-white/10"
                >
                  <span className="text-xs font-medium text-text-secondary tracking-wider">
                    FEBRUARY 9, 2026 • RMKCET
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <ScrollIndicator opacity={scrollIndicatorOpacity} />
          </motion.div>
        )}

        {/* Vignette Effect */}
        <div className="absolute inset-0 vignette pointer-events-none z-30" />
      </div>
    </section>
  );
}
