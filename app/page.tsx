import About from '@/Components/About'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import Workexperince from '@/Components/Workexperince'
import Image from 'next/image'

export default function Home() {
  return (
<div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>

<Header />
{/* Hero */}
<section id='hero' className='snap-start'>
<Hero />
</section>
{/* About */}
<section id='about' className='snap-center'>
<About />
</section>
<section id='Workexperince' className='snap-center'>
<Workexperince />
</section>
{/* Skills */}
{/* Projects */}
{/* Contact Me */}
</div>
  )
}
