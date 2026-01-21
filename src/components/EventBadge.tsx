'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ShinyText from './ui/shiny-text';

export default function EventBadge() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative mt-8">
      {/* Lanyard Strap */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -top-28 w-1.5 h-28 origin-bottom"
        style={{
          background: 'linear-gradient(180deg, #dc2626 0%, #1e40af 50%, #dc2626 100%)',
          backgroundSize: '100% 20px',
        }}
        animate={{
          rotate: isHovered ? [0, -2, 2, -1, 1, 0] : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
      
      {/* Badge Clip */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -top-3 w-8 h-4 bg-gradient-to-b from-zinc-400 to-zinc-600 rounded-t-sm z-10"
        style={{
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
        }}
      />
      
      {/* Badge Container with Swing Animation */}
      <motion.div
        className="relative cursor-grab active:cursor-grabbing"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          rotate: isHovered ? [0, -5, 5, -3, 3, 0] : [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: isHovered ? 0.8 : 4,
          repeat: isHovered ? 0 : Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: 'top center' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Badge Card - Larger size with dark red/blue theme */}
        <motion.div
          className="relative w-56 sm:w-64 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-xl overflow-hidden"
          style={{
            boxShadow: `
              0 0 0 1px rgba(220, 38, 38, 0.3),
              0 0 0 2px rgba(30, 64, 175, 0.2),
              0 4px 6px -1px rgba(0, 0, 0, 0.4),
              0 20px 40px -10px rgba(0, 0, 0, 0.6),
              inset 0 1px 0 rgba(255,255,255,0.05)
            `,
          }}
        >
          {/* Top gradient border */}
          <div className="h-1.5 w-full bg-gradient-to-r from-red-700 via-purple-600 to-blue-700" />

          {/* Holographic Effect */}
          <motion.div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(220,38,38,0.3) 25%, transparent 50%, rgba(30,64,175,0.3) 75%, transparent 100%)',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-6 text-center">
            {/* Event Logo/Symbol */}
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-red-700 to-blue-800 flex items-center justify-center border-2 border-white/10">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>

            {/* Event Title */}
            <h3 className="text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-sm font-bold tracking-wider mb-1">
              CYBERXELERATE
            </h3>
            <p className="text-white text-4xl font-extrabold mb-3">
              3.0
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent mb-4" />

            {/* Date - Using ShinyText */}
            <div className="bg-gradient-to-br from-red-900/30 to-blue-900/30 rounded-lg px-4 py-3 mb-3 border border-white/5">
              <ShinyText 
                text="EVENT DATE" 
                className="text-xs tracking-widest uppercase mb-1 block"
                color="#6b7280"
                shineColor="#ffffff"
                speed={3}
              />
              <p className="text-white text-lg font-bold">February 9, 2026</p>
            </div>

            {/* Time */}
            <p className="text-transparent bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-lg font-semibold mb-2">
              9:00 AM
            </p>

            {/* Venue - Using ShinyText */}
            <ShinyText 
              text="R.M.K. College of Engineering & Technology"
              className="text-sm leading-relaxed block"
              color="#6b7280"
              shineColor="#ffffff"
              speed={4}
              yoyo
            />
          </div>

          {/* Bottom Accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-red-700 via-purple-600 to-blue-700" />
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="absolute -inset-6 rounded-2xl opacity-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(220,38,38,0.1) 0%, rgba(30,64,175,0.1) 50%, transparent 70%)',
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}
