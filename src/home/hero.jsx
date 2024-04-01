import React from 'react'
import videoBg from '../assests/videoBg.mp4'
import { Basic,Basic2 } from '../Clubs/Reveal';

const Hero = () => {
  return (
    <div id="hero" class="w-full h-screen">
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
        <video src={videoBg} autoPlay loop muted class="w-full h-full object-cover"/>
        <div class="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
          <Basic>
            <h1 class="text-7xl">Aritificium</h1>
          </Basic>
          <Basic>
            <p class="text-2xl py-2">CULTURAL BOARD IIIT BHAGALPUR</p>
          </Basic>
          <Basic2>
            <p class="text-xl">Artificium hosts diverse cultural events, fostering lifelong learning and community interaction while showcasing student talent.</p>
          </Basic2>
        </div>
    </div>
  )
}

export default Hero;