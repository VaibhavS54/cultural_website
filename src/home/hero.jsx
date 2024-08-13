import React from 'react';
import videoBg from '../assests/videoBg.mp4';
import imageBg from '../assests/Screenshot 2024-08-13 142705.png'
import { Basic, Basic2 } from '../Clubs/Reveal';
import { useState,useEffect } from 'react';

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
      const handleResize = () => {
          setIsSmallScreen(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="hero" className="w-full h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      {isSmallScreen ? (
                <img src={imageBg} className="w-full h-full object-cover" alt="background image" />
            ) : (
              <video
              src={videoBg}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
            )}
      
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white text-center px-4">
        <Basic>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Artificium</h1>
        </Basic>
        <Basic>
          <p className="text-lg md:text-2xl lg:text-3xl py-2">
            CULTURAL BOARD IIIT BHAGALPUR
          </p>
        </Basic>
        <Basic2>
          <p className="text-sm md:text-xl lg:text-2xl max-w-3xl">
            Artificium hosts diverse cultural events, fostering lifelong learning and community interaction while showcasing student talent.
          </p>
        </Basic2>
      </div>
    </div>
  );
};

export default Hero;
