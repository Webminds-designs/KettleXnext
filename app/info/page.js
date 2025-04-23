"use client"
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { HiOutlineArrowDown, HiOutlineArrowUp } from "react-icons/hi";
import "../assets/css/Hero.css"
import ColorChangeText from '../components/ColorChangeText';
import { motion } from 'motion/react';

export default function page() {
  const tiers = [
    { title: 'Standard Price', price: '$55 – $65' },
    { title: 'Smart Edition', price: '$70 – $85' },
    { title: 'Premium Bundle', price: '$90 – $105' },
  ];
  return (
    <>
      <Header />

      <div className='flex flex-col mt-[10vh]'>

        {/* header images */}
        <div className='flex justify-between w-full'>
          <motion.img
            src="/images/kettle1.jpg"
            alt="Kettlex"
            className='w-[10em] md:w-[15em] lg:w-[20em] xl:w-[30em] 2xl:w-[40em] h-[6em] md:h-[8em] lg:h-[10em] xl:h-[15em] 2xl:h-[20em] object-cover rounded-r-2xl rounded-b-2xl md:rounded-r-4xl md:rounded-b-4xl'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.img
            src="/images/kettle2.jpg"
            alt="Kettlex"
            className='w-[5em] md:w-[8em] lg:w-[10em] xl:w-[15em] 2xl:w-[20em] h-[6em] md:h-[8em] lg:h-[10em] xl:h-[15em] 2xl:h-[20em] object-cover rounded-l-2xl rounded-b-2xl md:rounded-l-4xl md:rounded-b-4xl'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* heading */}
        <motion.p
          className='flex flex-col text-center font-poppins text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold pt-10'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <span>SAY HELLO TO</span>
          <span>KETTLEX</span>
        </motion.p>

        {/* 2 background images */}
        <div className='flex flex-col lg:flex-row w-full justify-between pt-10'>
          <motion.img
            src='/images/kettle3.jpg'
            className='w-full lg:w-1/2'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          />
          <motion.img
            src='/images/kettle4.jpg'
            className='w-full lg:w-1/2'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          />
        </div>

        {/* welcome to kettlex */}
        <div className='flex flex-col lg:flex-row w-full h-[60em] lg:h-[30em] xl:h-[40em] 2xl:h-[60em] justify-between items-center pt-10'>
          <div style={{ backgroundImage: 'url("/images/kettle5.jpg")' }} className='w-full lg:w-1/2 h-full rounded-4xl bg-cover bg-no-repeat'></div>
          <div className='flex items-center w-full lg:w-1/2 h-full'>
            <ColorChangeText
              text="Welcome to Kettlex —your sleek and smart kettle companion designed to bring precision, safety, and simplicity to your everyday brewing ritual."
              className='font-poppins text-center lg:text-left text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl px-10 uppercase'
              startColor="#999999"
              endColor="#000000"
            />
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
          <div className='relative flex flex-col gap-10 w-full md:w-3/4 pl-10 lg:pl-14 xl:pl-20 2xl:pl-32'>
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
        <div className='flex flex-col bg-[#E3E3E3] py-10 lg:py-20 xl:py-40 px-10 gap-y-10 xl:gap-y-20'>
          <motion.p
            className='uppercase font-poppins font-semibold text-base lg:text-lg xl:text-2xl 2xl:text-5xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            KETTLEX IN COLORS
          </motion.p>

          <div className='flex flex-col lg:px-40 gap-y-10 xl:gap-y-20'>

            {/* kettle images row */}
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10'>
              <img src='/images/kettle10.png' className='w-full md:w-1/4 lg:w-1/3 xl:w-1/3 h-auto object-cover rounded-2xl' />
              <img src='/images/kettle11.png' className='w-full md:w-1/4 lg:w-1/3 xl:w-1/3 h-auto object-cover rounded-2xl' />
              <img src='/images/kettle12.png' className='w-full md:w-1/4 lg:w-1/3 xl:w-1/3 h-auto object-cover rounded-2xl' />
            </div>

            {/* paragraph */}
            <p className='capitalize flex flex-col text-left font-poppins text-xs xl:text-base 2xl:text-2xl font-thin'>
              <span>Elegant in every shade — available in white, sage green, and matte black to suit any space.</span>
              <span>Beyond aesthetics, each Kettlex is engineered for precise temperature control, effortless pouring, and smart brewing—built for how you live and what you love to brew.</span>
            </p>

            {/* prices */}
            <div className='flex flex-col lg:flex-row font-poppins items-center justify-between'>

              <div className="w-full lg:w-1/2">
                {/* Vertical line (positioned absolutely) */}
                <div className="relative">
                  <div className="absolute left-3.5 top-5 w-px h-[calc(100%-32px)] bg-white" />

                  {/* Pricing tiers */}
                  {tiers.map((tier, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center mb-16 relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      {/* Dot marker */}
                      <div className='flex items-center justify-center w-7 h-7 bg-white/50 rounded-full shrink-0'>
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>

                      {/* Title and price */}
                      <div className="ml-2 xl:ml-8 flex-1 flex justify-between items-center">
                        <h3 className="text-xs md:text-base xl:text-xl 2xl:text-4xl font-medium text-gray-800">
                          {tier.title}
                        </h3>
                        <span className="text-xs md:text-base xl:text-xl 2xl:text-4xl font-medium text-gray-900">
                          {tier.price}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className='bg-black text-white w-full text-center max-w-52 rounded-full py-2 2xl:py-4 text-xs md:text-base xl:text-xl 2xl:text-3xl'>Buy</div>

            </div>

            {/* mobile phones */}
            <div className='flex flex-col items-center'>
              <div className='relative flex items-center justify-center w-full md:w-md lg:w-xl 2xl:w-3xl'>
                <img src='/images/iphone.png' className='md:w-md lg:w-xl 2xl:w-3xl' />
                <p className='absolute flex flex-col bottom-0 right-0 uppercase font-poppins font-medium text-xs md:text-base xl:text-xl 2xl:text-3xl text-black'>
                  <span>DOWNLOAD</span>
                  <span>WAVE</span>
                  <span>TODAY</span>
                </p>
              </div>
            </div>

            {/* Play store and App store buttons */}
            <div className='flex flex-col md:flex-row justify-end items-center gap-[3vh]'>
              {/* app store */}
              <div className='flex items-center px-[2vh] py-[1vh] gap-[2vh] rounded-[2vh] bg-white'>
                <img src='/images/apple-logo.png' className='w-[4vh] h-[4vh]' />
                <p className='flex flex-col justify-center items-start font-poppins'>
                  <span className='text-[1.5vh] text-gray-800'>Download on the</span>
                  <span className='text-[2vh] text-black'>App Store</span>
                </p>
              </div>
              {/* play store */}
              <div className='flex items-center px-[2vh] py-[1vh] gap-[2vh] rounded-[2vh] bg-white'>
                <img src='/images/google-play.png' className='w-[4vh] h-[4vh]' />
                <p className='flex flex-col justify-center items-start font-poppins'>
                  <span className='text-[1.5vh] text-gray-800'>Get it on</span>
                  <span className='text-[2vh] text-black'>Google Play</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* video */}
        <div className='w-full h-screen'>
          <video className='w-full h-full object-cover' autoPlay loop muted>
            <source src="/videos/final.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* up arrow below video */}
        <div className='relative'>
          <div className="absolute -top-[5vh] right-[5vh] w-[10vh] h-[10vh] bg-black rounded-full flex items-center justify-center">
            <HiOutlineArrowUp className="text-4xl 2xl:text-[5vh] text-white" />
          </div>
        </div>

        <div className='h-[5vh]' />

        {/* footer */}
        <Footer />

      </div>
    </>

  )
}
