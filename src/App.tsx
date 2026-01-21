// import { useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Events from './components/Events';
// import Timeline from './components/EventTimeline';
// import Guidelines from './components/Guidelines';
// import Contact from './components/Contact';


// function App() {
//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto';
//     };
//   }, []);

//   return (
//     <div className="relative  text-white overflow-x-hidden">
//       <Navbar />
//       <div className="space-y-[3px]">
//         <Home />
//         <About />
//         <Events />
//         <Timeline />
//         <Guidelines />
//         <Contact />
//       </div>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import HeroSplit from "./components/HeroSplit";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import ScheduleRules from "./components/ScheduleRules";
import FootballScroller from "./components/FootballScroller";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import "./index.css";

// Lazy load EventDetails for better performance
const EventDetails = lazy(() => import("./components/EventDetails"));

// Page transition variants
const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-surface-base text-text-primary min-h-screen">
      {/* Loading Screen */}
      {isLoading && <Loader />}

      {/* Navigation */}
      <Navbar />

      {/* Page Content with Transitions */}
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <motion.main
                key="home"
                variants={pageVariants}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <HeroSplit />
                <About />
                <Events />
                <FootballScroller />
                <ScheduleRules />
                <Contact />
                <Footer />
              </motion.main>
            }
          />

          <Route
            path="/event/:slug"
            element={
              <Suspense
                fallback={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-pulse text-text-secondary">Loading...</div>
                  </div>
                }
              >
                <motion.div
                  key="event-details"
                  variants={pageVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <EventDetails />
                </motion.div>
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
