'use client';

import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { EncryptedText } from './ui/encrypted-text';
import {
  messiReveal,
  ronaldoReveal,
  vsReveal,
  fadeUp,
  staggerContainer,
  staggerItem,
} from '../hooks/useAppleMotion';
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useScrollAnimations';

// ============================================
// Types
// ============================================

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface MobileSlide {
  id: 'messi' | 'ronaldo' | 'content';
  title: string;
  subtitle: string;
}

// ============================================
// Constants
// ============================================

const NAVBAR_HEIGHT = 80;
const TARGET_DATE = new Date('2026-02-09T09:00:00').getTime();
const MOBILE_SLIDE_DURATION = 4000;

const mobileSlides: MobileSlide[] = [
  { id: 'messi', title: 'MESSI', subtitle: 'THE MAESTRO' },
  { id: 'ronaldo', title: 'RONALDO', subtitle: 'THE MACHINE' },
  { id: 'content', title: 'CYBERXELERATE', subtitle: '3.0' },
];

// ============================================
// Sub-components
// ============================================

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="glass-card p-3 sm:p-4 text-center min-w-[70px] sm:min-w-[80px]">
    <div className="relative h-8 sm:h-10 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl font-bold font-mono text-text-primary absolute"
        >
          {String(value).padStart(2, '0')}
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
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2.5, duration: 0.8 }}
    style={{ opacity }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
  >
    <span className="text-xs text-text-tertiary tracking-widest uppercase">Scroll</span>
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <ChevronDown className="w-5 h-5 text-text-tertiary" />
    </motion.div>
  </motion.div>
);

const MobileCarousel = ({
  activeSlide,
  setActiveSlide,
  timeLeft,
}: {
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  timeLeft: TimeLeft;
}) => {
  const slide = mobileSlides[activeSlide];

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        {slide.id === 'messi' && (
          <motion.div
            key="messi"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-rivalry-red/20 via-rivalry-red/10 to-transparent" />
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 80%, hsl(var(--rivalry-red) / 0.3) 0%, transparent 60%)',
              }}
            />
            <motion.img
              src="/Messi.png"
              alt="Messi Silhouette"
              className="absolute bottom-0 h-[65vh] w-auto object-contain opacity-60"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
            <div className="relative z-10 text-center px-6">
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-7xl sm:text-8xl font-black tracking-tighter gradient-text-messi text-glow-messi"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg sm:text-xl tracking-[0.3em] text-rivalry-red/80 font-medium mt-4"
              >
                {slide.subtitle}
              </motion.p>
            </div>
          </motion.div>
        )}

        {slide.id === 'ronaldo' && (
          <motion.div
            key="ronaldo"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-rivalry-blue/20 via-rivalry-blue/10 to-transparent" />
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 80%, hsl(var(--rivalry-blue) / 0.3) 0%, transparent 60%)',
              }}
            />
            <motion.img
              src="/Ronaldo.png"
              alt="Ronaldo Silhouette"
              className="absolute bottom-0 h-[65vh] w-auto object-contain opacity-60"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
            <div className="relative z-10 text-center px-6">
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-6xl sm:text-7xl font-black tracking-tighter gradient-text-ronaldo text-glow-ronaldo"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg sm:text-xl tracking-[0.3em] text-rivalry-blue/80 font-medium mt-4"
              >
                {slide.subtitle}
              </motion.p>
            </div>
          </motion.div>
        )}

        {slide.id === 'content' && (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at center, hsl(var(--surface-elevated) / 0.5) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10 text-center">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl sm:text-5xl font-black tracking-tight gradient-text-rivalry"
              >
                CYBERXELERATE
              </motion.h1>
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-6xl sm:text-7xl font-black text-text-primary block mt-2"
              >
                3.0
              </motion.span>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-text-secondary text-sm sm:text-base mt-6 max-w-xs mx-auto"
              >
                Where Excellence Meets Competition
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex justify-center gap-2 sm:gap-3 mt-8"
              >
                <CountdownUnit value={timeLeft.days} label="Days" />
                <CountdownUnit value={timeLeft.hours} label="Hrs" />
                <CountdownUnit value={timeLeft.minutes} label="Min" />
                <CountdownUnit value={timeLeft.seconds} label="Sec" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {mobileSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeSlide ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
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
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Device detection
  const isMobile = useIsMobile();
  const prefersReduced = usePrefersReducedMotion();

  // ============================================
  // Scroll-linked animations (Apple-style)
  // ============================================
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Smooth spring for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Hero container transforms on scroll
  const heroScale = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReduced ? [1, 1] : [1, 0.92]
  );
  const heroOpacity = useTransform(
    smoothProgress,
    [0, 0.4],
    [1, 0]
  );
  const heroBlur = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReduced ? ['blur(0px)', 'blur(0px)'] : ['blur(0px)', 'blur(12px)']
  );
  const heroY = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReduced ? [0, 0] : [0, -60]
  );

  // Messi silhouette parallax (slower, moves up)
  const messiParallaxY = useTransform(
    smoothProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [0, -150]
  );
  const messiParallaxX = useTransform(
    smoothProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [0, -80]
  );
  const messiScale = useTransform(
    smoothProgress,
    [0, 0.5],
    [1, 1.1]
  );

  // Ronaldo silhouette parallax (faster, moves up more)
  const ronaldoParallaxY = useTransform(
    smoothProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [0, -200]
  );
  const ronaldoParallaxX = useTransform(
    smoothProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [0, 80]
  );
  const ronaldoScale = useTransform(
    smoothProgress,
    [0, 0.5],
    [1, 1.15]
  );

  // Scroll indicator fade out quickly
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [1, 0]
  );

  // ============================================
  // Mouse parallax (desktop only)
  // ============================================
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const messiMouseX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), springConfig);
  const messiMouseY = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const ronaldoMouseX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const ronaldoMouseY = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!containerRef.current || isMobile) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY, isMobile]
  );

  // ============================================
  // Effects
  // ============================================
  
  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Auto-advance mobile carousel
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % mobileSlides.length);
    }, MOBILE_SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section
      ref={containerRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative h-[150vh] bg-surface-base"
    >
      {/* Sticky container for pinned hero */}
      <div className="sticky top-0 h-screen overflow-hidden" style={{ paddingTop: NAVBAR_HEIGHT }}>
        
        {/* Noise Overlay */}
        <div className="absolute inset-0 noise-overlay pointer-events-none z-50" />

        {/* ============================================
            Mobile Layout
            ============================================ */}
        {isMobile ? (
          <MobileCarousel activeSlide={activeSlide} setActiveSlide={setActiveSlide} timeLeft={timeLeft} />
        ) : (
          /* ============================================
             Desktop Layout with Scroll Animations
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
            {/* Split Background with animated gradient */}
            <div className="absolute inset-0 flex">
              {/* Messi Side */}
              <div className="w-1/2 relative">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse at 20% 80%, hsl(var(--rivalry-red) / 0.25) 0%, transparent 50%)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-rivalry-red/10 to-transparent" />
              </div>

              {/* Ronaldo Side */}
              <div className="w-1/2 relative">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse at 80% 80%, hsl(var(--rivalry-blue) / 0.25) 0%, transparent 50%)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-rivalry-blue/10 to-transparent" />
              </div>
            </div>

            {/* Messi Silhouette with parallax */}
            <motion.img
              src="/Messi.png"
              alt=""
              aria-hidden="true"
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
              className="absolute bottom-0 left-0 h-[85vh] w-auto object-contain z-10 select-none pointer-events-none will-change-transform"
            />

            {/* Ronaldo Silhouette with parallax */}
            <motion.img
              src="/Ronaldo.png"
              alt=""
              aria-hidden="true"
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
              className="absolute bottom-0 right-0 h-[85vh] w-auto object-contain z-10 select-none pointer-events-none will-change-transform"
            />

            {/* Main Content */}
            <div className="relative z-20 h-[calc(100vh-80px)] flex items-center justify-center px-8 lg:px-16">
              <div className="w-full max-w-7xl flex items-center justify-between gap-8 lg:gap-16">
                
                {/* Messi Text Column */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex-1 text-right"
                >
                  <motion.div variants={staggerItem}>
                    <h2 className="text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter gradient-text-messi text-glow-messi leading-none">
                      <EncryptedText
                        text="MESSI"
                        revealDelayMs={50}
                        startDelay={200}
                        encryptedClassName="text-rivalry-red/40"
                        revealedClassName="gradient-text-messi"
                      />
                    </h2>
                  </motion.div>
                  <motion.p
                    variants={staggerItem}
                    className="text-lg lg:text-xl tracking-[0.4em] text-rivalry-red/70 font-medium mt-4 uppercase"
                  >
                    The Maestro
                  </motion.p>
                  <motion.p
                    variants={staggerItem}
                    className="text-sm text-text-tertiary mt-6 max-w-xs ml-auto leading-relaxed"
                  >
                    8× Ballon d'Or winner. The greatest playmaker football has ever seen.
                  </motion.p>
                </motion.div>

                {/* Center Content */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                  className="flex flex-col items-center text-center flex-shrink-0 px-4"
                >
                  {/* VS Badge */}
                  <motion.div
                    variants={vsReveal}
                    initial="hidden"
                    animate="visible"
                    className="ring-btn w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center mb-8"
                  >
                    <span className="text-2xl lg:text-3xl font-black text-text-primary relative z-10">VS</span>
                  </motion.div>

                  {/* Event Title */}
                  <div className="mb-2">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight">
                      <EncryptedText
                        text="CYBERXELERATE"
                        encryptedClassName="text-text-disabled"
                        revealedClassName="gradient-text-rivalry"
                        revealDelayMs={40}
                        startDelay={800}
                      />
                    </h1>
                  </div>

                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="text-5xl lg:text-6xl xl:text-7xl font-black text-text-primary"
                  >
                    3.0
                  </motion.span>

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                    className="text-text-secondary text-sm lg:text-base mt-4 max-w-sm"
                  >
                    Where Excellence Meets Competition
                  </motion.p>

                  {/* Countdown */}
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-3 lg:gap-4 mt-8"
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
                    transition={{ delay: 2.3, duration: 0.5 }}
                    className="mt-6 px-4 py-2 rounded-full bg-surface-elevated/60 backdrop-blur-sm border border-white/10"
                  >
                    <span className="text-xs font-medium text-text-secondary tracking-wider">
                      FEBRUARY 9, 2026 • RMKCET
                    </span>
                  </motion.div>
                </motion.div>

                {/* Ronaldo Text Column */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex-1 text-left"
                >
                  <motion.div variants={staggerItem}>
                    <h2 className="text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter gradient-text-ronaldo text-glow-ronaldo leading-none">
                      <EncryptedText
                        text="RONALDO"
                        revealDelayMs={50}
                        startDelay={400}
                        encryptedClassName="text-rivalry-blue/40"
                        revealedClassName="gradient-text-ronaldo"
                      />
                    </h2>
                  </motion.div>
                  <motion.p
                    variants={staggerItem}
                    className="text-lg lg:text-xl tracking-[0.4em] text-rivalry-blue/70 font-medium mt-4 uppercase"
                  >
                    The Machine
                  </motion.p>
                  <motion.p
                    variants={staggerItem}
                    className="text-sm text-text-tertiary mt-6 max-w-xs leading-relaxed"
                  >
                    5× Ballon d'Or winner. The greatest goal scorer in football history.
                  </motion.p>
                </motion.div>
              </div>
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
