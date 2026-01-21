'use client';

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Phone } from 'lucide-react';

// Apple-style easing
const APPLE_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// ============================================
// Event Data
// ============================================

interface EventData {
  title: string;
  tagline: string;
  description: string;
  poster: string;
  formLink: string;
  time: string;
  team: string;
  rules: string[];
  coordinators: { name: string; phone: string }[];
}

const eventsData: Record<string, EventData> = {
  ctf: {
    title: 'H4CK_077 CTF',
    tagline: 'Capture the flag.',
    description:
      'Real-world cybersecurity challenges on CTFD. Flag hunting, cryptographic puzzles, ethical hacking.',
    poster: '/events/ctf1.jpeg',
    formLink: 'https://forms.gle/xxxxx2',
    time: '10:00 AM – 12:30 PM',
    team: 'Up to 3 members',
    rules: [
      'Teams of 3 max',
      'No attacking infrastructure outside scope',
      'No sharing flags between teams',
      'No brute-force or DoS attacks',
      'Follow ethical hacking guidelines',
    ],
    coordinators: [
      { name: 'Gopinath S', phone: '+91 80152 23085' },
      { name: 'Kirthi Sai T', phone: '+91 99529 41725' },
      { name: 'Vishnu TS', phone: '+91 88258 66507' },
    ],
  },
  'code-combat': {
    title: 'CODE FC',
    tagline: 'Solve. Submit. Win.',
    description:
      '5 algorithmic problems on HackerRank. Test your problem-solving speed and coding efficiency.',
    poster: '/events/binary.jpg',
    formLink: 'https://forms.gle/xxxxx1',
    time: '10:30 AM – 12:30 PM',
    team: '1-2 members',
    rules: [
      'Solo or duo participation',
      'No AI tools or online code repositories',
      'Solve within time limit',
      'Plagiarism = disqualification',
      'Judges\' decisions are final',
    ],
    coordinators: [
      { name: 'Akash VI', phone: '+91 94452 39862' },
      { name: 'Hari Priyan R', phone: '+91 63819 78926' },
      { name: 'Muthumeena', phone: '+91 98765 43211' },
    ],
  },
  'vibe-code': {
    title: 'Vibe Coding',
    tagline: 'Design under pressure.',
    description:
      'UI/UX design challenge. 4 problem statements, 2 hours. Create beautiful, functional interfaces.',
    poster: '/events/vibe.jpg',
    formLink: 'https://forms.gle/xxxxx3',
    time: '10:00 AM – 12:00 PM',
    team: '2-3 members',
    rules: [
      'Teams of 2-3 only',
      'Design during event only',
      'Internet for fonts/icons allowed',
      'Submit design files + explanation',
      'No templates or plagiarized work',
    ],
    coordinators: [
      { name: 'Balaskanthan AK', phone: '+91 91235 87980' },
      { name: 'Darshini', phone: '+91 98765 43215' },
      { name: 'Dilip Kumar V', phone: '+91 73588 51959' },
    ],
  },
  'paper-presentation': {
    title: 'Paper Presentation',
    tagline: 'Present your ideas.',
    description:
      'Showcase research in Cyber Security, AI, Edutech, or Open Innovation. 5-10 minute presentation.',
    poster: '/events/vibe.jpg',
    formLink: 'https://forms.gle/xxxxx3',
    time: '10:00 AM – 12:30 PM',
    team: '1-4 members',
    rules: [
      'Teams of 1-4',
      'Submit PDF report + PPT online',
      'Present offline for 5-10 mins',
      'Topics: Cyber Security, AI, Edutech, Open Innovation',
      'Original work only',
    ],
    coordinators: [
      { name: 'Coordinator 1', phone: '+91 98765 43210' },
      { name: 'Coordinator 2', phone: '+91 98765 43211' },
    ],
  },
  'de-melodia': {
    title: 'De-Melodia',
    tagline: 'Test your musical ear.',
    description:
      'Three progressively challenging rounds. Connect with tunes, lyrics, and musical clues.',
    poster: '/events/cyber.jpg',
    formLink: 'https://forms.gle/xxxxx5',
    time: '10:00 AM – 12:00 PM',
    team: '2-3 members',
    rules: [
      'Teams of 2-3',
      'No mobile phones allowed',
      'Three progressive rounds',
      'Highest score wins',
      'Judges\' decisions are final',
    ],
    coordinators: [
      { name: 'Coordinator 1', phone: '+91 98765 43210' },
      { name: 'Coordinator 2', phone: '+91 98765 43211' },
    ],
  },
  'play-io': {
    title: 'Play.io',
    tagline: 'Teamwork wins.',
    description:
      'Time-based coordination games. Round 1: Mini challenges. Top teams advance to Round 2.',
    poster: '/events/cyber.jpg',
    formLink: 'https://forms.gle/xxxxx6',
    time: '10:00 AM – 12:00 PM',
    team: '2-3 members',
    rules: [
      'Teams of 2-3',
      'Time recorded in Round 1',
      'Top teams advance',
      'Fastest completion wins',
      'No external help',
    ],
    coordinators: [
      { name: 'Coordinator 1', phone: '+91 98765 43210' },
      { name: 'Coordinator 2', phone: '+91 98765 43211' },
    ],
  },
};

// Default fallback
const defaultEvent: EventData = {
  title: 'Event',
  tagline: 'Coming soon.',
  description: 'Details will be available shortly.',
  poster: '/events/cyber.jpg',
  formLink: '#',
  time: 'TBA',
  team: 'TBA',
  rules: ['Details coming soon'],
  coordinators: [],
};

// ============================================
// Component
// ============================================

export default function EventDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const event = slug && eventsData[slug] ? eventsData[slug] : defaultEvent;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  return (
    <main className="min-h-screen bg-surface-base">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={event.poster}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/60 to-transparent" />
        </div>

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: APPLE_EASE }}
          onClick={() => navigate('/')}
          className="absolute top-24 left-6 sm:left-12 z-10 inline-flex items-center gap-2 
            px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm
            hover:bg-white/20 transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </motion.button>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
          <div className="section-container">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: APPLE_EASE }}
              className="text-text-tertiary text-sm mb-2"
            >
              {event.time} · {event.team}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: APPLE_EASE }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3"
            >
              {event.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: APPLE_EASE }}
              className="text-xl sm:text-2xl text-white/80"
            >
              {event.tagline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: APPLE_EASE }}
              >
                <h2 className="text-xl font-medium text-text-primary mb-4">About</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {event.description}
                </p>
              </motion.div>

              {/* Rules */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: APPLE_EASE }}
              >
                <h2 className="text-xl font-medium text-text-primary mb-4">Rules</h2>
                <ul className="space-y-3">
                  {event.rules.map((rule, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center 
                        text-xs text-text-tertiary flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Register CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: APPLE_EASE }}
                className="bg-white/[0.03] rounded-2xl p-6 border border-white/5"
              >
                <a
                  href={event.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 
                    rounded-full bg-white text-black font-medium
                    hover:bg-white/90 transition-colors"
                >
                  Register Now
                  <ArrowUpRight size={16} />
                </a>
                <p className="text-text-tertiary text-xs text-center mt-3">
                  Opens in Google Forms
                </p>
              </motion.div>

              {/* Coordinators */}
              {event.coordinators.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: APPLE_EASE }}
                  className="bg-white/[0.03] rounded-2xl p-6 border border-white/5"
                >
                  <h3 className="text-sm text-text-tertiary mb-4">Coordinators</h3>
                  <div className="space-y-4">
                    {event.coordinators.map((coordinator) => (
                      <div key={coordinator.name}>
                        <p className="text-text-primary font-medium">{coordinator.name}</p>
                        <a
                          href={`tel:${coordinator.phone.replace(/\s/g, '')}`}
                          className="inline-flex items-center gap-1.5 text-text-tertiary text-sm 
                            hover:text-text-primary transition-colors"
                        >
                          <Phone size={12} />
                          {coordinator.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
