import React from 'react';
import { Reveal, Reverse } from './Reveal';
import Card from './ClubCards';

import Samwaad from '../ClubComponents/samwaadClubpage';
import Sargam from '../ClubComponents/sargamClubpage';
import Gyrate from '../ClubComponents/gyrateClubpage';
import Cinemara from '../ClubComponents/cinemaraClubpage';
import Animeverse from '../ClubComponents/animeverseClubpage';
import ReflectionClubpage from '../ClubComponents/reflectionClubpage';
import Xpressions from '../ClubComponents/xpressionClubpage';
import Mysteve from '../ClubComponents/mysteveClubpage';
import MainPage from '../MainPage';

const cards = [
  {
    title: 'REFLECTION',
    description: 'Reflection where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/reflection',
  },
  {
    title: 'SAMWAAD',
    description: 'Samwaad where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/samwaad',
  },
  {
    title: 'MYSTEVE',
    description: 'Mysteve where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/mysteve',
  },
  {
    title: 'XPRESSIONS',
    description: 'Xpressions where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/xpressions',
  },
];

const second = [
  {
    title: 'SARGAM',
    description: '"Reflection" where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/sargam',
  },
  {
    title: 'GYRATE',
    description: '"Gyrate" where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/gyrate',
  },
  {
    title: 'CINEMARA',
    description: '"Cinemara" where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/cinemara',
  },
  {
    title: 'ANIMEVERSE',
    description: '"Animeverse" where every click tells a story, blending light, shadow, and emotion into captivating images.',
    buttonLabel: 'Read more',
    pagelink: '/animeverse',
  },
];


const ClubSection = () => (
  <div id='clubs' style={{ backgroundImage: `url('./hello.png')` }} className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-700 md:bg-contain pb-11 mt-14 lg:mt-40 md:mb-20 lg:mb-24">
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
