import React from 'react'
import { GptSearchBar } from './GptSearchBar'
import GptSearchSuggestion from './GptSearchSuggestion'
import { BACKGROUND } from '../utils/constants'

const GptSerchPage = () => {
  return (
    <div>
      <div>
        <img className="absolute -z-10" src={BACKGROUND} alt='loginBg' />
      </div>
      <div className='pt-[10%] w-[50%] mx-auto '>
        <GptSearchBar />
        <GptSearchSuggestion />
      </div>
    </div>
  )
}

export default GptSerchPage