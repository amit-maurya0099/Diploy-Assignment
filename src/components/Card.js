import React from 'react'
import { CiStar } from "react-icons/ci";

const Card = ({name, company}) => {
  return (
    <div className='w-[400px] h-[250px] shadow-2xl bg-white rounded-lg p-4'>
        <div className='flex gap-3 '>
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZi_TV-wmPWub9rAlqWazO3GfSOotF8_XEw&s"className='size-20 rounded-full ' alt="/"></img>  
          <div>
        <h1 className='font-xl font-bold'>{name}</h1>
        <p className='text-green-600 font-lg'>{company}</p>
        <p className='flex gap-1 text-orange-500'>
            <CiStar />
            <CiStar/>
            <CiStar/>
            <CiStar/>
            </p>

        </div>
         
        </div>
        <p className='p-2'>Printify has been an incredible service for us musicians unable to keep large amount of inventory.Now we can create design previously too expensive to print without having to have 1000 shirts in our jam space. Thanks Printify!</p>
        
    </div>
  )
}

export default Card
