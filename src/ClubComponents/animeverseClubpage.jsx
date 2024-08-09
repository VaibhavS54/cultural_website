import React from 'react'
import Reflection from './clubhome'
import Secretary from './secretary';
import InstaPost from '../InstaPost';
import ClubLogo from '../assests/animeverse logo.png';
import image from './country house.png';

import Clubhome from './clubhome';
import AboutUs from './About';
import image1 from '../assests/animeverse_Secretary-Kaushal Shelke.jpg';
import image2 from '../assests/animeverse_Incharge-Prince Kumar.jpg';
import { useEffect } from 'react';
import Footer from '../footer/footer';
import Gallery from '../gallery/Gallery';

const Animeverse = () => {
  const Clubname="ANIMEVERSE" ;
  const Clubabout1="Mysteve - Where creativity thrives and imaginations soar, uniting artists ";
  const Clubabout2="to explore and express their unique visions.";
  const Club_text="AnimeVerse is the animation club of IIIT Bhagalpur which was created to teach students the basic skills of digital animation and digital arts and the club fosters interest in field of 3D modeling and designing in young minds and help them to exile in that field.We specialize in using cutting-edge tools like Blender and Unreal Engine to bring our imagination to life through captivating projects, 3D scenes, and short videos. Whether you're a seasoned animator or just starting out, our club offers a dynamic environment to explore and master the art of animation.";
  const club_leads = [
    {
      id: 1,
      position:'Secretary',
      image: image1,
      name: 'Kaushal Shelke',
      contact: '123-456-7890',
      email: 'krati@example.com'
    },
    {
      id: 2,
      position:'In-charge',
      image: image2,
      name: 'Prince Kumar',
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
        <InstaPost account="reflection_iiitbh"/>
        </div>
        <Footer/>
    </div>
  )
}

export default Animeverse
