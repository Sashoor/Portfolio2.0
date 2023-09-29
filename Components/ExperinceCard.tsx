import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function ExperinceCard({}: Props) {
  return (
    <article>
      <motion.img 
      initial={{y: 100, opacity: 0}}
      transition={{duration: 1.2}}
      whileInView={{opacity:1, y:0}}
      viewport={{once: true}}
      className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center '
      src="https://shorturl.at/fikMP" alt="" />

    <div className='px-0 md:px-10'>
      <h4 className='text-4xl font-light'>Cloud Engineer</h4>
      <p className='font-bold text-2xl mt-1'>Peoples</p>
      <div className='flex space-x-2 my-2'>
        {/* Tech used */}
        {/* Tech used */}
        {/* Tech used */}
      </div>
      <p>Started work... - Ended...</p>

      <ul className='list-disc spac-y-4 ml-5 text-lg'>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
        
      
      </ul>


    </div>


    </article>
  )
}