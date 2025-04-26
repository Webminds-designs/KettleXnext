"use client";

import React from "react";
import AnimatedTextGSAP from "./AnimatedTextGSAP";

const Description = () => {
  // Break the text into segments to control line breaks
  const textSegments = [
    { text: "To lead ", className: "text-black" },
    { text: "the evolution of" },
    { text: "everyday", addBreak: true },
    { text: "appliances by merging" },
    { text: "design,", addBreak: true },
    { text: "functionality, and smart" },
    { text: "technology", addBreak: true },
    { text: "— empowering people to live" },
    { text: "better", addBreak: true },
    { text: "through small," },
    { text: "meaningful", addBreak: true },
    { text: "improvements." }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Title with 36px font size */}
      <div className="text-[36px] font-bold mb-8">
        <AnimatedTextGSAP text="WHY CHOOSE US" customClass="text-[36px]" />
      </div>
      
      {/* Main text with 60px font size, centered, with custom breaks */}
      <div className="text-center uppercase">
        <AnimatedTextGSAP 
          textSegments={textSegments} 
          customClass="text-[20px] md:text-[40px] lg:text-[60px] text-black text-center" 
          isSegmented={true}
        />
      </div>
    </div>
  );
};

export default Description;
