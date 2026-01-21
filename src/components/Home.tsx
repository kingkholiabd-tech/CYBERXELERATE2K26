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
      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">

        {/* Main Title with Encrypted Reveal */}
        <h1 className="font-extrabold mb-6 text-7xl bg-gradient-to-r from-red-700/80 via-none to-blue-700/80 bg-clip-text">
          <EncryptedText
            text="WELCOME TO EL CLÁSICO"
            encryptedClassName="text-gray-600"
            revealedClassName="text-transparent"
            revealDelayMs={40}
            startDelay={300}
          />
        </h1>

        {/* Subheading with Delayed Reveal */}
        <p className="text-gray-300 mb-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
          <EncryptedText
            text="Where Excellence Meets Competition"
            encryptedClassName="text-gray-700"
            revealedClassName="text-gray-300"
            revealDelayMs={35}
            startDelay={1500}
          />
        </p>

        {/* Tagline with Further Delay */}
        <p className="text-sm text-gray-400 mb-12 max-w-3xl mx-auto">
          <EncryptedText
            text="A Symposium of Innovation, Rivalry & Intelligence"
            encryptedClassName="text-gray-800"
            revealedClassName="text-gray-400"
            revealDelayMs={30}
            startDelay={2500}
          />
        </p>

        {/* ⏳ COUNTDOWN */}
        <div className="grid grid-cols-2  sm:grid-cols-4 gap-16 max-w-2xl mx-auto">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-black/60  backdrop-blur-md border border-white/10 p-4"
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

        {/* 📅 DATE */}
        <div className="mt-10 inline-block px-6 py-3 rounded-full bg-white/5 border border-white/20">
          <span className="text-white text-sm font-semibold">
            February 9, 2026 | 9:00 AM
          </span>
        </div>
      </div>
    </section>
  );
}
