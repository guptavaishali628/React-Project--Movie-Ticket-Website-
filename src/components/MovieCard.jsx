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
            'name': 'Dhurandhar',
            'detail': 'A + Hindi'
        },
        {
            'image': '/photos/movieCard/mardaani3_img2.jpg',
            'name': 'Mardaani 3',
            'detail': 'UA16 + Hindi'
        },
        {
            'image': '/photos/movieCard/martySupreme_img5.jpg',
            'name': 'Marty Supreme',
            'detail': 'A + English'
        },
        {
            'image': '/photos/movieCard/mayasabha_img4.jpg',
            'name': 'Mayasabha-The Hall of Illusions',
            'detail': 'UA13 + Hindi'
        },
        {
            'image': '/photos/movieCard/sendHelp_img6.jpg',
            'name': 'Send Help',
            'detail': 'A + English'
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
