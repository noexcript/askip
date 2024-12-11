



import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, className, speed = 150 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isCursorVisible, setIsCursorVisible] = useState(true);
    const [index, setIndex] = useState(0); 
  
    useEffect(() => {
      if (index < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex(index + 1); 
        }, speed);
  
        return () => clearTimeout(timer); 
      }
    }, [index, text, speed]); 
  
    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setIsCursorVisible((prev) => !prev);
      }, 500);
  
      return () => clearInterval(cursorInterval); 
    }, []);

    return (
        <div className={`${className && className}`}>
            <span>{displayedText}</span>
            {isCursorVisible && <span className="cursor" />}
        </div>
    );
};

export default TypewriterEffect;
