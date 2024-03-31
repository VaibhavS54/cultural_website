import React from 'react';

const Card = ({ title, description, buttonLabel }) => {
  return (
    <div className="card bg-black bg-opacity-40 backdrop-blur-5 rounded-lg overflow-hidden flex flex-col justify-between min-h-200 md:min-h-400 lg:min-h-250 xl:min-h-250 p-[1rem]">
      <img src="./logo192.png" alt="Card" className="w-40 h-auto mx-auto rounded-full  bg-black" />
      <div className="text-center pt-4 pb-8">
        <h2 className="text-[1.6rem] font-bold mb-2">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
      <span className="flex justify-center mt-auto mb-[1.3rem] mt-[1rem]">
        
        <a
          href="#linl"
          className="py-2 px-4 rounded-full text-white font-bold bg-gray-500 bg-opacity-40 backdrop-blur-5 hover:bg-gray-800 transition-all duration-200 ease-in-out"
        >
          {buttonLabel}
        </a>
        
      </span>
    </div>
  );
};

export default Card;
