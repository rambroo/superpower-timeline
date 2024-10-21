//HeaderText.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeaderText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const startFadeIn = 0; // Fade starts at 80vh
    const endFadeIn = 200; // Fully visible at 200vh

    gsap.to(textRef.current, {
      opacity: 1,
      clipPath: 'inset(0% 0% 0% 0%)', // Reveal the text from left to right
      ease: 'none',
      scrollTrigger: {
        trigger: textRef.current,
        start: `${startFadeIn}vh top`, // Start when the element is at 80vh from the top
        end: `${endFadeIn}vh top`, // Fully visible at 200vh from the top
        scrub: 1,

      },
    });
  }, []);

  return (
    <div className="header-text" style={{ overflow: 'hidden' }}>
      <h1
        ref={textRef}
        style={{
          opacity: 0, // Initially hidden
          clipPath: 'inset(0% 100% 0% 0%)', // Initially clipped from the right
        }}
      >
        Unlock  the potential your life holds
      </h1>
    </div>
  );
};

export default HeaderText;
