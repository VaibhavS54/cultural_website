import React from 'react'
import './secretarybox2.css'

const Box2 = ({ event }) => {
  return (
    <div className='box2'>
      <h1>Upcoming Events</h1><br/>
     <span ><h4 className="b_head">{event.head1}</h4>
     <p className="b_desc">{event.description1}</p>
     </span><br/>
     <span ><h4 className="b_head">{event.head2}</h4>
     <p className="b_desc">{event.description2}</p>
     </span>
     
    </div>
  )
}

export default Box2
