// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const EventDetails = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   return (
//     <section className="min-h-screen bg-black text-white px-6 py-20">
//       <motion.div
//         className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         {/* Poster */}
//         <div className="bg-white/10 rounded-xl h-[420px] flex items-center justify-center">
//           <span className="text-gray-400 text-xl">
//             Poster for {slug}
//           </span>
//         </div>

//         {/* Content */}
//         <div>
//           <h1 className="text-4xl font-bold mb-4 uppercase">
//             {slug?.replace("-", " ")}
//           </h1>

//           <p className="text-gray-300 mb-6">
//             Full description of the event goes here.
//           </p>

//           <h3 className="font-semibold mb-2">Student Coordinators</h3>
//           <ul className="text-gray-400 mb-6">
//             <li>Arjun – 9876543210</li>
//             <li>Ravi – 9876543211</li>
//           </ul>

//           <button
//             onClick={() => navigate("/")}
//             className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
//           >
//             Back to Home
//           </button>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default EventDetails;

import { useParams, useNavigate } from "react-router-dom";

export default function EventDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 uppercase">
          {slug?.replace("-", " ")}
        </h1>

        <p className="text-gray-400 mb-8">
          Detailed rules, poster, coordinators, and event format will be shown
          here.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
}
