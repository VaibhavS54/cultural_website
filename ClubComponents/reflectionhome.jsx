import React from 'react';
import camera from '../ClubComponents/camera.png'; 

const Reflection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center gap-x-24">
        <div className="text-center md:text-left text-white">
          <div className="flex justify-center md:justify-start items-center mb-6">
            <img src={camera} alt="Reflection Logo" className="w-32 h-32 rounded-full bg-white p-2" />
            <h1 className="text-8xl font-bold ml-4">REFLECTION</h1>
          </div>
          <div className="text-2xl mb-6">
            <p>
            "Reflection" - where every click tells a story, blending light,
            </p>
            <p>
            shadow, and emotion into captivating images.
          </p>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition">
            Gallery
          </button>
        </div>
        <div className="mt-12 md:mt-0">
          <img 
            src={camera} 
            alt="Camera" 
            className="w-70 h-72 object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Reflection;
