import React from 'react';
import Footer from "./footer/footer";
import ClubSection from "./Clubs/ClubSection";
import Hero from "./home/hero";
import About from "./about/about";
import Gallery from "./gallery/Gallery";

const MainPage = () => {
  return (<>
    <Hero />
      <About />
      <ClubSection />
      <Gallery />

      <Footer />
      </>
  );
};

export default MainPage;
