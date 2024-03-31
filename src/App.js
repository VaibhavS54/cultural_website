import "./App.css";
import Footer from "./footer/footer";
import Nav from "./navbar/Nav";
import ClubSection from "./Clubs/ClubSection";
import Hero from "./home/hero";
import About from "./about/about";
import Gallery from "./gallery/Gallery";

function App() {
  return (
    <>
      <Nav />

      <Hero />
      <About />
      <ClubSection />
      <Gallery />

      <Footer />
    </>
  );
}

export default App;
