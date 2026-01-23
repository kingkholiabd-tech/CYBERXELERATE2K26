'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/useScrollAnimations';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/cyberxelerate_26/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/in/cyberxelerate26', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Mail, href: 'mailto:cyberxelerate@rmkcet.ac.in', label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Scroll progress for the footer
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Footer content rises up as it comes into view
  const contentY = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReduced ? [0, 0] : [40, 0]
  );
  
  const contentOpacity = useTransform(
    smoothProgress,
    [0, 0.4],
    [0, 1]
  );

  // Social links staggered parallax
  const socialsY = useTransform(
    smoothProgress,
    [0.1, 0.6],
    prefersReduced ? [0, 0] : [30, 0]
  );

  // Branding reveal
  const brandingScale = useTransform(
    smoothProgress,
    [0.2, 0.7],
    prefersReduced ? [1, 1] : [0.9, 1]
  );
  
  const brandingOpacity = useTransform(
    smoothProgress,
    [0.2, 0.6],
    [0, 1]
  );

  return (
    <footer ref={footerRef} className="relative py-16 bg-surface-primary border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        {/* College Info */}
        <motion.div
          className="text-center mb-10"
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
        >
          <h3 className="text-xl font-medium text-text-primary mb-2">
            R.M.K College of Engineering and Technology
          </h3>
          <p className="text-text-secondary text-sm">
            Department of Computer Science and Engineering (Cyber Security)
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-10"
          style={{
            y: socialsY,
            opacity: contentOpacity,
          }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-full bg-white/5 border border-white/10 
                text-text-secondary hover:text-text-primary hover:bg-white/10 
                hover:border-white/20 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                y: useTransform(
                  smoothProgress,
                  [0.15 + index * 0.03, 0.5 + index * 0.03],
                  prefersReduced ? [0, 0] : [20, 0]
                ),
              }}
            >
              <social.icon size={20} strokeWidth={1.5} />
            </motion.a>
          ))}
        </motion.div>

        {/* Branding */}
        <motion.div
          className="text-center mb-8"
          style={{
            scale: brandingScale,
            opacity: brandingOpacity,
          }}
        >
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-white">CYBER</span>
            <span className="gradient-text-rivalry">X</span>
            <span className="text-white/60">ELERATE</span>
            <span className="text-text-tertiary ml-2">3.0</span>
          </span>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="w-full h-px bg-white/5 mb-8"
          style={{
            scaleX: useTransform(smoothProgress, [0.3, 0.7], prefersReduced ? [1, 1] : [0, 1]),
            opacity: useTransform(smoothProgress, [0.3, 0.6], [0, 1]),
          }}
        />

        {/* Copyright */}
        <motion.p
          className="text-center text-text-tertiary text-sm"
          style={{
            opacity: useTransform(smoothProgress, [0.5, 0.8], [0, 1]),
          }}
        >
          © {currentYear} CYBERXELERATE. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
