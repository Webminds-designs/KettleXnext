"use client"
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants for consistent animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
    }
  };

  const imageHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 md:px-8 gap-5 mt-30 md:mt-16 lg:mt-20"
    >
      {/* Top section with title and earth image */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl h-fit gap-8 lg:gap-0">
        <motion.div 
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold"
          >
            ABOUT US
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg lg:text-[18px] text-gray-400 mt-4"
          >
            Welcome to Kettlex — where everyday convenience meets intelligent
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            design. We're more than just a brand; we're a movement toward
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            smarter living.
          </motion.div>
        </motion.div>
        <motion.div 
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-6 lg:mt-0"
        >
          <motion.img
            whileHover={{ rotate: 15 }}
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ 
              hover: { duration: 2.5 },
              rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" }
            }}
            src="/images/earth.png"
            alt="Earth"
            className="w-48 sm:w-64 md:w-80 lg:w-[35rem]"
          />
        </motion.div>
      </div>

      {/* Main content card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="flex flex-col lg:flex-row justify-between w-full max-w-7xl bg-white rounded-3xl border border-gray-400 mt-8 md:mt-12"
      >
        {/* Images section - hidden on mobile, custom on tablet, full on desktop */}
        <div className="hidden md:flex md:flex-col lg:flex-row lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="z-10 w-full lg:w-auto"
          >
            <motion.img
              variants={imageHover}
              initial="rest"
              whileHover="hover"
              src="/images/hero1.jpg"
              alt="Hero1"
              className="rounded-t-3xl lg:rounded-3xl object-cover w-full h-64 md:h-80 lg:-mt-20 lg:ml-20 lg:w-70 lg:h-[38rem]"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="z-0 hidden lg:block"
          >
            <motion.img
              variants={imageHover}
              initial="rest"
              whileHover="hover"
              src="/images/hero2.jpg"
              alt="Hero2"
              className="rounded-3xl -mt-20 -ml-30 w-fit h-[38rem]"
            />
          </motion.div>
        </div>

        {/* Text content section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start justify-center w-full lg:w-1/2 p-6 sm:p-8 md:p-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg sm:text-xl lg:text-[20px] font-semibold uppercase"
          >
            who we are
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-gray-400 mt-2"
          >
            A COMMUNITY OF SMART LIVING ENTHUSIASTS
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-sm sm:text-base lg:text-[16px] text-gray-700 mt-4"
          >
            At Kettlex, we believe that even the smallest rituals — like making
            your morning tea — deserve precision, elegance, and a touch of
            innovation. Born from a passion for user-friendly technology, our
            mission is to create home appliances that seamlessly blend function
            and style.
          </motion.div>

          <div className="flex flex-col w-full items-center lg:items-start gap-3 mt-6">
            <div className="text-sm sm:text-base lg:text-[16px] text-gray-700 flex flex-col gap-3 w-full pl-10">
              {["Precision temperature control for every brew", 
                "Sleek design that elevates your countertop", 
                "Safe, intuitive features for everyday ease", 
                "Built with quality and durability in mind"].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                  className="flex items-center justify-start text-left"
                >
                  {item}
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
              className="flex justify-start w-full mt-8 pl-10"
            >
              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="flex justify-start items-center w-[100px] h-[40px] md:w-[220px] md:h-[60px] rounded-full bg-black transform transition"
              >
                <button className="text-white font-medium w-full h-full text-lg">
                  Buy
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
