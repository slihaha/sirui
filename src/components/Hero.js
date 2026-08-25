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

      <div className="h-screen w-full bg-black-100 bg-grid-white/[0.03]  relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>


        <div className='relative z-20 felx flex-col items-center justify-center '>
          <p className="text-center text-6xl sm:text-8xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Hi I&apos;m <span className='whitespace-nowrap '>Dianze Liu</span>
          </p>
          <p className="text-center text-xl sm:text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Applied Machine Learning Engineer
          </p>

          <TextGenerateEffect className='text-center text-[5px] md:text-[15px] ' filter={false} words='CS Scientist & Engineer & Entrepreneur | Passionate about AI | MSCS, GATech | OSU Engineering Grad | IBM Certified in Machine Learning & Data Science | Seeking to leverage technical & business expertise to drive impactful solutions.' />


          <div className='flex justify-center items-center mt-10'>
            <a
              href="https://www.linkedin.com/in/dianze-liu-bb7242116/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton text='Contact Me' icon={<NearMeIcon />} position='right' />
            </a>
          </div>



        </div>


      </div>



    </div>
  )
}

export default Hero