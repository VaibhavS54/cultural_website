import React from 'react'
import videoBg from '../assests/videoBg.mp4'
import { Basic,Basic2 } from '../Clubs/Reveal'

const Hero = () => {
  return (
    <div id='hero' className="w-full h-screen">
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
        <video src={videoBg} autoPlay loop muted className="w-full h-full object-cover"/>
        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center pl-0 md:pl-11 md:items-start text-white">
          <Basic>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-8xl italic px-2 md:mt-32 font-[740] tracking-tighter">Aritificium</h1>
          </Basic>
          <Basic>
            <p className="font-sans text-2xl md:text-3xl lg:text-4xl font-[640] tracking-tight py-2">Cultural Board, IIIT Bhagalpur</p>
          </Basic>
          <Basic2>
            <p className="font-sans font-[340] pl-1 text-lg md:text-3xl max-w-[45rem]">Artificium hosts diverse cultural events, fostering lifelong learning and community interaction while showcasing student talent.</p>
          </Basic2>
        </div>
    </div>
  )
}

export default Hero;