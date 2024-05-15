import React,{ useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

function GenreList({setGenresId, selectedGenresName}) {
    const [genreList,setgenreList] = useState([])
    const [activeIndex,setActiveIndex] = useState(0)
    useEffect(()=>{
        getGenreList();
    },[])
    const getGenreList=()=>{
        GlobalAPI.getGenreList.then((resp)=>{
            console.log(resp.data.results);
            setgenreList(resp.data.results);
        })
    }
  return (
    <div className=''>
        <h2 className='text-[25px] font-bold dark:text-white'>Genres</h2>
        {genreList.map((item,index)=>(
            <div 
            onClick={()=>{setActiveIndex(index);setGenresId(item.id);selectedGenresName(item.name)}}
            className={`flex gap-2 items-ceter mb-2 cursor-pointer 
            hover:bg-gray-400 p-2 group rounded-lg 
            hover:dark:bg-gray-600
            ${activeIndex==index?"bg-gray-400 dark:bg-gray-600":null}`}>
                <img src={item.image_background} 
                className={`w-[50px] h-[50px] object-cover rounded-lg
                group-hover:scale-105 transition-all ease-out duration-300
                ${activeIndex==index?"scale-120":null}`}/>
                <h3 className={`p-2  dark:text-white text-[20px] group-hover:
                font-bold transition-all ease-out duration-300
                ${activeIndex==index?"font-bold":null}`}> {item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default GenreList