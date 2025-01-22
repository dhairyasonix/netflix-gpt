import React from 'react'
import { GptSearchBar } from './GptSearchBar'
import GptSearchSuggestion from './GptSearchSuggestion'
import { BACKGROUND } from '../utils/constants'
//changes
const GptSerchPage = () => {
  return (
    <div>
      <div>
        <img className="fixed -z-10" src={BACKGROUND} alt='loginBg' />
      </div>
      <div className='pt-[10%] '>
        <GptSearchBar />
        <GptSearchSuggestion />
      </div>
    </div>
  )
}

export default GptSerchPage