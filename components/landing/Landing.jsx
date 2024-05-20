import React from 'react'
import Image from 'next/image'
import l1 from "@/app/assets/l (1).jpg"
import l2 from "@/app/assets/l (2).jpg"
import l3 from "@/app/assets/l (3).jpg"
import l4 from "@/app/assets/l (4).jpg"
import l5 from "@/app/assets/l (5).jpg"
import l6 from "@/app/assets/l (6).jpg"
import l7 from "@/app/assets/l (7).jpg"
import logo from "@/app/assets/logo.png"
export default function Landing() {
  return (
    <div className='bg-[#fff4df] min-h-screen '>
      <nav className="h-[15vh] flex items-center "><div className='flex ml-10 text-5xl font-bold'><Image src={logo} width={50} height={50}  alt=''/> Astrix.</div></nav>
      <div className='flex h-[60vh]  md:h-[85vh] items-center '>
        <div className='hidden w-full  xl:text-7xl md:text-6xl text-4xl mx-5 sm:flex flex-col gap-2 font-bold md:mx-5 lg:mx-[10%] 2xl:mx-[15%]  xl:gap-5 overflow-x-hidden'>
            <div className='relative flex w-full h-12 gap-2 overflow-hidden md:mb-5 sm:h-14 md:h-16 2xl:h-20'>
                WE <Image src={l1}  alt="l1" className='w-1/2' width={400} /> <span className='absolute pl-2 right-0 animate-slide2 h-12 sm:h-14 md:h-16 2xl:h-20   transform  bg-[#fff4df]'>ORGANIZE THE</span>
            </div>
            <div className='relative flex w-full h-12 gap-2 overflow-hidden md:mb-5 sm:h-14 md:h-16 2xl:h-20'>
                CONNECTION <Image src={l2} className='w-3/5' alt="l2"   width={500} /> <div className='w-[30%] right-0  absolute   transform  animate-slide bg-[#fff4df] h-12 sm:h-14 md:h-16 2xl:h-20 '></div>
            </div>
            <div className='relative flex w-full h-12 gap-2 overflow-hidden border md:mb-5 sm:h-14 md:h-16 2xl:h-20'>
                <Image src={l3} alt="l3"  width={500} /> <span className='absolute pl-2 right-0 animate-slide2 h-12 sm:h-14 md:h-16 2xl:h-20  overflow-hidden flex  transform  bg-[#fff4df]'>BETWEEN <Image src={l4}  width={300} alt=''/> MUSIC </span>
            </div>
            <div className='relative flex w-full h-12 gap-2 overflow-hidden md:mb-5 sm:h-14 md:h-16 2xl:h-20'>
                ARTIST <Image src={l5} alt="l5"  width={500} /><span className='absolute  pl-2 right-0 animate-slide  h-12 sm:h-14 md:h-16 2xl:h-20  overflow-y-hidden flex gap-2  transform  bg-[#fff4df]'> CULTURE <Image src={l6} alt="l6" width={500}   /></span>
            </div>
            <div className='relative flex w-full h-12 gap-2 overflow-hidden md:mb-5 sm:h-14 md:h-16 2xl:h-20'>
            <Image src={l1} alt="l7"  width={400} /> <span className='absolute right-[30%]   animate-slide2 h-12 sm:h-14 md:h-16 2xl:h-20  flex  gap-2 transform  bg-[#fff4df]'> ART <Image src={l7} alt="l7"  width={200} /> & COLLECTIONS</span>
            </div>
        </div>
        <div className='flex flex-col mt-[20vh] gap-5 mx-10 text-[2.2rem] leading-[2.2rem] font-bold sm:hidden'>
            <div>WE ORGANIZE THE <Image src={l1}  alt="l1" className='w-1/2 h-12' width={400} /> </div>
            <div> CONNECTION</div>
            <div>BETWEEN MUSIC</div>
            <div className=''>ARTIST,CULTURE</div>
            <div>ART & COLLECTION</div>
        </div>
      </div>
    </div>
  )
}
