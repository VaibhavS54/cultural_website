import React from "react";
import Ques from "./Ques.png";

const AboutUs = ({about_text}) => {
  return (
    <div 
      id="about" 
      className="bg-[#202020] text-white flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-gray-900 to-black"
    >
      <div className="max-w-6xl flex flex-col md:flex-row items-center p-4 md:p-8">
        <div className="text-center md:text-left md:w-2/3 p-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-5">About Us</h1>
          <p className="text-base md:text-lg leading-relaxed">
            {about_text}
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center p-5">
          <img
            src={Ques}
            alt="Question Mark"
            className="w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;