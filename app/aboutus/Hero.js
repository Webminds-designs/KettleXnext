import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-5 mt-10">
      <div className="flex flex-row items-center justify-between w-2/3 h-fit">
        <div className="flex flex-col">
          <div className="text-[80px] font-bold">ABOUT US</div>
          <div className="text-[18px] text-gray-400">
            Welcome to Kettlex — where everyday convenience meets intelligent{" "}
            <br /> design. We're more than just a brand; we're a movement toward{" "}
            <br /> smarter living.
          </div>
        </div>
        <div>
          <img src="/images/earth.png" alt="Earth" className="w-96" />
        </div>
      </div>
      <div className="flex justify-between w-[75rem] h-[30rem] bg-white rounded-3xl border border-gray-400">
        <div className="flex w-1/2">
          <div className="z-10">
            <img src="/images/hero1.jpg" alt="Hero1" className="rounded-3xl -mt-20 ml-20 w-70 h-[33rem]" />
          </div>
          <div className="z-0">
            <img src="/images/hero2.jpg" alt="Hero2" className="rounded-3xl -mt-20 -ml-30 w-fit h-[33rem]" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-1/2">
          <div className="text-[20px] font-semibold">who we are</div>
          <div className="text-[40px] text-gray-400">
            A COMMUNITY OF SMART LIVING ENTHUSIASTS
          </div>
          <div className="text-[16px] text-gray-700">
            At Kettlex, we believe that even the smallest rituals — like making
            your morning tea — deserve precision, elegance, and a touch of
            innovation. Born from a passion for user-friendly technology, our
            mission is to create home appliances that seamlessly blend function
            and style.
          </div>
          <div className="flex flex-col w-full items-center gap-3 mt-2">
            <div className="text-[16px] text-gray-700 flex flex-col gap-3">
              <div>Precision temperature control for every brew</div>
              <div>Sleek design that elevates your countertop</div>
              <div>Safe, intuitive features for everyday ease</div>
              <div>Built with quality and durability in mind</div>
            </div>
            <div className="flex justify-center items-center w-40 h-10 rounded-2xl bg-black">
              <button className="text-white">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
