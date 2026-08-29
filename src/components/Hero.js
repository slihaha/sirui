import React from 'react'
import { cn } from "../lib/utils";
import { Spotlight } from "./ui/Sportlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./MagicButton";
import NearMeIcon from '@mui/icons-material/NearMe';

const Hero = () => {
  return (
    <div>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw] ' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div className="min-h-screen w-full bg-black-100 bg-grid-white/[0.03] relative flex items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 px-4">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl mx-auto w-full text-center">
          <p className="text-center text-4xl sm:text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 py-3 sm:py-6 tracking-tight leading-tight">
            Hi I&apos;m <span className="whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Sirui Li</span>
          </p>

          <p className="text-center text-lg sm:text-2xl md:text-3xl font-semibold text-neutral-300 py-2 sm:py-4 tracking-normal">
            Product Manager, People Technology & Strategy
          </p>

          <div className="max-w-2xl mx-auto px-2 sm:px-4 my-3 sm:my-5">
            <TextGenerateEffect
              className="text-center text-xs sm:text-sm md:text-base leading-relaxed text-neutral-300"
              filter={false}
              words="Product Manager @ TikTok | People Technology & HR Strategy | Ex-Walmart, Greif | Entrepreneur & Data-Driven Strategist | M.S. in Business Analytics @ William & Mary | OSU Alum | Bridging Technology, Business Strategy & Enterprise HR Systems."
            />
          </div>

          <div className="flex justify-center items-center mt-6 sm:mt-10">
            <a
              href="https://www.linkedin.com/in/siruili1111/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-transform"
            >
              <MagicButton text="Contact Me" icon={<NearMeIcon />} position="right" />
            </a>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Hero