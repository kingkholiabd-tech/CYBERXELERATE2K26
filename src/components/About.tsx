import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Sparkles } from 'lucide-react';

const cards = [
  {
    icon: Target,
    title: 'Beyond Rivalry',
    description: 'EL CLÁSICO transcends traditional competition. It represents the eternal dance between opposing forces that drive innovation and excellence in every domain.',
    gradient: 'from-red-500/20 to-red-600/5',
    iconColor: 'text-red-400',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Ideas',
    description: 'Where groundbreaking concepts clash and merge, creating new paradigms. A battleground for intellectual discourse and technological advancement.',
    gradient: 'from-purple-500/20 to-purple-600/5',
    iconColor: 'text-purple-400',
  },
  {
    icon: Users,
    title: 'Unity in Competition',
    description: 'Two sides, one vision. The rivalry that pushes boundaries while maintaining respect, creating an environment where everyone emerges victorious.',
    gradient: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
  },
  {
    icon: Sparkles,
    title: 'Excellence Elevated',
    description: 'This symposium celebrates the pursuit of greatness, where participants compete not against each other, but against the limits of possibility itself.',
    gradient: 'from-cyan-500/20 to-cyan-600/5',
    iconColor: 'text-cyan-400',
  },
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            About EL CLÁSICO
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A convergence of minds where rivalry fuels excellence and competition breeds innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="relative group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
              <motion.div
                className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className={`${card.iconColor} mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <card.icon size={40} strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
          <div className="relative bg-black/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-6">
              <motion.div
                className="h-24 w-1 bg-gradient-to-b from-red-500 to-transparent rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <h3 className="text-3xl md:text-4xl font-bold text-center flex-1 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Our Vision
              </h3>
              <motion.div
                className="h-24 w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              EL CLÁSICO is not just an event—it's a philosophy. Born from the understanding that true excellence emerges from healthy rivalry, this symposium brings together the brightest minds across technology, science, arts, and innovation. Here, competition isn't about defeating opponents; it's about pushing boundaries, challenging conventions, and collectively reaching new heights. Welcome to a space where every clash of ideas creates sparks of brilliance, and where the true victory lies in the pursuit of knowledge itself.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
