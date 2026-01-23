"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  scrollReveal,
} from "../hooks/useAppleMotion";
import {
  useIsMobile,
  usePrefersReducedMotion,
} from "../hooks/useScrollAnimations";
import { cn } from "../lib/utils";

// ============================================
// Types & Data
// ============================================

interface Event {
  title: string;
  slug: string;
  category: "Technical" | "Non Technical";
  description: string;
  longDescription: string;
  image: string;
  formLink: string;
  gradient: string;
  featured?: boolean;
}

const events: Event[] = [
  {
    title: "H4CK_077 CTF",
    slug: "hack077-ctf",
    category: "Technical",
    description: "Capture The Flag cybersecurity challenge.",
    longDescription:
      "Dive into real-world cybersecurity challenges on the CTFD platform. Compete in flag hunting, solve cryptographic puzzles, and prove your hacking prowess. Max 3 members per team. Duration: 10:00 AM – 12:30 PM.",
    image: "/events/ctf4.jpg",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfIlTt4FxusBf5JbwzJ30mR_QDPDmGbThEyRK3SRJxdmUCLwA/viewform",
    gradient: "from-rivalry-red  to-red-600",
    featured: true,
  },
  {
    title: "CODE WAR",
    slug: "code-fc",
    category: "Technical",
    description: "Competitive coding on HackerRank.",
    longDescription:
      "Battle through 5 algorithmic problems in this intense HackerRank contest. Test your problem-solving skills and coding efficiency. Team: 1-2 members. Duration: 1½ – 2 Hours (10:30 PM – 12:30 AM). Any programming language allowed.",
    image: "/events/code1.png",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSc8YvkniuUoOdqqGXsf_vV5ulaHbbmDt_oOEMKsXST9YoxbrQ/viewform",
    gradient: "from-slate-800 to-red-600",
  },
  {
    title: "CLASH OF IDEAS",
    slug: "paper-presentation",
    category: "Technical",
    description: "Present innovative tech ideas.",
    longDescription:
      "Showcase your research in Cyber Security, AI, Edutech, or Open Innovation. Submit your project report (PDF) and PPT online. Present offline for 5-10 minutes. Team: 1-4 members. Venue: Mechanical Block, 3rd Floor. Time: 10:00 AM – 12:30 PM.",
    image: "/events/paper.png",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfQP_j_LIzfnzEenC0cnwmd0ldhLnYb4ULT52IgU4j1Q45W_w/viewform",
    gradient: "from-zinc-800 to-indigo-600",
  },
  {
    title: "Vibe-A-thon",
    slug: "vibeathon",
    category: "Technical",
    description: "Mini Hackathon – Build full-stack apps under pressure.",
    longDescription:
      "Step into Vibeathon, a high-energy mini hackathon where creativity and problem-solving come together. Build full-stack applications within 2 hours. Problem statements given on-spot. GitHub repo provided for development. Team: 1-2 members. FREE REGISTRATION.",
    image: "/events/vibe-banner.webp",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfk_0sJwny9eLZANa0JRNewMyu-REM36MfUHSMJt6PVeeIMAw/viewform",
    gradient: "from-gray-500 to-blue-600",
  },
  {
    title: "De-Melodia",
    slug: "de-melodia",
    category: "Non Technical",
    description: "Music-based rhythm challenge.",
    longDescription:
      "Test your musical knowledge through three progressively challenging stages. Connect with tunes, lyrics, and musical clues. Team: 2-3 members. No mobile phones allowed. Win by scoring highest points across all rounds.",
    image: "/events/de-melodia.webp",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeaSTnZVrsQ38NOBGHu-ar2242wduAxJhDAtSB9UQT_371vjw/viewform",
    gradient: "from-rose-600 to-indigo-700",
  },
  {
    title: "Play.io",
    slug: "play-io",
    category: "Non Technical",
    description: "Teamwork & coordination games.",
    longDescription:
      "Time-based event testing coordination through creative mini-games. Round 1: Random challenges with time recording. Top teams advance to Round 2: Special teamwork challenge. Team: 2-3 members. Winner decided by fastest completion time.",
    image: "/events/play-io.jpg",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSd0EgUl1LpO_z1g8MMBwKn3NYqGedGaO1MrsaMs7tBCOAImJw/viewform",
    gradient: "from-red-400 to-blue-300",
  },
];

const categories = ["Technical", "Non Technical"] as const;
type Category = (typeof categories)[number];

// ============================================
// Event Card Component with Scroll Parallax
// ============================================

interface EventCardProps {
  event: Event;
  index: number;
  onNavigate: (slug: string) => void;
  scrollProgress: any;
}

function EventCard({
  event,
  index,
  onNavigate,
  scrollProgress,
}: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  // Staggered parallax based on grid position
  const row = Math.floor(index / 3);
  const col = index % 3;

  const cardY = useTransform(
    scrollProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [30 + row * 20, -20 - col * 10],
  );

  const cardOpacity = useTransform(
    scrollProgress,
    [0, 0.1 + index * 0.02, 0.9, 1],
    [0.3, 1, 1, 0.3],
  );

  // On mobile, always show buttons
  const showButtons = isMobile || isHovered;

  return (
    <motion.article
      style={{
        y: cardY,
        opacity: cardOpacity,
      }}
      variants={staggerItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative rounded-2xl overflow-hidden cursor-pointer will-change-transform",
        event.featured ? "sm:col-span-2 sm:row-span-2" : "",
      )}
      onClick={() => onNavigate(event.slug)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Colored Overlay on Hover */}
        <motion.div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0",
            event.gradient,
          )}
          animate={{ opacity: isHovered ? 0.4 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative z-10 h-full flex flex-col justify-end p-4 sm:p-6",
          event.featured ? "sm:p-8" : "",
        )}
      >
        {/* Category Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className={cn(
            "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 w-fit",
            "bg-white/10 backdrop-blur-sm border border-white/20 text-white",
          )}
        >
          {event.category}
        </motion.span>

        {/* Title */}
        <motion.h3
          className={cn(
            "font-bold text-white mb-2 tracking-tight",
            event.featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl",
          )}
          animate={{ y: isHovered ? -4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {event.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className={cn(
            "text-white/70 leading-relaxed mb-4",
            event.featured
              ? "text-base sm:text-lg max-w-md"
              : "text-sm line-clamp-2",
          )}
          animate={{ y: isHovered ? -4 : 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {event.featured ? event.longDescription : event.description}
        </motion.p>

        {/* CTA Buttons - always visible on mobile */}
        <motion.div
          className="flex items-center gap-2 sm:gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: showButtons ? 1 : 0,
            y: showButtons ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href={event.formLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm text-white",
              "bg-gradient-to-r",
              event.gradient,
              "hover:shadow-lg transition-shadow duration-300",
            )}
          >
            Register
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm
              bg-white/10 backdrop-blur-sm border border-white/20 text-white
              hover:bg-white/20 transition-colors duration-300"
          >
            Details
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Card Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
        animate={{
          borderColor: isHovered ? "rgba(255,255,255,0.2)" : "transparent",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
}

// ============================================
// Featured Event Card (Hero Style) with Scroll Effects
// ============================================

function FeaturedEventCard({
  event,
  onNavigate,
  scrollProgress,
}: {
  event: Event;
  onNavigate: (slug: string) => void;
  scrollProgress: any;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  // Parallax effect for featured card
  const featuredY = useTransform(
    scrollProgress,
    [0, 0.5],
    prefersReduced ? [0, 0] : [40, -20],
  );

  const featuredScale = useTransform(
    scrollProgress,
    [0.3, 0.7],
    prefersReduced ? [1, 1] : [1, 0.98],
  );

  return (
    <motion.article
      style={{
        y: featuredY,
        scale: featuredScale,
      }}
      variants={scrollReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onNavigate(event.slug)}
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer mb-8 sm:mb-12 h-[380px] sm:h-[450px] lg:h-[500px] will-change-transform"
    >
      {/* Background */}
      <motion.img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Stronger gradient overlay for mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 sm:bg-gradient-to-r sm:from-black sm:via-black/70 sm:to-transparent" />
      <motion.div
        className={cn("absolute inset-0 bg-gradient-to-br", event.gradient)}
        animate={{ opacity: isHovered ? 0.3 : 0.1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end sm:justify-center p-5 sm:p-8 lg:p-12 max-w-2xl">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm 
            border border-white/20 text-xs sm:text-sm font-medium text-white mb-3 sm:mb-6 w-fit"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rivalry-red animate-pulse" />
          Featured Event
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 tracking-tight"
        >
          {event.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm sm:text-lg lg:text-xl text-white/80 mb-4 sm:mb-8 leading-relaxed line-clamp-3 sm:line-clamp-none"
        >
          {isMobile ? event.description : event.longDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 sm:gap-4"
        >
          <motion.a
            href={event.formLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-8 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-base",
              "bg-gradient-to-r",
              event.gradient,
              "hover:shadow-xl hover:shadow-rivalry-red/20 transition-shadow duration-300",
            )}
          >
            Register
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-white font-medium text-sm sm:text-base"
          >
            Learn More
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements - hidden on mobile */}
      <div className="absolute top-8 right-8 text-8xl font-black text-white/5 hidden sm:block">
        01
      </div>
    </motion.article>
  );
}

// ============================================
// Main Events Component
// ============================================

export default function Events() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>("Technical");
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Header scroll effects
  const headerY = useTransform(
    smoothProgress,
    [0, 0.2],
    prefersReduced ? [0, 0] : [60, 0],
  );

  const headerOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);

  const filteredEvents = events.filter(
    (event) => event.category === activeCategory && !event.featured,
  );

  const featuredEvent = events.find((e) => e.featured);

  const handleNavigate = (slug: string) => {
    navigate(`/event/${slug}`);
  };

  return (
    <section
      ref={sectionRef}
      id="events"
      className="relative py-12 sm:py-16 lg:py-20 bg-surface-base overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, hsl(var(--rivalry-red) / 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 section-container">
        {/* Section Header with scroll-linked animations */}
        <motion.div
          style={{
            y: headerY,
            opacity: headerOpacity,
          }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-surface-elevated border border-white/10 
              text-xs font-medium text-text-secondary tracking-wider uppercase mb-6"
          >
            Competition Events
          </motion.span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-text-primary">Choose Your</span>
            <br />
            <span className="gradient-text-rivalry">Battlefield</span>
          </h2>

          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-2">
            Five epic arenas await. Pick your challenge and prove your
            excellence.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-tertiary text-sm italic"
          >
            "Every match has a winner."
          </motion.p>
        </motion.div>

        {/* Featured Event */}
        {featuredEvent && (
          <FeaturedEventCard
            event={featuredEvent}
            onNavigate={handleNavigate}
            scrollProgress={smoothProgress}
          />
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-white text-surface-base"
                  : "bg-surface-elevated text-text-secondary border border-white/10 hover:border-white/20",
              )}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className={`grid gap-6 grid-cols-1 sm:grid-cols-2 ${
              filteredEvents.length <= 2
                ? "lg:grid-cols-2 max-w-3xl mx-auto"
                : "lg:grid-cols-3"
            }`}
          >
            {filteredEvents.map((event, index) => (
              <div key={event.slug} className="h-[300px]">
                <EventCard
                  event={event}
                  index={index}
                  onNavigate={handleNavigate}
                  scrollProgress={smoothProgress}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-text-tertiary">No events in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
