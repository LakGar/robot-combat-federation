"use client";

import { useState } from "react";
import Image from "next/image";

export default function Register() {
  const [formData, setFormData] = useState({
    teamName: "",
    email: "",
    division: "",
    robotName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration
    console.log("Registration:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="register"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background overlay */}
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-black/40"></div>

      {/* Title top-left */}
      <div className="absolute top-10 left-0 z-10 p-4 md:p-5">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-left tracking-wider">
          REGISTER
        </h2>
      </div>

      {/* Description top-right - hidden on mobile */}
      <div className="hidden md:block absolute top-60 right-0 z-10 p-5 w-1/4 max-w-sm">
        <p className="text-md tracking-wider text-right">
          JOIN THE COMPETITION. <br /> <br />
          ENTER THE ARENA. REGISTER YOUR ROBOT AND BECOME PART OF THE PREMIER
          ROBOT COMBAT FEDERATION. COMPETE AGAINST THE WORLD'S BEST.
        </p>
      </div>

      {/* Mobile description */}
      <div className="md:hidden absolute top-32 left-4 z-10 p-4 w-full max-w-sm">
        <p className="text-sm tracking-wider">
          JOIN THE COMPETITION. ENTER THE ARENA. REGISTER YOUR ROBOT AND BECOME
          PART OF THE PREMIER ROBOT COMBAT FEDERATION.
        </p>
      </div>

      {/* Registration form - centered */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 md:px-12 pt-32 md:pt-40 pb-20 md:pb-40">
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label
                htmlFor="teamName"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3"
              >
                TEAM NAME *
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-3 focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                placeholder="Enter team name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3"
              >
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-3 focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label
                htmlFor="division"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3"
              >
                DIVISION *
              </label>
              <select
                id="division"
                name="division"
                value={formData.division}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-3 focus:outline-none focus:border-white transition-colors"
              >
                <option value="" className="bg-black">
                  Select division
                </option>
                <option value="lightweight" className="bg-black">
                  Lightweight (Up to 12 lbs)
                </option>
                <option value="middleweight" className="bg-black">
                  Middleweight (12-60 lbs)
                </option>
                <option value="heavyweight" className="bg-black">
                  Heavyweight (60-250 lbs)
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="robotName"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3"
              >
                ROBOT NAME *
              </label>
              <input
                type="text"
                id="robotName"
                name="robotName"
                value={formData.robotName}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-3 focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                placeholder="Enter robot name"
              />
            </div>
          </div>

          <div className="pt-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                required
                className="w-5 h-5 bg-transparent border border-gray-700 text-white focus:ring-0 focus:ring-offset-0 mt-1"
              />
              <span className="ml-3 text-xs md:text-sm text-gray-400">
                I agree to the competition rules and safety regulations. I
                understand that all robots must pass safety inspections before
                competing.
              </span>
            </label>
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="w-full md:w-auto px-8 md:px-12 py-3 md:py-4 border border-white text-white uppercase tracking-wider text-xs md:text-sm font-semibold hover:bg-white hover:text-black transition-all"
            >
              SUBMIT REGISTRATION
            </button>
          </div>
        </form>

        {/* Additional info */}
        <div className="mt-8 md:mt-12 text-center text-gray-500">
          <p className="text-xs md:text-sm">
            Questions? Contact us at{" "}
            <a href="mailto:register@rcf.com" className="hover:underline">
              register@rcf.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
