import { useDispatch, useSelector } from "react-redux";
import { API_OPtion } from "../utils/constants";
// import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcominfMovies } from "../utils/movieSlice";

const useMovies = (movies) => {

  const dispatch = useDispatch();
  const { nowPlyingMovies } = useSelector(store => store.movies)
  //now_playing
  //addNowPlayingMovies
  const getNowPlayingMovies = async () => {
    
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movies + "?page=1", API_OPtion);
    const json = await data.json();
    if (movies === "now_playing")
      dispatch(addNowPlayingMovies(json?.results));
    if (movies === "popular")
      dispatch(addPopularMovies(json?.results));
    if (movies === "top_rated")
      dispatch(addTopRatedMovies(json?.results));
    if (movies === "upcoming")
      dispatch(addUpcominfMovies(json?.results));
  };

  useEffect(() => {
    !nowPlyingMovies && getNowPlayingMovies()//memoitation
  }, []);
};

export default useMovies;