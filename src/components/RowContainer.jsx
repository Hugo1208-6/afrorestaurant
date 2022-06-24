import React, {useEffect, useRef} from 'react'
import {FaCartPlus } from "react-icons/fa";
import { motion } from 'framer-motion'


const RowContainer = ({ flag, data, scrollValue}) => {
 
  const RowContainer =  useRef()
  useEffect(() => {
    RowContainer.current.scrollLeft += scrollValue;

  }, [scrollValue]);
 
  return (
    <div
    ref = {RowContainer}
    
     className={`w-full flex items-center gap-3 scroll-smooth my-12  ${flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"}`}>
      {data && data.map(item => (
        <div key={item?.id} className=' w-275 h-[155px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg my-12 hover:drop-shadow-lg backdrop-blur-lg py-2 px-4
        flex flex-col items-center justify-between'>
        <div className='w-full flex items-center justify-between'>
         <motion.div className='w-40 h-40 -mt-14 overflow-hidden drop-shadow-2xl' whileHover={{ scale:1.2}} ><img src={item?.imageURL} alt="" className='w-ful h-full object-contain' /></motion.div> 
          <motion.div whileTap={{ scale:0.75} } className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md '> <FaCartPlus className=' text-white'/>
          </motion.div>
        </div>
        <div className='w-full flex flex-col  items-end justify-end -mt-10'>
          <p className=' text-textColor font-semibold text-base md:text-lg'>{item?.title}
           </p>
           <p className='mt-1 text-sm text-gray-500'>{item?.calories}</p>

           <div className='flex items-center gap-8'>
            <p className='text-lg text-headingColor font-semibold'>
              <span className=' text-sm text-red-500'>$</span>{item?.price}
            </p>
           </div>
        </div>
       </div>
      ))}
    </div>
  )
}

export default RowContainer
