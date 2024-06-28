import React from 'react'
import './secretarybox1.css'

const Box1 = ({ person }) => {
    return (
      <div className="box1">
        <div className="b_image">
          <img src={person.image} alt={person.name} />
        </div>
        <div className="b_content">
          <h1>{person.position}</h1><br/>
          <p className='name'><b>{person.name}</b></p>
          <p>Contact: {person.contact}</p>
          <p>Email: {person.email}</p>
        </div>
      </div>
    );
  };
export default Box1
