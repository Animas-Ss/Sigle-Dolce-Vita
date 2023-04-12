import React from 'react'

const Clients = () => {
  return (
    <div className=' bg-pink-300 p-4 flex flex-col justify-center items-center gap-8 mt-20 xl:mt-0'>
        <h1 className='text-2xl font-medium text-gray-700 text-center'>Marcas con las que trabajamos</h1>
        <div className='flex flex-col md:flex-row items-center flex-wrap gap-10 md:gap-20'>
            <img src="logo.png" className='w-40 grayscale' alt="ledesma logo" />
            <img src="logo.png" className='w-40' alt="ledesma logo" />
            <img src="logo.png" className='w-40' alt="ledesma logo" />
            <img src="logo.png" className='w-40' alt="ledesma logo" />
            <img src="logo.png" className='w-40' alt="ledesma logo" />
        </div>
    </div>
  )
}

export default Clients