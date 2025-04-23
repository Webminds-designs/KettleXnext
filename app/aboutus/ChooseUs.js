import React from "react";

const ChooseUs = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-[36px] font-bold">WHY CHOOSE US</div>
      <div className="text-[60px] text-center uppercase mt-10">
        To lead{" "}
        <span className="text-gray-400">
          {" "}
          the evolution of everyday <br /> appliances by merging design, <br />
          functionality, and smart technology <br /> — empowering people to live
          better <br />
          through small, meaningful <br /> improvements.
        </span>
      </div>
      <div className="flex justify-between items-center mt-30 w-full gap-8 px-[30rem]">
        <div className="w-32 h-32 overflow-hidden rounded-full">
          <img
            src="/images/aboutPerson1.jpg"
            alt="Choose Us 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-32 h-32 overflow-hidden rounded-full">
          <img
            src="/images/aboutPerson2.jpg"
            alt="Choose Us 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-between items-center -mt-5 w-full gap-8 px-[10rem]">
        <div className="w-32 h-32 overflow-hidden rounded-full">
          <img
            src="/images/aboutPerson3.jpg"
            alt="Choose Us 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-32 h-32 overflow-hidden rounded-full">
          <img
            src="/images/aboutPerson4.jpg"
            alt="Choose Us 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-32 h-32 overflow-hidden rounded-full">
          <img
            src="/images/aboutPerson5.jpg"
            alt="Choose Us 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="text-[80px] font-bold uppercase mt-15">
        Trusted by Thousands
      </div>
      <div className="text-[18px] text-gray-400">
        With users across homes, offices, and smart setups, Kettlex is proud to
        be part of kitchens that value both style and substance.
      </div>
      <div className="mt-10 relative flex justify-center items-center">
        <img
          src="/images/aboutBigImg.png"
          alt="About Us"
          className="w-full h-auto mt-10"
        />
        <div className="absolute top-55 text-center">
          <div className="text-white text-[50px] uppercase font-bold">Join the Smart Brew Movement</div>
          <div className="text-white text-[18px] capitalize">Because every cup deserves perfection.</div>
          <div className=" absolute left-[22rem] top-[8rem] w-40 h-13 bg-white text-black flex items-center justify-center rounded-3xl">Shop now</div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
