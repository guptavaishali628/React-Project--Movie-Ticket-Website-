import React from 'react'
import MovieCardData from './movieCardData.jsx' 
import '../app.css'

const MovieCard = () => {
    let data=[
        {
            'image': '/photos/movieCard/border2_img1.jpg',
            'name': 'Border 2',
            'detail': 'UA13 + Hindi'
        },
        {
            'image': '/photos/movieCard/dhurandhar_img3.jpg',
            'name': 'Border 2',
            'detail': 'UA13 + Hindi'
        },
        {
            'image': '/photos/movieCard/mardaani3_img2.jpg',
            'name': 'Border 2',
            'detail': 'UA13 + Hindi'
        },
        {
            'image': '/photos/movieCard/martySupreme_img5.jpg',
            'name': 'Border 2',
            'detail': 'UA13 + Hindi'
        },
        {
            'image': '/photos/movieCard/mayasabha_img4.jpg',
            'name': 'Border 2',
            'detail': 'UA13 + Hindi'
        },
        {
            'image': '/photos/movieCard/sendHelp_img6.jpg',
            'name': 'Border 2',
            'detail': 'UA13 + Hindi'
        },
    ]
  
    return (
    <>
    <div className='grid grid-cols-4 gap-6'>
      <MovieCardData data={data}/>
    </div>  
    </>
  )
}

export default MovieCard
