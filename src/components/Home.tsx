'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import bgVideo from '../assets/rmcfvsfcb.mp4';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Gradient Sides */}
      <div className="absolute left-0 inset-y-0 w-1/2 bg-gradient-to-r from-red-950/50 to-transparent z-10" />
      <div className="absolute right-0 inset-y-0 w-1/2 bg-gradient-to-l from-blue-950/50 to-transparent z-10" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">

        <motion.h1
          className="font-orbitron font-extrabold mb-6
          text-[clamp(3rem,8vw,5rem)]
          bg-gradient-to-r from-red-500 via-white to-blue-500
          bg-clip-text text-transparent"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          CyberXelerate 3.0
          <p></p>
        </motion.h1>

        <motion.p
          className="text-gray-300 mb-12 max-w-3xl mx-auto
          text-base sm:text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Where Excellence Meets Competition
          <span className="block text-sm text-gray-400 mt-2">
            A Symposium of Innovation, Rivalry & Intelligence
          </span>
        </motion.p>

        {/* ⏳ COUNTDOWN */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
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
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {String(item.value).padStart(2, '0')}
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
