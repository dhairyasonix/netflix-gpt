import React, { useRef } from 'react'
import lang from '../utils/LanguageConstants'
import { useSelector } from 'react-redux'
import { testDeepAI } from './deepaiService'
// import { genrateMovies } from './deepaiService'

export const GptSearchBar = () => {
    const langugae = useSelector(store=>store.config.lan)

    const input = useRef()
    const heldleSearch=async()=>{
      testDeepAI();
// console.log(data);
    }

  return (
    <div className=''>
        <form onSubmit={(e)=>e.preventDefault()} className=' bg-black grid grid-cols-12'>
            <input ref={input} className='p-4 m-4 col-span-8 rounded-lg' type='text' placeholder={lang[langugae].gptSearchPlaceholder}/>
            <button  onClick={heldleSearch} className='p-4 mr-4 my-4 bg-red-600 text-white rounded-lg col-span-4'>{lang[langugae].search}</button>
        </form>
    </div>
  )
}
