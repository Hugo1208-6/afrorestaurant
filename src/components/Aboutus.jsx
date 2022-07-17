import React from 'react'
import elle_moi from './img/elle_moi.JPG'


const Aboutus = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2  w-full ' id='home'>
   
   <div className='py-7  w-[40%] h-30 flex-1 drop-shadow-xl'>
      <img src={elle_moi} alt="us" className='rounded-3xl' />
    </div>
    <div className='p-1 px-1 flex-1'>
       <p className='text-2xl font-semibold text-center capitalize 
        text-headingColor relative before:absolute
         before:rounded-lg before:content before:w-12 before:h-1 
         before:-bottom-2 before:center-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'> OUR STORY
         </p><br />
      <div className=' font-light '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis obcaecati quod quidem quos ullam ipsa dignissimos earum adipisci nobis expedita pariatur 
        voluptatibus, quae eligendi ad magnam recusandae commodi optio illo?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis obcaecati quod quidem quos ullam ipsa dignissimos earum adipisci nobis expedita pariatur 
        voluptatibus, quae eligendi ad magnam recusandae commodi optio illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis obcaecati quod quidem quos ullam ipsa dignissimos earum adipisci nobis expedita pariatur 
        voluptatibus, quae eligendi ad magnam recusandae commodi optio illo?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis obcaecati quod quidem quos ullam ipsa dignissimos earum adipisci nobis expedita pariatur 
      </div>
    </div>
    
  </div>)
}

export default Aboutus

