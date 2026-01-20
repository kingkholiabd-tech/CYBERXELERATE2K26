// // import { useParams, useNavigate } from "react-router-dom";
// // import { motion } from "framer-motion";

// // const EventDetails = () => {
// //   const { slug } = useParams();
// //   const navigate = useNavigate();

// //   return (
// //     <section className="min-h-screen bg-black text-white px-6 py-20">
// //       <motion.div
// //         className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10"
// //         initial={{ opacity: 0, y: 40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //       >
// //         {/* Poster */}
//         // <div className="bg-white/10 rounded-xl h-[420px] flex items-center justify-center">
//         //   <span className="text-gray-400 text-xl">
//         //     Poster for {slug}
//         //   </span>
//         // </div>

// //         {/* Content */}
// //         <div>
// //           <h1 className="text-4xl font-bold mb-4 uppercase">
// //             {slug?.replace("-", " ")}
// //           </h1>

// //           <p className="text-gray-300 mb-6">
// //             Full description of the event goes here.
// //           </p>

//         //   <h3 className="font-semibold mb-2">Student Coordinators</h3>
//         //   <ul className="text-gray-400 mb-6">
//         //     <li>Arjun – 9876543210</li>
//         //     <li>Ravi – 9876543211</li>
//         //   </ul>

// //           <button
// //             onClick={() => navigate("/")}
// //             className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
// //           >
// //             Back to Home
// //           </button>
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default EventDetails;

// import { useParams, useNavigate } from "react-router-dom";

// export default function EventDetails() {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   return (
//     <section className="min-h-screen bg-black text-white px-6 py-20">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold mb-6 uppercase">
//           {slug?.replace("-", " ")}
//         </h1>
//         <div className="bg-white/10 rounded-xl h-[420px] flex items-center justify-center">
//           <span className="text-gray-400 text-xl">
//             Poster for {slug}
//           </span>
//         </div>

//         <p className="text-gray-400 mb-8">
//           Detailed rules, poster, coordinators, and event format will be shown
//           here.
//         </p>
//         <h3 className="font-semibold mb-2">Student Coordinators</h3>
//           <ul className="text-gray-400 mb-6">
//             <li>Arjun – 9876543210</li>
//             <li>Ravi – 9876543211</li>
//           </ul>

//         <button
//           onClick={() => navigate("/")}
//           className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
//         >
//           Back to Home
//         </button>
//       </div>
//     </section>
//   );
// }

import { useParams, useNavigate } from "react-router-dom";

const eventsData = {
  "coding-contest": {
    poster: "Poster for Coding Contest",
    rules: [
      "Rule 1: No plagiarism.",
      "Rule 2: Time limit 2 hours.",
      "Rule 3: Team of 2 only."
    ],
    coordinators: [
      { name: "Arjun", phone: "9876543210" },
      { name: "Ravi", phone: "9876543211" },
      { name: "Suresh", phone: "9876543212" }
    ]
  },
  "dance-competition": {
    poster: "Poster for Dance Competition",
    rules: [
      "Rule 1: Maximum 5 members.",
      "Rule 2: No vulgar content.",
      "Rule 3: Time limit 4 minutes."
    ],
    coordinators: [
      { name: "Mohan", phone: "9876543213" },
      { name: "Rakesh", phone: "9876543214" },
      { name: "Sana", phone: "9876543215" }
    ]
  }
};

export default function EventDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const event = eventsData[slug] || eventsData["coding-contest"];

  return (
    <section className="min-h-screen bg-black text-white px-6 pt-[80px]">
  <div className="max-w-6xl mx-auto">

    <h1 className="text-4xl font-bold mb-6 uppercase">
      {slug?.replace("-", " ")}
    </h1>

    {/* Poster + Rules */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Poster */}
      <div className="bg-white/10 rounded-xl h-[420px] flex items-center justify-center">
        <span className="text-gray-400 text-xl">
          {event.poster}
        </span>
      </div>

      {/* Rules */}
      <div className="bg-white/10 rounded-xl p-6 h-[420px]">
        <h3 className="font-semibold mb-4 text-xl">Rules</h3>
        <ul className="text-gray-400 list-disc list-inside">
          {event.rules.map((rule, index) => (
            <li key={index} className="mb-2">
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Coordinators */}
    <div className="mt-10 flex justify-center">
      <div className="bg-white/10 rounded-xl p-6 w-full md:w-2/3">
        <h3 className="font-semibold mb-4 text-center text-xl">
          Student Coordinators
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {event.coordinators.map((co, idx) => (
            <div
              key={idx}
              className="bg-black/40 rounded-xl p-4 text-center"
            >
              <h4 className="font-semibold">{co.name}</h4>
              <p className="text-gray-400">{co.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Back Button */}
    <div className="mt-8 flex justify-center">
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
      >
        Back to Home
      </button>
    </div>

  </div>
</section>

  );
}
