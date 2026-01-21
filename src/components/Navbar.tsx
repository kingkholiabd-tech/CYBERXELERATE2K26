import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RMKCET from "../assets/RMKCET Logo.png";

const navItems = ["Home", "About", "Events", "Timeline", "Guidelines", "Contact"];
const NAVBAR_HEIGHT = 80; // px (h-20)

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  /* ---------------- ACTIVE SECTION ON SCROLL ---------------- */
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + NAVBAR_HEIGHT + 10;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const id = navItems[i].toLowerCase();
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  /* ---------------- SMOOTH SCROLL FUNCTION ---------------- */
  const handleNavigation = (item: string) => {
    if (isHomePage) {
      const id = item.toLowerCase();
      const section = document.getElementById(id);

      if (!section) return;

      const y = section.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const id = item.toLowerCase();
        const section = document.getElementById(id);
        if (!section) return;

        const y = section.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 300);
    }
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 h-16 md:h-20
        bg-black/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img
              src={RMKCET}
              alt="RMKCET Logo"
              className="h-8 md:h-10 w-auto"
            />
            <div className="hidden md:flex flex-col text-left">
              <span className="text-white font-orbitron text-sm font-semibold leading-tight">
                RMK COLLEGE OF ENGINEERING AND TECHNOLOGY
              </span>
              <span className="text-cyan-300 font-oxanium text-xs leading-tight">
                Department of CSE (Cyber Security)
              </span>
            </div>
          </motion.div>

          {/* DESKTOP NAV - Centered */}
          <div className="hidden lg:flex items-betwee absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${activeSection === item && isHomePage
                      ? "text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/10"
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                  {activeSection === item && isHomePage && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            {/* EVENT POSTER - Desktop only */}
            <motion.a
              href="/Event Poster.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex px-4 py-2 rounded-lg
              bg-gradient-to-r from-cyan-500/10 to-blue-500/10
              text-cyan-300 text-sm font-medium border border-cyan-500/20
              hover:border-cyan-400/40 hover:bg-cyan-500/20
              transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Event Poster
            </motion.a>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={open ? "open" : "closed"}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  variants={{
                    closed: { d: "M4 6h16M4 12h16M4 18h16" },
                    open: { d: "M6 6l12 12M6 18L18 6" }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU BACKDROP */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[90vw] z-40
            bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl
            border-l border-white/10 lg:hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src={RMKCET} alt="RMKCET Logo" className="h-8 w-auto" />
                <span className="text-white font-semibold text-sm">Menu</span>
              </div>
              <motion.button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className={`text-left py-4 px-4 rounded-xl text-lg font-medium
                    transition-all duration-200 border border-transparent
                    ${activeSection === item && isHomePage
                      ? "text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/10"
                    }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-60"></span>
                    {item}
                  </span>
                </motion.button>
              ))}

              {/* Divider */}
              <div className="my-4 border-t border-white/10"></div>

              {/* Event Poster */}
              <motion.a
                href="/Event Poster.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-4 px-4 rounded-xl
                bg-gradient-to-r from-cyan-500/10 to-blue-500/10
                text-cyan-300 font-medium border border-cyan-500/20
                hover:border-cyan-400/40 hover:bg-cyan-500/20
                transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Event Poster
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
