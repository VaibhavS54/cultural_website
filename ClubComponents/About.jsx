// AboutUs.js
import React from "react";
import Ques from "./ClubComponents/Ques.png";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-900 text-white flex items-center justify-center min-h-screen p-5">
      <div className="max-w-4xl flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-2/3 p-2">
          <h1 className="text-4xl font-bold mb-5">About Us</h1>
          <p className="text-lg leading-relaxed mb-5">
            Reflection - The Photography Club, IIIT Bhagalpur (IIITBH), is a
            group of like-minded members of the IIITBH community, including
            mostly students, faculty members, and staff, who express their love
            and passion for photography. They capture beautiful moments and
            express their feelings through photographs. The club members are
            mostly amateur photographers who come together to help each other
            learn the art of photography and pursue it as an interesting hobby.
            Reflection has been an integral part of IIIT Bhagalpur's cultural
            scene for the last 6-7 years.
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
