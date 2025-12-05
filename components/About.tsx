"use client";

import Image from "next/image";
import { SplineScene } from "@/components/ui/splite";
export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background overlay */}
      {/* <div className="absolute top-0 left-0 z-0 w-full h-full bg-black/40"></div> */}
      {/* Image - hidden on mobile */}
      {/* <Image
        src="/about-bg.webp"
        alt="About"
        width={500}
        height={500}
        className="hidden md:block w-1/2 h-1/2 object-cover absolute bottom-0 left-1/2 z-1"
      /> */}

      {/* Left side - Description text - hidden on mobile */}
      <div className="hidden md:block absolute top-[450px] left-12 z-10 p-5 w-1/3">
        <p className="text-md tracking-wider">
          THE ROBOT COMBAT FEDERATION IS THE PREMIER DESTINATION FOR COMPETITIVE
          ROBOT COMBAT. WE BRING TOGETHER THE WORLD'S MOST ADVANCED FIGHTING
          ROBOTS AND THE ENGINEERS WHO BUILD THEM. <br /> <br />
          OUR EVENTS SHOWCASE CUTTING-EDGE ROBOTICS TECHNOLOGY, WHERE PRECISION
          ENGINEERING MEETS RAW COMBAT POWER. FROM LIGHTWEIGHT AGILE FIGHTERS TO
          HEAVYWEIGHT BEHEMOTHS, EVERY MATCH IS A TESTAMENT TO INNOVATION AND
          SKILL. <br /> <br />
          JOIN US AS WE PUSH THE BOUNDARIES OF WHAT'S POSSIBLE IN ROBOTIC COMBAT
          SPORTS.
        </p>
      </div>

      {/* Mobile description */}
      <div className="md:hidden absolute top-42 left-4 z-10 p-4 w-full max-w-sm">
        <p className="text-sm tracking-wider">
          THE ROBOT COMBAT FEDERATION IS THE PREMIER DESTINATION FOR COMPETITIVE
          ROBOT COMBAT. WE BRING TOGETHER THE WORLD'S MOST ADVANCED FIGHTING
          ROBOTS AND THE ENGINEERS WHO BUILD THEM.
        </p>
      </div>

      {/* Right side - Large headline */}
      <div className="absolute top-10 right-0 z-10 p-4 md:p-5">
        <h2 className="text-3xl md:text-5xl lg:text-8xl font-extrabold text-left">
          LEADING ROBOT COMBAT EXPERIENCES FOR YOUR NEEDS
        </h2>
      </div>

      {/* Stats - positioned in center-right - hidden on mobile */}
      <div className="hidden md:block absolute top-1/3 right-20 z-10">
        <div className="space-y-8">
          <div>
            <div className="text-6xl font-extrabold mb-2">500+</div>
            <div className="text-sm tracking-wider uppercase">ROBOTS</div>
          </div>
          <div>
            <div className="text-6xl font-extrabold mb-2">200+</div>
            <div className="text-sm tracking-wider uppercase">TEAMS</div>
          </div>
          <div>
            <div className="text-6xl font-extrabold mb-2">50+</div>
            <div className="text-sm tracking-wider uppercase">EVENTS</div>
          </div>
        </div>
      </div>

      {/* Mobile stats */}
      <div className="md:hidden absolute bottom-20 left-4 z-10">
        <div className="space-y-4">
          <div>
            <div className="text-4xl font-extrabold mb-1">500+</div>
            <div className="text-xs tracking-wider uppercase">ROBOTS</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold mb-1">200+</div>
            <div className="text-xs tracking-wider uppercase">TEAMS</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold mb-1">50+</div>
            <div className="text-xs tracking-wider uppercase">EVENTS</div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
