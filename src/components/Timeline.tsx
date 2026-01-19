// import { motion } from 'framer-motion';
// import { Clock, Coffee, Trophy, Utensils, Award } from 'lucide-react';

// const timelineEvents = [
//   {
//     time: '8:30 AM',
//     title: 'Boarding',
//     description: 'Registration and welcome refreshments',
//     icon: Clock,
//     color: 'from-red-500 to-red-600',
//     side: 'left',
//   },
//   {
//     time: '9:00 AM - 10:00 AM',
//     title: 'Pre-event Ceremony',
//     description: 'Opening address and event briefing',
//     icon: Coffee,
//     color: 'from-purple-500 to-purple-600',
//     side: 'right',
//   },
//   {
//     time: '10:00 AM - 1:00 PM',
//     title: 'Main Events',
//     description: 'Competition rounds across all categories',
//     icon: Trophy,
//     color: 'from-blue-500 to-blue-600',
//     side: 'left',
//   },
//   {
//     time: '1:00 PM - 2:00 PM',
//     title: 'Lunch Break',
//     description: 'Networking and refreshments',
//     icon: Utensils,
//     color: 'from-cyan-500 to-cyan-600',
//     side: 'right',
//   },
//   {
//     time: '2:00 PM - 3:00 PM',
//     title: 'Winners Announcement & Post Event',
//     description: 'Award ceremony and closing remarks',
//     icon: Award,
//     color: 'from-orange-500 to-orange-600',
//     side: 'left',
//   },
// ];

// export default function Timeline() {
//   return (
//     <section id="timeline" className="relative min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500"
//           initial={{ scaleY: 0 }}
//           whileInView={{ scaleY: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.5 }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-20"
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             className="inline-block mb-4"
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, type: "spring" }}
//           >
//             <div className="h-1 w-20 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full mx-auto" />
//           </motion.div>
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
//             Event Timeline
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             A day of excellence, competition, and celebration
//           </p>
//         </motion.div>

//         <div className="hidden md:block relative">
//           {timelineEvents.map((event, index) => (
//             <motion.div
//               key={index}
//               className={`flex items-center mb-16 ${
//                 event.side === 'left' ? 'flex-row' : 'flex-row-reverse'
//               }`}
//               initial={{ opacity: 0, x: event.side === 'left' ? -100 : 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//             >
//               <div className={`w-5/12 ${event.side === 'left' ? 'text-right pr-12' : 'text-left pl-12'}`}>
//                 <motion.div
//                   className="relative group"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-all duration-300`} />
//                   <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300">
//                     <motion.div
//                       className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${event.color} text-white rounded-full text-sm font-bold mb-3`}
//                       whileHover={{ scale: 1.1 }}
//                     >
//                       <Clock size={16} />
//                       {event.time}
//                     </motion.div>
//                     <h3 className="text-2xl font-bold text-white mb-2">
//                       {event.title}
//                     </h3>
//                     <p className="text-gray-400">
//                       {event.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>

//               <div className="w-2/12 flex justify-center">
//                 <motion.div
//                   className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-2xl`}
//                   initial={{ scale: 0, rotate: -180 }}
//                   whileInView={{ scale: 1, rotate: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
//                   whileHover={{ scale: 1.2, rotate: 360 }}
//                 >
//                   <event.icon className="text-white" size={28} strokeWidth={2} />
//                   <motion.div
//                     className={`absolute inset-0 rounded-full bg-gradient-to-br ${event.color}`}
//                     animate={{
//                       boxShadow: [
//                         '0 0 20px rgba(139, 92, 246, 0.5)',
//                         '0 0 40px rgba(139, 92, 246, 0.8)',
//                         '0 0 20px rgba(139, 92, 246, 0.5)',
//                       ],
//                     }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   />
//                 </motion.div>
//               </div>

//               <div className="w-5/12" />
//             </motion.div>
//           ))}
//         </div>

//         <div className="md:hidden space-y-8">
//           {timelineEvents.map((event, index) => (
//             <motion.div
//               key={index}
//               className="relative pl-12"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <motion.div
//                 className={`absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center`}
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//               >
//                 <event.icon className="text-white" size={16} strokeWidth={2} />
//               </motion.div>

//               <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-white/20 to-transparent" />

//               <motion.div
//                 className="relative group"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20 rounded-xl blur-lg group-hover:opacity-30 transition-all duration-300`} />
//                 <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:border-white/30 transition-all duration-300">
//                   <motion.div
//                     className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${event.color} text-white rounded-full text-xs font-bold mb-2`}
//                   >
//                     <Clock size={12} />
//                     {event.time}
//                   </motion.div>
//                   <h3 className="text-xl font-bold text-white mb-1">
//                     {event.title}
//                   </h3>
//                   <p className="text-gray-400 text-sm">
//                     {event.description}
//                   </p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p
            className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
