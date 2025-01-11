import React from 'react'
import lang from '../utils/LanguageConstants'
import { useSelector } from 'react-redux'

export const GptSearchBar = () => {
    const langugae = useSelector(store=>store.config.lan)
  return (
    <div className=''>
        <form className=' bg-black grid grid-cols-12'>
            <input className='p-4 m-4 col-span-8 rounded-lg' type='text' placeholder={lang[langugae].gptSearchPlaceholder}/>
            <button className='p-4 mr-4 my-4 bg-red-600 text-white rounded-lg col-span-4'>{lang[langugae].search}</button>
        </form>
    </div>
  )
}
