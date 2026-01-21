"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Bus, Ticket, UtensilsCrossed, ScrollText } from "lucide-react";
import { usePrefersReducedMotion } from "../hooks/useScrollAnimations";

// Apple-style easing
const APPLE_EASE = [0.25, 0.1, 0.25, 1] as const;

// Stats data - concise, factual
const stats = [
  { value: "1000+", label: "Participants" },
  { value: "₹50K", label: "Prize Pool" },
  { value: "6", label: "Events" },
  { value: "1", label: "Day" },
];

// What's included - no fluff
const includes = [
  { icon: Ticket, text: "Free entry for all" },
  { icon: UtensilsCrossed, text: "Meals provided" },
  { icon: Bus, text: "Transport available" },
  { icon: ScrollText, text: "Certificates for all" },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // Refined parallax - subtle, purposeful
  const headerY = useTransform(
    smoothProgress,
    [0, 0.3],
    prefersReduced ? [0, 0] : [60, 0]
  );
  const headerOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const statsY = useTransform(
    smoothProgress,
    [0.1, 0.4],
    prefersReduced ? [0, 0] : [40, 0]
  );
  const statsOpacity = useTransform(smoothProgress, [0.1, 0.25], [0, 1]);
  const includesY = useTransform(
    smoothProgress,
    [0.25, 0.5],
    prefersReduced ? [0, 0] : [30, 0]
  );
  const includesOpacity = useTransform(smoothProgress, [0.25, 0.4], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-20 sm:py-28 lg:py-36 bg-surface-base"
    >
      <div className="section-container">
        {/* Header - Apple-style typography */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-20"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <motion.p
            className="text-rivalry-red text-sm font-medium tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: APPLE_EASE }}
          >
            February 9, 2026
          </motion.p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6">
            One day.
            <br />
            <span className="text-text-secondary">Six challenges.</span>
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            CyberXelerate 3.0 brings together students across Tamil Nadu for a
            day of technical competition and creative problem-solving.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: APPLE_EASE }}
            className="text-text-tertiary text-sm italic mt-4"
          >
            "The pitch is set. The players are ready."
          </motion.p>
        </motion.div>

        {/* Stats - Clean grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16  sm:mb-20"
          style={{ y: statsY, opacity: statsOpacity }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center transition-all ease-in-out duration-500 py-6 sm:py-8 rounded-2xl bg-surface-elevated/50 border border-white/5 hover:bg-gradient-to-br hover:from-red-800/20 hover:via-gray-900/50 hover:to-blue-800/20 hover:border-white/20 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: APPLE_EASE }}
            >
              <span className="block text-3xl sm:text-4xl font-bold text-text-primary mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-text-tertiary">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* What's Included - Minimal */}
        <motion.div
          className="max-w-2xl mx-auto"
          style={{ y: includesY, opacity: includesOpacity }}
        >
          <p className="text-center text-text-tertiary text-sm uppercase tracking-widest mb-6">
            What's included
          </p>

          <div className="flex justify-center gap-6 sm:gap-8 mb-12 overflow-x-auto pb-2">
            {includes.map((item, i) => (
              <motion.div
                key={item.text}
                className="flex flex-col items-center hover:animate-pulse gap-1.5 flex-shrink-0"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: APPLE_EASE,
                }}
              >
                <item.icon className="w-8 h-8 text-text-secondary" />
                <span className="text-sm text-text-tertiary whitespace-nowrap">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: APPLE_EASE }}
          >
            <p className="text-text-tertiary text-sm mt-4 mb-6">
              Hosted by CSE (Cyber Security), RMKCET
            </p>

            <motion.a
              href="/pdfs/transport-details.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                bg-white/10 text-text-primary border border-white/10
                hover:bg-white/15 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Bus className="w-4 h-4 " />
              Transport Routes
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
