import React from 'react'
import Secretary from './secretary';
import InstaPost from '../InstaPost';
import ClubLogo from './samwal final logo.jpg';
import image from './pink book.png';
import Gallery from '../gallery/Gallery';
import Clubhome from './clubhome';
import AboutUs from './About';


const Samwaad = () => {
  const Clubname="SAMWAAD" ;
  const Clubabout1="Samwaad - Where stories come alive and voices unite, bringing literary ";
  const Clubabout2="enthusiasts together to explore and express their imaginations.";
  const Club_text="Reflection - The Photography Club, IIIT Bhagalpur (IIITBH), is a group of like-minded members of the IIITBH community, including mostly students, faculty members, and staff, who express their love and passion for photography. They capture beautiful moments and express their feelings through photographs. The club members are mostly amateur photographers who come together to help each other learn the art of photography and pursue it as an interesting hobby. Reflection has been an integral part of IIIT Bhagalpur's cultural scene for the last 6-7 years.";
  const club_leads = [
    {
      id: 1,
      position:'Secretary',
      image: 'https://i.pinimg.com/564x/c2/a1/18/c2a118b75a53cc7f95e2b0110e7e237b.jpg',
      name: 'Krati Bhardwaj',
      contact: '123-456-7890',
      email: 'krati@example.com'
    },
    {
      id: 2,
      position:'In-charge',
      image: 'https://i.pinimg.com/564x/96/a8/e9/96a8e9f314c0f0a50cfcc630b492bed4.jpg',
      name: 'Riyaz Siddiqui',
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
    
    
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800">
    
      <Clubhome
      Logo={ClubLogo}
      ClubName={Clubname}
      display_image={image}
      about1={Clubabout1}
      about2={Clubabout2}/>
      <AboutUs about_text={Club_text} />
      
    <Secretary 
        people={club_leads}
        events={club_events}/>
        <div className='min-h-screen min-w-0.5 overflow-hidden'>
        <InstaPost account="reflection_iiitbh"/>
        </div>
    </div>
  )
}

export default Samwaad
