"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function ContactPage() {
  // State to track which FAQ item is expanded
  const [openFaq, setOpenFaq] = useState(0);

  // FAQ data
  const faqItems = [
    {
      question: "How Do I Clean The Smart Kettle?",
      answer:
        "Use A Mix Of Water And Vinegar For Internal Cleaning, And A Soft Cloth For The Exterior.",
    },
    {
      question: "Is There A Warranty?",
      answer:
        "Yes, all KettleX products come with a 2-year limited warranty covering manufacturing defects. Register your product online for full coverage details.",
    },
    {
      question: "Does It Support Multiple Voltage Ranges?",
      answer:
        "Yes, our smart kettle is designed with a universal power adapter that supports 110V-240V, making it perfect for international use.",
    },
    {
      question: "Can I Return It If I'm Not Satisfied?",
      answer:
        "Absolutely! We offer a 30-day satisfaction guarantee. If you're not completely satisfied, you can return your kettle for a full refund.",
    },
    {
      question: "Is The Kettle Safe To Use Around Kids?",
      answer:
        "Yes, our kettle features cool-touch exterior technology and automatic shut-off safety features that make it safe for households with children.",
    },
  ];

  // Toggle FAQ item
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center w-full h-full mt-30 px-4 sm:px-6 md:px-8">
        {/* get in touch section - more responsive padding and width constraints */}
        <motion.div
          className="flex flex-col justify-center items-center w-full max-w-7xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <img
              src="/images/chat 1.png"
              alt="logo"
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </motion.div>
          <motion.div
            className="text-2xl sm:text-3xl md:text-[36px] font-bold uppercase mt-6 sm:mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            get in touch
          </motion.div>
          <motion.div
            className="text-sm sm:text-base md:text-[18px] text-center mt-6 sm:mt-10 capitalize"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            We'd love to hear from you — whether it's feedback, questions,{" "}
            <br className="hidden sm:block" /> or partnership ideas. Let's start
            a conversation.
          </motion.div>

          {/* Contact info - stack on mobile, row on larger screens */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 sm:gap-10 mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 border border-[#54889D] rounded-full flex items-center justify-center mr-2">
                <FaPhone className="text-gray-600 text-sm" />
              </div>
              <div className="text-sm sm:text-base">+94 77 123 4567</div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 border border-[#54889D] rounded-full flex items-center justify-center mr-2">
                <FaEnvelope className="text-gray-600 text-sm" />
              </div>
              <div className="text-sm sm:text-base capitalize">hello@kettlex.io</div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 border border-[#54889D] rounded-full flex items-center justify-center mr-2">
                <FaMapMarkerAlt className="text-gray-600 text-sm" />
              </div>
              <div className="text-sm sm:text-base capitalize">
                No. 101, Innovation Avenue, Col 07
              </div>
            </div>
          </motion.div>

          {/* Social media links - responsive spacing */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <motion.div
              className="flex items-center cursor-pointer hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xs sm:text-sm md:text-[14px] text-[#54889D]">Instagram</div>
              <FaInstagram className="ml-2 text-sm sm:text-base" />
            </motion.div>
            <motion.div
              className="flex items-center cursor-pointer hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xs sm:text-sm md:text-[14px] text-[#54889D]">Twitter</div>
              <FaTwitter className="ml-2 text-sm sm:text-base" />
            </motion.div>
            <motion.div
              className="flex items-center cursor-pointer hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xs sm:text-sm md:text-[14px] text-[#54889D]">Youtube</div>
              <FaYoutube className="ml-2 text-sm sm:text-base" />
            </motion.div>
            <motion.div
              className="flex items-center cursor-pointer hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xs sm:text-sm md:text-[14px] text-[#54889D]">Tiktok</div>
              <FaTiktok className="ml-2 text-sm sm:text-base" />
            </motion.div>
          </motion.div>

          {/* Contact form - responsive padding and better mobile layout */}
          <motion.div
            className="mt-12 sm:mt-16 w-full max-w-3xl sm:max-w-4xl md:max-w-5xl bg-[#FAFAFA] p-4 sm:p-6 md:p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <form className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <motion.div
                  className="flex flex-col"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                >
                  <label
                    htmlFor="firstName"
                    className="mb-2 text-black font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="border-b border-gray-300 pb-2 focus:outline-none focus:border-black transition-colors"
                  />
                </motion.div>

                <motion.div
                  className="flex flex-col"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                >
                  <label
                    htmlFor="lastName"
                    className="mb-2 text-black font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="border-b border-gray-300 pb-2 focus:outline-none focus:border-black transition-colors"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <motion.div
                  className="flex flex-col"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                >
                  <label
                    htmlFor="email"
                    className="mb-2 text-black font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border-b border-gray-300 pb-2 focus:outline-none focus:border-black transition-colors"
                  />
                </motion.div>

                <motion.div
                  className="flex flex-col"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                >
                  <label
                    htmlFor="phone"
                    className="mb-2 text-black font-medium"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="border-b border-gray-300 pb-2 focus:outline-none focus:border-black transition-colors"
                  />
                </motion.div>
              </div>

              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              >
                <label
                  htmlFor="message"
                  className="mb-2 text-black font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="border-b border-gray-300 pb-2 focus:outline-none focus:border-black transition-colors resize-none"
                ></textarea>
              </motion.div>

              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
              >
                <motion.button
                  type="submit"
                  className="bg-black text-white py-2 sm:py-3 px-10 sm:px-16 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  Send
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>

        {/* "What drives us" section - responsive layout for smaller screens */}
        <motion.div
          className="flex flex-col justify-center items-center mt-16 sm:mt-20 w-full max-w-[90rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-10 md:gap-32 w-full">
            <motion.div
              className="text-2xl sm:text-3xl md:text-[36px] font-bold uppercase text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              what drives us
            </motion.div>
            <motion.div
              className="text-sm sm:text-base md:text-[18px] text-center md:text-right capitalize"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              These values aren't just buzzwords — they're built into every{" "}
              <br className="hidden md:block" />
              detail of our design, function, and experience.
            </motion.div>
          </div>

          {/* Cards - stack on mobile, 2 columns on tablet, 3 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 mt-8 sm:mt-10 w-full">
            <motion.div
              className="h-[25rem] flex flex-col justify-center items-center mt-4 sm:mt-10 bg-gray-200 p-6 sm:p-8 md:p-10 rounded-3xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <div>
                <img
                  src="/images/plant 1.png"
                  alt="logo"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
              </div>
              <div className="text-xl sm:text-2xl md:text-[26px] uppercase mt-4 sm:mt-5">
                Growth
              </div>
              <div className="text-xs sm:text-sm md:text-[16px] text-center mt-3 sm:mt-5 text-gray-600">
                We believe in continuous innovation <br /> — each product we
                create aims to <br /> improve your everyday routine.
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center items-center mt-4 sm:mt-10 bg-gray-200 p-6 sm:p-8 md:p-10 rounded-3xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div>
                <img
                  src="/images/people 1.png"
                  alt="logo"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
              </div>
              <div className="text-xl sm:text-2xl md:text-[26px] uppercase mt-4 sm:mt-5">
                Connection
              </div>
              <div className="text-xs sm:text-sm md:text-[16px] text-center mt-3 sm:mt-5 text-gray-600">
                Smart appliances should feel <br /> personal. Kettlex connects
                design, <br /> tech, and lifestyle beautifully.
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center items-center mt-4 sm:mt-10 bg-gray-200 p-6 sm:p-8 md:p-10 rounded-3xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div>
                <img
                  src="/images/Global network.png"
                  alt="logo"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
              </div>
              <div className="text-xl sm:text-2xl md:text-[26px] uppercase mt-4 sm:mt-5">
                Automation
              </div>
              <div className="text-xs sm:text-sm md:text-[16px] text-center mt-3 sm:mt-5 text-gray-600">
                With intelligent features and <br /> automation, we take the
                guesswork <br /> out of your brew — so you can enjoy <br />{" "}
                life, effortlessly.
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* "Need help" section - responsive typography */}
        <motion.div
          className="flex flex-col justify-center items-center mt-16 sm:mt-20 mb-16 sm:mb-20 w-full max-w-7xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.div
            className="text-5xl sm:text-8xl md:text-[10rem] lg:text-[180px] uppercase text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            need help?
          </motion.div>
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] uppercase font-bold mb-8 sm:mb-10 text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            We've Got Answers
          </motion.div>

          {/* FAQ accordion - responsive padding and spacing */}
          <motion.div
            className="w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl mt-6 sm:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="border-t border-gray-200 last:border-b"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.2 + index * 0.1,
                }}
              >
                <motion.div
                  className="flex justify-between items-center py-4 sm:py-6 cursor-pointer group"
                  onClick={() => toggleFaq(index)}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-sm sm:text-base md:text-[18px] text-gray-400 pr-4">
                    {item.question}
                  </h3>
                  <button className="text-xl sm:text-2xl md:text-3xl">
                    {openFaq === index ? "−" : "+"}
                  </button>
                </motion.div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {openFaq === index && (
                    <div className="pb-4 sm:pb-8">
                      <p className="text-sm sm:text-base md:text-[18px] text-gray-700">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
