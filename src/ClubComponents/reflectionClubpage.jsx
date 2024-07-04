import React from 'react'

import Secretary from './secretary';
import InstaPost from '../InstaPost';
import ReflectionLogo from './camera.png';
import image from './camera.png';
import Gallery from '../gallery/Gallery';
import Clubhome from './clubhome';
import AboutUs from './About';


const ReflectionClubpage = () => {
  const Clubname="REFLECTION" ;
  const Clubabout1="Reflection - where every click tells a story, blending light,";
  const Clubabout2="shadow, and emotion into captivating images.";
  const Club_text="Reflection - The Photography Club, IIIT Bhagalpur (IIITBH), is a group of like-minded members of the IIITBH community, including mostly students, faculty members, and staff, who express their love and passion for photography. They capture beautiful moments and express their feelings through photographs. The club members are mostly amateur photographers who come together to help each other learn the art of photography and pursue it as an interesting hobby. Reflection has been an integral part of IIIT Bhagalpur's cultural scene for the last 6-7 years.";
  const reflection_leads = [
    {
      id: 1,
      position:'Secretary',
      image: 'https://i.pinimg.com/564x/c2/a1/18/c2a118b75a53cc7f95e2b0110e7e237b.jpg',
      name: 'Minaal Satankar',
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
  const reflection_events = [
    {
      id: 1,
      head1: 'Urban Lens Quest: Capturing the Cityscape',
      description1: 'Participants will explore the city streets, capturing its essence in every frame. Join us on this dynamic expedition to seize the moments that define urban life',
      head2: 'Narrative Lens: Storytelling Through Images',
      description2: 'Storytelling through captivating photographs competitiojn (members will)',

    } ];
    
    
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800">
    
      <Clubhome
      Logo={ReflectionLogo}
      ClubName={Clubname}
      display_image={image}
      about1={Clubabout1}
      about2={Clubabout2}/>
      <AboutUs about_text={Club_text} />
      <Gallery/>
    <Secretary 
        people={reflection_leads}
        events={reflection_events}/>
        <div className='min-h-screen min-w-0.5 overflow-hidden'>
        <InstaPost account="reflection_iiitbh"/>
        </div>
    </div>
  )
}

export default ReflectionClubpage
