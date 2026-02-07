"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Navigation items
const NAV_ITEMS = ["Home", "About", "Events", "Event Info", "Contact"] as const;
type NavItem = (typeof NAV_ITEMS)[number];

// Map nav items to section IDs
const sectionIdMap: Record<string, string> = {
  Home: "home",
  About: "about",
  Events: "events",
  "Event Info": "event-info",
  Contact: "contact",
};

// Navbar height for scroll offset
const NAVBAR_HEIGHT = 72;

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [activeSection, setActiveSection] = useState<NavItem>("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  // Handle scroll visibility (hide on scroll down, show on scroll up)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollingDown = latest > lastScrollY.current;
    const scrolledPastThreshold = latest > 100;

    setHasScrolled(latest > 50);

    // Only hide if scrolled past threshold and scrolling down
    if (scrolledPastThreshold) {
      setIsVisible(!scrollingDown || latest < 100);
    } else {
      setIsVisible(true);
    }

    lastScrollY.current = latest;
  });

  // Track active section on scroll
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + NAVBAR_HEIGHT + 100;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const sectionId =
          sectionIdMap[NAV_ITEMS[i]] || NAV_ITEMS[i].toLowerCase();
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Navigation handler
  const handleNavClick = (item: NavItem) => {
    setMobileOpen(false);
    const sectionId = sectionIdMap[item] || item.toLowerCase();

    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        const y = section.offsetTop - NAVBAR_HEIGHT;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const y = section.offsetTop - NAVBAR_HEIGHT;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Floating Pill Container */}
        <nav
          className={`
            mx-auto mt-4 px-2 transition-all duration-500 ease-out
            ${hasScrolled ? "max-w-fit" : "max-w-7xl"}
          `}
        >
          <motion.div
            layout
            className={`
              flex items-center justify-between gap-2
              rounded-full border backdrop-blur-xl
              transition-all duration-500 ease-out
              ${
                hasScrolled
                  ? "px-2 py-2 bg-surface-primary/80 border-white/10 shadow-2xl shadow-black/20"
                  : "px-6 py-3 bg-transparent border-transparent"
              }
            `}
          >
            {/* Logo - Only show when not scrolled */}
            <AnimatePresence>
              {!hasScrolled && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3 overflow-hidden"
                >
                  <span className="text-xl font-bold tracking-tight">
                    <span className="text-white">CYBER</span>
                    <span className="gradient-text-rivalry">X</span>
                    <span className="text-white/60">3.0</span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <NavButton
                  key={item}
                  item={item}
                  isActive={activeSection === item && isHomePage}
                  onClick={() => handleNavClick(item)}
                  hasScrolled={hasScrolled}
                />
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="/Event Poster.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                hidden sm:flex items-center gap-2 font-medium
                rounded-full transition-all duration-300
                ${
                  hasScrolled
                    ? "px-4 py-2 text-sm bg-white text-black hover:bg-white/90"
                    : "px-5 py-2.5 text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Event Poster</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`
                md:hidden p-2 rounded-full transition-colors
                ${
                  hasScrolled
                    ? "text-white hover:bg-white/10"
                    : "text-white/80 hover:text-white"
                }
              `}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </motion.button>
          </motion.div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 sm:w-80 max-w-[85vw] z-50 md:hidden
                bg-surface-primary/95 backdrop-blur-xl border-l border-white/10 safe-padding-bottom"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-lg font-bold">
                  <span className="text-white">CYBER</span>
                  <span className="gradient-text-rivalry">X</span>
                  <span className="text-white/60">3.0</span>
                </span>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Mobile Nav Items */}
              <div className="flex flex-col p-4 gap-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`
                      flex items-center gap-3 px-4 py-4 rounded-xl text-left touch-target
                      transition-all duration-200
                      ${
                        activeSection === item && isHomePage
                          ? "bg-white/10 text-white"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }
                    `}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span
                      className={`
                      w-1.5 h-1.5 rounded-full transition-colors
                      ${
                        activeSection === item && isHomePage
                          ? "bg-gradient-to-r from-rivalry-red to-rivalry-blue"
                          : "bg-white/30"
                      }
                    `}
                    />
                    <span className="font-medium">{item}</span>
                  </motion.button>
                ))}

                {/* Mobile CTA */}
                <motion.a
                  href="/Event Poster.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-xl
                    bg-white text-black font-medium transition-all duration-200
                    hover:bg-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Event Poster</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Desktop Nav Button Component
function NavButton({
  item,
  isActive,
  onClick,
  hasScrolled,
}: {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
  hasScrolled: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative px-4 py-2 rounded-full text-sm font-medium
        transition-colors duration-200
        ${
          isActive
            ? "text-white"
            : hasScrolled
            ? "text-white/60 hover:text-white"
            : "text-white/70 hover:text-white"
        }
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Active indicator pill */}
      {isActive && (
        <motion.div
          layoutId="nav-pill"
          className={`
            absolute inset-0 rounded-full
            ${
              hasScrolled
                ? "bg-white/15 border border-white/20"
                : "bg-white/10 border border-white/10"
            }
          `}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10">{item}</span>
    </motion.button>
  );
}
