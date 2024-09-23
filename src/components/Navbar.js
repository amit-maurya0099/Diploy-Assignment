import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const Navbar = () => {
  let [isOpen,setIsOpen]=useState(false);

  const handleClick=()=>{
    
   setIsOpen((prevState)=>!prevState);
   console.log(isOpen)
  }
  

  
  return ( 
    <div className='w-[700px] md:w-full bg-white shadow-xl sticky top-0 '>
     <div className=' md:mx-[15%] flex justify-between items-center h-16' >
        <img src="https://i.pinimg.com/originals/95/e2/f3/95e2f3f9bfa4f9ac5b61fa7f4f8ef0d1.png" alt="/" className='size-36 hidden lg:block object-contain'></img>
        <div className='flex  lg:hidden items-center'>
          <GiHamburgerMenu className='text-green-500  size-16 object-contain' onClick={handleClick} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRryefszFbZDOX_tl7yMe_XHEnoKOZejzIPw&s" alt="/" className='size-16 object-contain'></img>
        </div>
        {isOpen && 
          <div className='bg-white shadow-xl  rounded-lg px-4 w-[150px] absolute z-10 top-16 left-0'>
          <ul className='flex  flex-col gap-4 text-xl' >
            <li className='cursor-pointer'>Catalog</li>
            <li className='cursor-pointer'>How it works</li>
            <li className='cursor-pointer'>Pricing</li>
            <li className='cursor-pointer'>Blog</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Use-cases</li>
            <li className='cursor-pointer'>Need-help?</li>
          </ul>

        </div>
        }

        <div className='hidden md:block'>
          <ul className='flex list-none  gap-8  font-semibold ' >
            <li className='cursor-pointer'>Catalog</li>
            <li className='cursor-pointer'>How it works</li>
            <li className='cursor-pointer'>Pricing</li>
            <li className='cursor-pointer'>Blog</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Use-cases</li>
            <li className='cursor-pointer'>Need-help?</li>
          </ul>

        </div>
        
        <div className='flex gap-2'>
            <button className='font-semibold border border-gray-500 px-3 py-1'>Log In</button>
            <button className='font-semibold bg-green-500 text-white  px-2 py-1'>Sign Up </button>
        </div>
     </div>
    </div>
  )
}

export default Navbar
