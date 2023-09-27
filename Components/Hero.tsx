'use client'

import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

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

      <h1>
      <span>{text}</span>
      <Cursor cursorColor="#F7AB0A"/>
      </h1>
    </div>
  )
}