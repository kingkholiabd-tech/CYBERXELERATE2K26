import { motion } from "framer-motion";
import EventBadge from "./EventBadge";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden z-10 rounded-t-3xl"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content with badge layout */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          
          {/* Left side - About content */}
          <div className="flex-1">
            {/* Heading */}
            <motion.div
              className="text-center lg:text-left mb-12"
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
                <div className="h-1 w-20 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full lg:mx-0 mx-auto" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent font-oxanium">
                Ignite Your Cybersecurity Passion
              </h2>

              <p className="text-xl text-gray-300">
                CyberXelerate&apos; 2k25 Symposium
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-8 text-center lg:text-left"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                Join us for the <span className="font-semibold text-white">CyberXelerate&apos; 2k26 Symposium</span>,
                organized by the Department of CSE (Cyber Security) at
                <span className="font-semibold text-white">
                  {" "}R.M.K. College of Engineering and Technology
                </span>.
                This thrilling event is packed with exciting competitions designed to challenge your
                skills and knowledge in the dynamic world of cybersecurity.
              </p>

              {/* Highlights */}
              <div className="space-y-3 text-gray-300 text-left">
                <p>➤ <span className="font-semibold text-white">No Registration Fees:</span> Participate at absolutely no cost.</p>
                <p>➤ <span className="font-semibold text-white">Exciting Cash Prizes:</span> Showcase your cybersecurity expertise and win big.</p>
                <p>➤ <span className="font-semibold text-white">Complimentary Food:</span> Enjoy free meals while you dive into the challenges.</p>
                <p>➤ <span className="font-semibold text-white">Professional Atmosphere:</span> Dress formally and connect with industry experts.</p>
                <p>➤ <span className="font-semibold text-white">Transport Facilities:</span> Convenient transport provided (details below).</p>
              </div>

              {/* Transport Button */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <a
                  href="/pdfs/transport-details.pdf"
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

          {/* Right side - Event Badge */}
          <motion.div 
            className="hidden lg:flex lg:flex-col lg:items-center lg:justify-start lg:pt-16"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <EventBadge />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
