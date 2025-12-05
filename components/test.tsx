"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-screen bg-black/[0.96] relative overflow-hidden border-none">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

      <div className="flex h-full">
        {/* Left content */}
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-black/40"></div>

        {/* Title */}
        <div className="absolute top-10 left-0 z-10 p-4 md:p-5">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-left tracking-wider text-white">
            NEWSLETTER
          </h2>
        </div>

        {/* Description top-right - hidden on mobile */}
        <div className="hidden md:block absolute top-60 right-0 z-10 p-5 w-1/4 max-w-sm">
          <p className="sm:text-sm md:text-md tracking-wider text-right">
            STAY CONNECTED. <br /> <br />
            GET EXCLUSIVE ACCESS TO EVENT ANNOUNCEMENTS, FIGHTER PROFILES, AND
            BEHIND-THE-SCENES CONTENT FROM THE ROBOT COMBAT FEDERATION.
          </p>
        </div>

        {/* Mobile description */}
        <div className="md:hidden absolute top-32 left-0 z-10 p-4 w-full max-w-sm">
          <p className="text-sm tracking-wider">
            STAY CONNECTED. GET EXCLUSIVE ACCESS TO EVENT ANNOUNCEMENTS, FIGHTER
            PROFILES, AND BEHIND-THE-SCENES CONTENT.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
