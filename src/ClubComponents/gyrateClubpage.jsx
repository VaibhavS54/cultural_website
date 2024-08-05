import React from 'react'
import Reflection from './clubhome'
import Secretary from './secretary';
import InstaPost from '../InstaPost';
import ClubLogo from './samwal final logo.jpg';
import image from './disco ball.png';
import Gallery from '../gallery/Gallery';
import Clubhome from './clubhome';
import AboutUs from './About';


const Gyrate = () => {
  const Clubname="GYRATE" ;
  const Clubabout1="Mysteve - Where creativity thrives and imaginations soar, uniting artists ";
  const Clubabout2="to explore and express their unique visions.";
  const Club_text="Welcome to Gyrate,the ultimate dance club at IIIT Bhagalpur where rhythm meets passion! Whether you're a seasoned dancer or just starting out, Gyrate offers a vibrant community where you can explore various dance styles, showcase your talent, and unleash your creativity on the dance floor. With electrifying events, professional workshops, and a supportive atmosphere, Gyrate is the perfect place for freshers to make new friends, learn new moves, and create unforgettable memories. Join us and let your spirit soar as we gyrate to the beat of life!";
  const club_leads = [
    {
      id: 1,
      position:'Secretary',
      image: 'https://i.pinimg.com/564x/c2/a1/18/c2a118b75a53cc7f95e2b0110e7e237b.jpg',
      name: 'Simanta Mukhopadhyay',
      contact: '123-456-7890',
      email: 'krati@example.com'
    },
    {
      id: 2,
      position:'In-charge',
      image: 'https://i.pinimg.com/564x/96/a8/e9/96a8e9f314c0f0a50cfcc630b492bed4.jpg',
      name: 'Manikant',
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
        events={club_events}/>
        <div className='min-h-screen min-w-0.5 overflow-hidden'>
        <InstaPost account="gyrate_iiitbh"/>
        </div>
    </div>
  )
}

export default Gyrate
