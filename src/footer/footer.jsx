import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo1 from "../assests/ss.png";
import logo2 from "../assests/gscultural.png";
import logo3 from "../assests/collegelogo.png";
// import Itemscontainer from './itemscontainer'

import fb from "./icons/icons8-facebook-f-24 (2).png"
import insta from "./icons/icons8-instagram-24.png"
import linkedin from "./icons/icons8-linkedin-24 (1).png"
import twitter from "./icons/icons8-twitter-24.png"

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          Src: logo3,
          Name: "IIITBH",
          Designation:
            "It is one of the IIITs set up by MHRD, Govt of India in PUBLIC-PRIVATE PARTNERSHIP(PPP) mode. It started functioning from the academic year 2017.",
          Address:
            "Bhagalpur College of Engineering Campus Sabour, Bhagalpur - 813210",
          Link: [
            { href: "https://www.iiitbh.ac.in/", icon: ( <FaGlobe className="hover:text-white transition-colors duration-300 ease-in-out"/> ), },
            { href: "https://www.instagram.com/iiit_bhagalpur_official/", icon: ( <FaInstagram className="hover:text-white transition-colors duration-300 ease-in-out" /> ), },
            { href: "#", icon: ( <FaFacebook className="hover:text-white transition-colors duration-300 ease-in-out" /> ), },
            { href: "#", icon: ( <FaTwitter className="hover:text-white transition-colors duration-300 ease-in-out" /> ), },
            { href: "https://www.youtube.com/@iiitbhagalpur1412", icon: ( <FaYoutube className="hover:text-white transition-colors duration-300 ease-in-out" /> ), },
            { href: "https://www.linkedin.com/company/technical-iiitbh/", icon: ( <FaLinkedin className="hover:text-white transition-colors duration-300 ease-in-out" /> ), },
          ],
        },
        {
          Src: logo1,
          Name: "Dr. Sanjay Kumar",
          Designation: "Cultural Coordinator",
          Address: "Indian Institute of Information Technology, Bhagalpur",
          Link: [
            { href: "#", icon: ( <FaInstagram className="hover:text-white transition-colors duration-300 ease-in-out" /> ), },
            { href: "#", icon: ( <FaLinkedin className="hover:text-white transition-colors duration-300 ease-in-out" /> ), },
          ],
        },
        {
          Src: logo2,
          Name: "Mr. BALA NAVEEN CHEEDI",
          Designation: "G.S. Cultural",
          Address: "Indian Institute of Information Technology, Bhagalpur",
          Link: [
            { href: "#", icon: ( <FaInstagram className="hover:text-white transition-colors duration-300 ease-in-out" /> ), },
            { href: "https://www.linkedin.com/in/bala-naveen-cheedi-80584523a/", icon: ( <FaLinkedin className="hover:text-white transition-colors duration-300 ease-in-out" /> ), },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <footer className="relative object-bottom bottom-0 bg-#202020 text-white sm:w-full
    ">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7 ">
      
        <h1 className="lg:text-4xl text-4xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-4/5" ><span className="text-white font-rambla text-5xl italic leading-16 tracking-tighter cursor-default text-center 
         hover:text-">Artificium</span></h1>
        <div className='grid grid-cols-4 md:grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-6 mr-3 '>
        <a href='https://www.facebook.com/' ><img src={fb} alt="fb" className="cursor-pointer "  /></a>
        <a href='https://www.instagram.com/' ><img src={insta} alt="insta" className="cursor-pointer " /></a>
        <img src={linkedin} alt="linkedin" className="cursor-pointer "/>
        <img src={twitter} alt="twitter" className="cursor-pointer "/>
</div>
</div>
        <div className="flex justify-center items-center border-t py-5 border-neutral-700 ">
          <div>
            <div className="flex justify-center gap-[4vw] mx-[4vw] text-gray-500">
              {this.state.data.map((item, index) => (
                <div
                  className="flex flex-col w-[28vw] gap-[1vw] text-center break-words"
                  key={index}
                >
                  <div className="avatar flex justify-center pb-1">
                    <div className="w-[8vw] rounded-full">
                      <img src={item.Src} alt="/" />
                    </div>
                  </div>
                  <div className="font-semibold text-xs sm:text-xl text-gray-300 from-gray-400 to-white">
                    {item.Name}
                  </div>
                  <div className="text-xs">{item.Designation}</div>
                  <div className="text-xs">{item.Address}</div>
                  <div className="flex justify-center">
                    <ul className="flex list-none text-left">
                      {item.Link.map((item1, index1) => (
                        <Link to={item1.href} target="_blank">
                          <li className="mx-1" key={index1}>
                            {item1.icon}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-black flex justify-center items-center py-3">
          <p className="text-gray-500 text-xs text-center">
            All rights reserved by Technical Board, Indian Institute of
            Information Technology, Bhagalpur, 2024
          </p>
        </div>
      </footer>
    );
  }
}

// export default Footer
