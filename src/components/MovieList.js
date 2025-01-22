import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    if (!movies) return;
    //title
    return (
        <div className='px-6 text-white'>

            <h1 className='text-3xl py-4'>{title}</h1>

            <div className='flex scroll-container overflow-x-scroll scrollbar-hide'>

                <div className='flex'>
                    {movies?.map(movies => <MovieCard key={movies.id} posterPath={movies?.poster_path} />)}
                </div>



            </div>
        </div>
    )
}

export default MovieList