"use client";

import Image from "next/image";

export default function Teams() {
  const teams = [
    {
      name: "THUNDER STRIKE",
      division: "Heavyweight",
      wins: 24,
      losses: 3,
      image: "/team1.avif",
    },
    {
      name: "BLADE RUNNER",
      division: "Lightweight",
      wins: 31,
      losses: 2,
      image: "/team2.avif",
    },
    {
      name: "IRON FORGE",
      division: "Middleweight",
      wins: 18,
      losses: 5,
      image: "/team3.avif",
    },
    {
      name: "NIGHTMARE",
      division: "Heavyweight",
      wins: 27,
      losses: 4,
      image: "/team4.avif",
    },
    {
      name: "VENOM",
      division: "Lightweight",
      wins: 29,
      losses: 1,
      image: "/team5.avif",
    },
    {
      name: "TITAN",
      division: "Middleweight",
      wins: 22,
      losses: 6,
      image: "/team6.avif",
    },
  ];

  return (
    <section
      id="teams"
      className="relative min-h-screen flex flex-col items-center overflow-hidden bg-black"
    >
      {/* Background overlay */}
      <div className="absolute top-0 left-0 z-0 w-full h-full bg-black/40"></div>

      {/* Top - Title */}
      <div className="z-10 p-4 md:p-5 flex flex-col md:flex-row items-start justify-between w-full min-h-[200px] md:h-[300px]">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-left mb-4 md:mb-0">
          TEAMS
        </h2>
        <div className="hidden md:block z-10 p-5 w-1/4">
          <p className="text-md tracking-wider text-right mt-10">
            ELITE FIGHTERS. LEGENDARY BATTLES. <br /> <br />
            MEET THE COMPETITORS WHO PUSH THE BOUNDARIES OF ROBOT COMBAT. EACH
            TEAM BRINGS UNIQUE STRATEGIES, INNOVATIVE DESIGNS, AND UNRELENTING
            DETERMINATION TO THE ARENA.
          </p>
        </div>
        {/* Mobile description */}
        <div className="md:hidden w-full mt-4">
          <p className="text-sm tracking-wider">
            ELITE FIGHTERS. LEGENDARY BATTLES. MEET THE COMPETITORS WHO PUSH
            THE BOUNDARIES OF ROBOT COMBAT.
          </p>
        </div>
      </div>

      {/* Teams grid */}
      <div className="relative w-full z-10 hidden md:grid grid-cols-3 gap-12 px-12 my-20">
        {teams.map((team, index) => (
          <div key={index} className="robot-card-3d">
            <div className="robot-card-container">
              <div className="robot-card-shell">
                <div className="robot-card-content">
                  <div className="robot-image-container">
                    <Image
                      src={team.image}
                      alt={team.name}
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
                {team.name}
              </p>
              <div className="flex items-start justify-between">
                <p className="text-sm tracking-wider uppercase text-gray-500">
                  {team.division}
                </p>
                <div className="flex gap-4">
                  <div>
                    <p className="text-xs tracking-wider uppercase text-gray-500 mb-1">
                      WINS
                    </p>
                    <p className="text-lg font-semibold uppercase">
                      {team.wins}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-wider uppercase text-gray-500 mb-1">
                      LOSSES
                    </p>
                    <p className="text-lg font-semibold uppercase">
                      {team.losses}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile layout - stacked cards */}
      <div className="relative w-full z-10 md:hidden flex flex-col items-center justify-center gap-12 py-20 px-6">
        {teams.map((team, index) => (
          <div key={index} className="robot-card-3d">
            <div className="robot-card-container">
              <div className="robot-card-shell">
                <div className="robot-card-content">
                  <div className="robot-image-container">
                    <Image
                      src={team.image}
                      alt={team.name}
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
                {team.name}
              </p>
              <div className="flex items-start justify-between">
                <p className="text-sm tracking-wider uppercase text-gray-500">
                  {team.division}
                </p>
                <div className="flex gap-4">
                  <div>
                    <p className="text-xs tracking-wider uppercase text-gray-500 mb-1">
                      WINS
                    </p>
                    <p className="text-lg font-semibold uppercase">
                      {team.wins}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-wider uppercase text-gray-500 mb-1">
                      LOSSES
                    </p>
                    <p className="text-lg font-semibold uppercase">
                      {team.losses}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
