import { useParams, useNavigate } from "react-router-dom";

const eventsData = {
    "code-combat": {
        poster: "/events/binary.jpg",
        formLink: "https://forms.gle/xxxxx1",
        rules: [
            "Each team can have a maximum of 2 members; solo participation is allowed.",
            "Use of AI tools, online code repositories, or pre-written code is strictly prohibited.",
            "Participants must solve problems within the given time limit; late submissions will not be accepted.",
            "Any form of plagiarism or code similarity will result in immediate disqualification.",
            "Judges’ decisions regarding test cases and scoring will be final and binding."
        ],
        coordinators: [
            { name: "Akash VI", phone: "94452 39862" },
            { name: "Hari Priyan R", phone: "63819 78926" },
             { name: "Muthumeena ", phone: "9876543211" }
        ]
    },

    "ctf": {
        poster: "/events/ctf.jpg",
        formLink: "https://forms.gle/xxxxx2",
        rules: [
            "Teams can have a maximum of 3 members.",
            "Attacking infrastructure outside the competition scope is strictly forbidden.",
            "Sharing flags, solutions, or hints between teams will lead to disqualification.",
            "Brute-force attacks and DoS attempts are not allowed.",
            "All participants must follow ethical hacking guidelines throughout the event."
        ],
        coordinators: [
            { name: "Gopinath S", phone: "80152 23085" },
            { name: "Kirthi Sai T", phone: "99529 41725" },
            { name: "Vishnu TS", phone: "88258 66507" }
        ]
    },

    "vibe-code": {
        poster: "/events/vibe.jpg",
        formLink: "https://forms.gle/xxxxx3",
        rules: [
            "Teams may consist of 2–3 participants only.",
            "Designs must be created during the event duration; prior work is not permitted.",
            "Internet access is allowed only for fonts, icons, and stock images.",
            "Final submission must include both design files and a short explanation.",
            "Plagiarized or template-based designs will be rejected."
        ],
        coordinators: [
            { name: "Balaskanthan AK", phone: "91235 87980" },
            { name: "Darshini", phone: "9876543215" },
            { name: "Dilip Kumar V", phone: "73588 51959" }
        ]
    },

    "data-derby": {
        poster: "/events/data.jpg",
        formLink: "https://forms.gle/xxxxx4",
        rules: [
            "This is an individual participation event.",
            "Participants must use only the dataset provided by the organizers.",
            "External APIs or additional datasets are not allowed.",
            "Evaluation will be based on accuracy, insights, and explanation clarity.",
            "Any fabricated or manipulated results will lead to disqualification."
        ],
        coordinators: [
            { name: "Mohan", phone: "9876543213" },
            { name: "Rakesh", phone: "9876543214" }
        ]
    },

    "cyber-clash": {
        poster: "/events/cyber.jpg",
        formLink: "https://forms.gle/xxxxx5",
        rules: [
            "Participants must compete individually; no team participation allowed.",
            "Only tools permitted by the organizers may be used during the event.",
            "Exploiting vulnerabilities outside the given environment is prohibited.",
            "Any attempt to disrupt other participants’ systems will result in a ban.",
            "Failure to follow event ethics will lead to immediate removal."
        ],
        coordinators: [
            { name: "Vikram", phone: "9876543218" },
            { name: "Neha", phone: "9876543219" }
        ]
    }
};



export default function EventDetails() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const event = eventsData[slug] || eventsData["coding-contest"];

    return (
        <section className="min-h-screen bg-black text-white px-6 pt-[120px] md:pt-[140px] lg:pt-[160px] pb-24">

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
                <div className="mt-10 flex justify-center">
                    <a
                        href={event.formLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 rounded-full font-semibold
               bg-gradient-to-r from-green-500 to-emerald-600
               hover:scale-105 transition-transform"
                    >
                        Register Now
                    </a>
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
