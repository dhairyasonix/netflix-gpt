import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='relative aspect-video h-screen w-full pt-[10%] px-20 text-white  bg-gradient-to-t from-black '>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='pt-6 w-1/3 '>{overview}</p>
      <div className='mt-4'>
        <button className='bg-white text-black p-2 px-6 rounded-sm hover:bg-opacity-60'>Play</button>
        <button className='bg-gray-500 text-white p-2 px-6 mx-2 rounded-sm'>More Info</button>
      </div>

    </div>
  )
}

export default VideoTitle