"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/useScrollAnimations";

// Apple-style easing
const APPLE_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// ============================================
// Data
// ============================================

const schedule = [
  { time: "8:30 AM", event: "Registration" },
  { time: "9:00 AM", event: "Inauguration" },
  { time: "10:00 AM", event: "Events Begin" },
  { time: "12:45 PM", event: "Lunch" },
  { time: "1:30 PM", event: "Valedictory" },
];

const rules = [
  "College ID required",
  "Formal attire only",
  "No mobile phones",
  "Use college transport (Feb 9)",
  "On-spot registration",
];

// ============================================
// Main Component
// ============================================

export default function ScheduleRules() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="event-info"
      className="relative py-12 sm:py-16 lg:py-24 mt-5 lg:mt-10 bg-surface-base"
    >
      <div className="section-container">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: APPLE_EASE }}
          className="text-center mb-20"
        >
          <p className="text-text-tertiary text-sm tracking-wider uppercase mb-4">
            February 9, 2026
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary tracking-tight mb-4">
            The day, planned.
          </h2>
          <p className="text-xl text-text-secondary max-w-lg mx-auto mb-2">
            Everything runs on schedule. Be on time.
          </p>
          <p className="text-text-tertiary text-sm italic">
            "Kickoff waits for no one."
          </p>
        </motion.header>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: APPLE_EASE }}
          >
            <h3 className="text-xl font-medium text-text-primary mb-8">
              Schedule
            </h3>

            <div className="space-y-0">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: prefersReduced ? 0 : index * 0.08,
                    ease: APPLE_EASE,
                  }}
                  className="flex items-center gap-6 py-4 border-b border-white/5 last:border-0"
                >
                  <span className="text-text-tertiary text-sm font-mono w-24 flex-shrink-0">
                    {item.time}
                  </span>
                  <span className="text-text-primary">{item.event}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Rules */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: APPLE_EASE }}
          >
            <h3 className="text-xl font-medium text-text-primary mb-8">
              Rules
            </h3>

            <div className="space-y-0">
              {rules.map((rule, index) => (
                <motion.div
                  key={rule}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: prefersReduced ? 0 : index * 0.08,
                    ease: APPLE_EASE,
                  }}
                  className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0"
                >
                  <span
                    className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center 
                    text-xs text-text-tertiary flex-shrink-0"
                  >
                    {index + 1}
                  </span>
                  <span className="text-text-primary">{rule}</span>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: APPLE_EASE }}
              className="text-text-tertiary text-sm mt-8"
            >
              Violations may result in disqualification.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
