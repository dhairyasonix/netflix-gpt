import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    if(!posterPath)return;
  return (
    <div className='w-36 pr-4 '>
        <img src={IMG_CDN_URL+posterPath} alt='movie card'></img>
    </div>
  )
}

export default MovieCard