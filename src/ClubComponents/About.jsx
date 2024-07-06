// AboutUs.js
import React from "react";
import Ques from "./Ques.png";

const AboutUs = ({about_text}) => {
  return (
    <div className=" bg-gradient-to-r from-gray-900 via-gray-900 text-white flex items-center justify-center min-h-screen p-5">
      <div className="max-w-4xl flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-2/3 p-2">
          <h1 className="text-4xl font-bold mb-5">About Us</h1>
          <p className="text-lg leading-relaxed mb-5">
            {about_text}
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center p-5">
          <img
            src={Ques}
            alt="Question Mark"
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
