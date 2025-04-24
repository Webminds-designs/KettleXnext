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

  // Enhanced animation variants to match page.js
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6
      }
    }
  };

  const statsContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom cubic bezier for smooth elastic effect
        delay: 0.4
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full min-h-screen px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center py-10 md:py-16"
    >
      {/* Heading - responsive text sizes with split text animation */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={headingVariants}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[70px] font-bold text-center"
      >
        <motion.span 
          className="block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Smarter Living Begins
        </motion.span>
        <motion.span 
          className="block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          with the Little Things
        </motion.span>
      </motion.div>

      {/* Descriptive text - adaptive padding with fade-in animation */}
      <motion.div 
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-sm sm:text-base lg:text-[16px] text-center px-2 sm:px-10 md:px-16 lg:px-[10rem] xl:px-[20rem] capitalize mt-5"
      >
        The result? A line of smart kettles that combine precision, safety, and
        minimalist aesthetics to upgrade your daily routine. Whether you're
        brewing the perfect cup of tea, preparing baby formula, or
        enjoying pour-over coffee, Kettlex is engineered to adapt to your needs
        — with just the right temperature, every time.
      </motion.div>

      {/* Stats container with 3D transform and elevation effect */}
      <motion.div 
        variants={statsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
        className="flex flex-col sm:flex-row flex-wrap items-center justify-evenly rounded-3xl mt-10 sm:mt-16 lg:mt-20 w-full max-w-full h-auto sm:h-auto lg:h-[15rem] bg-[#E3E3E3] py-8 px-4 shadow-lg"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-evenly w-full"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0, 
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: 0.1 * index,
                  duration: 0.8
                }
              }}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="text-center w-full sm:w-1/2 lg:w-auto mb-8 sm:mb-6 lg:mb-0"
            >
              <motion.div 
                className="text-4xl sm:text-5xl md:text-[55px] lg:text-[66px] font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    type: "spring",
                    stiffness: 100, 
                    delay: 0.5 + (index * 0.1) 
                  }
                }}
              >
                {stat.value}
              </motion.div>
              <motion.div 
                className="text-base sm:text-lg md:text-[20px]"
                initial={{ opacity: 0 }}
                whileInView={{ 
                  opacity: 1,
                  transition: { 
                    duration: 0.5, 
                    delay: 0.7 + (index * 0.1),
                    ease: "easeOut"
                  }
                }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Stat;
