import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
  
    <div className=' grid grid-cols- md:grid-cols-4 gap-6 w-screen  bg-neutral-400' id='home absolute flex flex-col px-[50%] md:min-w-720px bottom-[-650%] mx-1 md:-translate-x-1/2 bg-zinc-20 lg:bottom-[-180%]'>
       <div>
        <p className='flex flex-initial p-4 text-headingColor'>African History</p>
         <ul className='flex flex-col    '>
            <Link to={"/"}><li className='border-b-2 p-2 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>African food History</li></Link> 
           <li className=' border-b-2 p-1 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Cuisine List</li>
           <Link to={"/Aboutus"}> <li className='border-b-2 p-1 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Nutrition Facts</li></Link>
            <Link to={"/Service"}><li className='border-b-2 p-1 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>State Guide</li></Link>
            
        </ul>
       </div> 
        <div>
            <p className='flex flex-initial p-4 text-headingColor'>General Info</p>
             <ul className='flex flex-col    '>
            <Link to={"/"}><li className='border-b-2 p-2 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li></Link> 
           <li className='border-b-2 p-2 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Privacy Policy</li>
           <Link to={"/Aboutus"}> <li className='border-b-2 p-2 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li></Link>
            <Link to={"/Service"}><li className='border-b-2 p-2 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Terms of User</li></Link>
            
        </ul>
        </div>
        <div>
            <p className='flex flex-initial p-4 text-headingColor'>Culture</p>
             <ul className='flex flex-col    '>
            <Link to={"/"}><li className='border-b-2 p-2 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home Food</li></Link> 
           <li className='border-b-2 p-2 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Best Recipe</li>
           <Link to={"/Aboutus"}> <li className='border-b-2 p-2 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Cadering</li></Link>
            <Link to={"/Service"}><li className='border-b-2 p-2 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li></Link>
            
        </ul>
        </div>
        <div>
            <p className='flex flex-initial p-4 text-headingColor'>More Food</p>
            <ul className='flex flex-col    '>
            <Link to={"/"}><li className='border-b-2 p-2 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li></Link> 
           <li className='border-b-2 p-2 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
           <Link to={"/Aboutus"}> <li className='border-b-2 p-2 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li></Link>
            <Link to={"/Service"}><li className='border-b-2 p-2 text-base text-texteColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li></Link>
            
        </ul>
        </div>
    </div>
  )
}

export default Footer
