import React from 'react'
import Reflection from './clubhome'
import Secretary from './secretary';
import InstaPost from '../InstaPost';
import ClubLogo from '../assests/xpression_logo.jpg';
import image from './drum kit.png';
import Gallery from '../gallery/Gallery';
import Clubhome from './clubhome';
import AboutUs from './About';
import { useEffect } from 'react';
import image1 from '../assests/xpression_Aditya Vaibhav - sec.jpg';
import image2 from '../assests/xpression_Neeraj Yadav - incharge.jpg';

const Xpressions = () => {
  const Clubname="Xpressions" ;
  const Clubabout1="Mysteve - Where creativity thrives and imaginations soar, uniting artists ";
  const Clubabout2="to explore and express their unique visions.";
  const Club_text="Welcome to Xpressionn, the most vibrant and creative drama club at IIIT Bhagalpur. Xpressionn is a platform where art, acting, and emotions unite in a beautiful harmony.The primary goal of Xpressionn is to provide students at IIIT Bhagalpur with a platform to showcase their artistic and acting skills. We believe that every individual has an artist within them, and we strive to bring that artist to the forefront.";
  const club_leads = [
    {
      id: 1,
      position:'Secretary',
      image: image1,
      name: 'Aditya Vaibhav',
      contact: '123-456-7890',
      email: 'krati@example.com'
    },
    {
      id: 2,
      position:'In-charge',
      image: image2,
      name: 'Neeraj Yadav',
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
        events2={club_events}/>
        <div className='min-h-screen min-w-0.5 overflow-hidden'>
        <InstaPost account="xpressionn_iiitbh"/>
        </div>
    </div>
  )
}

export default Xpressions
