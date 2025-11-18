"use client";

import Image from "next/image";

export default function Events() {
  const events = [
    {
      date: "MAR 15",
      year: "2024",
      time: "7:00 PM",
      title: "CHAMPIONSHIP FINALS",
      location: "Arena Alpha, Las Vegas",
      status: "UPCOMING",
    },
    {
      date: "APR 22",
      year: "2024",
      time: "6:00 PM",
      title: "HEAVYWEIGHT TOURNAMENT",
      location: "Combat Dome, Los Angeles",
      status: "UPCOMING",
    },
    {
      date: "MAY 10",
      year: "2024",
      time: "8:00 PM",
      title: "LIGHTWEIGHT SHOWDOWN",
      location: "Tech Arena, San Francisco",
      status: "UPCOMING",
    },
  ];

  return (
    <section
      id="events"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background overlay */}
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-black/40"></div>

      {/* Animated grid pattern */}
      <div className="absolute top-0 left-0 z-0 w-full h-full events-grid-pattern"></div>

      {/* Title positioned bottom-right */}
      <div className="absolute top-10 left-10 z-10 p-5">
        <h2 className="text-8xl font-extrabold text-right">EVENTS</h2>
      </div>

      {/* Description top-left */}
      <div className="absolute top-60 left-40 z-10 p-5 w-1/4 max-w-sm">
        <p className="text-md tracking-wider">
          WITNESS THE FUTURE OF COMBAT. <br /> <br />
          JOIN US FOR THRILLING BATTLES WHERE THE WORLD'S BEST ROBOTS COMPETE
          FOR DOMINANCE. EACH EVENT IS A SPECTACLE OF ENGINEERING EXCELLENCE AND
          STRATEGIC MASTERY.
        </p>
      </div>

      {/* Events displayed vertically on the right side */}
      <div className="relative z-10 w-full max-w-4xl ml-auto mr-12 px-12 pt-40 pb-40">
        <div className="space-y-24">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-start gap-12 hover:opacity-80 transition-opacity"
            >
              {/* Date section - left */}
              <div className="flex-shrink-0 w-32">
                <div className="text-4xl font-extrabold uppercase tracking-tight mb-1">
                  {event.date}
                </div>
                <div className="text-sm tracking-wider uppercase text-gray-500 mb-2">
                  {event.year}
                </div>
                <div className="text-sm tracking-wider uppercase text-gray-500">
                  {event.time}
                </div>
              </div>

              {/* Event details - center */}
              <div className="flex-1">
                <h3 className="text-5xl font-extrabold uppercase tracking-tight mb-4">
                  {event.title}
                </h3>
                <p className="text-sm tracking-wider uppercase text-gray-400 mb-6">
                  {event.location}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-wider uppercase text-gray-500">
                    {event.status}
                  </span>
                  <span className="text-gray-600">•</span>
                  <a
                    href="#tickets"
                    className="text-sm tracking-wider uppercase hover:underline"
                  >
                    BUY TICKETS
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 right-0 z-1 p-5">
        <Image
          src="/events.png"
          alt="Events"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
