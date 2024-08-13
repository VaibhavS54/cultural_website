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

import fb from "./icons/icons8-facebook-f-24 (2).png";
import insta from "./icons/icons8-instagram-24.png";
import linkedin from "./icons/icons8-linkedin-24 (1).png";
import twitter from "./icons/icons8-twitter-24.png";

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
            {
              href: "https://www.iiitbh.ac.in/",
              icon: (
                <FaGlobe className="hover:text-white transition-colors duration-300 ease-in-out" />
              ),
            },
            {
              href: "https://www.instagram.com/iiit_bhagalpur_official/",
              icon: (
                <FaInstagram className="hover:text-white transition-colors duration-300 ease-in-out" />
              ),
            },
            {
              href: "#",
              icon: (
                <FaFacebook className="hover:text-white transition-colors duration-300 ease-in-out" />
              ),
            },
            {
              href: "#",
              icon: (
                <FaTwitter className="hover:text-white transition-colors duration-300 ease-in-out" />
              ),
            },
            {
              href: "https://www.youtube.com/@iiitbhagalpur1412",
              icon: (
                <FaYoutube className="hover:text-white transition-colors duration-300 ease-in-out" />
              ),
            },
            {
              href: "https://www.linkedin.com/company/technical-iiitbh/",
              icon: (
                <FaLinkedin className="hover:text-white transition-colors duration-300 ease-in-out" />
              ),
            },
          ],
        },
        {
          Src: logo1,
          Name: "Dr. Sanjay Kumar",
          Designation: "Cultural Coordinator",
          Address: "Indian Institute of Information Technology, Bhagalpur",
          Link: [
            {
              href: "#",
              icon: (
                <FaInstagram className="hover:text-white transition-colors duration-300 ease-in-out" />
              ),
            },
            {
              href: "#",
              icon: (
                <FaLinkedin className="hover:text-white transition-colors duration-300 ease-in-out" />
              ),
            },
          ],
        },
        {
          Src: logo2,
          Name: "Mr. BALA NAVEEN CHEEDI",
          Designation: "G.S. Cultural",
          Address: "Indian Institute of Information Technology, Bhagalpur",
          Link: [
            {
              href: "#",
              icon: (
                <FaInstagram className="hover:text-white transition-colors duration-300 ease-in-out" />
              ),
            },
            {
              href: "https://www.linkedin.com/in/bala-naveen-cheedi-80584523a/",
              icon: (
                <FaLinkedin className="hover:text-white transition-colors duration-300 ease-in-out" />
              ),
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <footer className="bg-gray text-white w-full">
        <div className="flex flex-col md:flex-row md:justify-between items-center px-4 sm:px-12 py-7">
          <h1 className="text-4xl lg:text-5xl font-semibold italic text-center md:text-left mb-6 md:mb-0">
            <span className="font-rambla">Artificium</span>
          </h1>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/">
              <img src={fb} alt="fb" className="cursor-pointer w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={insta} alt="insta" className="cursor-pointer w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="https://www.linkedin.com">
              <img src={linkedin} alt="linkedin" className="cursor-pointer w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="https://www.twitter.com">
              <img src={twitter} alt="twitter" className="cursor-pointer w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
        <div className="border-t border-neutral-700 py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-12">
            {this.state.data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden mb-3">
                  <img src={item.Src} alt={item.Name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="text-gray-300 font-semibold text-sm md:text-lg mb-1">{item.Name}</div>
                <div className="text-xs md:text-sm mb-1">{item.Designation}</div>
                <div className="text-xs md:text-sm mb-2">{item.Address}</div>
                <div className="flex justify-center space-x-2">
                  {item.Link.map((item1, index1) => (
                    <a href={item1.href} target="_blank" rel="noopener noreferrer" key={index1}>
                      <item1.icon.type className="text-lg md:text-xl hover:text-white transition-colors duration-300 ease-in-out" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black text-center py-3">
          <p className="text-gray-500 text-xs">
            All rights reserved by Cultural Board, Indian Institute of Information Technology, Bhagalpur, 2024
          </p>
        </div>
      </footer>
    );
  }
}
