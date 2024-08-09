import React from 'react'
import Reflection from './clubhome'
import Secretary from './secretary';
import InstaPost from '../InstaPost';
import ClubLogo from '../assests/cinemara logo.jpg';
import image from './camera.png';
import Gallery from '../gallery/Gallery';
import Clubhome from './clubhome';
import AboutUs from './About';
import { useEffect } from 'react';
import image1 from '../assests/cinemara_secretary_Harsh.jpg';
import image2 from '../assests/cinemara_incharge.jpeg';
import Footer from '../footer/footer';

const Cinemara = () => {
  const Clubname="CINEMARA" ;
  const Clubabout1="Mysteve - Where creativity thrives and imaginations soar, uniting artists ";
  const Clubabout2="to explore and express their unique visions.";
  const Club_text="Cinemara is the Cinematography Club of IIIT Bhagalpur which focuses on the diverse skills of video and audio processing and editing and enhancing the captured moments through cinematic piece. It helps the students to acquire the skills of video recording and editing.";
  const club_leads = [
    {
      id: 1,
      position:'Secretary',
      image: image1,
      name: 'Harsh',
      contact: '123-456-7890',
      email: 'krati@example.com'
    },
    {
      id: 2,
      position:'In-charge',
      image: image2,
      name: 'Aditya Shirole',
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
        <Gallery/>
        <InstaPost account="cinemara_iiitbh"/>
        </div>
        <Footer/>
    </div>
  )
}

export default Cinemara
