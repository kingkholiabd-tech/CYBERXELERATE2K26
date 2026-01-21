'use client';

import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/useScrollAnimations';

// ============================================
// Data
// ============================================

const scheduleItems = [
  { time: '8:30 – 9:00', title: 'Registration', description: 'Main Block entrance' },
  { time: '9:00 – 10:00', title: 'Inauguration', description: 'Seminar Hall' },
  { time: '10:00 – 12:45', title: 'Events', description: 'All competition rounds' },
  { time: '12:45 – 1:30', title: 'Lunch Break', description: 'Veg & Non-Veg available' },
  { time: '1:30 – 2:00', title: 'Valedictory', description: 'Awards & closing' },
];

const rules = [
  'Bring your college ID card',
  'Avoid mobile phones inside campus',
  'Confirmation via registered email',
  'Use only college transport (Feb 9)',
  'Boys: Formal attire, clean shave',
  'Girls: Formal dress required',
  'No on-spot registration',
];

// ============================================
// Schedule Item Component
// ============================================

function ScheduleItem({ 
  item, 
  index, 
  scrollProgress 
}: { 
  item: typeof scheduleItems[0]; 
  index: number; 
  scrollProgress: MotionValue<number>;
}) {
  const prefersReduced = usePrefersReducedMotion();
  
  const startReveal = 0.1 + index * 0.08;
  const endReveal = startReveal + 0.12;
  
  const itemY = useTransform(
    scrollProgress,
    [startReveal, endReveal],
    prefersReduced ? [0, 0] : [30, 0]
  );
  
  const itemOpacity = useTransform(
    scrollProgress,
    [startReveal, endReveal],
    [0, 1]
  );
  
  // Dot fill animation
  const dotScale = useTransform(
    scrollProgress,
    [startReveal, endReveal],
    [0.5, 1]
  );
  
  const dotOpacity = useTransform(
    scrollProgress,
    [startReveal - 0.02, endReveal],
    [0.3, 1]
  );

  // Line draw animation
  const lineScaleY = useTransform(
    scrollProgress,
    [startReveal, endReveal + 0.1],
    [0, 1]
  );

  return (
    <motion.div
      style={{ y: itemY, opacity: itemOpacity }}
      className="relative flex gap-4 will-change-transform"
    >
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <motion.div
          style={{ scale: dotScale, opacity: dotOpacity }}
          className="w-3 h-3 rounded-full bg-gradient-to-r from-rivalry-red to-rivalry-blue 
            shadow-[0_0_12px_hsl(var(--rivalry-red)/0.5)]"
        />
        {index < scheduleItems.length - 1 && (
          <motion.div 
            className="w-px flex-1 bg-gradient-to-b from-white/30 to-transparent mt-2"
            style={{
              scaleY: lineScaleY,
              originY: 0,
            }}
          />
        )}
      </div>
      
      {/* Content */}
      <div className="pb-6">
        <span className="text-xs font-medium text-rivalry-red/80 tracking-wider uppercase">
          {item.time}
        </span>
        <h4 className="text-lg font-semibold text-text-primary mt-1">
          {item.title}
        </h4>
        <p className="text-sm text-text-secondary mt-0.5">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

// ============================================
// Rule Item Component
// ============================================

function RuleItem({ 
  rule, 
  index, 
  scrollProgress 
}: { 
  rule: string; 
  index: number; 
  scrollProgress: MotionValue<number>;
}) {
  const prefersReduced = usePrefersReducedMotion();
  
  const startReveal = 0.15 + index * 0.06;
  const endReveal = startReveal + 0.1;
  
  const ruleY = useTransform(
    scrollProgress,
    [startReveal, endReveal],
    prefersReduced ? [0, 0] : [20, 0]
  );
  
  const ruleOpacity = useTransform(
    scrollProgress,
    [startReveal, endReveal],
    [0, 1]
  );
  
  const ruleX = useTransform(
    scrollProgress,
    [startReveal, endReveal],
    prefersReduced ? [0, 0] : [15, 0]
  );
  
  // Check icon animation
  const checkScale = useTransform(
    scrollProgress,
    [startReveal + 0.02, endReveal],
    [0, 1]
  );

  return (
    <motion.li
      style={{ y: ruleY, x: ruleX, opacity: ruleOpacity }}
      className="flex items-start gap-3 text-text-primary leading-relaxed will-change-transform"
    >
      <motion.span 
        style={{ scale: checkScale }}
        className="mt-1 text-rivalry-blue flex-shrink-0"
      >
        <CheckCircle2 size={16} />
      </motion.span>
      <span className="text-sm sm:text-base">{rule}</span>
    </motion.li>
  );
}

// ============================================
// Main Component
// ============================================

export default function ScheduleRules() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Background image parallax
  const bgY = useTransform(
    smoothProgress,
    [0, 1],
    prefersReduced ? ['0%', '0%'] : ['0%', '20%']
  );
  
  const bgScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    prefersReduced ? [1, 1, 1] : [1.1, 1.05, 1]
  );

  // Overlay gradient shift
  const overlayOpacity = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [0.85, 0.75, 0.75, 0.9]
  );

  // Header animations
  const headerY = useTransform(
    smoothProgress,
    [0, 0.15],
    prefersReduced ? [0, 0] : [60, 0]
  );
  
  const headerOpacity = useTransform(
    smoothProgress,
    [0, 0.12],
    [0, 1]
  );
  
  const headerScale = useTransform(
    smoothProgress,
    [0.5, 0.8],
    prefersReduced ? [1, 1] : [1, 0.97]
  );

  // Content cards parallax
  const leftCardY = useTransform(
    smoothProgress,
    [0.05, 0.25],
    prefersReduced ? [0, 0] : [50, 0]
  );
  
  const rightCardY = useTransform(
    smoothProgress,
    [0.08, 0.28],
    prefersReduced ? [0, 0] : [70, 0]
  );
  
  const cardsOpacity = useTransform(
    smoothProgress,
    [0.05, 0.2],
    [0, 1]
  );

  // Warning note opacity
  const warningOpacity = useTransform(smoothProgress, [0.5, 0.65], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="event-info"
      className="relative min-h-screen py-24 sm:py-32 overflow-hidden"
    >
      {/* ============================================ */}
      {/* Background with Parallax & Overlays */}
      {/* ============================================ */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        {/* Base Layer - Gradient + Pattern */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ scale: bgScale }}
        >
          {/* Radial Gradient Background */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, hsl(var(--rivalry-red) / 0.15) 0%, transparent 40%),
                radial-gradient(circle at 80% 70%, hsl(var(--rivalry-blue) / 0.15) 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, hsl(var(--surface-elevated)) 0%, hsl(var(--surface-base)) 100%)
              `,
            }}
          />
          
          {/* Animated Grid Pattern */}
          <svg 
            className="absolute inset-0 w-full h-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path 
                  d="M 60 0 L 0 0 0 60" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>

          {/* Floating Cyber Nodes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 4 + (i % 3) * 2,
                  height: 4 + (i % 3) * 2,
                  left: `${10 + i * 7}%`,
                  top: `${15 + (i % 4) * 20}%`,
                  background: i % 2 === 0 
                    ? 'hsl(var(--rivalry-red) / 0.3)' 
                    : 'hsl(var(--rivalry-blue) / 0.3)',
                  boxShadow: i % 2 === 0
                    ? '0 0 20px hsl(var(--rivalry-red) / 0.2)'
                    : '0 0 20px hsl(var(--rivalry-blue) / 0.2)',
                }}
                animate={{
                  y: [0, -30 - i * 3, 0],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
            <motion.line 
              x1="20%" y1="30%" x2="50%" y2="50%" 
              stroke="white" strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.line 
              x1="80%" y1="70%" x2="50%" y2="50%" 
              stroke="white" strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            />
          </svg>
        </motion.div>

        {/* Gradient Overlays */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: overlayOpacity }}
        >
          {/* Main darkening overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                to bottom,
                hsl(var(--surface-base) / 0.95) 0%,
                hsl(var(--surface-base) / 0.7) 30%,
                hsl(var(--surface-base) / 0.7) 70%,
                hsl(var(--surface-base) / 0.95) 100%
              )`,
            }}
          />
          
          {/* Rivalry diagonal gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                135deg,
                hsl(var(--rivalry-red) / 0.08) 0%,
                transparent 40%,
                transparent 60%,
                hsl(var(--rivalry-blue) / 0.08) 100%
              )`,
            }}
          />
        </motion.div>

        {/* Vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, hsl(var(--surface-base) / 0.4) 100%)',
          }}
        />

        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay" />
      </motion.div>

      {/* ============================================ */}
      {/* Content */}
      {/* ============================================ */}
      <div className="relative z-10 section-container">
        {/* Section Header */}
        <motion.header
          className="text-center mb-16 sm:mb-20"
          style={{
            y: headerY,
            opacity: headerOpacity,
            scale: headerScale,
          }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-surface-elevated/80 backdrop-blur-sm
              border border-white/10 text-xs font-medium text-text-secondary tracking-wider uppercase mb-6"
          >
            February 9, 2026
          </motion.span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-text-primary">Event</span>
            <span className="gradient-text-rivalry"> Day Info</span>
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Everything you need to know for the big day. 
            <span className="text-text-primary font-medium"> Schedule your time, follow the rules.</span>
          </p>
        </motion.header>

        {/* Split Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Schedule */}
          <motion.div
            style={{ y: leftCardY, opacity: cardsOpacity }}
            className="glass-card rounded-2xl p-6 sm:p-8 will-change-transform"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rivalry-red/20 to-rivalry-red/5 
                flex items-center justify-center">
                <Clock className="w-5 h-5 text-rivalry-red" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary">Schedule</h3>
                <p className="text-sm text-text-tertiary">Day timeline</p>
              </div>
            </div>

            <div className="space-y-0">
              {scheduleItems.map((item, index) => (
                <ScheduleItem 
                  key={item.title} 
                  item={item} 
                  index={index} 
                  scrollProgress={smoothProgress} 
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Rules */}
          <motion.div
            style={{ y: rightCardY, opacity: cardsOpacity }}
            className="glass-card rounded-2xl p-6 sm:p-8 will-change-transform"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rivalry-blue/20 to-rivalry-blue/5 
                flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-rivalry-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary">Rules</h3>
                <p className="text-sm text-text-tertiary">Must follow</p>
              </div>
            </div>

            <ul className="space-y-4">
              {rules.map((rule, index) => (
                <RuleItem 
                  key={index} 
                  rule={rule} 
                  index={index} 
                  scrollProgress={smoothProgress} 
                />
              ))}
            </ul>
            
            {/* Warning note */}
            <motion.div
              className="mt-8 pt-6 border-t border-white/10"
              style={{ opacity: warningOpacity }}
            >
              <p className="text-sm text-text-tertiary flex items-start gap-2">
                <span className="text-accent-gold mt-0.5">⚠</span>
                <span>Violation of any rule may result in disqualification. Contact organizers for queries.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
