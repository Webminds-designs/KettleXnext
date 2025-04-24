import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 md:px-8 gap-5 mt-30 md:mt-16 lg:mt-20">
      {/* Top section with title and earth image */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl h-fit gap-8 lg:gap-0">
        <div className="flex flex-col text-center lg:text-left">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold">
            ABOUT US
          </div>
          <div className="text-base sm:text-lg lg:text-[18px] text-gray-400 mt-4">
            Welcome to Kettlex — where everyday convenience meets intelligent
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            design. We're more than just a brand; we're a movement toward
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            smarter living.
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <img
            src="/images/earth.png"
            alt="Earth"
            className="w-48 sm:w-64 md:w-80 lg:w-96"
          />
        </div>
      </div>

      {/* Main content card */}
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-7xl bg-white rounded-3xl border border-gray-400 mt-8 md:mt-12">
        {/* Images section - hidden on mobile, custom on tablet, full on desktop */}
        <div className="hidden md:flex md:flex-col lg:flex-row lg:w-1/2 relative">
          <div className="z-10 w-full lg:w-auto">
            <img
              src="/images/hero1.jpg"
              alt="Hero1"
              className="rounded-t-3xl lg:rounded-3xl object-cover w-full h-64 md:h-80 lg:-mt-20 lg:ml-20 lg:w-70 lg:h-[33rem]"
            />
          </div>
          <div className="z-0 hidden lg:block">
            <img
              src="/images/hero2.jpg"
              alt="Hero2"
              className="rounded-3xl -mt-20 -ml-30 w-fit h-[33rem]"
            />
          </div>
        </div>

        {/* Text content section */}
        <div className="flex flex-col items-start justify-center w-full lg:w-1/2 p-6 sm:p-8 md:p-10">
          <div className="text-lg sm:text-xl lg:text-[20px] font-semibold uppercase">
            who we are
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-gray-400 mt-2">
            A COMMUNITY OF SMART LIVING ENTHUSIASTS
          </div>
          <div className="text-sm sm:text-base lg:text-[16px] text-gray-700 mt-4">
            At Kettlex, we believe that even the smallest rituals — like making
            your morning tea — deserve precision, elegance, and a touch of
            innovation. Born from a passion for user-friendly technology, our
            mission is to create home appliances that seamlessly blend function
            and style.
          </div>

          <div className="flex flex-col w-full items-center lg:items-start gap-3 mt-6">
            <div className="text-sm sm:text-base lg:text-[16px] text-gray-700 flex flex-col gap-3 w-full">
              <div className="flex items-center justify-center text-center">
                Precision temperature control for every brew
              </div>
              <div className="flex items-center justify-center text-center">
                Sleek design that elevates your countertop
              </div>
              <div className="flex items-center justify-center text-center">
                Safe, intuitive features for everyday ease
              </div>
              <div className="flex items-center justify-center text-center">
                Built with quality and durability in mind
              </div>
            </div>
            <div className="flex justify-center w-full mt-8">
              <div className="flex justify-center items-center w-[180px] h-[60px] rounded-full bg-black transform transition hover:scale-105">
                <button className="text-white font-medium w-full h-full text-lg">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
