import { motion } from 'framer-motion';

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
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full mx-auto" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
            About EL CLÁSICO
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A convergence of minds where rivalry fuels excellence and competition breeds innovation
          </p>
        </motion.div>

        {/* Paragraphs */}
        <motion.div
          className="space-y-10 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            <span className="font-semibold text-white">EL CLÁSICO</span> transcends traditional competition. It represents the eternal clash of ideas, values, and visions that drive progress across every domain. Inspired by legendary rivalries, this symposium channels competition into a force for creativity, discipline, and innovation.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            At its core, EL CLÁSICO is a meeting ground for thinkers, creators, and innovators. Here, ideas collide, challenge one another, and evolve into stronger solutions. Rivalry is not about opposition—it is about refinement, growth, and the relentless pursuit of excellence.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            This platform celebrates unity through competition. Participants come from diverse backgrounds, disciplines, and perspectives, yet share a common ambition: to push beyond limits. Every discussion, challenge, and collaboration is designed to ignite curiosity and spark breakthroughs.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            EL CLÁSICO is more than an event—it is a philosophy. A belief that the greatest achievements emerge when strong ideas are tested, refined, and elevated through healthy rivalry. Here, the true victory lies not in defeating others, but in surpassing what we once believed possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
