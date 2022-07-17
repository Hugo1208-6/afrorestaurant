import React from 'react'

const Footer = () => {
  return (
  
    <div className=' grid grid-cols- md:grid-cols-4 gap-2 w-screen bg-white' id='home absolute flex flex-col px-[50%] md:min-w-720px bottom-[-650%] mx-1 md:-translate-x-1/2 bg-zinc-20 lg:bottom-[-180%]'>
       <div>
        <p className='flex flex-initial p-4 text-headingColor'>African History</p>
        <p className=' justify-between'>Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Nam, eligendi. Voluptatibus 
        </p>
       </div> 
        <div>
            <p className='flex flex-initial p-4 text-headingColor'>Contact</p>
            <p className=' justify-between'> illo natus et error aperiam libero, voluptates quos. Voluptates itaque </p>
        </div>
        <div>
            <p className='flex flex-initial p-4 text-headingColor'>Culture</p>
            <p className=' justify-between'>quibusdam voluptatem in numquam, 
            cum perferendis omnis et magni?</p>
        </div>
        <div>
            <p className='flex flex-initial p-4 text-headingColor'>More Food</p>
            <p className=' justify-between'>cum perferendis omnis et magni?</p>
        </div>
    </div>
  )
}

export default Footer
