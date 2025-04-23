import React from "react";

const ChooseUs = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      {/* Section Heading */}
      <div className="text-[26px] sm:text-[30px] md:text-[36px] font-bold text-center">WHY CHOOSE US</div>
      
      {/* Mission Statement */}
      <div className="text-[28px] sm:text-[36px] md:text-[45px] lg:text-[60px] text-center uppercase mt-6 sm:mt-8 md:mt-10">
        To lead{" "}
        <span className="text-gray-400">
          {" "}
          the evolution of everyday <br className="hidden sm:block" /> appliances by merging design, <br className="hidden sm:block" />
          functionality, and smart technology <br className="hidden sm:block" /> — empowering people to live
          better <br className="hidden sm:block" />
          through small, meaningful <br className="hidden sm:block" /> improvements.
        </span>
      </div>
      
      {/* First Row of People Images */}
      <div className="flex justify-center md:justify-between items-center mt-12 sm:mt-16 md:mt-20 lg:mt-30 w-full gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[30rem]">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-full">
          <img
            src="/images/aboutPerson1.jpg"
            alt="Choose Us 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-full">
          <img
            src="/images/aboutPerson2.jpg"
            alt="Choose Us 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Second Row of People Images */}
      <div className="flex justify-center flex-wrap md:justify-between items-center -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-5 w-full gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-12 lg:px-[10rem]">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-full m-2 sm:m-0">
          <img
            src="/images/aboutPerson3.jpg"
            alt="Choose Us 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-full m-2 sm:m-0">
          <img
            src="/images/aboutPerson4.jpg"
            alt="Choose Us 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-full m-2 sm:m-0">
          <img
            src="/images/aboutPerson5.jpg"
            alt="Choose Us 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Trusted by Thousands Section */}
      <div className="text-[36px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-bold uppercase mt-8 sm:mt-10 md:mt-12 lg:mt-15 text-center">
        Trusted by Thousands
      </div>
      
      {/* Subtitle */}
      <div className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-400 text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
        With users across homes, offices, and smart setups, Kettlex is proud to
        be part of kitchens that value both style and substance.
      </div>
      
      {/* Hero Image Section */}
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-10 relative w-full">
        <img
          src="/images/aboutBigImg.png"
          alt="About Us"
          className="w-full h-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10"
        />
        
        {/* Overlay Text and Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
          <div className="text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] uppercase font-bold">
            Join the Smart Brew Movement
          </div>
          <div className="text-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] capitalize mt-2 sm:mt-3 md:mt-4">
            Because every cup deserves perfection.
          </div>
          
          {/* Shop Now Button */}
          <div className="relative mt-4 sm:mt-6 md:mt-8 lg:mt-10 inline-block">
            <div className="w-32 sm:w-36 md:w-40 h-10 sm:h-12 md:h-13 bg-white text-black flex items-center justify-center rounded-3xl cursor-pointer hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Shop now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
