'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import bgVideo from '../assets/rmcfvsfcb.mp4';

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
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen top-3 flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 🔥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* 🎨 Overlays */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1/2 z-10 bg-gradient-to-r from-red-950/50 to-transparent"
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="absolute right-0 top-0 bottom-0 w-1/2 z-10 bg-gradient-to-l from-blue-950/50 to-transparent"
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* ⚔️ Center Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          EL CLÁSICO
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Where Excellence Meets Competition
          <span className="block text-base text-gray-400 mt-2">
            A Symposium of Innovation, Rivalry & Intelligence
          </span>
        </motion.p>

        {/* ⏳ Countdown */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { label: 'DAYS', value: timeLeft.days, color: 'from-red-500 to-red-600' },
            { label: 'HOURS', value: timeLeft.hours, color: 'from-purple-500 to-purple-600' },
            { label: 'MINUTES', value: timeLeft.minutes, color: 'from-blue-500 to-blue-600' },
            { label: 'SECONDS', value: timeLeft.seconds, color: 'from-cyan-500 to-cyan-600' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="relative rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 p-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div
                className={`text-4xl md:text-6xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}
              >
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="mt-2 text-sm tracking-wider text-gray-400 font-semibold">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 📅 Date Badge */}
        <motion.div
          className="mt-12 inline-block px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-white font-semibold">
            February 9, 2026 | 9:00 AM
          </span>
        </motion.div>
      </div>
    </section>
  );
}
