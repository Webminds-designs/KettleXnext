"use client"
import React from 'react'
import Header from './Header'

export default function page() {
  return (
    <div className='flex flex-col gap-10'>
      <Header />

      <div className='flex justify-between w-full'>
        <img src="/images/kettle1.jpg" alt="Kettlex" className='w-[10em] md:w-[15em] lg:w-[20em] xl:w-[30em] 2xl:w-[40em] h-[6em] md:h-[8em] lg:h-[10em] xl:h-[15em] 2xl:h-[20em] object-cover rounded-r-2xl rounded-b-2xl md:rounded-r-4xl md:rounded-b-4xl' />
        <img src="/images/kettle2.jpg" alt="Kettlex" className='w-[5em] md:w-[8em] lg:w-[10em] xl:w-[15em] 2xl:w-[20em] h-[6em] md:h-[8em] lg:h-[10em] xl:h-[15em] 2xl:h-[20em] object-cover rounded-l-2xl rounded-b-2xl md:rounded-l-4xl md:rounded-b-4xl' />
      </div>

      <p className='flex flex-col text-center font-poppins text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold'>
        <span>SAY HELLO TO</span>
        <span>KETTLEX</span>
      </p>

      <div className='flex flex-col lg:flex-row w-full justify-between'>
        <img src='/images/kettle3.jpg' className='w-full lg:w-1/2' />
        <img src='/images/kettle4.jpg' className='w-full lg:w-1/2' />
      </div>

      <div className='flex flex-col lg:flex-row w-full h-[60em] lg:h-[30em] xl:h-[40em] 2xl:h-[60em] justify-between items-center'>
        <div style={{ backgroundImage: 'url("/images/kettle5.jpg")' }} className='w-full lg:w-1/2 h-full rounded-4xl bg-cover bg-no-repeat'></div>
        <div className='flex items-center w-full lg:w-1/2 h-full'>
          <p className='font-poppins text-center lg:text-left text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl px-10 uppercase'>Welcome to Kettlex —your sleek and smart kettle companion designed to bring precision, safety, and simplicity to your everyday brewing ritual.</p>
        </div>
      </div>

      
    </div>
  )
}
