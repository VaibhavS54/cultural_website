import React, { useEffect } from 'react'

import Secretary from './secretary';
import InstaPost from '../InstaPost';
import ReflectionLogo from '../assests/Reflection Logo.png';
import image from './camera.png';
import Gallery from '../gallery/Gallery';
import Clubhome from './clubhome';
import AboutUs from './About';
import image1 from '../assests/reflection_Sec- Minal Satankar.png';
import image2 from '../assests/reflection_incharge- Shubham Kumar.jpg';
import Footer from '../footer/footer';
import mymy from '../assests/bg-img.svg'
import circle from '../assests/circles.svg'
import grad from '../assests/Group 2.svg'
import eclipse from '../assests/Eclipse (2).svg';
import wither from '../assests/Rectangle 29.svg';
import eclipse2 from '../assests/Eclipse (3).svg';
import bottomback from '../assests/Background.svg';
const ReflectionClubpage = () => {
  const Clubname="REFLECTION" ;
  const Clubabout1="Reflection - where every click tells a story, blending light,";
  const Clubabout2="shadow, and emotion into captivating images.";
  const Club_text="Reflection - The Photography Club, IIIT Bhagalpur (IIITBH), is a group of like-minded members of the IIITBH community, including mostly students, faculty members, and staff, who express their love and passion for photography. They capture beautiful moments and express their feelings through photographs. The club members are mostly amateur photographers who come together to help each other learn the art of photography and pursue it as an interesting hobby. Reflection has been an integral part of IIIT Bhagalpur's cultural scene for the last 6-7 years.";
  const reflection_leads = [
    {
      id: 1,
      position:'Secretary',
      image: image1,
      name: 'Minaal Satankar',
      contact: '123-456-7890',
      email: 'krati@example.com'
    },
    {
      id: 2,
      position:'In-charge',
      image: image2,
      name: 'Shubham Kumar',
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
    
    useEffect(()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },[]);

     const containerStyle = {
    width: '100%',
    height: '100%',
    background: `url(${mymy}) no-repeat center center`,
    backgroundSize: 'cover'
  };
  const firstStyle = {
    width: '100vw',
    height: '100%',
    background: `url(${circle}) no-repeat center center`,
    backgroundSize: 'cover',
    backgroundSize: '150% 250%' // Adjust the size as needed
  };
  return (
    
    <div className="min-h-screen bg-#202020">
    <div style={firstStyle}>
      <img src={grad} className='absolute top-0 left-0 mix-blend-screen bg-#202020 z-[-1]'/>
      <Clubhome
      Logo={ReflectionLogo}
      ClubName={Clubname}
      display_image={image}
      about1={Clubabout1}
      about2={Clubabout2}/>
      </div>
   <div style={containerStyle}>
   
      <AboutUs about_text={Club_text} />
      <img src={eclipse} className='absolute top-0 right-0 mix-blend-screen bg-#202020 z-[-1]'/>
      <img src={eclipse2} className='absolute top-[50rem] left-0 mix-blend-screen bg-#202020 z-[-1]'/>
      <img src={bottomback} className='absolute top-[90rem] right-0 mix-blend-screen bg-#202020 z-[-1]'/>
      <img src={wither} className='absolute top-[160rem] right-0 mix-blend-screen bg-#202020 z-[-1]'/>
    <Secretary 
        people={reflection_leads}
        events={reflection_events}
        events2={reflection_events}
        />
        <div className='min-h-screen min-w-0.5 overflow-hidden'>
        <Gallery/>
        {/*<InstaPost account="reflection_iiitbh"/>*/}
        </div>
        </div>
        <Footer/>
        
    </div>
  )
}

export default ReflectionClubpage
