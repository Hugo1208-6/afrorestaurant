import React from 'react'
import { HeroData } from '../Utils/data';
import Delivery from './img/delivery.png';
import Afropng from './img/Afropng.png';

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id='home'>
      <div className='py-2 px-2 flex-1 flex flex-col items-start md:items-center justify-center gap-6'>
       <div className='flex items-center gap-2 justify-center bg-orange-200 p-4 py-1 rounded-full '>
        <p className=' text-base text-orange-500 font-semibold'> Catering & Delivery</p>
        <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
          <img src={ Delivery } className='w-full h-full object-contain' alt="delivery" />
        </div>
       </div>

       <p className=' text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
        The best African food in  
        <span className=' text-orange-600 text-[2.4rem] lg:text-[5rem]'> raleigh North Carolina</span> </p>

        <p className=' text-base text-textColor text-center md:text-left md:w-[100%]'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Natus enim quos quasi, quisquam saepe, ab unde ratione, ut eos dolore ea. 
          Tenetur illo dolore saepe? Ex doloribus tenetur iusto. Sint.</p>

          <button type='Button'
           className=' bg-gradient-to-br from-orange-400 to-orange-500
           w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg
            transition-all ease-in-out duration-100  '>
              Order Now
            </button>
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
        <img src={Afropng} className=' ml-auto h-520 w-full lg:w-auto lg:h-650' alt="hero-bg" />
        <div className=' w-full h-full absolute top-0 left-0 flex items-center justify-center  py-4 gap-3 flex-wrap'>
            {HeroData && HeroData.map(n =>(
            <div key={n.id} className=' lg:w-190 w-190  min-w-[190px] p-1 bg-cardOverlay backdrop-blur-md rounded-3xl  items-center justify-center shadow-lg'>
                <img src={n.imageSrc} className=' w-20 lg:w-40  -mt-10 lg:-mt-20' alt="Afro_Food" />
                <p className=' text-xl font-semibold text-textColor mt-2 lg:mt-4'>{n.name} </p>
                <p className=' text-[12px] lg:text-sm text-lighttextgray font-semibold my-1 lg:my-3 '>{n.decp}</p>

                <p className=' text-sm font-semibold text-headingColor'><span className=' text-xs text-red-600'>$</span> {n.price}</p>
            </div>))}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
  