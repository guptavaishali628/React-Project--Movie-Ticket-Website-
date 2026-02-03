import React from 'react'
import '../app.css'

const MovieCardData = ({data}) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <div className='rounded-3xl border border-gray-300 hover:shadow-lg cursor-zoom-in bg-white hover:scale-90 transition-all ease-100 duration-300'>  
          <img src={item.image} alt={item.name} className='w-full object-fit rounded-t-3xl mb-4'/>
          <h1 className='text-base font-bold text-gray-700 m-3'>{item.name}</h1>
          <p className='text-s text-gray-500 bg-gray-100 px-3 py-0.5 rounded-full w-fit font-bold m-3'>{item.detail}</p>
          <p className='text-s text-gray-500 bg-gray-100 px-3 py-0.5 rounded-full w-fit font-bold m-3'>{item.releaseData}</p>

          </div>
        </div>
      ))}
    </>
  )
}

export default MovieCardData
