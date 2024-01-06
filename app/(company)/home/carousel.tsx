'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.scss';
import Image from 'next/image'
import gregasshop from '../../../public/images/gregasshop.png';
import bagsshop from '../../../public/images/bagsshop.png';
import gameblog from '../../../public/images/gameblog.jpg';
import gregasstrapi from '../../../public/images/gregasstrapi.png';
import next from '../../../public/images/next.svg';
import vercel from '../../../public/images/vercel.svg';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
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
        <SwiperSlide><Image className='rounded' src={gregasshop} alt=""/></SwiperSlide>
        <SwiperSlide><Image className='rounded' src={bagsshop} alt=""/></SwiperSlide>
        <SwiperSlide><Image className='rounded' src={gameblog} alt=""/></SwiperSlide>
        <SwiperSlide><Image className='rounded' src={gregasstrapi} alt=""/></SwiperSlide>
        <SwiperSlide><Image className='rounded' src={next} alt=""/></SwiperSlide>
        <SwiperSlide><Image className='rounded' src={vercel} alt=""/></SwiperSlide>
      </Swiper>
    </>
  );
}
