import React, { useState } from 'react'

import close from './navicons/icons8-close-24.png'
import menu from './navicons/icons8-menu-24 (2).png'
import logo from './navicons/logo.png'

const Nav = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"ABOUT US",link:"/"},
      {name:"CLUBS",link:"/"},
      {name:"EVENTS",link:"/"},
      {name:"CONTACT US",link:"/"},
      {name:"GALLERY",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-black bg-opacity-30 py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className=' mr-1 pt-2'>
        {/*<img src={logo} alt="logo" className="h-14 w-14"  />*/}
        </span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-2 cursor-pointer md:hidden'>
      {/*<ion-icon name={open ? 'close':'menu'}></ion-icon>*/}
      <img src={open ? close:menu} alt="logo" className="cursor-pointer "  />
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black bg-opacity-5 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 md:my-0 my-5 font-lato text-left font-400 text-lg leading-5'>
              <a href={link.link} className='text-white hover:text-gray-400 duration-500 '>{link.name}</a>
            </li>
          ))
        }
        
      </ul>
      </div>
    </div>
  )
}

export default Nav