import React from 'react'
import './secretarybox1.css'
import { Reveal2 } from '../Clubs/Reveal';

const Box1 = ({ person }) => {
    return (
      <div className="box1">
        <div className="b_image">
          <img src={person.image} alt={person.name} />
        </div>
        <div className="b_content">
          <Reveal2>
          <h1>{person.position}</h1><br/>
          </Reveal2>
          <Reveal2>
          <p className='name'><b>{person.name}</b></p>
          </Reveal2>
          <Reveal2>
          <p>Contact: {person.contact}</p>
          </Reveal2>
          <Reveal2>
          <p>Email: {person.email}</p>
          </Reveal2>
        </div>
      </div>
    );
  };
export default Box1
