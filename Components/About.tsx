"use client"

import React from 'react'
import { motion } from "framer-motion"



type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
  className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
  <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</  h3>  

    <motion.img 
    transition={{duration: 1.2}}
    initial={{x: -200, opacity: 0}}
    whileInView={{opacity:1, x:0}}
    viewport={{once: true}}
    src="https://rb.gy/23p0i" className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] '
    />

  <div className='space-y-10 px-0 md:px-10'>
    <h4 className='text-4xl font-semibold-semibo'>Here is <span className='underline decoration-orange-400'>a little background</span> </h4>
    <p className='text-lg'>
  I have experience working with Azure Cloud Platform. I am skilled in managing and
deploying cloud infrastructure, as well as developing cloud-based applications. I am
also experienced in DevOps and automation. I am a team player and have excellent
communication skills.
    </p>
  </div>


      </motion.div>
  )
}