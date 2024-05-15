import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import Banner from '../Components/Banner'
import GlobalAPI from '../Services/GlobalAPI'
import TrendingGames from '../Components/TrendingGames'
import GamesByGenreId from '../Components/GamesByGenreId'

function Home() {
    const [allGameList,setAllGameList]=useState();
    const [gameListByGenres,setGameListByGenres]=useState([]);
    const [selectGenreName,setSelectGenresName]=useState('Action');
    useEffect(()=>{
        getAllGamesList();
        getGameListByGenreId();
    },[])
    const getAllGamesList=()=>{
        GlobalAPI.getAllGames.then((resp)=>{
            //console.log(resp.data.results)
            setAllGameList(resp.data.results)
        })
    }

    const getGameListByGenreId=(id)=>{
        console.log("Genre ID",id)
        GlobalAPI.getGameListByGenreId(id).then((resp)=>{
            console.log("Game List By GenreId",resp.data.results)
            setGameListByGenres(resp.data.results)
        })
    }
  return (
    <div className='grid grid-cols-4 px-8'>
        <div className='hidden md:block'>
            <GenreList 
            setGenresId={(setGenresId)=>getGameListByGenreId(setGenresId)}
            selectedGenresName={(name)=>setSelectGenresName(name)}/>
        </div>
        <div className='col-span-4 md:col-span-3 h-full'>
           {allGameList?.length>0? 
           <div>
           <Banner gameBanner={allGameList[0]}/>
           <TrendingGames gameList={allGameList}/>
           <GamesByGenreId gameList={gameListByGenres} 
           selectedGenresName={selectGenreName}/>
           </div>
           :null}
        </div>
    </div>
  )
}

export default Home