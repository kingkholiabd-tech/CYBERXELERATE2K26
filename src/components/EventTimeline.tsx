import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function EventTimeline() {
  const data = [
    {
      title: "8:30 AM",
      content: (
        <div>
          <p className="text-sm text-neutral-300">
            <span className="font-semibold text-white">Boarding</span>
            <br />
            Registration and welcome refreshments
          </p>
        </div>
      ),
    },
    {
      title: "9:00 AM - 10:00 AM",
      content: (
        <div>
          <p className="text-sm text-neutral-300">
            <span className="font-semibold text-white">Pre-event Ceremony</span>
            <br />
            Opening address and event briefing
          </p>
        </div>
      ),
    },
    {
      title: "10:00 AM - 1:00 PM",
      content: (
        <div>
          <p className="text-sm text-neutral-300">
            <span className="font-semibold text-white">Main Events</span>
            <br />
            Competition rounds across all categories
          </p>
        </div>
      ),
    },
    {
      title: "1:00 PM - 2:00 PM",
      content: (
        <div>
          <p className="text-sm text-neutral-300">
            <span className="font-semibold text-white">Lunch Break</span>
            <br />
            Networking and refreshments
          </p>
        </div>
      ),
    },
    {
      title: "2:00 PM - 3:00 PM",
      content: (
        <div>
          <p className="text-sm text-neutral-300">
            <span className="font-semibold text-white">
              Winners Announcement & Post Event
            </span>
            <br />
            Award ceremony and closing remarks
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="relative w-full bg-black py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
          Event Timeline
        </h2>
        <p className="text-center text-gray-400 mb-12">
          A day of excellence, competition, and celebration
        </p>

        <Timeline data={data} />
      </div>
    </section>
  );
}
