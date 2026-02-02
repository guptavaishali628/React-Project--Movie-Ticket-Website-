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
import { useNavigate } from 'react-router-dom';

export default function Home() {
 
  return (
    <>
    {/* -----------------------------------------------Hero section of home page-------------------------------- */}
    <div className='py-4 px-4 h-screen w-full'>
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
    <div className='py-4 px-4 h-full w-screen bg-amber-200'>
      <div>
     
      <p>Now Showing in</p>
      
      <div className='movie-filters'>
      <button className=''>Filters</button>
      <button>Top Selling</button>
      <button>English</button>
      <button>Hindi</button>
      <button>Drama</button>
      <button>Thriller</button>
      </div>

      <div className='movies-card'>
        <div></div>
      </div>
     
      </div>
    </div>
    </>
  );
}
