import React from 'react'
import '../app.css'

const MovieCardData = ({data}) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <div className='rounded-3xl cursor-pointer border border-gray-300 hover:shadow-lg cursor-zoom-in bg-white hover:scale-90 transition-all ease-100 duration-300'>  
          <img src={item.image} alt={item.name} className='w-full object-fit rounded-t-3xl mb-4'/>
          <h3 className='text-lg font- text-gray-900 m-3'>{item.name}</h3>
          <p className='text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full w-fit font-medium m-3'>{item.detail}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default MovieCardData
