import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import '../App.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// react icon import
import { LuListFilter } from "react-icons/lu";
import UpcomingMovie from '../components/UpcomingMovie.jsx';
import MovieCard from '../components/MovieCard.jsx'

export default function Home() {
 
  return (
    <>
    {/* -----------------------------------------------Hero section of home page-------------------------------- */}
    <div className='relative py-4 px-4 h-screen w-full overflow-hidden'>
      <video autoPlay muted loop playsInline className='absolute inset-0 w-full h-full object-cover'
       src="videos/Background.mp4" type="video/mp4"/>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='p-10'>
          <div className='swiper-slide-text'>
            <p className='text-4xl font-bold'>Border 2</p>
            <p className='text-2xl font-bold'>UA13 | Action, Drama + 1 more</p>
            <a href='/booking' className='py-4 px-10 bg-black text-white rounded-2xl'>Book Now</a>
          </div>
          <div className='swiper-slide-img'>
            <div>
            <img src='\photos\home_page_photos\border2_img2.jpg'></img>
            </div>
          </div>
        </SwiperSlide>
       
         <SwiperSlide className='p-10'>
          <div className='swiper-slide-text'>
            <p className='text-4xl font-bold'>Dhurander</p>
            <p className='text-2xl font-bold'>A | Action, Thiller</p>
            <a href='/booking' className='py-4 px-10 bg-black text-white rounded-2xl'>Book Now</a>
          </div>
          <div className='swiper-slide-img'>
            <div>
            <img src='\photos\home_page_photos\dhurander_img3.jpg'></img>
            </div>
          </div>
        </SwiperSlide>

          <SwiperSlide className='p-10'>
          <div className='swiper-slide-text'>
            <p className='text-4xl font-bold'>Mardani 3</p>
            <p className='text-2xl font-bold'>UA16 | Crime, Thiller</p>
            <a href='/booking' className='py-4 px-10 bg-black text-white rounded-2xl'>Book Now</a>
          </div>
          <div className='swiper-slide-img'>
            <div>
            <img src='\photos\home_page_photos\mardani3_img4.jpg'></img>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    {/* --------------------------------------------------movies section---------------------------------------- */}
    <div className='py-2 px-10 h-auto w-full flex flex-col gap-4'>
      <div>
      <p className='text-3xl font-bold text-gray-800 mb-3'>Now Showing in</p>
      <p className='text-base text-gray-600 font-semibold'>Bhopal</p>
      </div>
      
      <div className='movie-filters flex flex-wrap justify-items-start gap-4'>
      <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl b border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
        <LuListFilter/>
        Filters</button>
      <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium  border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
        Top Selling</button>
      <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium  border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
        English</button>
      <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium  border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
        Hindi</button>
      <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium  border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
        Drama</button>
      <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium  border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
        Thriller</button>
      </div>
      <MovieCard/>
      
      <div className='mt-6 flex flex-col gap-4'>
      <p className='text-3xl font-bold text-gray-800 mb-3'>Upcomming Movies</p>
      <UpcomingMovie/>
      </div>

      <div className='mt-6 flex flex-col gap-4'>
        <p className='text-3xl font-bold text-gray-800 mb-3'>Explore Latest Movies by Language</p>
       
        <div className='movie-filters flex flex-wrap justify-items-start gap-4'>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Hindi Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          English Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Telugu Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Malayalam Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white  '>
          Tamil Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Kannada Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white  '>
          Punjabi Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Bhojpuri Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white  '>
          Bengali Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Malayalam Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white  '>
          Odi Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 '>
          Marathi Movies</button>  
        </div>
      
      </div>
    
    <div className='mt-6 flex flex-col gap-4'>
        <p className='text-3xl font-bold text-gray-800 mb-3'>Explore Latest Movies by Genre</p>
       
        <div className='movie-filters flex flex-wrap justify-items-start gap-4'>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Comedy Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Action Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Drama Movies</button> 
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Romance Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Horror Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Thriller Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Crime Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Mystery Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Biography Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Adventure Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Animation Movies</button>
        <button className='px-3 py-0.5 flex items-center justify-between gap-1 bg-white text-gray-700 text-sm font-medium  border rounded-xl border-gray-400 hover:cursor-pointer active:scale-90 hover:bg-gradient-to-r from-red-800 via-black to-red-800 hover:text-white'>
          Marathi Movies</button>  
        </div>
      
      </div>
    
    </div>
  </>
  );
}
