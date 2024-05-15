import React,{ useEffect } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

function Banner({gameBanner}) {
    /*useEffect(()=>{
        console.log("GameBanner",gameBanner)
    },[])*/
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
            <h2 className='text-[25px] text-white font-bold'> {gameBanner.name} </h2>
            <button className='bg-blue-800 text-white px-2 p-1'>Get Now</button>
        </div>
        <img src={gameBanner.background_image} 
        className='md:h-[320px] w-full oject-cover
        rounded-xl'/>
    </div> 
  )
}

export default Banner