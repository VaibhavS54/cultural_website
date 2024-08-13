import React from "react";
import { Basic } from "../Clubs/Reveal";
import grides from '../assests/Vector.svg';

function About() {
  return (
    <div  
      style={{backgroundImage:`url(${grides})`}}
      className="bg-contain bg-center bg-#202020" 
      id="about"
    >
      
      <Basic>
        <h1 className="text-center text-3xl md:text-5xl lg:text-5xl mt-10 md:mt-20 mb-10 md:mb-20 font-bold tracking-widest text-white ">
          ABOUT US
        </h1>
      </Basic>
      <div className="text-white text-lg md:text-xl px-8 sm:px-12 md:px-24">
        <h3 className="mb-6">
          <p>
            At Artificium, we believe in celebrating the vibrant tapestry of
            cultures that intertwine within our college community. Like a
            kaleidoscope, we offer a mesmerizing array of events and activities
            that bring people together, fostering connections and friendships
            that last a lifetime.
          </p>
        </h3>

        <div className="summary2 mb-6">
          <h3 className="py-4">
            <p>
              From the soothing embrace of Nebula's melodies to the exhilarating
              energy of our festive celebrations and grand events, Artificium is
              a melting pot of creativity and expression. Here, budding
              visionaries are encouraged to unleash their talents, enriching
              lives and creating unforgettable moments.
            </p>
          </h3>
        </div>
        <div className="summary3 mb-6">
          <h3 className="py-4">
            <p>
              Our diverse array of clubs ensures that there's something for
              everyone. Whether you're a cinephile craving the magic of the
              silver screen with Cinemara, a music enthusiast looking to
              harmonize with Tarang-Sargam, or an aficionado of the arts seeking
              inspiration with Reflection, there's a club waiting to welcome you
              into our creative family.
            </p>
          </h3>
        </div>
        <div className="summary4">
          <h3 className="py-4">
            <p>
              But the magic of Artificium doesn't stop there. Gyrte, Mysteve,
              AnimeVerse, Expression, and Samwaad Club offer even more
              opportunities to explore, learn, and grow together.
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
