'use client';
import React from 'react';
import Image from 'next/image';
import { Spotlight } from '../../components/ui/Sportlight';
import { EvervaultCard, Icon } from "../../components/ui/evervault-card-osu.js";
import { EvervaultCardWM } from "../../components/ui/evervault-card-wm.js";
import OSULOGO from "./Ohio_state_logo.png";
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const wmSkills = [
  "Machine Learning",
  "Database Management",
  "Optimization",
  "Big Data",
  "Artificial Intelligence",
  "Data Visualization",
  "Heuristic Algorithms",
  "Statistics for Management",
  "Predictive Analytics",
  "Python & SQL"
];

const osuSkills = [
  "Business Analytics",
  "HR Information Systems (HRIS)",
  "PeopleSoft HRMS",
  "Data Analysis & Reporting",
  "Process Optimization",
  "Operations Management",
  "Data Visualization",
  "Statistical Analysis",
  "Employee Data Management",
  "Problem Solving"
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
      <div className="relative z-10 w-full pt-24 sm:pt-36 pb-16 sm:pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-center text-3xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2 sm:py-4">
            Education Background
          </h1>
          <p className="text-neutral-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-2 px-2">
            Academic foundations combining advanced Business Analytics, Data Science, and Engineering Problem Solving.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-stretch justify-items-center max-w-5xl mx-auto">
          {/* William & Mary Card */}
          <div className="group relative border border-white/10 dark:border-white/20 bg-black/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col items-start w-full transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
            <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-2.5 -left-2.5 sm:-top-3 sm:-left-3 dark:text-white text-black" />
            <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-2.5 -left-2.5 sm:-bottom-3 sm:-left-3 dark:text-white text-black" />
            <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-2.5 -right-2.5 sm:-top-3 sm:-right-3 dark:text-white text-black" />
            <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-2.5 -right-2.5 sm:-bottom-3 sm:-right-3 dark:text-white text-black" />

            {/* Top Accent Line */}
            <div className="absolute top-0 left-6 right-6 sm:left-8 sm:right-8 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent group-hover:via-emerald-500/80 transition-all duration-500" />

            {/* Interactive Evervault Header */}
            <div className="h-48 sm:h-72 w-full relative mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden">
              <EvervaultCardWM
                text={
                  <div className="flex flex-col items-center justify-center text-center px-2">
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115740] dark:text-[#B9975B] font-serif">W&M</span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-300 font-sans mt-1">Mason School of Business</span>
                  </div>
                }
              />
            </div>

            {/* Info Body */}
            <div className="w-full flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  William & Mary
                </h2>
                <h3 className="text-xs sm:text-base font-semibold text-emerald-400 mt-1">
                  Raymond A. Mason School of Business
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-400 mt-1">
                  Graduate Business Analytics & TA Mentorship
                </p>
              </div>

              {/* Skills */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 w-full">
                <p className="text-[11px] sm:text-xs font-semibold text-neutral-400 mb-2 sm:mb-3 uppercase tracking-wider">
                  Key Focus & Core Courses
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {wmSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-[11px] sm:text-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:border-emerald-500/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ohio State Card */}
          <div className="group relative border border-white/10 dark:border-white/20 bg-black/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col items-start w-full transition-all duration-300 hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]">
            <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-2.5 -left-2.5 sm:-top-3 sm:-left-3 dark:text-white text-black" />
            <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-2.5 -left-2.5 sm:-bottom-3 sm:-left-3 dark:text-white text-black" />
            <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-2.5 -right-2.5 sm:-top-3 sm:-right-3 dark:text-white text-black" />
            <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-2.5 -right-2.5 sm:-bottom-3 sm:-right-3 dark:text-white text-black" />

            {/* Top Accent Line */}
            <div className="absolute top-0 left-6 right-6 sm:left-8 sm:right-8 h-[1px] bg-gradient-to-r from-transparent via-rose-500/30 to-transparent group-hover:via-rose-500/80 transition-all duration-500" />

            {/* Interactive Evervault Header */}
            <div className="h-48 sm:h-72 w-full relative mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden">
              <EvervaultCard text={<Image src={OSULOGO} alt="OSU Logo" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />} />
            </div>

            {/* Info Body */}
            <div className="w-full flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-white group-hover:text-rose-300 transition-colors">
                  The Ohio State University
                </h2>
                <h3 className="text-xs sm:text-base font-semibold text-rose-400 mt-1">
                  Bachelor of Science & HR Systems
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-400 mt-1">
                  Engineering Foundations & PeopleSoft HR Administration
                </p>
              </div>

              {/* Skills */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 w-full">
                <p className="text-[11px] sm:text-xs font-semibold text-neutral-400 mb-2 sm:mb-3 uppercase tracking-wider">
                  Key Focus & Competencies
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {osuSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-[11px] sm:text-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:border-rose-500/40 hover:text-white transition-colors"
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