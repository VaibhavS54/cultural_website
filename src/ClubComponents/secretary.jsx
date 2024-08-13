import React from 'react'
import './secretary.css'
import Box1 from './secretarybox1'
import Box2 from './Secretarybox2';
import star1 from './star1.png'
import star2 from './star2.png'
import Past from './pastevents';

const Secretary  = ({ people, events ,events2  }) => {
    
  return (
  <div className="section flex flex-col justify-center items-center">
    <div id='events' className="sec flex  justify-center items-center ">
      <img src={star1} className='top-left-star1'/>
      <img src={star2} className='top-left-star2'/>
      <img src={star1} className='top-right-star1'/>  
      <img src={star2} className='top-right-star2'/>
      <div className='flex flex-col lg:flex-row '>
      <div className="leads h-[auto] flex flex-col justify-center items-center lg:justify-start ">{people.map(person => (
        <Box1 key={person.id} person={person} />
      ))}</div>
      <div className="events "></div>{events.map(event => (
        <Box2 key={event.id} event={event} />
      ))}
    </div>
    </div>
    <img src={star1} className='top-left-star1'/>
    <img src={star2} className='top-right-star2'/>
    <div className="event2 lg:mt-[0px] mt-[30px] h-[auto]">{events2.map(event => (
        <Past key={event.id} event={event} />
      ))}</div>
    </div>
  )
}

export default Secretary