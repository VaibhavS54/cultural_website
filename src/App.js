import "./App.css";
import Footer from "./footer/footer";
import Nav from "./navbar/Nav";
import ClubSection from "./Clubs/ClubSection";
import Hero from "./home/hero";
import About from "./about/about";
import Gallery from "./gallery/Gallery";
import InstaPost from "./InstaPost";
import InstaDetail from "./InstaDetail";
import ReflectionClubpage from "./ClubComponents/reflectionClubpage";
import Samwaad from "./ClubComponents/samwaadClubpage";
import Mysteve from "./ClubComponents/mysteveClubpage";



function App() {

   
  return (
    <><div className="">
      <Nav />

      <Hero />
      <About />
      <ClubSection />
      <Gallery />
      <Footer />
      {/*<ReflectionClubpage/>
      <Samwaad/>
      <Mysteve/>*/}
      <InstaPost account="reflection_iiitbh"/>
      
     
      </div>
    </>
  );
}

export default App;
