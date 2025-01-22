import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailler'
import { useSelector } from 'react-redux'

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
    useMovieTrailer(movieId)

    return (
        <div className="w-full h-full absolute overflow-hidden -top-32 ">
        <iframe
            className="w-full h-screen md:h-auto aspect-video"
            src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&loop=1&playlist="+trailerVideo?.key}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
    </div>
    )
}

export default VideoBackground