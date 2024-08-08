import React from 'react'
import Reflection from './clubhome'
import Secretary from './secretary';
import InstaPost from '../InstaPost';
import ClubLogo from '../assests/gyrate_logo.jpg';
import image from './disco ball.png';
import Gallery from '../gallery/Gallery';
import Clubhome from './clubhome';
import AboutUs from './About';
import { useEffect } from 'react';
import image1 from '../assests/gyrate_secretary_t himanshu.jpeg';
import image2 from '../assests/gyrate_incharge_saikiran.jpg';

const Gyrate = () => {
  const Clubname="GYRATE" ;
  const Clubabout1="Mysteve - Where creativity thrives and imaginations soar, uniting artists ";
  const Clubabout2="to explore and express their unique visions.";
  const Club_text="Welcome to Gyrate,the ultimate dance club at IIIT Bhagalpur where rhythm meets passion! Whether you're a seasoned dancer or just starting out, Gyrate offers a vibrant community where you can explore various dance styles, showcase your talent, and unleash your creativity on the dance floor. With electrifying events, professional workshops, and a supportive atmosphere, Gyrate is the perfect place for freshers to make new friends, learn new moves, and create unforgettable memories. Join us and let your spirit soar as we gyrate to the beat of life!";
  const club_leads = [
    {
      id: 1,
      position:'Secretary',
      image: image1,
      name: 'T Himanshu',
      contact: '123-456-7890',
      email: 'krati@example.com'
    },
    {
      id: 2,
      position:'In-charge',
      image: image2,
      name: 'L Sai Kiran',
      contact: '098-765-4321',
      email: '@example.com'
    }
  ];
  const club_events = [
    {
      id: 1,
      head1: 'Urban Lens Quest: Capturing the Cityscape',
      description1: 'Participants will explore the city streets, capturing its essence in every frame. Join us on this dynamic expedition to seize the moments that define urban life',
      head2: 'Narrative Lens: Storytelling Through Images',
      description2: 'Storytelling through captivating photographs competitiojn (members will)',

    } ];
    useEffect(()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },[]);
    
  return (
    <div className="min-h-screen bg-#202020">
    
      <Clubhome
      Logo={ClubLogo}
      ClubName={Clubname}
      display_image={image}
      about1={Clubabout1}
      about2={Clubabout2}/>
      <AboutUs about_text={Club_text} />
    <Secretary 
        people={club_leads}
        events={club_events}
        events2={club_events}
       />
        <div className='min-h-screen min-w-0.5 overflow-hidden'>
        <InstaPost account="gyrate_iiitbh"/>
        </div>
    </div>
  )
}

export default Gyrate
