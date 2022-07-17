 import React, {useState, useEffect} from 'react'
import { MdFastfood } from 'react-icons/md'
import {categories} from '../Utils/data'
import { motion } from 'framer-motion';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
const MenuContainer = ({flag}) => {

  const [filter, setfilter] = useState('Chicken');

  const [{foodItems}, dispatch] = useStateValue();

  // useEffect(() => {}, [filter])

  return (
    <div>
      <section className='w-full my-6' id='menu'>
        <div className='w-full flex flex-col items-center justify-center'>
          <p className='text-2xl font-semibold capitalize 
              text-headingColor relative before:absolute 
              before:rounded-lg before:content before:w-16 before:h-1 
              before:-bottom-2 before:left-0 before:bg-gradient-to-tr 
              from-orange-400 to-orange-600 transition-all ease-in-out 
              duration-100 mr=auto'> Our african Specialty food
         </p>
          
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
         <div className={`w-full flex items-center justify-between lg:justify-center gap-8 py-6 scroll-smooth my-12 ${flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"}`}>
          {categories && categories.map(category => (
          
          <motion.div whileTap={{scale: 0.75}} key={category.id} className={`group ${filter === category.urlParamName ? 'bg-cartNumBg' : 'bg-card'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl 
          flex flex-col gap-3 items-center justify-center 
          hover:bg-cartNumBg  `} onClick={()=>setfilter(category.urlParamName)}>

            <div className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName ? 'bg-white': 'bg-cartNumBg'} group-hover:bg-white
            flex items-center justify-evenly `}>
              <MdFastfood className={`${filter === category.urlParamName ? ' text-textColor': 'text-white'} group-hover:text-textColor text-lg `}/> 
            </div>
             <p className={`text-sm ${filter === category.urlParamName ? 'text-white':' text-textColor' } group-hover:text-white`}> {category.name}</p>
          </motion.div>
          ))} 
         </div>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
         <div className='w-full'>
          <RowContainer flag={false} data={foodItems?.filter(n => n.category === filter)}/>
         </div>
        </div>
      </section>
    </div>
  )
}

export default MenuContainer