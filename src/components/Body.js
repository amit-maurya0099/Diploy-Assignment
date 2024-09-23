import React from 'react'
import { IoIosCheckmark } from "react-icons/io";
import Icon from "../Icon";
import img from '../img.png'
import Card from './Card';


const Body = () => {
  return (
    <>
    <div className='w-[700px] md:w-[80vw]  md:mx-[15%] m-auto md:flex py-12 px-10 md:px-8 '>
       
        <div className=' w-full md:w-[40%] text-wrap  pt-44'>
            <h1 className='text-[3rem] font-bold'>Create and sell custom products </h1>
            <div className='list-none text-[1.5rem] md:text-[1rem]'>
                <div className='flex items-center '><IoIosCheckmark className='text-green-500 size-10' />100% Free to use</div>
                 <div className='flex items-center' > <IoIosCheckmark className='text-green-500 size-10 '/> 900+ High-Quality Products</div>
                 <div className='flex items-center'> <IoIosCheckmark className='text-green-500 size-10'/> Largest global print network</div>
                 
            </div>
            <div className=' px-4 flex mt-8 gap-5'>
                <button className='text-white md:px-4 md:py-2 px-6 py-3  text-xl md:text-base bg-green-500 font-semibold  '>Start for free</button>
                <button className= 'md:px-4 md:py-2 px-6 py-3 text-xl md:text-base font-semibold border border-gray-300 '>How it works</button>
            </div>
            <p className='text-green-500 md:text-sm  text-lg font-semibold my-2 px-4'>Trusted by over 8M sellers around the world</p>
           

        </div>
        <div className='mt-4 w-full md:w-[60%] pl-36 '>
             <Icon/>    
        </div>
    </div>
    <div className=' w-[700px] md:w-[80vw] md:mx-[15%]  grid md:grid-cols-3 grid-cols-1 my-[10%] '>
            <div className=' md:px-10  px-20 text-xl md:texgt-base flex flex-col items-center md:block my-4 '>
             <img src="https://printify.com/pfh/assets/legacy/higher-profits.svg" className='size-28 ' alt="/"></img>
               <h1 className='font-bold text-xl my-4 text-gray-800'>Higher Profits</h1>
               <p className='text-center'>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
            </div>
            <div className='md:px-10 px-20 text-xl md:texgt-base flex flex-col items-center md:block my-4 '>
             <img src="https://printify.com/pfh/assets/legacy/robust-scaling.svg" className='size-28' alt="/"></img>
             <h1 className='font-bold text-gray-800 text-xl my-4'>Robust Scaling </h1>
               <p className='text-center'>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
            </div>
            <div className='md:px-10 px-20 text-xl md:texgt-base flex flex-col items-center md:block my-4 '>
             <img src="https://printify.com/pfh/assets/legacy/best-selection.svg" className='size-28' alt="/"></img>
             <h1 className='font-bold text-gray-800 text-xl my-4'>Best Selection</h1>
               <p className='text-center'>With 900+ products and top quality brands, you can choose the best products for your business.</p>
            </div>
            
           
        </div>
      <div className= ' w-[700px] px-4 md:w-[80vw] md:mx-[15%] mb-[10%]'>
        <img src={img} alt="/"></img>
        </div>  

        <div className='w-[700px]  md:w-full  bg-[#F7F7F7] mb-10'>
          <div className=' w-[700px] mx-4 md:mx-[15%] md:grid md:grid-cols-3 pt-28'>
            <div>
              <h1 className='text-[2.5rem] font-bold'>Trusted by over 8M sellers around the world</h1>
            </div>
            <div className=' text-xl mt-8'>
              <p>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
            </div>

          </div>
          <div className=' md:w-[80vw] mx-[15%] pb-10 '>
           <div className=' grid md:flex gap-4 m-4  '>
            <Card name={"Steve"} company={"Diploy"}/>
            <Card name="Marnus" company={"Printify"}/>
            <Card name="Warner" company={"Printify"}/>
            
           
            
            
            </div>
            
            


          </div>
        </div>
    </>
  )
}

export default Body
