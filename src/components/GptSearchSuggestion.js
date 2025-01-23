import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptSearchSuggestion = () => {
  const { gptMoviesResult,
    moviesName } = useSelector(store => store.gpt);
  if (!moviesName) return null;


  return (
    <div className='bg-black p-2 md:m-4 text-white bg-opacity-90'>
      <div>
        {moviesName?.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={gptMoviesResult[index]} />)}
      </div>
    </div>
  )
}

export default GptSearchSuggestion