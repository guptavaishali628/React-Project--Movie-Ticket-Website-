import React from 'react'
import MovieCardData from './movieCardData.jsx'

const UpcomingMovie = () => {
  let data=[
        {
            'image': '/photos/movieCard/upcomming movies/Anomie.jpg',
            'name': 'Anomie',
            'detail': 'Malayalam',
            'releaseData': 'Releasing on 6th feb 2026'
        },
        {
            
            'image': '/photos/movieCard/upcomming movies/ashakalAayiram.jpg',
            'name': 'Ashakal Aayiram',
            'detail': 'Malayalam',
            'releaseData': 'Releasing on 5th feb 2026'
        },
        {
            
            'image': '/photos/movieCard/upcomming movies/Bebe_main.jpg',
            'name': 'Bebe Main Badmash Banunga',
            'detail': 'Punjabi',
            'releaseData': 'Releasing on 8th feb 2026'
        },
        {
            
            'image': '/photos/movieCard/upcomming movies/KillerWhale.jpg',
            'name': 'killer Whale',
            'detail': 'English',
            'releaseData': 'Releasing on 18th feb 2026'
        } 
    ]
  
    return (
    <>
    <div className='grid grid-cols-4 gap-6'>
      <MovieCardData data={data}/>
    </div>  
    </>
  )
}

export default UpcomingMovie
