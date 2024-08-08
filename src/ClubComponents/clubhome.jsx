import React from 'react';
import star1 from './star1.png';
import star2 from './star2.png';
import star3 from './star3.png';


const Clubhome = ({Logo, ClubName, display_image, about1, about2}) => {
  return (
    <div id="hero" className="min-h-screen  flex items-center justify-center p-4 bg-gradient-to-r from-blue-900 via-gray-900 to-black">
      <img src={star1} className="z-[100] absolute left-0 h-[7vh] w-[7vh] ml-[90vw] mt-[50vh]"></img>
      <img src={star2} className="z-[100] absolute left-0 h-[7vh] w-[7vh] ml-[90vw] mt-[-60vh]"></img>
      <img src={star3} className="z-[100] absolute left-0 h-[9vh] w-[9vh] ml-[20vw] mt-[-70vh]"></img>
      <img src={star1} className="z-[100] absolute left-0 h-[9vh] w-[9vh] ml-[80vw] mt-[-80vh]"></img>
      <div className="flex flex-col md:flex-row items-center gap-x-24">
        <div className="text-center md:text-left text-white">
          <div className="flex justify-center md:justify-start items-center mb-6">
            <img src={Logo} alt="Reflection Logo" className="w-32 h-32 rounded-full bg-white p-2" />
            <h1 className="text-8xl font-bold ml-4">{ClubName}</h1>
          </div>
          <div className="text-2xl mb-6 ">
            <p>
            {about1}
          </p>
          <p>{about2}</p>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition">
            Gallery
          </button>
        </div>
        <div className="mt-12 md:mt-0">
          <img 
            src={display_image} 
            alt="Camera" 
            className="w-70 h-72 object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Clubhome;
