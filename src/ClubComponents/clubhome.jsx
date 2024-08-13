import React from 'react';
import star1 from './star1.png';
import star2 from './star2.png';
import star3 from './star3.png';
import { Reveal2 } from '../Clubs/Reveal';

const Clubhome = ({Logo, ClubName, display_image, about1, about2}) => {
  return (
    <div 
      id="hero" 
      className="pt-44 flex flex-col items-center justify-center p-4 "
    >
      <img 
        src={star1} 
        className="z-[100] absolute h-[5vh] w-[5vh] sm:h-[7vh] sm:w-[7vh] ml-[70vw] sm:ml-[90vw] mt-[50vh]" 
      />
      <img 
        src={star2} 
        className="z-[100] absolute h-[5vh] w-[5vh] sm:h-[7vh] sm:w-[7vh] ml-[70vw] sm:ml-[90vw] mt-[-60vh]" 
      />
      <img 
        src={star3} 
        className="z-[100] absolute h-[7vh] w-[7vh] sm:h-[9vh] sm:w-[9vh] ml-[10vw] sm:ml-[20vw] mt-[-70vh]" 
      />
      <img 
        src={star1} 
        className="z-[100] absolute h-[7vh] w-[7vh] sm:h-[9vh] sm:w-[9vh] ml-[60vw] sm:ml-[80vw] mt-[-80vh]" 
      />
      <div className="flex flex-col md:flex-row items-center gap-x-4 sm:gap-x-24">
        <div className="text-center md:text-left text-white">
          <div className="flex flex-col items-center md:flex-row md:justify-start md:items-center mb-6">
            <img 
              src={Logo} 
              alt="Reflection Logo" 
              className="w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-white p-2" 
            />
            <Reveal2>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold ml-0 md:ml-4 mt-4 md:mt-0">
              {ClubName}
            </h1>
            </Reveal2>
          </div>
          <div className="text-lg sm:text-xl md:text-2xl mb-6">
            <Reveal2>
            <p>{about1}</p>
            </Reveal2>
            <Reveal2>
            <p>{about2}</p>
            </Reveal2>
          </div>
          <button 
            className="bg-white text-black px-4 sm:px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition"
          >
            Gallery
          </button>
        </div>
        <div className="mt-12 md:mt-0">
          <img 
            src={display_image} 
            alt="Camera" 
            className="w-52 h-52 sm:w-60 sm:h-60 md:w-70 md:h-72 object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Clubhome;