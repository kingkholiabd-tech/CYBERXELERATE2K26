'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Calendar, Users, Trophy, Utensils, Bus, Shield } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/useScrollAnimations';

// ============================================
// Scroll-Linked Counter Component
// ============================================

function ScrollCounter({ 
  end, 
  suffix = '', 
  prefix = '',
  scrollProgress 
}: { 
  end: number; 
  suffix?: string; 
  prefix?: string;
  scrollProgress: any;
}) {
  const count = useTransform(
    scrollProgress,
    [0.1, 0.4],
    [0, end]
  );
  
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const unsubscribe = count.on('change', (latest) => {
      setDisplayCount(Math.round(latest));
    });
    return () => unsubscribe();
  }, [count]);

  return (
    <span className="tabular-nums">
      {prefix}{displayCount.toLocaleString()}{suffix}
    </span>
  );
}

// ============================================
// Stat Card with Parallax
// ============================================

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  scrollProgress: any;
  index: number;
}

function StatCard({ icon, value, label, suffix = '', prefix = '', scrollProgress, index }: StatCardProps) {
  const prefersReduced = usePrefersReducedMotion();
  
  // Staggered parallax for each card
  const cardY = useTransform(
    scrollProgress,
    [0, 0.5],
    prefersReduced ? [0, 0] : [60 + index * 15, 0]
  );
  
  const cardOpacity = useTransform(
    scrollProgress,
    [0.05 + index * 0.03, 0.2 + index * 0.03],
    [0, 1]
  );

  return (
    <motion.div
      style={{
        y: cardY,
        opacity: cardOpacity,
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card-hover p-6 flex flex-col items-center text-center will-change-transform"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rivalry-red/20 to-rivalry-blue/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <span className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
        <ScrollCounter end={value} suffix={suffix} prefix={prefix} scrollProgress={scrollProgress} />
      </span>
      <span className="text-sm text-text-tertiary uppercase tracking-wider">{label}</span>
    </motion.div>
  );
}

// ============================================
// Highlight Card with Parallax
// ============================================

interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  scrollProgress: any;
  index: number;
}

function HighlightCard({ icon, title, description, gradient, scrollProgress, index }: HighlightCardProps) {
  const prefersReduced = usePrefersReducedMotion();
  
  // Different parallax speeds based on row position
  const row = Math.floor(index / 3);
  const col = index % 3;
  
  const cardY = useTransform(
    scrollProgress,
    [0.3, 0.7],
    prefersReduced ? [0, 0] : [40 + row * 20, 0]
  );
  
  const cardOpacity = useTransform(
    scrollProgress,
    [0.3 + col * 0.02, 0.45 + col * 0.02],
    [0, 1]
  );

  return (
    <motion.div
      style={{
        y: cardY,
        opacity: cardOpacity,
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card-hover p-6 group will-change-transform"
    >
      <div className={`w-10 h-10 rounded-lg ${gradient} flex items-center justify-center mb-4 
        group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-text-primary mb-2">{title}</h4>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </motion.div>
  );
}

// ============================================
// Main About Component
// ============================================

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Header parallax - title stays visible longer, scales down
  const headerY = useTransform(
    smoothProgress,
    [0, 0.3],
    prefersReduced ? [0, 0] : [80, 0]
  );
  
  const headerOpacity = useTransform(
    smoothProgress,
    [0, 0.15],
    [0, 1]
  );

  const headerScale = useTransform(
    smoothProgress,
    [0.5, 0.8],
    prefersReduced ? [1, 1] : [1, 0.95]
  );

  // Background gradient shift
  const bgOpacity = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.2, 0.2, 0]
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-24 sm:py-32 bg-surface-base overflow-hidden"
    >
      {/* Animated Background Gradients */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: bgOpacity }}
      >
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--rivalry-red) / 0.3) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--rivalry-blue) / 0.3) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      <div className="relative z-10 section-container">
        {/* Section Header with scroll-linked animations */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          style={{
            y: headerY,
            opacity: headerOpacity,
            scale: headerScale,
          }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-surface-elevated border border-white/10 
              text-xs font-medium text-text-secondary tracking-wider uppercase mb-6"
          >
            About The Event
          </motion.span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text-rivalry">Ignite Your</span>
            <br />
            <span className="text-text-primary">Cybersecurity Passion</span>
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Join the ultimate battleground where innovation meets competition.
            <span className="text-text-primary font-medium"> CyberXelerate 3.0</span> brings
            together the brightest minds in cybersecurity.
          </p>
        </motion.div>

        {/* Stats Bento Grid with scroll-linked counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          <StatCard
            icon={<Users className="w-6 h-6 text-rivalry-red" />}
            value={1000}
            suffix="+"
            label="Expected Participants"
            scrollProgress={smoothProgress}
            index={0}
          />
          <StatCard
            icon={<Trophy className="w-6 h-6 text-accent-gold" />}
            value={50}
            prefix="₹"
            suffix="K+"
            label="Prize Pool"
            scrollProgress={smoothProgress}
            index={1}
          />
          <StatCard
            icon={<Calendar className="w-6 h-6 text-rivalry-blue" />}
            value={6}
            label="Exciting Events"
            scrollProgress={smoothProgress}
            index={2}
          />
          <StatCard
            icon={<Shield className="w-6 h-6 text-accent-purple" />}
            value={1}
            label="Epic Day"
            scrollProgress={smoothProgress}
            index={3}
          />
        </div>

        {/* Highlights Grid with parallax */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {[
            {
              icon: <span className="text-lg">🎟️</span>,
              title: 'Free Registration',
              description: 'Participate in all events at absolutely no cost. Open to all college students.',
              gradient: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
            },
            {
              icon: <Trophy className="w-5 h-5 text-accent-gold" />,
              title: 'Cash Prizes',
              description: 'Showcase your skills and compete for exciting cash prizes across all categories.',
              gradient: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20',
            },
            {
              icon: <Utensils className="w-5 h-5 text-rivalry-red" />,
              title: 'Complimentary Food',
              description: 'Enjoy free meals throughout the event while you tackle the challenges.',
              gradient: 'bg-gradient-to-br from-rivalry-red/20 to-pink-500/20',
            },
            {
              icon: <Bus className="w-5 h-5 text-rivalry-blue" />,
              title: 'Transport Facilities',
              description: 'Convenient transport provided from key locations. Check routes below.',
              gradient: 'bg-gradient-to-br from-rivalry-blue/20 to-cyan-500/20',
            },
            {
              icon: <span className="text-lg">👔</span>,
              title: 'Professional Atmosphere',
              description: 'Dress formally and network with industry experts and fellow enthusiasts.',
              gradient: 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20',
            },
            {
              icon: <span className="text-lg">🏆</span>,
              title: 'Certificates',
              description: 'All participants receive certificates. Winners get special recognition.',
              gradient: 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20',
            },
          ].map((item, index) => (
            <HighlightCard
              key={item.title}
              {...item}
              scrollProgress={smoothProgress}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          style={{
            opacity: useTransform(smoothProgress, [0.6, 0.75], [0, 1]),
            y: useTransform(smoothProgress, [0.6, 0.75], prefersReduced ? [0, 0] : [30, 0]),
          }}
        >
          <p className="text-text-secondary mb-6">
            Organized by the Department of CSE (Cyber Security) at
            <span className="text-text-primary font-medium"> R.M.K. College of Engineering and Technology</span>
          </p>
          
          <motion.a
            href="/pdfs/transport-details.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-text-primary
              bg-gradient-to-r from-rivalry-red to-rivalry-blue
              hover:shadow-lg hover:shadow-rivalry-red/20 transition-shadow duration-300"
          >
            <Bus className="w-5 h-5" />
            View Transport Routes
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
