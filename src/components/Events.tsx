// import { motion } from 'framer-motion';
// import { Code, Brain, Palette, Rocket, Gamepad2Icon, Gamepad } from 'lucide-react';

// const events = [
//   {
//     icon: Code,
//     title: 'Code Combat',
//     description: 'An intense coding competition where developers battle through algorithmic challenges, showcasing their problem-solving prowess and technical excellence.',
//     category: 'Technical',
//     color: 'from-red-500 to-red-600',
//     posterUrl: '#',
//   },
//   {
//     icon: Brain,
//     title: 'Capture The Flag',
//     description: 'Present groundbreaking ideas and innovative solutions. Pitch your vision and compete for recognition in this showcase of creative thinking.',
//     category: 'Technical',
//     color: 'from-purple-500 to-purple-600',
//     posterUrl: '#',
//   },
//   {
//     icon: Palette,
//     title: 'Vibe Code',
//     description: 'UI/UX designers face off in a timed challenge to create stunning, user-centric designs that push the boundaries of digital aesthetics.',
//     category: 'Technical',
//     color: 'from-blue-500 to-blue-600',
//     posterUrl: '#',
//   },
//   {
//     icon: Rocket,
//     title: 'Pitch Perfect',
//     description: 'Entrepreneurs present their business ideas, compete for investor attention, and demonstrate their ability to turn concepts into reality.',
//     category: 'Technical',
//     color: 'from-cyan-500 to-cyan-600',
//     posterUrl: '#',
//   },
//   {
//     icon: Gamepad2Icon,
//     title: 'Data Derby',
//     description: 'Data scientists and analysts compete to extract meaningful insights from complex datasets, proving their analytical supremacy.',
//     category: 'Non Technical',
//     color: 'from-orange-500 to-orange-600',
//     posterUrl: '#',
//   },
//   {
//     icon: Gamepad,
//     title: 'Cyber Clash',
//     description: 'Cybersecurity experts engage in capture-the-flag challenges, testing their skills in penetration testing and defensive strategies.',
//     category: 'Non Technical',
//     color: 'from-green-500 to-green-600',
//     posterUrl: '#',
//   },
// ];

// export default function Events() {
//   const handleViewPoster = (url: string, title: string) => {
//     if (url === '#') {
//       alert(`Poster for "${title}" will be available soon!`);
//     } else {
//       window.open(url, '_blank');
//     }
//   };

//   return (
//     <section id="events" className="relative min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-50" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-16"
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
//             Competition Events
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Choose your battlefield and prove your excellence
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event, index) => (
//             <motion.div
//               key={event.title}
//               className="relative group"
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <motion.div
//                 className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}
//               />
//               <motion.div
//                 className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:border-white/30 transition-all duration-300"
//                 whileHover={{ scale: 1.03, y: -8 }}
//               >
//                 <div className="flex items-start justify-between mb-4">
//                   <motion.div
//                     className={`p-3 bg-gradient-to-br ${event.color} rounded-xl`}
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <event.icon className="text-white" size={28} strokeWidth={2} />
//                   </motion.div>
//                   <motion.span
//                     className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${event.color} text-white`}
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     {event.category}
//                   </motion.span>
//                 </div>

//                 <h3 className="text-2xl font-bold text-white mb-3">
//                   {event.title}
//                 </h3>

//                 <p className="text-gray-400 leading-relaxed mb-6 min-h-[120px]">
//                   {event.description}
//                 </p>

//                 <motion.button
//                   onClick={() => handleViewPoster(event.posterUrl, event.title)}
//                   className={`w-full py-3 px-6 bg-gradient-to-r ${event.color} text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group/btn`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-white/20"
//                     initial={{ x: '-100%' }}
//                     whileHover={{ x: '100%' }}
//                     transition={{ duration: 0.5 }}
//                   />
//                   <span className="relative z-10">View Poster</span>
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* <motion.div
//           className="mt-16 text-center"
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="inline-block bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4">
//             <p className="text-gray-300">
//               <span className="font-bold text-white">Pro Tip:</span> Participate in multiple events to maximize your experience and showcase diverse skills
//             </p>
//           </div>
//         </motion.div> */}
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { Code, Brain, Palette, Rocket, Gamepad2Icon, Gamepad } from "lucide-react";
import { useNavigate } from "react-router-dom";

const events = [
  {
    icon: Code,
    title: "Code Combat",
    slug: "code-combat",
    description:
      "An intense coding competition where developers battle through algorithmic challenges.",
    category: "Technical",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Brain,
    title: "Capture The Flag",
    slug: "ctf",
    description:
      "Cybersecurity challenge testing real-world attack and defense skills.",
    category: "Technical",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Palette,
    title: "Vibe Code",
    slug: "vibe-code",
    description:
      "UI/UX designers face off to create stunning, user-centric designs.",
    category: "Technical",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Rocket,
    title: "Pitch Perfect",
    slug: "pitch-perfect",
    description:
      "Entrepreneurs pitch innovative ideas to impress judges and investors.",
    category: "Technical",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Gamepad2Icon,
    title: "Data Derby",
    slug: "data-derby",
    description:
      "Analyze datasets and extract powerful insights under pressure.",
    category: "Non Technical",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Gamepad,
    title: "Cyber Clash",
    slug: "cyber-clash",
    description:
      "CTF-style hacking event testing penetration and defense skills.",
    category: "Non Technical",
    color: "from-green-500 to-green-600",
  },
];

export default function Events() {
  const navigate = useNavigate();

  return (
    <section
      id="events"
      className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Competition Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.slug}
              onClick={() => navigate(`/event/${event.slug}`)}
              className="cursor-pointer bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-white/30"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`p-3 inline-block rounded-xl bg-gradient-to-br ${event.color} mb-4`}
              >
                <event.icon className="text-white" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {event.title}
              </h3>

              <p className="text-gray-400 mb-4">{event.description}</p>

              <span
                className={`inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r ${event.color} text-white`}
              >
                {event.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
