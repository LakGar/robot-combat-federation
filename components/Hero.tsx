"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/hero-bg.webp"
        alt="Hero"
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
      {/* overlay */}
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-black/20"></div>

      <div className="absolute top-60 left-0 z-10 p-5 w-1/4">
        <p className="text-md tracking-wider">
          WELCOME TO THE FUTURE OF ROBOT COMBAT. <br /> <br />
          OUR MISSION IS TO PUSH THE LIMITS OF ENGINEERING, CREATIVITY, AND
          COMPETITION. FROM LIGHTWEIGHT SPEED DEMONS TO HEAVYWEIGHT DESTROYERS,
          EVERY ROBOT ENTERS THE ARENA TO PROVE ITS DOMINANCE. EXPERIENCE
          WORLD-CLASS BATTLES WHERE INNOVATION, STRATEGY, AND PURE MECHANICAL
          POWER COLLIDE.
        </p>
      </div>

      <div className="absolute bottom-0 right-0 z-10 p-5 ">
        <h1 className="text-8xl font-extrabold text-right">
          WHERE ENGINEERING <br /> MEETS DOMINATION
        </h1>
      </div>
    </section>
  );
}
