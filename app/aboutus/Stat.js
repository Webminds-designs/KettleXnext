import React from "react";

const Stat = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center py-10">
      <div className="text-[70px] font-bold text-center">
        <span className="block">Smarter Living Begins</span>
        <span className="block">with the Little Things</span>
      </div>
      <div className="text-[16px] text-center px-[20rem] capitalize mt-5">
        The result? A line of smart kettles that combine precision, safety, and
        minimalist aesthetics to upgrade your daily routine. Whether you're
        brewing the <br /> perfect cup of tea, preparing baby formula, or
        enjoying pour-over coffee, Kettlex is engineered to adapt to your needs
        — with just the right <br /> Temperature, every time.
      </div>
      <div className="flex items-center justify-evenly rounded-3xl mt-20 w-full h-[15rem] bg-[#E3E3E3]">
        <div className="text-center">
          <div className="text-[66px] font-bold">50,000+</div>
          <div className="text-[20px]">Satisfied Customers</div>
        </div>
        <div>
          <div className="text-[66px] font-bold">4.8</div>
          <div className="text-[20px]">Average Product Rating</div>
        </div>
        <div>
          <div className="text-[66px] font-bold">15+</div>
          <div className="text-[20px]">Countries Reached</div>
        </div>
        <div>
          <div className="text-[66px] font-bold">10+</div>
          <div className="text-[20px]">Innovative Features Built</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
