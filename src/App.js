import "./App.css";
import Nav from "./navbar/Nav";
import Samwaad from './ClubComponents/samwaadClubpage';
import Sargam from './ClubComponents/sargamClubpage';
import Gyrate from './ClubComponents/gyrateClubpage';
import Cinemara from './ClubComponents/cinemaraClubpage';
import Animeverse from './ClubComponents/animeverseClubpage';
import ReflectionClubpage from './ClubComponents/reflectionClubpage';
import Xpressions from './ClubComponents/xpressionClubpage';
import Mysteve from './ClubComponents/mysteveClubpage';
import MainPage from "./MainPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./footer/footer";


function App() {

   
  return (
    <><div className=" overflow-x-hidden	">
      <Router>
      <Nav />
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reflection" element={<ReflectionClubpage />} />
        <Route path="/samwaad" element={<Samwaad />} />
        <Route path="/sargam" element={<Sargam />} />
        <Route path="/gyrate" element={<Gyrate />} />
        <Route path="/cinemara" element={<Cinemara />} />
        <Route path="/animeverse" element={<Animeverse />} />
        <Route path="/xpressions" element={<Xpressions />} />
        <Route path="/mysteve" element={<Mysteve />} />
      </Routes>
    </Router>
    

      
      
      {/*<ReflectionClubpage/>
      <Samwaad/>
      <Mysteve/>
      <InstaPost account="reflection_iiitbh"/>*/}
      
     
      </div>
    </>
  );
}

export default App;
