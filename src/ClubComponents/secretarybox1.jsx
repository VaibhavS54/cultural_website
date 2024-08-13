import React from 'react'
import './secretarybox1.css'
import { Reveal2 } from '../Clubs/Reveal';

const Box1 = ({ person }) => {
    return (
      <div className="box1 flex flex-col justify-center items-center lg:flex-row w-[100%] lg:h-[42vh] lg:w-[40vw] lg:justify-start">
        <div className="b_image w-[35%]   lg:w-[35%] flex flex-col justify-center items-center lg:items-start">
          <img src={person.image} alt={person.name} className='w-[100%] lg:w-[100%] h-[150px] lg:h-[auto] lg:w-[70%] h-[auto] lg-h-[100%]'/>
        </div>
        <div className="b_content flex flex-col justify-center items-center lg:pl-[25px]">
          <Reveal2>
          <h1 className='text-2xl lg:text-4xl flex flex-col justify-center items-center lg:items-start'>{person.position}</h1><br/>
          </Reveal2>
          <Reveal2>
          <p className='name text-lg lg:text-2xl flex flex-col justify-center items-center lg:items-start'><b>{person.name}</b></p>
          </Reveal2>
          <Reveal2>
          <p className='flex lg:text-lg flex-col justify-center items-center lg:items-start'>Contact: {person.contact}</p>
          </Reveal2>
          <Reveal2>
          <p className='flex flex-col lg:text-lg justify-center items-center lg:items-start  '>Email: {person.email}</p>
          </Reveal2>
        </div>
      </div>
    );
  };
export default Box1
