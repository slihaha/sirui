'use client';
import React from 'react';
import Image from 'next/image';
import { Spotlight } from '../../components/ui/Sportlight';
import { EvervaultCard, Icon } from "../../components/ui/evervault-card-osu.js";
import { EvervaultCardGA } from "../../components/ui/evervault-card-gatech.js";
import OSULOGO from "./Ohio_state_logo.png";
import GATECH from "./Georgia_Tech_logo.png";

const osuSkills = [
  "Data Visualization",
  "Quality Control",
  "Lean Management",
  "Matlab",
  "Data Analysis",
  "Materials Science"
];

const gaSkills = [
  "Artificial Intelligence",
  "Computer Vision",
  "Computer System",
  "SW Development",
  "SDLC",
  "SW Architecture"
];

const EducationPage = () => {
  return (
    <div className="min-h-screen w-full bg-black-100 bg-grid-white/[0.03] relative flex flex-col items-center justify-start overflow-hidden text-white">
      {/* Spotlight Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Radial gradient mask for background grid */}
      <div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full pt-32 sm:pt-40 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-center text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
            Education Background
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            My academic foundation in Computer Science and Materials Science & Engineering.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch justify-items-center max-w-5xl mx-auto">
          {/* Georgia Tech Card */}
          <div className="group relative border border-white/10 dark:border-white/20 bg-black/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col items-start w-full transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            {/* Top Accent Line */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent group-hover:via-purple-500/80 transition-all duration-500" />

            {/* Interactive Evervault Header */}
            <div className="h-64 sm:h-72 w-full relative mb-6 rounded-2xl overflow-hidden">
              <EvervaultCardGA text={<Image src={GATECH} alt="Georgia Tech Logo" className="w-24 h-24 object-contain" />} />
            </div>

            {/* Info Body */}
            <div className="w-full flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Georgia Institute of Technology
                </h2>
                <h3 className="text-sm sm:text-base font-semibold text-purple-400 mt-1">
                  Master of Science in Computer Science
                </h3>
              </div>

              {/* Skills */}
              <div className="mt-6 pt-4 border-t border-white/10 w-full">
                <p className="text-xs font-semibold text-neutral-400 mb-3 uppercase tracking-wider">
                  Key Focus & Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {gaSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:border-purple-500/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ohio State Card */}
          <div className="group relative border border-white/10 dark:border-white/20 bg-black/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col items-start w-full transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            {/* Top Accent Line */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent group-hover:via-purple-500/80 transition-all duration-500" />

            {/* Interactive Evervault Header */}
            <div className="h-64 sm:h-72 w-full relative mb-6 rounded-2xl overflow-hidden">
              <EvervaultCard text={<Image src={OSULOGO} alt="OSU Logo" className="w-24 h-24 object-contain" />} />
            </div>

            {/* Info Body */}
            <div className="w-full flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  The Ohio State University
                </h2>
                <h3 className="text-sm sm:text-base font-semibold text-purple-400 mt-1">
                  Bachelor of Science in Materials Science and Engineering
                </h3>
              </div>

              {/* Skills */}
              <div className="mt-6 pt-4 border-t border-white/10 w-full">
                <p className="text-xs font-semibold text-neutral-400 mb-3 uppercase tracking-wider">
                  Key Focus & Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {osuSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:border-purple-500/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;