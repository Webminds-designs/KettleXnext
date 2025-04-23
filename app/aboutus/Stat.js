"use client"
import React from "react";
import { motion } from "framer-motion";

const Stat = () => {
  const stats = [
    { value: "50,000+", label: "Satisfied Customers" },
    { value: "4.8", label: "Average Product Rating" },
    { value: "15+", label: "Countries Reached" },
    { value: "10+", label: "Innovative Features Built" }
  ];

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center py-10 md:py-16">
      {/* Heading - responsive text sizes */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[70px] font-bold text-center"
      >
        <span className="block">Smarter Living Begins</span>
        <span className="block">with the Little Things</span>
      </motion.div>

      {/* Descriptive text - adaptive padding and responsive text */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-sm sm:text-base lg:text-[16px] text-center px-2 sm:px-10 md:px-16 lg:px-[10rem] xl:px-[20rem] capitalize mt-5"
      >
        The result? A line of smart kettles that combine precision, safety, and
        minimalist aesthetics to upgrade your daily routine. Whether you're
        brewing the perfect cup of tea, preparing baby formula, or
        enjoying pour-over coffee, Kettlex is engineered to adapt to your needs
        — with just the right temperature, every time.
      </motion.div>

      {/* Stats container - adaptive for different screens */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row flex-wrap items-center justify-evenly rounded-3xl mt-10 sm:mt-16 lg:mt-20 w-full max-w-full h-auto sm:h-auto lg:h-[15rem] bg-[#E3E3E3] py-8 px-4"
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
            className="text-center w-full sm:w-1/2 lg:w-auto mb-8 sm:mb-6 lg:mb-0"
          >
            <div className="text-4xl sm:text-5xl md:text-[55px] lg:text-[66px] font-bold">{stat.value}</div>
            <div className="text-base sm:text-lg md:text-[20px]">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Stat;
