'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import RMKCET from '../assets/RMKCET Logo.png';

const navItems = ['Home', 'About', 'Events', 'Timeline', 'Guidelines', 'Contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item =>
        document.getElementById(item.toLowerCase())
      );
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0c1022] via-[#12163a] to-[#0c1022] backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* 🔰 LEFT: LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={RMKCET}
            alt="RMKCET Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* 🏫 CENTER: COLLEGE TEXT */}
        <div className="hidden lg:flex flex-col items-center text-center">
          <h1 className="text-white font-semibold text-lg tracking-wide">
            R.M.K College of Engineering and Technology
          </h1>
          <p className="text-gray-300 text-sm">
            Department of Computer Science and Engineering (Cyber Security)
          </p>
        </div>

        {/* 🧭 RIGHT: NAV + BUTTON */}
        <div className="flex items-center gap-4">

          {/* NAV ITEMS */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    activeSection === item
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/20"
                  />
                )}
                <span className="relative z-10">{item}</span>
              </motion.button>
            ))}
          </div>

          {/* 🎫 EVENT POSTER BUTTON */}
          <motion.a
            href="/event-poster.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-black text-white text-sm font-semibold border border-white/20 hover:border-white/40 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Event Poster
          </motion.a>

          {/* 🍔 MOBILE MENU ICON */}
          <motion.button
            className="md:hidden text-white"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>

        </div>
      </div>
    </motion.nav>
  );
}
