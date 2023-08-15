import React from 'react'
import bgImage from '../../assets/Hero/hero.jpg'
const Banner = () => {
    return (
        <div className='w-full h-screen bg-black text-white'
        >
            < div className='w-full h-screen' >
                <img
                    className='top-0 left-0 w-full h-screen object-cover '
                    src={bgImage}
                    alt='/'
                />
                <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                    <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                        <p>RECENT LAUNCH</p>
                        <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
                            BEYOND SPACE & COSMOS
                        </h1>
                        <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                            FROM EARTH TO THE COSMOS: IGNITING EXPLORATION THROUGH SPACE TRAVEL AND SATELLITES.
                        </p>
                        <button className='bg-transparent hover:bg-white-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-black     rounded '>Reserve Now</button>
                    </div>
                </div>
            </ div>
        </div >
    )
}
export default Banner
