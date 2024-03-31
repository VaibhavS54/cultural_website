import Card from './ClubCards';

import React from 'react';
import { Reveal, Reverse } from './Reveal';


const cards = [
    {
        title: 'REFLECTION',
        description:
            'Reflection where every click tells a story, blending light, shadow, and emotion into captivating images.',
        buttonLabel: 'Read more',
    },
    {
        title: 'REFLECTION',
        description:
            'Reflection where every click tells a story, blending light, shadow, and emotion into captivating images.',
        buttonLabel: 'Read more',
    },
    {
        title: 'MARIACOON',
        description:
            'Mariacoon where every click fels a story, blending light, shadow and emotion into captivating images.',
        buttonLabel: 'Read more',
    },
    {
        title: 'REFLECTION',
        description:
            'Reflection where every click telts a story, blending light, shadow, and emotion into captivating images.',
        buttonLabel: 'Read more',
    },

];

const Second = [

    {
        title: 'REFLECTION',
        description:
            '"Reflection" where every click tells a story, blending light, shadow, and emotion into captivating images.',
        buttonLabel: 'Read more',
    },
    {
        title: 'REFLECTION',
        description:
            '"Reflection" whem every click tells a story, blending light, shadow, and emotion into captivating images.',
        buttonLabel: 'Read more',
    },
    {
        title: 'REFLECTION',
        description:
            '"Reflection where every click tells a story, blending fight, shadow and emotion into captivating images.',
        buttonLabel: 'Read more',
    },
    {
        title: 'REFLECTION',
        description:
            '"Reflection" where every click tells a story, blending light, shadow, and emotion into captivating images.',
        buttonLabel: 'Read more',
    },
];
const ClubSection = () => {


    return (
        <>
            <div style={{ backgroundImage: `url('./hello.png')` }} className="bg-black bg-no-repeat bg-center bg-cover pb-11"> 
                <Reverse>
                    <h1 class=" text-white flex justify-center   md:text-5xl text-2xl  font-bold tracking-widest mb-[0px] md:mb-[50px] mt-[40px]">
                        ARTIFICIUM CLUBS
                    </h1>

                </Reverse>

                <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-16 gap-y-5 md:gap-y-11 p-11`}>
                    {cards.map((card, index) => (
                        <Reveal>
                            <div>
                                <Card key={index} {...card} />
                            </div>
                        </Reveal>
                    ))}
                    {Second.map((card, index) => (
                        <Reveal>
                            <div>
                                <Card key={index} {...card} />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </>
    );
}
export default ClubSection;