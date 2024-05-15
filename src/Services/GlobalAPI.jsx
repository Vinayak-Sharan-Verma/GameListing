import axios from "axios";

const key="613a3de1748f4832bd1844d40637de11"
const axiosCreate=axios.create({
    baseURL:"https://api.rawg.io/api"
})

const getGenreList=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id);
export default{
    getGenreList, getAllGames, getGameListByGenreId
}