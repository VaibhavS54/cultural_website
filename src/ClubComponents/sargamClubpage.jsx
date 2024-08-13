import React from 'react'
import Reflection from './clubhome'
import Secretary from './secretary';
import InstaPost from '../InstaPost';
import ClubLogo from '../assests/sargam logo.jpg';
import image from './drum kit.png';
import Gallery from '../gallery/Gallery';
import Clubhome from './clubhome';
import AboutUs from './About';
import { useEffect } from 'react';
import image1 from '../assests/Sargam_Club-Sec _ Arnav Raj.jpg';
import image2 from '../assests/sargam_incharge-Srishti Priya.jpg'
import Footer from '../footer/footer';
import mymy from '../assests/bg-img.svg'
import circle from '../assests/circles.svg'
import grad from '../assests/Group 2.svg'
import eclipse from '../assests/Eclipse (2).svg';
import wither from '../assests/Rectangle 29.svg';
import eclipse2 from '../assests/Eclipse (3).svg';
import bottomback from '../assests/Background.svg';


const Sargam = () => {
  const Clubname="SARGAM" ;
  const Clubabout1="Mysteve - Where creativity thrives and imaginations soar, uniting artists ";
  const Clubabout2="to explore and express their unique visions.";
  const Club_text="Tarang-Sargam is the Music and Singing club of IIIT Bhagalpur which focuses on bringing the tremendous talent of singing and music from the freshmen every year and helps the interested students to learn new things and embrace the beauty of the musical world. It plays an important role in all the college fests and events.";
  const club_leads = [
    {
      id: 1,
      position:'Secretary',
      image: image1,
      name: 'Arnav Raj',
      contact: '123-456-7890',
      email: 'krati@example.com'
    },
    {
      id: 2,
      position:'In-charge',
      image: image2,
      name: 'Srishti Priya',
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
      Logo={ClubLogo}
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
        people={club_leads}
        events={club_events}
        events2={club_events}
       />
        <div className='min-h-screen min-w-0.5 overflow-hidden'>
        <Gallery/>
        {/*<InstaPost account="sargam_iiitbh"/>*/}
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Sargam
