"use client"
import React from 'react'
import Header from './Header'
import { HiOutlineArrowDown } from "react-icons/hi";
import "../assets/css/Hero.css"

export default function page() {
  return (
    <div className='flex flex-col'>
      <Header />

      {/* header images */}
      <div className='flex justify-between w-full'>
        <img src="/images/kettle1.jpg" alt="Kettlex" className='w-[10em] md:w-[15em] lg:w-[20em] xl:w-[30em] 2xl:w-[40em] h-[6em] md:h-[8em] lg:h-[10em] xl:h-[15em] 2xl:h-[20em] object-cover rounded-r-2xl rounded-b-2xl md:rounded-r-4xl md:rounded-b-4xl' />
        <img src="/images/kettle2.jpg" alt="Kettlex" className='w-[5em] md:w-[8em] lg:w-[10em] xl:w-[15em] 2xl:w-[20em] h-[6em] md:h-[8em] lg:h-[10em] xl:h-[15em] 2xl:h-[20em] object-cover rounded-l-2xl rounded-b-2xl md:rounded-l-4xl md:rounded-b-4xl' />
      </div>

      {/* heading */}
      <p className='flex flex-col text-center font-poppins text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold pt-10'>
        <span>SAY HELLO TO</span>
        <span>KETTLEX</span>
      </p>

      {/* 2 background images */}
      <div className='flex flex-col lg:flex-row w-full justify-between pt-10'>
        <img src='/images/kettle3.jpg' className='w-full lg:w-1/2' />
        <img src='/images/kettle4.jpg' className='w-full lg:w-1/2' />
      </div>

      {/* welcome to kettlex */}
      <div className='flex flex-col lg:flex-row w-full h-[60em] lg:h-[30em] xl:h-[40em] 2xl:h-[60em] justify-between items-center pt-10'>
        <div style={{ backgroundImage: 'url("/images/kettle5.jpg")' }} className='w-full lg:w-1/2 h-full rounded-4xl bg-cover bg-no-repeat'></div>
        <div className='flex items-center w-full lg:w-1/2 h-full'>
          <p className='font-poppins text-center lg:text-left text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl px-10 uppercase'>Welcome to Kettlex —your sleek and smart kettle companion designed to bring precision, safety, and simplicity to your everyday brewing ritual.</p>
        </div>
      </div>

      {/* arrow circle */}
      <div className='relative flex items-center w-full h-[20vh] bg-[#E3E3E3] mt-10 md:mt-20'>
        <div className="outer-circle-info z-30 absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 2xl:w-48 2xl:h-48 bg-[#E3E3E3] rounded-full flex items-center justify-center">
          <div className="w-18 h-18 2xl:w-36 2xl:h-36 bg-black rounded-full flex items-center justify-center">
            <HiOutlineArrowDown className="text-4xl 2xl:text-[5vh] text-white" />
          </div>
        </div>
        <p className='px-10 font-poppins text-sm xl:text-xl 2xl:text-3xl'>CHECK OUT OUR PRODUCTS</p>
      </div>

      {/* large background kettle */}
      <div className='w-full'>
        <img src="/images/kettle6.jpg" alt="Kettlex" className='w-full h-[20em] md:h-[30em] lg:h-[40em] xl:h-[50em] 2xl:h-[60em] object-cover' />
      </div>

      {/* say hello */}
      <div className='w-full flex flex-col py-10 lg:py-20 xl:py-40 justify-center items-center bg-[#E3E3E3]'>
        <p className='flex flex-col text-center font-poppins text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold uppercase'>
          <span>SAY HELLO</span>
          <span>TO SMARTER</span>
          <span>DAYS WITH KETTLEX</span>
        </p>
      </div>

      {/* carousel */}
      <div className='flex flex-col lg:flex-row w-full justify-between bg-[#E3E3E3] pt-10 lg:pt-20 xl:pt-40'>
        <img src='/images/kettle6.jpg' className='w-full lg:w-1/3' />
        <img src='/images/kettle7.jpg' className='w-full lg:w-1/3 lg:scale-120 lg:rounded-2xl' />
        <img src='/images/kettle8.jpg' className='w-full lg:w-1/3' />
      </div>
      <p className='text-center text-xs lg:text-sm font-poppins px-10 py-20 xl:py-32 bg-[#E3E3E3]'>Learns your brewing preferences and habits, tailoring each session for a truly personalized and effortless kettle experience.</p>

      {/* testamonials */}
      <div className='flex bg-white w-full py-10 lg:py-20 xl:py-40 px-10 justify-center items-center'>
        <div className='relative flex flex-col gap-10 w-full md:w-1/2 pl-10 lg:pl-14 xl:pl-20 2xl:pl-32'>
          <img src='/svgs/comma.svg' className='absolute top-0 left-0 w-6 h-6 lg:w-10 xl:w-14 2xl:w-24' />
          <p className='uppercase text-xl lg:text-2xl xl:text-4xl 2xl:text-7xl font-semibold pt-5 2xl:pt-10'>Kettlex has completely changed my morning routine. I can control it from bed, set the perfect temp for my tea.</p>
          <div className='flex gap-5'>
            <img src='/images/person.jpg' className='w-10 h-10 lg:w-14 xl:w-20 lg:h-14 xl:h-20 2xl:w-32 2xl:h-32 object-cover rounded-full' />
            <p className='flex flex-col font-poppins'>
              <span className='text-base lg:text-xl 2xl:text-4xl'>Ayesha Fernando</span>
              <span className='text-sm lg:text-lg 2xl:text-2xl text-gray-500'>Tea Enthusiast & Designer</span>
            </p>
          </div>
        </div>
      </div>

      {/* kettlex in colors */}
      <div className='flex flex-col bg-[#E3E3E3]'></div>

    </div>
  )
}
