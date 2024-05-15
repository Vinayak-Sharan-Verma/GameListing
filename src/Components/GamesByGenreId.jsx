import React,{ useEffect } from 'react'

function GamesByGenre({gameList,selectedGenresName}) {
    useEffect(()=>{
        console.log("GameList",gameList)
    },[])
  return (
    <div>
        <h2 className='font-bold text-[30px] dark:text-white mt-5 mb-5'> {selectedGenresName} Games</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {gameList.map((item)=>(
            <div className='bg-[#76a8f75e] p-3 rounded-lg pb-10 h-full hover:scale-110 transition-all duration-300 cursor-pointer'>
                <img src={item.background_image} 
                className='w-full h-[80%] rounded-xl object-cover'/>
                <h2 className='text-[20px] dark:text-white font-bold'>{item.name}
                <span className='p-0.5 rounded-sm ml-2 text-[10px] 
                bg-green-200 text-green-700 font-medium'>{item.metacritic}</span></h2>
                <h2 className='text-gray-500 dark:text-gray-300'>⭐{item.rating}
                💬{item.reviews_count}🔥{item.suggestions_count}</h2>
            </div>
        ))}
        <h2 className="text-center"></h2>
    </div>
    </div>
  )
}

export default GamesByGenre