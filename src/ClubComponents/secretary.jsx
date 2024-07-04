import React from 'react'
import './secretary.css'
import Box1 from './secretarybox1'
import Box2 from './Secretarybox2';
import star1 from './star1.png'
import star2 from './star2.png'

const Secretary  = ({ people, events }) => {
    
  return (
    <div className="sec">
      <img src={star1} className='top-left-star1'/>
      <img src={star2} className='top-left-star2'/>
      <img src={star1} className='top-right-star1'/>
      <img src={star2} className='top-right-star2'/>
      <div className="leads">{people.map(person => (
        <Box1 key={person.id} person={person} />
      ))}</div>
      <div className="events"></div>{events.map(event => (
        <Box2 key={event.id} event={event} />
      ))}
    </div>
  )
}

export default Secretary
