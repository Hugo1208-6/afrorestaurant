import React from 'react'
import Logo from './img/logo.png'
import {FaCartPlus } from "react-icons/fa";
const Header = () => {
  return (
    <header className="fixed z-50 w-screen  p-6 px-16">
        {/* desktop && tablet */}
     <div className="hidden md:flex w-full h-full ">
        <div className="flex items-center gap-2"><img src={Logo} className="w-9 object-cover" alt="logo" />
        <p className="text-headingColor text-xl font-bold">Elle&Moi</p>
        </div>

        <ul className='flex items-center gap-8 ml-auto'>
            <li className='text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
            <li className='text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
        </ul>

        <div className="relative flex items-center justify-center ">
            < FaCartPlus className='text-textColor text-2xl ml-8 cursor-pointer'/>
            <div className="w-5 h-5 rounded-full  bg-cartNumBg flex items-center justify-center">
                <p className='text-xs text-white fontr-semibold'>2</p>
            </div>
        </div>
    
     </div> 


     {/* Mobile */}
     <div className="flex md:hidden w-full h-full"> </div>


    </header>
  )
}

export default Header
