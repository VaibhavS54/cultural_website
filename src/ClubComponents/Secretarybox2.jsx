import React from 'react'
import './secretarybox2.css'
import { Reveal2 } from '../Clubs/Reveal'

const Box2 = ({ event }) => {
  return (
    <div className='box2 w-[auto] lg:w-[50vw] m-[20px] lg:h-[90vh] h-[auto]'>
      <Reveal2>
      <h1>Upcoming Events</h1></Reveal2><br/>
      
      <Reveal2><span ><h4 className="b_head">{event.head1}</h4>
     <p className="b_desc">{event.description1}</p>
     </span></Reveal2><br/>
     <Reveal2><span ><h4 className="b_head">{event.head2}</h4>
     <p className="b_desc">{event.description2}</p>
     </span></Reveal2>
     
    </div>
  )
}

export default Box2
