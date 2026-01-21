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

// import { motion } from "framer-motion";
// import { Code, Brain, Palette, Rocket, Gamepad2Icon, Gamepad } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const events = [
//   {
//     icon: Code,
//     title: "Code Combat",
//     slug: "code-combat",
//     description:
//       "An intense coding competition where developers battle through algorithmic challenges.",
//     category: "Technical",
//     color: "from-red-500 to-red-600",
//   },
//   {
//     icon: Brain,
//     title: "Capture The Flag",
//     slug: "ctf",
//     description:
//       "Cybersecurity challenge testing real-world attack and defense skills.",
//     category: "Technical",
//     color: "from-purple-500 to-purple-600",
//   },
//   {
//     icon: Palette,
//     title: "Vibe Code",
//     slug: "vibe-code",
//     description:
//       "UI/UX designers face off to create stunning, user-centric designs.",
//     category: "Technical",
//     color: "from-blue-500 to-blue-600",
//   },
//   {
//     icon: Rocket,
//     title: "Pitch Perfect",
//     slug: "pitch-perfect",
//     description:
//       "Entrepreneurs pitch innovative ideas to impress judges and investors.",
//     category: "Technical",
//     color: "from-cyan-500 to-cyan-600",
//   },
//   {
//     icon: Gamepad2Icon,
//     title: "Data Derby",
//     slug: "data-derby",
//     description:
//       "Analyze datasets and extract powerful insights under pressure.",
//     category: "Non Technical",
//     color: "from-orange-500 to-orange-600",
//   },
//   {
//     icon: Gamepad,
//     title: "Cyber Clash",
//     slug: "cyber-clash",
//     description:
//       "CTF-style hacking event testing penetration and defense skills.",
//     category: "Non Technical",
//     color: "from-green-500 to-green-600",
//   },
// ];

// export default function Events() {
//   const navigate = useNavigate();

//   return (
//     <section
//       id="events"
//       className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-5xl font-bold text-center text-white mb-16">
//           Competition Events
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event, index) => (
//             <motion.div
//               key={event.slug}
//               onClick={() => navigate(`/event/${event.slug}`)}
//               className="cursor-pointer bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-white/30"
//               initial={{ y: 40, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div
//                 className={`p-3 inline-block rounded-xl bg-gradient-to-br ${event.color} mb-4`}
//               >
//                 <event.icon className="text-white" size={28} />
//               </div>

//               <h3 className="text-2xl font-bold text-white mb-2">
//                 {event.title}
//               </h3>

//               <p className="text-gray-400 mb-4">{event.description}</p>

//               <span
//                 className={`inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r ${event.color} text-white`}
//               >
//                 {event.category}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import {
//   Code,
//   Brain,
//   Palette,
//   Rocket,
//   Gamepad2Icon,
//   Gamepad,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// const events = [
//   {
//     icon: Code,
//     title: "Binary Derby",
//     slug: "code-combat",
//     description:
//       "An intense coding competition where developers battle through algorithmic challenges.",
//     category: "Technical",
//     color: "from-red-500 to-red-600",
//   },
//   {
//     icon: Brain,
//     title: "Capture The Flag",
//     slug: "ctf",
//     description:
//       "Cybersecurity challenge testing real-world attack and defense skills.",
//     category: "Technical",
//     color: "from-purple-500 to-purple-600",
//   },
//   {
//     icon: Palette,
//     title: "Vibathon",
//     slug: "vibe-code",
//     description:
//       "UI/UX designers face off to create stunning, user-centric designs.",
//     category: "Technical",
//     color: "from-blue-500 to-blue-600",
//   },
//   {
//     icon: Rocket,
//     title: "Project Explosion",
//     slug: "pitch-perfect",
//     description:
//       "Entrepreneurs pitch innovative ideas to impress judges and investors.",
//     category: "Technical",
//     color: "from-cyan-500 to-cyan-600",
//   },
//   {
//     icon: Gamepad2Icon,
//     title: "Data Derby",
//     slug: "data-derby",
//     description:
//       "Analyze datasets and extract powerful insights under pressure.",
//     category: "Non Technical",
//     color: "from-orange-500 to-orange-600",
//   },
//   {
//     icon: Gamepad,
//     title: "Cyber Clash",
//     slug: "cyber-clash",
//     description:
//       "CTF-style hacking event testing penetration and defense skills.",
//     category: "Non Technical",
//     color: "from-green-500 to-green-600",
//   },
// ];

// export default function Events() {
//   const navigate = useNavigate();

//   return (
//     <section
//       id="events"
//       className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-5xl font-bold text-center text-white mb-16">
//           Legends Arena
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {events.map((event, index) => (
//             <motion.div
//               key={event.slug}
//               onClick={() => navigate(`/event/${event.slug}`)}
//               className="cursor-pointer"
//               initial={{ y: 40, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ scale: 1.03 }}
//             >
//               <Card className="bg-black/70 border-white/10 hover:border-white/30 hover:shadow-lg transition-all duration-300">
//                 <CardHeader className="flex items-center justify-between">
//                   <div
//                     className={`p-3 rounded-xl bg-gradient-to-br ${event.color} shadow-md`}
//                   >
//                     <event.icon className="text-white" size={28} />
//                   </div>
//                   <Badge className="text-white  bg-white/10 border-white/20">
//                     {event.category}
//                   </Badge>
//                 </CardHeader>

//                 <CardContent className="pt-4">
//                   <CardTitle className="text-2xl text-white">
//                     {event.title}
//                   </CardTitle>
//                   <CardDescription className="text-gray-400 mt-2">
//                     {event.description}
//                   </CardDescription>

//                   <div className="mt-6 flex items-center  justify-between">
//                     <span className="text-xs text-gray-400">
//                       Click to view details
//                     </span>
//                     <span className="text-xs text-white/80">
//                       →  
//                     </span>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

/* ------------------ EVENTS DATA ------------------ */

const events = [
  {
    title: "CODE FC",
    slug: "code-combat",
    category: "Technical",
    description: "Battle through intense algorithmic challenges.",
    image: "/events/binary.jpg",
    formLink: "https://forms.gle/xxxxx1",
    color: "from-red-500 to-red-600",
  },
  {
    title: "H4CK_077 CTF",
    slug: "ctf",
    category: "Technical",
    description: "Real-world cybersecurity attack & defense challenges.",
    image: "/events/ctf1.jpeg",
    formLink: "https://forms.gle/xxxxx2",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Vibe-A-thon",
    slug: "vibe-code",
    category: "Technical",
    description: "Design stunning UI/UX under time pressure.",
    image: "/events/vibe.jpg",
    formLink: "https://forms.gle/xxxxx3",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Data Derby",
    slug: "data-derby",
    category: "Non Technical",
    description: "Analyze data and extract meaningful insights.",
    image: "/events/data.jpg",
    formLink: "https://forms.gle/xxxxx4",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Cyber Clash",
    slug: "cyber-clash",
    category: "Non Technical",
    description: "Fast-paced hacking and defense battles.",
    image: "/events/cyber.jpg",
    formLink: "https://forms.gle/xxxxx5",
    color: "from-green-500 to-green-600",
  },
];

/* ------------------ ANIMATION VARIANTS ------------------ */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const cardHover = {
  rest: { y: 0 },
  hover: {
    y: -8,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

const buttonVariants = {
  rest: { opacity: 0, scale: 0.85 },
  hover: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260 },
  },
};

const textVariants = {
  rest: { y: 0 },
  hover: { y: -6 },
};

/* ------------------ COMPONENT ------------------ */

export default function Events() {
  const navigate = useNavigate();

  return (
    <section id="events" className="min-h-screen py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-white mb-16 font-oxanium">
          Legends Arena
        </h2>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {events.map((event) => (
            <motion.div
              key={event.slug}
              variants={item}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="cursor-pointer"
            >
              <motion.div variants={cardHover}>
                <Card
                  onClick={() => navigate(`/event/${event.slug}`)}
                  className="group overflow-hidden
                    backdrop-blur-xl bg-white/5
                    border border-white/10
                    hover:border-white/30
                    transition-all duration-300
                    hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                >

                  {/* Text Section */}
                  <CardHeader className="space-y-3">
                    <motion.div
                      variants={textVariants}
                      className="flex justify-between items-center"
                    >
                      <Badge className="bg-white/10 border-white/20 text-white">
                        {event.category}
                      </Badge>
                      <span className="text-xs text-gray-400 uppercase">
                        {event.slug}
                      </span>
                    </motion.div>

                    <motion.h3
                      variants={textVariants}
                      className="text-2xl font-semibold text-white font-orbitron"
                    >
                      {event.title}
                    </motion.h3>

                    <motion.p
                      variants={textVariants}
                      className="text-gray-400 text-sm"
                    >
                      {event.description}
                    </motion.p>
                  </CardHeader>

                  {/* Image + Hover Actions */}
                  <CardContent className="p-0">
                    <div className="relative h-52 overflow-hidden">

                      <motion.img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        variants={{
                          rest: { scale: 1, rotate: 0 },
                          hover: { scale: 1.15, rotate: 1 },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />

                      {/* Glass Overlay */}
                      <motion.div
                        variants={overlayVariants}
                        className="absolute inset-0 bg-black/40 backdrop-blur-md"
                      />

                      {/* Hover Buttons */}
                      <motion.div
                        variants={overlayVariants}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                      >
                        <motion.div variants={buttonVariants}>
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(event.formLink, "_blank");
                            }}
                            className={`bg-gradient-to-r ${event.color} text-white rounded-full px-8`}
                          >
                            Register Now
                          </Button>
                        </motion.div>

                        <motion.div variants={buttonVariants}>
                          <Button
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/event/${event.slug}`);
                            }}
                            className="border-white/30 text-white rounded-full"
                          >
                            View Details
                          </Button>
                        </motion.div>
                      </motion.div>

                    </div>
                  </CardContent>

                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
