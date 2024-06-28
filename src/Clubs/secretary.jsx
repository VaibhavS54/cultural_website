import React from 'react'
import './secretary.css'
import Box1 from './secretarybox1'
import Box2 from './Secretarybox2';
import star1 from './star1.png'
import star2 from './star2.png'

const Secretary = () => {
    const people = [
        {
          id: 1,
          position:'Secretary',
          image: 'https://i.pinimg.com/564x/c2/a1/18/c2a118b75a53cc7f95e2b0110e7e237b.jpg',
          name: 'Krati Bharadwaj',
          contact: '123-456-7890',
          email: 'krati@example.com'
        },
        {
          id: 2,
          position:'In-charge',
          image: 'https://i.pinimg.com/564x/96/a8/e9/96a8e9f314c0f0a50cfcc630b492bed4.jpg',
          name: 'Krati Bhardwaj',
          contact: '098-765-4321',
          email: '@example.com'
        }
      ];
      const events = [
        {
          id: 1,
          head1: 'Urban Lens Quest: Capturing the Cityscape',
          description1: 'Participants will explore the city streets, capturing its essence in every frame. Join us on this dynamic expedition to seize the moments that define urban life',
          head2: 'Narrative Lens: Storytelling Through Images',
          description2: 'Storytelling through captivating photographs competitiojn (members will)',

        } ];
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
