"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * @typedef {Object} AnimatedTextGSAPProps
 * @property {string} [text] - The text to animate
 * @property {Array} [textSegments] - Array of text segments with custom formatting
 * @property {string} [customClass] - Custom CSS classes to apply
 * @property {boolean} [isSegmented] - Whether the text is provided as segments
 */

/**
 * Animated text component using GSAP ScrollTrigger
 * @param {AnimatedTextGSAPProps} props 
 * @returns {JSX.Element}
 */
const AnimatedTextGSAP = ({ 
  text = "", 
  textSegments = [], 
  customClass = "", 
  isSegmented = false 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!text && !textSegments.length) return;

    // Select all .word elements inside containerRef
    const words = containerRef.current?.querySelectorAll(".word");

    if (!words || words.length === 0) return;

    // Set initial opacity for each word
    gsap.set(words, { opacity: 0.2 });

    // Animate words as they scroll into view
    gsap.to(words, {
      opacity: 1,
      ease: "power1.out",
      stagger: 0.5, // Adjust delay between words
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });
  }, [text, textSegments]);

  return (
    <div ref={containerRef} className={`p-8 font-vasion ${customClass}`}>
      {isSegmented ? (
        <p className="w-full text-center leading-relaxed">
          {textSegments.map((segment, index) => (
            <React.Fragment key={index}>
              <span className={`word inline-block mr-2 ${segment.className || ""}`}>
                {segment.text}
              </span>
              {segment.addBreak && <br />}
            </React.Fragment>
          ))}
        </p>
      ) : (
        <p className="w-full text-left leading-relaxed">
          {text.split(" ").map((word, index) => (
            <span key={index} className="word inline-block mr-2">
              {word}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default AnimatedTextGSAP;
