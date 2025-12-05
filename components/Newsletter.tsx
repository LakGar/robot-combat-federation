"use client";

import { useState } from "react";
import Image from "next/image";
export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background overlay */}
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-black/40"></div>

      {/* Title */}
      <div className="absolute top-10 left-0 z-10 p-4 md:p-5">
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-left tracking-wider">
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

      {/* Form - centered */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-4 md:px-12 py-20 md:py-40">
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3"
            >
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-3 focus:outline-none focus:border-white transition-colors placeholder-gray-600 text-sm md:text-base"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="flex items-center text-center ">
              <input
                type="checkbox"
                required
                className="w-5 h-5 bg-transparent border border-gray-700 text-white focus:ring-0 focus:ring-offset-0 mt-1 flex-shrink-0"
              />
              <span className="ml-3 text-xs md:text-sm text-gray-400">
                I agree to receive updates and promotional emails from RCF
              </span>
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-8 md:px-12 py-3 md:py-4 border border-white text-white uppercase tracking-wider text-xs md:text-sm font-semibold hover:bg-white hover:text-black transition-all"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>

        {/* Additional info */}
        <div className="mt-8 md:mt-12 text-center text-gray-500">
          <p className="text-xs uppercase tracking-wider">
            Join 10,000+ subscribers
          </p>
        </div>
      </div>

      {/* Image - hidden on mobile, visible on desktop */}
      <div className=" absolute bottom-10 left-0 z-1 p-5">
        <Image
          src="/newsletter.webp"
          alt="Newsletter"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
