// ient-to-b from-black via-gray-900 to-black overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-50" />
//       </div>

//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-[128px]" />
//         <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px]" />
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
//             Get In Touch
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Have questions? We're here to help you prepare for the ultimate competition
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           <motion.div
//             className="space-y-6"
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             {contactInfo.map((info, index) => (
//               <motion.a
//                 key={info.title}
//                 href={info.link}
//                 className="block relative group"
//                 initial={{ x: -30, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/5 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
//                 <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all duration-300 flex items-center gap-4">
//                   <motion.div
//                     className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-lg"
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <info.icon className="text-purple-400" size={24} />
//                   </motion.div>
//                   <div>
//                     <p className="text-gray-400 text-sm mb-1">{info.title}</p>
//                     <p className="text-white font-semibold">{info.value}</p>
//                   </div>
//                 </div>
//               </motion.a>
//             ))}

//             <motion.div
//               className="relative"
//               initial={{ y: 30, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/5 rounded-xl blur-lg" />
//               <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-6">
//                 <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
//                 <div className="flex gap-4">
//                   {socialMedia.map((social, index) => (
//                     <motion.a
//                       key={social.name}
//                       href={social.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`p-3 bg-gradient-to-br ${social.color} rounded-lg hover:shadow-2xl transition-all duration-300`}
//                       initial={{ scale: 0, rotate: -180 }}
//                       whileInView={{ scale: 1, rotate: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
//                       whileHover={{ scale: 1.1, rotate: 5 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <social.icon className="text-white" size={20} />
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="relative"
//             initial={{ x: 50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
//             <form
//               onSubmit={handleSubmit}
//               className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300"
//             >
//               <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

//               <div className="space-y-4">
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                 >
//                   <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300"
//                     placeholder="Your name"
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                   <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300"
//                     placeholder="your@email.com"
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                 >
//                   <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300 resize-none"
//                     placeholder="Your message..."
//                   />
//                 </motion.div>

//                 <motion.button
//                   type="submit"
//                   className="w-full py-3 px-6 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   initial={{ y: 20, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.4 }}
//                 >
//                   <span>Send Message</span>
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <Send size={18} />
//                   </motion.div>
//                 </motion.button>
//               </div>
//             </form>
//           </motion.div>
//         </div>

//         <motion.div
//           className="text-center pt-12 border-t border-white/10"
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <p className="text-gray-400">
//             &copy; 2026 EL CLÁSICO Symposium. Where Excellence Meets Competition.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

const contactInfo = [
  {
    title: 'Head Of Department CSE (Cyber Security)',
    name: 'Dr. Udhaya Sankar S M',
    phone: '',
  },
  {
    title: 'Faculty Coordinator - Associate Professor',
    name: 'Dr. Dharini N',
    phone: '',
  },
  {
    title: 'Student Coordinator',
    name: 'Mr. Aswanth Babu',
    phone: '+91 91509 08828',
  },
];

const socialMedia = [
  { icon: Instagram, name: 'Instagram', link: 'https://instagram.com' },
  { icon: Linkedin, name: 'LinkedIn', link: 'https://linkedin.com' },
  { icon: Mail, name: 'Email', link: 'mailto:info@elclasico.com' },
  { icon: Github, name: 'GitHub', link: 'https://github.com' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-50" />
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-[128px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px]" />
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
            Contact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="relative group"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/5 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all duration-300 min-h-[140px]">
                <h3 className="text-white font-bold text-lg mb-2">{info.title}</h3>
                <p className="text-gray-300 mb-1">{info.name}</p>
                {info.phone && (
                  <p className="text-gray-400 text-sm">{info.phone}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
            Our Location
          </h2>
          <p className="text-center text-gray-300 mb-8 text-lg">
            RMK Nagar, Gummidipoondi Taluk, Puduvoyal, Tamil Nadu 601 206
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
            <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:border-white/30 transition-all duration-300 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248565.7858271303!2d80.0152114441965!3d13.235330463061636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527f0ddef76d17%3A0x61ce593720f3684b!2sRMK%20College%20of%20Engineering%20and%20Technology%20(RMKCET)!5e0!3m2!1sen!2sin!4v1768845577338!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
            <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-center text-white mb-6">
                R M K College of Engineering and Technology
              </h3>
              <p className="text-gray-300 text-center mb-8">
                Department of Computer Science and Engineering (Cyber Security)
              </p>
              
              <div className="flex justify-center gap-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="text-gray-300" size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center pt-12 border-t border-white/10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400">
            © 2026 All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}