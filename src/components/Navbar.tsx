// 'use client';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import RMKCET from '../assets/RMKCET Logo.png';

// const navItems = ['Home', 'About', 'Events', 'Timeline', 'Guidelines', 'Contact'];

// export default function Navbar() {
//   const [activeSection, setActiveSection] = useState('Home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map(item =>
//         document.getElementById(item.toLowerCase())
//       );
//       const scrollPosition = window.scrollY + 120;

//       for (let i = sections.length - 1; i >= 0; i--) {
//         if (sections[i] && sections[i].offsetTop <= scrollPosition) {
//           setActiveSection(navItems[i]);
//           break;
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId.toLowerCase());
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0c1022] via-[#12163a] to-[#0c1022] backdrop-blur-lg border-b border-white/10"
//     >
//       <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

//         {/* 🔰 LEFT: LOGO */}
//         <div className="flex items-center gap-3">
//           <img
//             src={RMKCET}
//             alt="RMKCET Logo"
//             className="h-12 w-auto"
//           />
//         </div>

//         {/* 🏫 CENTER: COLLEGE TEXT */}
//         <div className="hidden lg:flex flex-col items-center text-center">
//           <h1 className="text-white font-semibold text-lg tracking-wide">
//             R.M.K College of Engineering and Technology
//           </h1>
//           <p className="text-gray-300 text-sm">
//             Department of Computer Science and Engineering (Cyber Security)
//           </p>
//         </div>

//         {/* 🧭 RIGHT: NAV + BUTTON */}
//         <div className="flex items-center gap-4">

//           {/* NAV ITEMS */}
//           <div className="hidden md:flex items-center gap-2">
//             {navItems.map((item) => (
//               <motion.button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all
//                   ${
//                     activeSection === item
//                       ? 'text-white'
//                       : 'text-gray-300 hover:text-white'
//                   }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {activeSection === item && (
//                   <motion.div
//                     layoutId="active-pill"
//                     className="absolute inset-0 rounded-full bg-white/10 border border-white/20"
//                   />
//                 )}
//                 <span className="relative z-10">{item}</span>
//               </motion.button>
//             ))}
//           </div>

//           {/* 🎫 EVENT POSTER BUTTON */}
//           <motion.a
//             href="/event-poster.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-5 py-2 rounded-full bg-black text-white text-sm font-semibold border border-white/20 hover:border-white/40 transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Event Poster
//           </motion.a>

//           {/* 🍔 MOBILE MENU ICON */}
//           <motion.button
//             className="md:hidden text-white"
//             whileTap={{ scale: 0.9 }}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </motion.button>

//         </div>
//       </div>
//     </motion.nav>
//   );
// }

// // import { useNavigate } from "react-router-dom";

// // export default function Navbar() {
// //   const navigate = useNavigate();

// //   return (
// //     <nav className="fixed top-0 w-full bg-black text-white p-4 z-50">
// //       <button onClick={() => navigate("/")}>Home</button>
// //     </nav>
// //   );
// // }

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import RMKCET from "../assets/RMKCET Logo.png";

// const navItems = ["Home", "About", "Events", "Timeline", "Guidelines", "Contact"];

// export default function Navbar() {
//   const [activeSection, setActiveSection] = useState("Home");
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map((item) =>
//         document.getElementById(item.toLowerCase())
//       );
//       const scrollPosition = window.scrollY + 140;

//       for (let i = sections.length - 1; i >= 0; i--) {
//         if (sections[i] && sections[i]!.offsetTop <= scrollPosition) {
//           setActiveSection(navItems[i]);
//           break;
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (item: string) => {
//     const el = document.getElementById(item.toLowerCase());
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//       setOpen(false);
//     }
//   };

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0c1022] via-[#12163a] to-[#0c1022] border-b border-white/10 backdrop-blur-lg"
//       >
//         <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

//           {/* LEFT */}
//           <div className="flex items-center gap-3">
//             <img src={RMKCET} alt="RMKCET Logo" className="h-10 sm:h-12" />
//           </div>

//           {/* CENTER (Desktop only) */}
//           <div className="hidden xl:flex flex-col text-center">
//             <h1 className="text-white font-semibold text-lg">
//               R.M.K College of Engineering and Technology
//             </h1>
//             <p className="text-gray-300 text-sm">
//               Department of CSE (Cyber Security)
//             </p>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-3">

//             {/* Desktop Nav */}
//             <div className="hidden lg:flex items-center gap-2">
//               {navItems.map((item) => (
//                 <motion.button
//                   key={item}
//                   onClick={() => scrollToSection(item)}
//                   className={`relative px-4 py-2 rounded-full text-sm
//                     ${
//                       activeSection === item
//                         ? "text-white"
//                         : "text-gray-300 hover:text-white"
//                     }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {activeSection === item && (
//                     <motion.div
//                       layoutId="active-pill"
//                       className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
//                     />
//                   )}
//                   <span className="relative z-10">{item}</span>
//                 </motion.button>
//               ))}
//             </div>

//             {/* Poster Button */}
//             <motion.a
//               href="/event-poster.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hidden sm:inline-flex px-4 py-2 rounded-full bg-black text-white text-sm border border-white/20 hover:border-white/40"
//               whileHover={{ scale: 1.05 }}
//             >
//               Event Poster
//             </motion.a>

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden text-white"
//               onClick={() => setOpen(!open)}
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="fixed top-20 left-0 w-full bg-[#0c1022] z-40 border-t border-white/10 lg:hidden"
//           >
//             <div className="flex flex-col p-4 gap-2">
//               {navItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item)}
//                   className="text-left text-gray-300 hover:text-white py-2"
//                 >
//                   {item}
//                 </button>
//               ))}

//               <a
//                 href="/event-poster.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-2 text-center py-2 rounded-lg bg-black text-white border border-white/20"
//               >
//                 Event Poster
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import RMKCET from "../assets/RMKCET Logo.png";

// const NAV_ITEMS = ["Home", "About", "Events", "Timeline", "Guidelines", "Contact"];

// export default function Navbar() {
//   const [active, setActive] = useState("Home");
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       const offset = window.scrollY + 120;

//       for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
//         const section = document.getElementById(
//           NAV_ITEMS[i].toLowerCase()
//         );
//         if (section && section.offsetTop <= offset) {
//           setActive(NAV_ITEMS[i]);
//           break;
//         }
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollTo = (item: string) => {
//     const el = document.getElementById(item.toLowerCase());
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//       setOpen(false);
//     }
//   };

//   return (
//     <>
//       {/* NAVBAR */}
//       <motion.nav
//         initial={{ y: -80 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0c1022] via-[#12163a] to-[#0c1022] border-b border-white/10 backdrop-blur-lg"
//       >
//         <div className="max-w-7xl mx-auto h-[90px] px-4 flex items-center justify-between">

//           {/* LEFT LOGO */}
//           <div className="flex items-center gap-3">
//             <img src={RMKCET} alt="RMKCET" className="h-10 sm:h-12" />
//           </div>

//           {/* CENTER TEXT (DESKTOP ONLY) */}
//           <div className="hidden xl:flex flex-col text-center">
//             <h1 className="text-white font-semibold text-lg">
//               R.M.K College of Engineering and Technology
//             </h1>
//             <p className="text-gray-300 text-sm">
//               Department of CSE (Cyber Security)
//             </p>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-3">

//             {/* DESKTOP MENU */}
//             <div className="hidden lg:flex gap-1">
//               {NAV_ITEMS.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollTo(item)}
//                   className={`relative px-4 py-2 text-sm rounded-full transition
//                     ${
//                       active === item
//                         ? "text-white"
//                         : "text-gray-300 hover:text-white"
//                     }`}
//                 >
//                   {active === item && (
//                     <motion.span
//                       layoutId="active-pill"
//                       className="absolute inset-0 rounded-full bg-white/10 border border-white/20"
//                     />
//                   )}
//                   <span className="relative z-10">{item}</span>
//                 </button>
//               ))}
//             </div>

//             {/* POSTER BUTTON */}
//             <a
//               href="/event-poster.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hidden sm:inline-flex px-4 py-2 rounded-full bg-black text-white text-sm border border-white/20 hover:border-white/40 transition"
//             >
//               Event Poster
//             </a>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               onClick={() => setOpen(!open)}
//               className="lg:hidden text-white"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={
//                     open
//                       ? "M6 18L18 6M6 6l12 12"
//                       : "M4 6h16M4 12h16M4 18h16"
//                   }
//                 />
//               </svg>
//             </button>

//           </div>
//         </div>
//       </motion.nav>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="fixed top-[90px] left-0 w-full z-40 bg-[#0c1022] border-t border-white/10 lg:hidden"
//           >
//             <div className="flex flex-col p-4 gap-3">
//               {NAV_ITEMS.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollTo(item)}
//                   className="text-left text-gray-300 hover:text-white py-2"
//                 >
//                   {item}
//                 </button>
//               ))}

//               <a
//                 href="/event-poster.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-2 text-center py-2 rounded-lg bg-black text-white border border-white/20"
//               >
//                 Event Poster
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, Dispatch, SetStateAction } from "react";
import RMKCET from "../assets/RMKCET Logo.png";

const navItems = ["Home", "About", "Events", "Timeline", "Guidelines", "Contact"];
const NAVBAR_HEIGHT = 80; // px (h-20)

// Type for hover cursor position
type CursorPosition = {
  left: number;
  width: number;
  opacity: number;
};

// Hover Cursor component - follows mouse
const HoverCursor = ({ position }: { position: CursorPosition }) => {
  return (
    <motion.div
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      className="absolute ring-btn overflow-hidden inset-0 bg-black rounded-full border border-cyan-400/50"
    />
  );
};

// Nav Tab component with hover tracking
const NavTab = ({
  children,
  setHoverPosition,
  isActive,
  isHovering,
  onClick,
}: {
  children: string;
  setHoverPosition: Dispatch<SetStateAction<CursorPosition>>;
  isActive: boolean;
  isHovering: boolean;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setHoverPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative z-10 px-4 py-2 rounded-full font-extrabold text-sm cursor-pointer
        ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`}
      whileTap={{ scale: 0.95 }}
    >
      {/* Active section indicator - only show when NOT hovering */}
      {isActive && !isHovering && (
        <motion.div
          layoutId="active-pill"
          className="absolute ring-btn overflow-hidden inset-0 bg-black rounded-full border border-cyan-400/50"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [open, setOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Hover cursor position state
  const [hoverPosition, setHoverPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  /* ---------------- ACTIVE SECTION ON SCROLL ---------------- */
  useEffect(() => {
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- PERFECT SCROLL FUNCTION ---------------- */
  const scrollToSection = (item: string) => {
    const id = item.toLowerCase();
    const section = document.getElementById(id);

    if (!section) return;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      NAVBAR_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 h-20 bg-gradient-to-b from-blue-950/90 via-blue-950/50 to-blue-950/1 bg-blur-lg backdrop-blur-sm"
      >
        <div className="max-w-8xl mx-auto px-4 h-full flex items-center justify-evenly">
          <div className="flex items-center gap-3">
          {/* LOGO */}
          <img src={RMKCET} alt="RMKCET Logo" className="h-10 sm:h-12" />

          {/* CENTER TEXT */}
          <div className="hidden xl:flex flex-col text-center">
            <h1 className="text-white font-bold text-lg">
              R.M.K College of Engineering and Technology
            </h1>
            <p className="text-gray-400 font-semibold text-sm">
              Department of CSE (Cyber Security)
            </p>
          </div>
          </div>

          {/* RIGHT */}
          
            {/* DESKTOP NAV with hover cursor */}
            <div 
              className="hidden lg:flex gap-1 relative items-center"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setHoverPosition((prev) => ({
                  ...prev,
                  opacity: 0,
                }));
              }}
            >
              {/* Hover cursor that follows mouse */}
              <HoverCursor position={hoverPosition} />
              
              {navItems.map((item) => (
                <NavTab
                  key={item}
                  setHoverPosition={setHoverPosition}
                  isActive={activeSection === item}
                  isHovering={isHovering}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </NavTab>
              ))}
           

            {/* POSTER */}
            <a
  href="/event-poster.pdf"
  target="_blank"
  className="relative hidden sm:inline-flex px-4 py-2 rounded-full
             text-white text-sm font-extrabold overflow-hidden
             ring-btn"
>
  <span className="relative z-10">Event Poster</span>
</a>


            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-20 left-0 w-full z-40 bg-[#0c1022] border-t border-white/10 lg:hidden"
          >
            <div className="flex flex-col p-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left py-3 text-gray-300 hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
