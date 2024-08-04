import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/karthik_profile.png";
import {motion} from "framer-motion";
const container=(delay) => ({
    hidden: {x:-100, opacity:0},
    visible:{
        x:0,
        opacity: 1,
        transition:{duration:0.5, delay: delay}
    }
})
const Hero = () => {
  return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
          <div className="flex flex-w+rap">
              <div className="w-full lg:w-1/2">
                  <div className="flex flex-col items-center lg:items-start">
                      <motion.h1 variants={container(0)}
                      initial="hidden"
                      animate="visible"
                      opacity="0"
                      className="pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-8xl">KARTHIK</motion.h1>
                      <motion.span variants={container(0.5)}
                      initial="hidden"
                      opacity="0"
                      animate="visible"className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-light text-transparent">Full Stack Developer</motion.span>
                      <motion.p
                      variants={container(1)}
                      initial="hidden"
                      opacity="0"
                      animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                  </div>
              </div>
              <div className="w lg:w-1/2 lg:p-8">
              <div className="flex justify-center item-center" style={{height:'500px', width:'400px'}}>
               <motion.img 
               initial={{x:100, opacity: 0}}
               animate={{x:0, opacity:1}}
               transition={{duration:1, delay:1.2}}src={profilePic} alt="profilepic"></motion.img>
                </div>
                </div>
          </div>
      </div>
  )
}

export default Hero
