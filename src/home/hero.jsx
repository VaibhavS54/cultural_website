import React from 'react'
import videoBg from '../assests/videoBg.mp4'

const Hero = () => {
  return (
    <div class="w-full h-screen">
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
        <video src={videoBg} autoPlay loop muted class="w-full h-full object-cover"/>
        <div class="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
            <h1 class="text-7xl">Aritificium</h1>
            <p class="text-2xl py-2">CULTURAL BOARD IIIT BHAGALPUR</p>
            <p class="text-xl">Artificium hosts diverse cultural events, fostering lifelong learning and community interaction while showcasing student talent.</p>
        </div>
    </div>
  )
}

export default Hero;