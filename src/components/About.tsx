  // import { motion } from 'framer-motion';

  // export default function About() {
  //   return (
  //     <section
  //       id="about"
  //       className="relative min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
  //     >
  //       {/* Background glow */}
  //       <div className="absolute inset-0 opacity-30">
  //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-[128px]" />
  //         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px]" />
  //       </div>

  //       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  //         {/* Heading */}
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
  //             transition={{ duration: 0.5, type: 'spring' }}
  //           >
  //             <div className="h-1 w-20 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full mx-auto" />
  //           </motion.div>

  //           <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
  //             About EL CLÁSICO
  //           </h2>

  //           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
  //             A convergence of minds where rivalry fuels excellence and competition breeds innovation
  //           </p>
  //         </motion.div>

  //         {/* Paragraphs */}
  //         <motion.div
  //           className="space-y-10 text-center"
  //           initial={{ y: 50, opacity: 0 }}
  //           whileInView={{ y: 0, opacity: 1 }}
  //           viewport={{ once: true }}
  //           transition={{ duration: 0.8 }}
  //         >
  //           <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
  //             <span className="font-semibold text-white">EL CLÁSICO</span> transcends traditional competition. It represents the eternal clash of ideas, values, and visions that drive progress across every domain. Inspired by legendary rivalries, this symposium channels competition into a force for creativity, discipline, and innovation.
  //           </p>

  //           <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
  //             At its core, EL CLÁSICO is a meeting ground for thinkers, creators, and innovators. Here, ideas collide, challenge one another, and evolve into stronger solutions. Rivalry is not about opposition—it is about refinement, growth, and the relentless pursuit of excellence.
  //           </p>

  //           <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
  //             This platform celebrates unity through competition. Participants come from diverse backgrounds, disciplines, and perspectives, yet share a common ambition: to push beyond limits. Every discussion, challenge, and collaboration is designed to ignite curiosity and spark breakthroughs.
  //           </p>

  //           <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
  //             EL CLÁSICO is more than an event—it is a philosophy. A belief that the greatest achievements emerge when strong ideas are tested, refined, and elevated through healthy rivalry. Here, the true victory lies not in defeating others, but in surpassing what we once believed possible.
  //           </p>
  //         </motion.div>
  //       </div>
  //     </section>
  //   );
  // }

  import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full mx-auto" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
            Ignite Your Cybersecurity Passion
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CyberXelerate&apos; 2k25 Symposium
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-8 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            Join us for the <span className="font-semibold text-white">CyberXelerate&apos; 2k26 Symposium</span>,
            organized by the Department of CSE (Cyber Security) at
            <span className="font-semibold text-white">
              {" "}R.M.K. College of Engineering and Technology
            </span>.
            This thrilling event is packed with exciting competitions designed to challenge your
            skills and knowledge in the dynamic world of cybersecurity.
          </p>

          {/* Highlights */}
          <div className="max-w-3xl mx-auto text-left space-y-3 text-gray-300">
            <p>➤ <span className="font-semibold text-white">No Registration Fees:</span> Participate at absolutely no cost.</p>
            <p>➤ <span className="font-semibold text-white">Exciting Cash Prizes:</span> Showcase your cybersecurity expertise and win big.</p>
            <p>➤ <span className="font-semibold text-white">Complimentary Food:</span> Enjoy free meals while you dive into the challenges.</p>
            <p>➤ <span className="font-semibold text-white">Professional Atmosphere:</span> Dress formally and connect with industry experts.</p>
            <p>➤ <span className="font-semibold text-white">Transport Facilities:</span> Convenient transport provided (details below).</p>
          </div>

          {/* Event Details */}
          <div className="mt-6 text-gray-300 text-lg">
            <p className="font-semibold text-white mb-2">Event Details</p>
            <p>📅 <span className="font-semibold">Date:</span> February 9, 2026</p>
            <p>📍 <span className="font-semibold">Location:</span> R.M.K College of Engineering and Technology, Tamil Nadu</p>
          </div>

          {/* Transport Button */}
          <div className="mt-12 flex justify-center">
            <a
              href="/pdfs/transport-details.pdf"  // <-- replace with your actual PDF path
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full font-semibold text-white
                bg-gradient-to-r from-blue-500 to-purple-600
                hover:scale-105 transition-transform duration-300
                shadow-lg shadow-blue-500/20"
            >
              Transport Details
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
