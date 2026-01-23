'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Phone } from 'lucide-react';
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useScrollAnimations';

// Contact data
const contacts = [
  {
    role: 'Head of Department',
    subtitle: 'CSE (Cyber Security)',
    name: 'Dr. Udhaya Sankar S M',
  },
  {
    role: 'Faculty Coordinator',
    subtitle: 'Assistant Professor',
    name: 'Mrs Monica',
  },
  {
    role: 'Student Coordinator',
    name: 'Pritto Ruban R',
    phone: '+91 99529 41725',
  },
  {
    role: 'Student Coordinator',
    name: 'Porselvi P',
    phone: '+91 80157 07073',
  },
];

// Contact Card with scroll-based parallax
function ContactCard({ 
  contact, 
  index, 
  scrollProgress 
}: { 
  contact: typeof contacts[0]; 
  index: number; 
  scrollProgress: any;
}) {
  const prefersReduced = usePrefersReducedMotion();
  
  // Staggered parallax for each card
  const cardY = useTransform(
    scrollProgress,
    [0.05, 0.25],
    prefersReduced ? [0, 0] : [40 + index * 15, 0]
  );
  
  const cardOpacity = useTransform(
    scrollProgress,
    [0.05 + index * 0.03, 0.2 + index * 0.03],
    [0, 1]
  );
  
  const cardScale = useTransform(
    scrollProgress,
    [0.05, 0.2],
    prefersReduced ? [1, 1] : [0.95, 1]
  );

  return (
    <motion.div
      style={{
        y: cardY,
        opacity: cardOpacity,
        scale: cardScale,
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-6 text-center will-change-transform"
    >
      <p className="text-text-secondary text-sm mb-1">
        {contact.role}
      </p>
      {contact.subtitle && (
        <p className="text-text-tertiary text-xs mb-3">
          {contact.subtitle}
        </p>
      )}
      <h3 className="text-text-primary font-medium text-lg mb-2">
        {contact.name}
      </h3>
      {contact.phone && (
        <a 
          href={`tel:${contact.phone.replace(/\s/g, '')}`}
          className="inline-flex items-center gap-2 text-text-secondary text-sm hover:text-text-primary transition-colors"
        >
          <Phone size={14} />
          {contact.phone}
        </a>
      )}
    </motion.div>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Header scroll effects
  const headerY = useTransform(
    smoothProgress,
    [0, 0.15],
    prefersReduced ? [0, 0] : [50, 0]
  );
  
  const headerOpacity = useTransform(
    smoothProgress,
    [0, 0.1],
    [0, 1]
  );

  // Location section scroll effects
  const locationY = useTransform(
    smoothProgress,
    [0.3, 0.5],
    prefersReduced ? [0, 0] : [40, 0]
  );
  
  const locationOpacity = useTransform(
    smoothProgress,
    [0.3, 0.45],
    [0, 1]
  );

  // Map zoom effect - scale increases as you scroll
  const mapScale = useTransform(
    smoothProgress,
    [0.35, 0.7],
    prefersReduced ? [1, 1] : [0.95, 1.02]
  );
  
  const mapOpacity = useTransform(
    smoothProgress,
    [0.35, 0.5],
    [0.6, 1]
  );

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-24 md:py-32 bg-surface-base"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header with scroll-linked animations */}
        <motion.header
          className="text-center mb-16"
          style={{
            y: headerY,
            opacity: headerOpacity,
          }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-medium text-text-primary mb-4"
          >
            Contact
          </motion.h2>
          <motion.p 
            className="text-lg text-text-secondary max-w-xl mx-auto"
          >
            Get in touch with our organizing team
          </motion.p>
        </motion.header>

        {/* Contact Cards with staggered parallax */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {contacts.map((contact, index) => (
            <ContactCard 
              key={contact.name} 
              contact={contact} 
              index={index} 
              scrollProgress={smoothProgress} 
            />
          ))}
        </div>

        {/* Location Section with scroll effects */}
        <motion.div
          style={{
            y: locationY,
            opacity: locationOpacity,
          }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-medium text-text-primary text-center mb-4"
          >
            Location
          </motion.h3>
          <motion.p 
            className="text-text-secondary text-center mb-8 max-w-lg mx-auto"
          >
            RMK Nagar, Gummidipoondi Taluk, Puduvoyal, Tamil Nadu 601 206
          </motion.p>

          {/* Map with zoom effect */}
          <motion.div
            ref={mapRef}
            className="glass-card rounded-2xl p-2 overflow-hidden will-change-transform"
            style={{
              scale: mapScale,
              opacity: mapOpacity,
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248565.7858271303!2d80.0152114441965!3d13.235330463061636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527f0ddef76d17%3A0x61ce593720f3684b!2sRMK%20College%20of%20Engineering%20and%20Technology%20(RMKCET)!5e0!3m2!1sen!2sin!4v1768845577338!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="RMKCET Location"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
