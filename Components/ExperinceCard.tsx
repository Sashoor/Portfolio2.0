import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function ExperinceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 hover:cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img 
      initial={{y: 100, opacity: 0}}
      transition={{duration: 1.2}}
      whileInView={{opacity:1, y:0}}
      viewport={{once: true}}
      className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center '
      src="https://shorturl.at/fikMP" alt="" />

    <div className='px-0 md:px-10'>
      <h4 className='text-4xl font-light'>Cloud Engineer</h4>
      <p className='font-bold text-2xl mt-1'>Peoples Partnership</p>
      <div className='flex space-x-2 my-2'>
      <img className='h-10 w-10 rounded-full' 
        src="https://shorturl.at/hiGW5" alt="" /> <img className='h-10 w-10 rounded-full' 
        src="https://shorturl.at/hiGW5" alt="" /> <img className='h-10 w-10 rounded-full' 
        src="https://shorturl.at/hiGW5" alt="" />
      </div>

      <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

      <ul className='list-disc spac-y-4 ml-5 text-lg'>
        <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
        <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
        <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
        <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
        <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
        
      
      </ul>


    </div>


    </article>
  )
}