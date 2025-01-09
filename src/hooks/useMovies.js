import { useDispatch } from "react-redux";
import { API_OPtion } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovies =()=>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPtion);
      const json = await data.json();
      
      dispatch(addNowPlayingMovies(json?.results));
    };
    
    useEffect(()=>{
    getNowPlayingMovies()
    },[]);
};

export default useMovies;