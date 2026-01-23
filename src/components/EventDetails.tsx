"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Phone } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";

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
  eventPoster?: string; // Optional dedicated event poster image
  formLink: string;
  time: string;
  team: string;
  rules: string[];
  coordinators: { name: string; phone: string }[];
}

const eventsData: Record<string, EventData> = {
  "hack077-ctf": {
    title: "H4CK_077 CTF",
    tagline: "Capture the flag.",
    description:
      "Real-world cybersecurity challenges on CTFD platform. Compete in Jeopardy-style challenges across multiple categories including Cryptography, Forensics, Reverse Engineering, Steganography, OSINT, Web Exploitation, and Binary Exploitation. Duration: 1 hour 45 minutes. Flag format: hackoff{flag}. Offline mode. Bring your own laptops/devices.",
    poster: "/events/ctf2.jpg",
    eventPoster: "/events/posters/ctf1.jpeg",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfIlTt4FxusBf5JbwzJ30mR_QDPDmGbThEyRK3SRJxdmUCLwA/viewform",
    time: "10:00 AM – 11:45 AM (1h 45min)",
    team: "Up to 3 members",
    rules: [
      "Team size: Maximum of 3 members per team",
      "Duration: 1 hour 45 minutes (approx)",
      "No flag sharing: Any team found sharing flags will be immediately disqualified",
      "Categories: Cryptography, Forensics, Reverse Engineering, Steganography, OSINT, Web Exploitation, Binary Exploitation",
      "Bring your own laptops/devices",
      "Platform: CTFD",
      "Flag format: hackoff{flag}",
      "Style: Jeopardy",
      "Mode: Offline",
    ],
    coordinators: [
      { name: "Gopinath S", phone: "+91 80152 23085" },
      { name: "Kirthi Sai T", phone: "+91 99529 41725" },
    ],
  },
  "code-fc": {
    title: "CODE WAR",
    tagline: "Competitive Coding Challenge - Code. Complie. Compete.",
    description:
      "A competitive coding challenge on HackerRank platform. One round consisting of 5 algorithmic problems. Questions will be provided on the spot. Test your problem-solving speed and coding efficiency. Final results based on HackerRank Leaderboard. Systems will be provided.",
    poster: "/events/codfcbanner.jpeg",
    eventPoster: "/events/posters/codewar.jpeg",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSc8YvkniuUoOdqqGXsf_vV5ulaHbbmDt_oOEMKsXST9YoxbrQ/viewform",
    time: "10:30 AM – 12:30 PM",
    team: "1-2 members",
    rules: [
      "Team Size: 1-2 members",
      "Platform: HackerRank",
      "One round consisting of 5 problems",
      "Questions will be provided on the spot",
      "Programming Languages: Any language allowed",
      "Systems will be provided",
      "Malpractice or use of AI tools is strictly prohibited",
      "Discussion with other teams or participants is strictly prohibited",
      "Violations lead to immediate disqualification",
      "Final results based on HackerRank Leaderboard",
    ],
    coordinators: [
      { name: "Akash VI", phone: "+91 94452 39862" },
      { name: "Haripriyan R", phone: "+91 63819 78926" },
    ],
  },
  vibeathon: {
    title: "Vibe-A-thon",
    tagline: "Build. Ship. Win.",
    description:
      "A high-energy mini hackathon focused on Full Stack Development. Solve real-world problems by designing and developing effective solutions within 2 hours. FREE REGISTRATION.",
    poster: "/events/vibe2.jpg",
    eventPoster: "/events/posters/vibeathon.jpeg",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfk_0sJwny9eLZANa0JRNewMyu-REM36MfUHSMJt6PVeeIMAw/viewform",
    time: "10:00 AM – 12:00 PM",
    team: "1-2 members",
    rules: [
      "Team size: 1-2 members only",
      "Problem statements given on-spot",
      "2 hours to build your solution",
      "Domain: Full Stack Development",
      "GitHub repo will be provided – work only on that repo",
      "Cloning existing projects leads to disqualification",
      "AI tools allowed (Antigravity, Cursor, Copilot, etc.)",
      "Judges' decisions are final",
    ],
    coordinators: [
      { name: "Dilip Kumar V", phone: "+91 73588 51959" },
      { name: "Balaskanthan AK", phone: "+91 91235 87980" },
    ],
  },
  "paper-presentation": {
    title: "Clash of Ideas",
    tagline: "Present your innovative ideas.",
    description:
      "Showcase your research and innovative ideas in Cyber Security, Artificial Intelligence, Edutech, or Open Innovation. Submit both Project Report (PDF) and PPT through the online submission form before the deadline. Single round evaluation based on presentation quality, innovation, and relevance to the selected domain. Mode: Offline. Venue: Mechanical Block, 3rd Floor Seminar Hall.",
    poster: "/events/paper.png",
    eventPoster: "/events/posters/paper.png",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfQP_j_LIzfnzEenC0cnwmd0ldhLnYb4ULT52IgU4j1Q45W_w/viewform",
    time: "10:00 AM – 12:30 PM",
    team: "1-5 members",
    rules: [
      "Team Size: Minmum of 1 to Maximum of 4 members",
      "Domains: Cyber Security, Artificial Intelligence, Edutech, Open Innovation",
      "Submission: Upload both Project Report (PDF) and PPT through the online submission form before deadline",
      "Single Round: Evaluation based on presentation quality, innovation, and relevance to selected domain",
      "Presentation Time: Minimum 10 minutes presentation and 5 minutes Q&A session",
      "Mode: Offline presentation",
      "Venue: Mechanical Block, 3rd Floor Seminar Hall",
      "Original work only - plagiarism leads to disqualification",
    ],
    coordinators: [
      { name: "Ranitha L", phone: "+91 80723 93081" },
      { name: "Vaishali S", phone: "+91 72001 05247" },
    ],
  },
  "de-melodia": {
    title: "De-Melodia",
    tagline:
      "A fun-filled music-based event that tests creativity, rhythm sense, and quick thinking.",
    description:
      "Round 1 features Bioscope and English to Tamil Translation, where participants showcase observation and lyrical skills. Top-performing teams move to Round 2, which includes Dumsharax and Find the Missing Line, focusing on teamwork and timing.",
    poster: "/events/de-melodia1.jpeg",
    eventPoster: "/events/posters/demelodia.jpeg",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeaSTnZVrsQ38NOBGHu-ar2242wduAxJhDAtSB9UQT_371vjw/viewform",
    time: "10:30 AM – 12:00 PM",
    team: "2-3 members",
    rules: [
      "Team Size: 2 to 3 members",
      "Eligibility: Open to all departments",
      "Mode: Offline",
      "Round 1: Bioscope and English to Tamil Translation",
      "Round 2: Dumsharax and Find the Missing Line (Top teams from Round 1)",
      "Evaluation Criteria: Team Coordination, Accuracy, Time Management",
      "Duration: Depends on the number of participants",
      "Use of mobile phones or any external assistance is strictly prohibited",
      "Teams must not communicate with other teams during the event",
      "Winning Criteria: The team scoring the highest total points at the final round will be declared as the winner",
    ],
    coordinators: [
      { name: "Lakshmi S", phone: "+91 93450 61303" },
      { name: "Kaviya M", phone: "+91 88387 40567" },
    ],
  },
  "play-io": {
    title: "Play.io",
    tagline:
      "A time-based event that tests coordination, teamwork, and quick thinking through creative mini-games.",
    description:
      "In Round 1, each team will randomly select one of five challenges and complete the task as quickly as possible, with time recorded from start to finish. The teams with the lowest times will qualify for Round 2, which will be a special teamwork challenge requiring all members to participate together in a new task.",
    poster: "/events/posters/PlayioBanner.jpg",
    eventPoster: "/events/posters/playio.jpeg",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSd0EgUl1LpO_z1g8MMBwKn3NYqGedGaO1MrsaMs7tBCOAImJw/viewform",
    time: "Depends on the number of participating teams",
    team: "2-3 members",
    rules: [
      "Team Size: 2 to 3 members",
      "Round 1: Randomly select one of five challenges and complete the task as quickly as possible",
      "Time will be recorded from start to finish",
      "Teams with the lowest times qualify for Round 2",
      "Round 2: Special teamwork challenge requiring all members to participate together",
      "Duration: Depends on the number of participating teams",
      "Use of mobile phones or any external assistance is strictly prohibited",
      "Teams must not communicate with other teams during the event",
      "Winning Criteria: Final results determined solely based on time evaluation",
      "The team completing the task in the lowest recorded time will be ranked higher",
      "No additional scoring parameters will be considered",
    ],
    coordinators: [
      { name: "Sachin Madhumitha Sree D", phone: "+91 99410 22033" },
      { name: "Hemanth Kumar B", phone: "+91 87782 27280" },
    ],
  },
};

// Default fallback
const defaultEvent: EventData = {
  title: "Event",
  tagline: "Coming soon.",
  description: "Details will be available shortly.",
  poster: "/events/cyber.jpg",
  formLink: "#",
  time: "TBA",
  team: "TBA",
  rules: ["Details coming soon"],
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  return (
    <main className="min-h-screen bg-surface-base">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[750px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={event.poster}
            alt={event.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/60 to-transparent" />
        </div>

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: APPLE_EASE }}
          onClick={() => {
            navigate("/");
            // Wait for navigation then scroll to events section
            setTimeout(() => {
              const eventsSection = document.getElementById("events");
              if (eventsSection) {
                eventsSection.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }}
          className="absolute top-24 left-6 sm:left-12 z-10 inline-flex items-center gap-2 
            px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm
            hover:bg-white/20 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Events
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
                <h2 className="text-xl font-medium text-text-primary mb-4">
                  About
                </h2>
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
                <h2 className="text-xl font-medium text-text-primary mb-4">
                  Rules
                </h2>
                <ul className="space-y-3">
                  {event.rules.map((rule, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <span
                        className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center 
                        text-xs text-text-tertiary flex-shrink-0 mt-0.5"
                      >
                        {index + 1}
                      </span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar - Event Poster only */}
            <div className="space-y-8">
              {/* Event Poster - if available */}
              {event.eventPoster && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: APPLE_EASE }}
                  className="rounded-2xl overflow-hidden border border-white/10"
                >
                  <img
                    src={event.eventPoster}
                    alt={`${event.title} Poster`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              )}
            </div>
          </div>

          {/* Register & Coordinators - Full Width Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {/* Register CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: APPLE_EASE }}
              className="bg-white/[0.03] rounded-2xl p-8 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-medium text-text-primary mb-4">
                  Registration
                </h3>
                <p className="text-text-secondary mb-6">
                  Ready to compete? Register your team now.
                </p>
                <a
                  href={event.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 
                    rounded-full bg-white text-black font-medium text-lg
                    hover:bg-white/90 transition-colors"
                >
                  Register Now
                  <ArrowUpRight size={20} />
                </a>
              </div>
              <p className="text-text-tertiary text-sm mt-4">
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
                className="bg-white/[0.03] rounded-2xl p-8 border border-white/5"
              >
                <h3 className="text-lg font-medium text-text-primary mb-4">
                  Coordinators
                </h3>
                <p className="text-text-secondary mb-6">
                  Have questions? Reach out to our team.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {event.coordinators.map((coordinator) => (
                    <div key={coordinator.name} className="space-y-1">
                      <p className="text-text-primary font-medium text-lg">
                        {coordinator.name}
                      </p>
                      <a
                        href={`tel:${coordinator.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 text-text-secondary 
                          hover:text-text-primary transition-colors"
                      >
                        <Phone size={16} />
                        {coordinator.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
