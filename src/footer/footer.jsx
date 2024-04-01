import React from 'react'
import Itemscontainer from './itemscontainer'

import fb from "./icons/icons8-facebook-f-24 (2).png"
import insta from "./icons/icons8-instagram-24.png"
import linkedin from "./icons/icons8-linkedin-24 (1).png"
import twitter from "./icons/icons8-twitter-24.png"




const Footer=()=> {
  return (
    <footer id='footer' className="relative object-bottom bottom-0 bg-gray-900 text-white sm:w-full
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
       {/*} <div class="social-container"> 
      <h3>Social Follow</h3>
      <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
  </div>
          <input type='text' placeholder='Enter name' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'>
          </input>
          <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full'>
            Request code
  </button>*/}
  
      </div>
      <Itemscontainer></Itemscontainer>
      <hr className='w-9/10 ml-4 mr-4 object-center'/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 pt-2 text-gray-400 text-sm pb-8">
        <span className='text-left ml-4'>All right reserved @2024, Artificium</span>
      <span className='text-left mr-4 sm:text-right ml-4 lg:text-right ml-4'>Terms & conditions | Privacy Policy</span>
      
      </div>
    </footer>
  )
}

export default Footer
