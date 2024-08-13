import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, buttonLabel, pagelink,logo }) => {
  return (
    <div className="bg-white text-white bg-opacity-15 backdrop-blur-[4px] rounded-lg overflow-hidden flex flex-col justify-between min-h-170 md:min-h-300 lg:min-h-200 xl:min-h-200 py-[0.8rem] px-[0.5rem]">
      <img src={logo} alt="Card" className="w-14 md:w-24 h-auto mx-auto rounded-full  bg-black" />
      <div className="text-center md:pt-4 pt-2 pb-4 md:pb-8">
        <h2 className="text-[1.1rem] md:text-[1.4rem] font-bold mb-2">{title}</h2>
        <p className="text-gray-400 text-[0.7rem] md:text-[1rem]">{description}</p>
      </div>
      <span className="flex justify-center  md:mb-[0.6rem] mb-[0.1rem] ">
        <Link
          to={pagelink}
          className="text-[0.7rem] md:text-[1rem] border-1 border-gray-400 py-1.5 px-5 rounded-full text-white font-bold bg-gray-500 bg-opacity-40 backdrop-blur-5 hover:bg-gray-800 transition-all duration-200 ease-in-out"
        >
          {buttonLabel}
        </Link>
      </span>
    </div>
  );
};

export default Card;
