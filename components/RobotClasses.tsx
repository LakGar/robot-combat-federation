"use client";

import Image from "next/image";

export default function RobotClasses() {
  const classes = [
    {
      name: "LIGHTWEIGHT DIVISION",
      weight: "Up to 12 lbs",
      status: "OPEN",
      statusColor: "text-white",
      image: "/lightweight.avif",
    },
    {
      name: "MIDDLEWEIGHT DIVISION",
      weight: "12-60 lbs",
      status: "LIMITED",
      statusColor: "text-white",
      image: "/middle.avif",
    },
    {
      name: "HEAVYWEIGHT DIVISION",
      weight: "60-250 lbs",
      status: "OPEN",
      statusColor: "text-white",
      image: "/heavy.avif",
    },
  ];

  return (
    <section
      id="classes"
      className="relative min-h-screen flex flex-col items-center  overflow-hidden bg-black"
    >
      {/* Background overlay */}
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-black/40"></div>

      {/* Top  - Title */}
      <div className="z-10 p-5 flex items-start justify-between w-full h-[300px]">
        <h2 className="text-8xl font-extrabold text-left">ROBOT CLASSES</h2>
        <div className=" z-10 p-5 w-1/4">
          <p className="text-md tracking-wider text-right mt-10">
            WELCOME TO THE FUTURE OF ROBOT COMBAT. <br /> <br />
            OUR MISSION IS TO PUSH THE LIMITS OF ENGINEERING, CREATIVITY, AND
            COMPETITION. FROM LIGHTWEIGHT SPEED DEMONS TO HEAVYWEIGHT
            DESTROYERS, EVERY ROBOT ENTERS THE ARENA TO PROVE ITS DOMINANCE.
            EXPERIENCE WORLD-CLASS BATTLES WHERE INNOVATION, STRATEGY, AND PURE
            MECHANICAL POWER COLLIDE.
          </p>
        </div>
      </div>

      {/* Three robot cards positioned horizontally */}
      <div className="relative w-full z-10 hidden md:flex items-center justify-center gap-12 px-12 my-60">
        {classes.map((robotClass, index) => (
          <div key={index} className="robot-card-3d">
            <div className="robot-card-container">
              <div className="robot-card-shell">
                <div className="robot-card-content">
                  <div className="robot-image-container">
                    <Image
                      src={robotClass.image}
                      alt={robotClass.name}
                      width={400}
                      height={400}
                      className="robot-image-actual"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Text below card on dark background */}
            <div className="robot-card-text mt-6">
              <p className="text-sm tracking-wider uppercase text-gray-400 mb-2 text-left">
                {robotClass.name}
              </p>
              <div className="flex items-start justify-between">
                <p className="text-lg font-semibold uppercase  mb-2">
                  {robotClass.weight}
                </p>
                <p
                  className={`text-lg font-semibold uppercase tracking-wider ${robotClass.statusColor}`}
                >
                  {robotClass.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile layout - stacked cards */}
      <div className="relative w-full z-10 md:hidden flex flex-col items-center justify-center gap-12 py-20 px-6">
        {classes.map((robotClass, index) => (
          <div key={index} className="robot-card-3d">
            <div className="robot-card-container">
              <div className="robot-card-shell">
                <div className="robot-card-content">
                  <div className="robot-image-container">
                    <Image
                      src={robotClass.image}
                      alt={robotClass.name}
                      width={400}
                      height={400}
                      className="robot-image-actual"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Text below card on dark background */}
            <div className="robot-card-text mt-6">
              <p className="text-sm tracking-wider uppercase text-gray-400 mb-2">
                {robotClass.name}
              </p>
              <p className="text-2xl font-extrabold uppercase tracking-wider mb-2">
                {robotClass.weight}
              </p>
              <p
                className={`text-lg font-extrabold uppercase tracking-wider ${robotClass.statusColor}`}
              >
                {robotClass.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
