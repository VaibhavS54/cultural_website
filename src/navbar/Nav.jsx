import React, { useState } from 'react'
import { Link } from 'react-scroll'
import close from './navicons/icons8-close-24.png'
import menu from './navicons/icons8-menu-24 (2).png'

import logo from './navicons/logo.png'
import { Hover } from '../Clubs/Reveal'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
  const navigate = useNavigate();
    let Links =[
      {name:"HOME",link:'hero'},
      {name:"ABOUT US",link:"about"},
      {name:"CLUBS",link:"clubs"},
      {name:"EVENTS",link:"/"},
      {name:"CONTACT US",link:"footer"},
      {name:"GALLERY",link:"gallery"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-40'>
      <div className={`md:flex items-center backdrop-blur-[2px] justify-between bg-black bg-opacity-30 py-2 md:px-10 px-7 transition-all duration-500 ease-in ${open ? ' bg-opacity-90':''}`}>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className=''>
        <img src={logo} alt="logo" className="h-auto w-9 md:w-14"  
          onClick={()=>{navigate('/')}}
        />
        </span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer  md:hidden'>
      {/*<ion-icon name={open ? 'close':'menu'}></ion-icon>*/}
      <img src={open ? close:menu} alt="logo" className="cursor-pointer "  />
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static  bg-opacity-5 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[3.1rem] bg-opacity-90':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <Hover>
            <li key={link.name} className='md:ml-8 md:my-0 my-1 font-lato text-left cursor-pointer font-400 text-[0.7rem] md:text-sm leading-5'>
              
              <Link to={link.link} spy={true} smooth={true} offset={-50} duration={500} className='text-white md:text-[1rem] hover:text-gray-400'>{link.name}</Link>
              
            </li>
            </Hover>
          ))
        }
        
      </ul>
      </div>
    </div>
  )
}

export default Nav