import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Clock, Shield, Trophy, Users } from 'lucide-react';

const guidelines = [
  {
    icon: Users,
    title: 'Registration & Participation',
    rules: [
      'All participants must register before the deadline',
      'Valid student/professional ID required at check-in',
      'Teams should consist of 2-4 members for team events',
      'Individual registration for solo competitions',
    ],
  },
  {
    icon: Shield,
    title: 'Code of Conduct',
    rules: [
      'Maintain professional and respectful behavior at all times',
      'Zero tolerance for plagiarism or unfair practices',
      'Respect intellectual property and original work',
      'Collaborative spirit encouraged within competition boundaries',
    ],
  },
  {
    icon: Clock,
    title: 'Competition Rules',
    rules: [
      'Strict adherence to time limits for all events',
      'No external assistance during competition hours',
      'Use of approved tools and technologies only',
      'Judges decisions are final and binding',
    ],
  },
  {
    icon: Trophy,
    title: 'Awards & Recognition',
    rules: [
      'Winners will be announced at the closing ceremony',
      'Prizes and certificates for top performers',
      'Special recognition for innovative solutions',
      'Participation certificates for all attendees',
    ],
  },
];

const importantNotes = [
  'Bring your own laptop and necessary equipment',
  'Lunch and refreshments will be provided',
  'Emergency contact numbers will be shared on registration',
  'Follow all venue safety protocols',
];

export default function Guidelines() {
  return (
    <section id="guidelines" className="relative min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px]" />
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent font-oxanium">
            Guidelines & Rules
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fair play, excellence, and integrity are the foundations of EL CLÁSICO
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {guidelines.map((guideline, index) => (
            <motion.div
              key={guideline.title}
              className="relative group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-xl" />
              <motion.div
                className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/5 rounded-xl border border-purple-500/30"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <guideline.icon className="text-purple-400" size={28} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">
                    {guideline.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {guideline.rules.map((rule, ruleIndex) => (
                    <motion.li
                      key={ruleIndex}
                      className="flex items-start gap-3 text-gray-300"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + ruleIndex * 0.05 }}
                    >
                      <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={18} />
                      <span className="text-sm leading-relaxed">{rule}</span>
                    </motion.li>
                  ))}
                </ul>
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
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-2xl blur-2xl" />
          <div className="relative bg-black/60 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <AlertCircle className="text-yellow-400" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">Important Notes</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {importantNotes.map((note, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-yellow-500/5 rounded-xl p-4 border border-yellow-500/20"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">{note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 text-sm">
            For any questions or clarifications, please reach out to our organizing team
          </p>
        </motion.div>
      </div>
    </section>
  );
}
