"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`top-0 absolute z-10 transition-all duration-300 w-full ${
        scrolled ? " backdrop-blur-sm " : "bg-transparent"
      }`}
    >
      <div className=" p-6 lg:p-12">
        <div className="flex items-top justify-between  w-full">
          {/* Logo */}
          <a href="/" className="logo-slide-down">
            <Image src="/logo.png" alt="RCF Logo" width={100} height={100} />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-col items-right gap-8 text-right ">
            <a href="#about" className="nav-item-fade-in text-2xl space-x-2">
              A B O U T
            </a>
            <a href="#classes" className="nav-item-fade-in text-2xl space-x-2">
              P R O D U C T S
            </a>
            <a href="#teams" className="nav-item-fade-in text-2xl space-x-2">
              T E C H N O L O G Y
            </a>
            <a href="#events" className="nav-item-fade-in text-2xl space-x-2">
              E V E N T S
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden w-10 h-10 flex flex-col justify-center gap-1.5">
            <span className="w-6 h-0.5 bg-rcf-neon-blue"></span>
            <span className="w-6 h-0.5 bg-rcf-neon-blue"></span>
            <span className="w-6 h-0.5 bg-rcf-neon-blue"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
