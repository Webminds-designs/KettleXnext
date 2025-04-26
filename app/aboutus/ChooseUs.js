"use client"
import React from "react";
import { motion } from "framer-motion";
import Description from "./Description";

const ChooseUs = () => {
  // Enhanced animation variants to match page.js
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const personImage = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Description />
      
      {/* First Row of People Images */}
      <motion.div 
        className="flex justify-center md:justify-between items-center mt-12 sm:mt-16 md:mt-20 lg:mt-30 w-full gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[30rem]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-full"
          variants={personImage}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <img
            src="/images/aboutPerson1.jpg"
            alt="Choose Us 1"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div 
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-full"
          variants={personImage}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <img
            src="/images/aboutPerson2.jpg"
            alt="Choose Us 2"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
      
      {/* Second Row of People Images */}
      <motion.div 
        className="flex justify-center flex-wrap md:justify-between items-center -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-5 w-full gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-12 lg:px-[10rem]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delayChildren: 0.6, staggerChildren: 0.2 }}
      >
        <motion.div 
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-full m-2 sm:m-0"
          variants={personImage}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <img
            src="/images/aboutPerson3.jpg"
            alt="Choose Us 1"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div 
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-full m-2 sm:m-0"
          variants={personImage}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <img
            src="/images/aboutPerson4.jpg"
            alt="Choose Us 2"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div 
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-full m-2 sm:m-0"
          variants={personImage}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <img
            src="/images/aboutPerson5.jpg"
            alt="Choose Us 2"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
      
      {/* Trusted by Thousands Section */}
      <motion.div 
        className="text-[36px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-bold uppercase mt-8 sm:mt-10 md:mt-12 lg:mt-15 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          transition: { 
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3
          }
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Trusted by Thousands
      </motion.div>
      
      {/* Subtitle */}
      <motion.div 
        className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-400 text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        With users across homes, offices, and smart setups, Kettlex is proud to
        be part of kitchens that value both style and substance.
      </motion.div>
      
      {/* Hero Image Section */}
      <motion.div 
        className="mt-6 sm:mt-8 md:mt-10 lg:mt-10 relative w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.img
          src="/images/aboutBigImg.png"
          alt="About Us"
          className="w-full h-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Overlay Text and Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
          <motion.div 
            className="text-white text-[16px] sm:text-[32px] md:text-[40px] lg:text-[50px] uppercase font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Join the Smart Brew Movement
          </motion.div>
          <motion.div 
            className="text-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] capitalize mt-2 sm:mt-3 md:mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Because every cup deserves perfection.
          </motion.div>
          
          {/* Shop Now Button */}
          <motion.div 
            className="relative mt-4 sm:mt-6 md:mt-8 lg:mt-10 inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="w-24 sm:w-36 md:w-40 h-10 sm:h-12 md:h-13 bg-white text-black flex items-center justify-center rounded-3xl cursor-pointer hover:bg-gray-100 transition-colors"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" 
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Shop now
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChooseUs;
