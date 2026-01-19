import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
// import { Trophy, Zap } from 'lucide-react';

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

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-red-950/40 to-transparent"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-950/40 to-transparent"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-red-500 to-transparent"
          animate={{ y: [-100, window.innerHeight + 100] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
          animate={{ y: [-100, window.innerHeight + 100] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <div className="flex items-center justify-center gap-8 mb-8">
          <motion.div
            initial={{ x: -100, opacity: 0, rotate: -45 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <Trophy className="w-16 h-16 text-red-500" strokeWidth={1.5} />
          </motion.div>

          <motion.div
            className="h-32 w-1 bg-gradient-to-b from-red-500 via-white to-blue-500"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.div
            initial={{ x: 100, opacity: 0, rotate: 45 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <Zap className="w-16 h-16 text-blue-500" strokeWidth={1.5} />
          </motion.div>
        </div> */}

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          EL CLÁSICO
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Where Excellence Meets Competition
          <br />
          <span className="text-base text-gray-400 mt-2 block">
            A Symposium of Innovation, Ideas, and Intellectual Rivalry
          </span>
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { label: 'DAYS', value: timeLeft.days, color: 'from-red-500 to-red-600' },
            { label: 'HOURS', value: timeLeft.hours, color: 'from-purple-500 to-purple-600' },
            { label: 'MINUTES', value: timeLeft.minutes, color: 'from-blue-500 to-blue-600' },
            { label: 'SECONDS', value: timeLeft.seconds, color: 'from-cyan-500 to-cyan-600' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="relative group"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300" />
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(139, 92, 246, 0)',
                    '0 0 40px rgba(139, 92, 246, 0.3)',
                    '0 0 20px rgba(139, 92, 246, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative p-6">
                <motion.div
                  className={`text-4xl md:text-6xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent mb-2`}
                  key={item.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(item.value).padStart(2, '0')}
                </motion.div>
                <div className="text-xs md:text-sm text-gray-400 font-semibold tracking-wider">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.div
            className="inline-block px-8 py-3 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-full border border-white/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(139, 92, 246, 0.3)',
                '0 0 40px rgba(139, 92, 246, 0.5)',
                '0 0 20px rgba(139, 92, 246, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white font-semibold">February 9, 2026 | 9:00 AM</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div> */}
      </motion.div>
    </section>
  );
}
