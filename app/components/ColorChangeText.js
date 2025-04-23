"use client"

import React, { useEffect, useRef } from 'react';

const ColorChangeText = ({ text, className, startColor = '#999999', endColor = '#000000' }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const letters = container.querySelectorAll('.letter');
    
    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollPos = window.innerHeight - rect.top;
      const scrollPercent = Math.min(Math.max(scrollPos / (window.innerHeight + rect.height), 0), 1);
      
      letters.forEach((letter, i) => {
        // Calculate delay based on letter position
        const delay = (i / letters.length) * 0.3; // Adjust delay as needed
        const letterProgress = Math.min(Math.max((scrollPercent - delay) * 2, 0), 1);
        
        letter.style.color = calculateColor(startColor, endColor, letterProgress);
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [startColor, endColor]);
  
  const calculateColor = (startColor, endColor, progress) => {
    // Convert hex to RGB
    const start = hexToRgb(startColor);
    const end = hexToRgb(endColor);
    
    // Interpolate between colors
    const r = Math.round(start.r + (end.r - start.r) * progress);
    const g = Math.round(start.g + (end.g - start.g) * progress);
    const b = Math.round(start.b + (end.b - start.b) * progress);
    
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };
  
  return (
    <p ref={containerRef} className={className}>
      {text.split('').map((char, index) => (
        <span key={index} className="letter">
          {char}
        </span>
      ))}
    </p>
  );
};

export default ColorChangeText;