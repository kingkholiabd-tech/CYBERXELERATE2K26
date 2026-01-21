'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { EncryptedText } from './ui/encrypted-text';

const NAVBAR_HEIGHT = 80; // must match navbar height

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-09T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) return clearInterval(interval);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{ paddingTop: NAVBAR_HEIGHT }}
      className="relative min-h-screen flex items-center justify-center z-10"
    >
      {/* CONTENT - All centered */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">

        {/* Main Title Container - Fixed height to prevent layout shift */}
        <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center mb-4">
          <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-red-700/80 via-white to-blue-700/80 bg-clip-text">
            <EncryptedText
              text="CYBERXELERATE 3.0"
              encryptedClassName="text-gray-600"
              revealedClassName="text-transparent"
              revealDelayMs={40}
              startDelay={300}
            />
          </h1>
        </div>

        {/* Subheading Container - Fixed height */}
        <div className="h-8 sm:h-10 flex items-center justify-center mb-2">
          <p className="text-gray-300 text-base sm:text-lg md:text-xl">
            <EncryptedText
              text="Where Excellence Meets Competition"
              encryptedClassName="text-gray-700"
              revealedClassName="text-gray-300"
              revealDelayMs={35}
              startDelay={1500}
            />
          </p>
        </div>

        {/* Tagline Container - Fixed height */}
        <div className="h-6 sm:h-8 flex items-center justify-center mb-10">
          <p className="text-sm text-gray-400">
            <EncryptedText
              text="A Symposium of Innovation, Rivalry & Intelligence"
              encryptedClassName="text-gray-800"
              revealedClassName="text-gray-400"
              revealDelayMs={30}
              startDelay={2500}
            />
          </p>
        </div>

        {/* ⏳ COUNTDOWN */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-black/60 backdrop-blur-md border border-white/10 p-4"
            >
              <div className="relative h-12 sm:h-14 md:h-16 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={item.value}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white absolute"
                  >
                    {String(item.value).padStart(2, '0')}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="text-xs tracking-wider text-gray-400 mt-1 font-share-tech-mono">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
