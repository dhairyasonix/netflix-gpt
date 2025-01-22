import { useDispatch } from "react-redux";
import { API_OPtion } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    

    // fetching trailler and updating a store vith trailler videro
    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?", API_OPtion);
        const json = await data.json()

        const filterData = json?.results?.filter(video => video.type === "Trailer")
        const trailer = filterData?.length ? filterData[0] : json?.results[0]

        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
         getMovieVideo();
    }, []);
}

export default useMovieTrailer