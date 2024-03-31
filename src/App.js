import './App.css';
import Footer from "./footer/footer"
import Nav from './navbar/Nav';
import ClubSection from './Clubs/ClubSection';
import Hero from './home/hero';
import About from './about/about';

function App() {
  return (
  <>
  <Nav/>
  
    <Hero/>
    <About/>
   <ClubSection />

  
  
    <Footer/>
    
    
    </>
  );
}

export default App;