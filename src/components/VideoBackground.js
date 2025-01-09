import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailler'
import { useSelector } from 'react-redux'

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
    useMovieTrailer(movieId)

    return (
        <div className="w-full h-screen absolute overflow-hidden -top-24 ">
        <iframe
            className="w-full aspect-video"
            src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&loop=1&playlist="+trailerVideo?.key}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
    </div>
    )
}

export default VideoBackground