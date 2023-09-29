'use client'
import React from 'react'
import { motion } from "framer-motion"
import ExperinceCard from './ExperinceCard'

type Props = {}

export default function Workexperince({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
     className='flex relative h-screen overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>

      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experince</h3>
    <div>
      <ExperinceCard />
      <ExperinceCard />
     <ExperinceCard />
      </div>
    </motion.div>
  )
}