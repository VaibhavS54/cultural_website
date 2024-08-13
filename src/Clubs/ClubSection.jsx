import React from 'react';
import { Reveal, Reverse } from './Reveal';
import Card from './ClubCards';
import samwaad from '../assests/samwal final logo.jpg';
import reflection from '../assests/Reflection Logo.png';
import mysteve from '../assests/mysteve LOGO.jpg';
import xpressions from '../assests/xpression_logo.jpg';
import sargam from '../assests/sargam logo.jpg';
import gyrate from '../assests/gyrate_logo.jpg';
import cinemara from '../assests/cinemara logo.jpg';
import animeverse from '../assests/animeverse logo.png';
import hello from './hello.png'; 


const cards = [
  {
    title: 'REFLECTION',
    description: 'Reflection where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/reflection',
    logo: reflection
  },
  {
    title: 'SAMWAAD',
    description: 'Samwaad where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/samwaad',
    logo: samwaad
    
  },
  {
    title: 'MYSTEVE',
    description: 'Mysteve where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/mysteve',
    logo: mysteve
  },
  {
    title: 'XPRESSIONS',
    description: 'Xpressions where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/xpressions',
    logo: xpressions
  },
];

const second = [
  {
    title: 'SARGAM',
    description: '"Reflection" where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/sargam',
    logo: sargam
  },
  {
    title: 'GYRATE',
    description: '"Gyrate" where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/gyrate',
    logo: gyrate
  },
  {
    title: 'CINEMARA',
    description: '"Cinemara" where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/cinemara',
    logo: cinemara
  },
  {
    title: 'ANIMEVERSE',
    description: '"Animeverse" where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/animeverse',
    logo: animeverse
  },
];


const ClubSection = () => (
  <div id='clubs' style={{backgroundImage:`url(${hello})`}} className="bg-#202020 bg-no-repeat bg-center bg-cover md:bg-contain pb-11 pt-10">
    <Reverse>
      <h1 className="text-white flex justify-center md:text-5xl lg:text-5xl text-3xl font-bold tracking-widest mb-[0px] md:mb-[50px] mt-[40px]">
        ARTIFICIUM CLUBS
      </h1>
    </Reverse>
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-16 gap-y-5 md:gap-y-11 p-11">
      {cards.map((card, index) => (
        <Reveal key={index}>
          <div>
            <Card {...card} />
          </div>
        </Reveal>
      ))}
      {second.map((card, index) => (
        <Reveal key={index}>
          <div>
            <Card {...card} />
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

export default ClubSection;
