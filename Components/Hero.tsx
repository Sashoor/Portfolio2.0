'use client'

import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: ["Hi, The Name's Saeed Ashoor", "Guy-Who-Loves-Coffee","<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 200,
    
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
    <BackgroundCircles />
   <img 
   className='relative rounded-full h-32 w-32 mx-auto object-cover'
   src="https://rb.gy/23p0i" alt="" />

   <div className='z-20'>
    <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
      <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
      <span className='mr-3'>{text}</span>
      <Cursor cursorColor="#F7AB0A"/>
      </h1>

      <div className='pt-5'>
        <Link href="#about">
        <button className='heroButton'>About</button>
        </Link>
        <Link href="#experince">
        <button className='heroButton'>Experince</button>
        </Link>
        <Link href="#skills">
        <button className='heroButton'>Skills</button>
        </Link>
        <Link href="#projects">
        <button className='heroButton'>Projects</button>
        </Link>
      </div>
   </div>
    </div>
  )
}