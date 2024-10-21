import React, { useEffect } from 'react';
import './Timeline.css';
import './HeaderText'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  // Orange Line Effect
  useEffect(() => {
    gsap.defaults({ ease: "none" });

    // Select the orange line path
    const path = document.querySelector(".orangeLine");
    const pathLength = path.getTotalLength();

    // Set strokeDasharray and strokeDashoffset for the orange line
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    // Main animation timeline for scrolling the orange line
    const main = gsap.timeline({
      scrollTrigger: {
        trigger: "#svg",

        scrub: 2,
        start: "top top-=700",
        end: "bottom center",
        onUpdate: self => updateBallVisibility(self.progress) 
      }
    });

    // Animate strokeDashoffset to reveal the line
    main.fromTo(path, { strokeDashoffset: pathLength }, { strokeDashoffset: 0, duration: 1.5 });

    // Set initial hidden state for all balls using GSAP
    gsap.set('.ball', { autoAlpha: 1 });

    // Animate the blur line
    animateBlurLine();
  }, []); 

  // Function to update ball visibility based on progress
  const updateBallVisibility = (progress) => {
    const ballClasses = ['.ball01', '.ball02', '.ball03', '.ball04', '.ball05', '.ball06', '.ball07', '.ball08'];
    const iVLineClasses = ['.iline01', '.iline02', '.iline03', '.iline04', '.iline05', '.iline06', '.iline07', '.iline08'];

    const visibilityPoints = [0,0.15, 0.25, 0.35, 0.5, 0.6, 0.72, 0.8];

    ballClasses.forEach((ballClass, index) => {
      if (progress >= visibilityPoints[index]) {
        gsap.to(ballClass, { autoAlpha: 1, duration: 2}); // Smoothly show the ball
      } else {
        gsap.to(ballClass, { autoAlpha: 0, duration: 0.5 }); // Smoothly hide the ball if it's not in the range
      }
    });
    iVLineClasses.forEach((iVLineClass, index) => {
      if (progress >= visibilityPoints[index]) {
        gsap.to(iVLineClass, { autoAlpha: 1, duration: 2}); // Smoothly show the Line
      } else {
        gsap.to(iVLineClass, { autoAlpha: 0, duration: 0.5 }); // Smoothly hide the Line if it's not in the range
      }
    });
  };

  // Function to animate the blurred orange line
  const animateBlurLine = () => {
    const blurPath = document.querySelector(".blurLine");
    const blurPathLength = blurPath.getTotalLength();

    // Set strokeDasharray and strokeDashoffset for the blur line
    blurPath.style.strokeDasharray = blurPathLength;
    blurPath.style.strokeDashoffset = blurPathLength;

    // Scroll animation for the blurred orange line
    gsap.fromTo(blurPath, 
      { strokeDashoffset: blurPathLength }, 
      { 
        strokeDashoffset: 0, 
        duration: 2, 
        scrollTrigger: {
          trigger: "#svg",
          scrub: 2,
          start: "top top-=700",
          end: "bottom center"
        }
      }
    );
  };

  return (
    <div>
      <h1 className="header-section"></h1>
      <div id="svg-container">
        {/* Static White Line SVG */}
        <svg id="white-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 4320" preserveAspectRatio="xMidYMid meet">
          <path className="whiteLine"
                d="M117.297473,388.419002q904.628637-21.037875,1598.87852,224.404003c694.249883,245.441878-848.527637,624.123632-1318.373517,1002.805387s743.338259,532.959505,1030.855888,659.186757s364.656505,301.54288,56.101001,427.770131-610.098383,287.517628-799.43926,511.921631q-189.340877,224.404003-96.877638,315.853318"
                fill="none" stroke="white" strokeWidth="5" />
          <ellipse className="ball ball01" rx="17.229121" ry="15.998469" transform="translate(117.297473 386.774018)" fill="#FE8000" strokeWidth="0"/>      
          <ellipse className="ball ball02" rx="38.601" ry="36.083543" transform="matrix(.441859 0 0 0.441859 1095.947913 456.018858)" fill="#FE8000" strokeWidth="0"/>
          <ellipse className="ball ball03" rx="38.948201" ry="37.360182" transform="matrix(.403549 0 0 0.403549 1890.93997 753.986629)" fill="#FE8000" strokeWidth="0"/>
          <ellipse className="ball ball04" rx="28.752091" ry="28.752091" transform="matrix(.760609 0 0 .760609 1338.084439 1136.402395)" fill="#FE8000" strokeWidth="0"/>
          <ellipse className="ball ball05" rx="44.43534" ry="27.036608" transform="matrix(.694983 0 0 1 601.985379 1481.247427)" fill="#FE8000" strokeWidth="0"/>
          <ellipse className="ball ball06" rx="44.43534" ry="27.036608" transform="matrix(.694983 0 0 1 632.867185 2039.9135)" fill="#FE8000" strokeWidth="0"/>
          <ellipse className="ball ball07" rx="44.43534" ry="27.036608" transform="matrix(.694983 0 0 1 1417.965158 2263.919935)" fill="#FE8000" strokeWidth="0"/>
          <ellipse className="ball ball08" rx="44.43534" ry="27.036608" transform="matrix(.694983 0 0 1 1285.333534 2791.70087)" fill="#FE8000" strokeWidth="0"/>

          // visible lines
          <path className='vLine line01' d="M117.297473,386.774018q0,1.644985,17.229121,398.294106" transform="matrix(.999417 0.034153-.034153 0.999417 15.990901-3.780441)" fill="none" stroke="white" stroke-width="2" />//1
          <path className='vLine line02' d="M1095.947913,456.018858l15.104803,642.552232" transform="translate(.000001 0)" fill="none" stroke="white" stroke-width="2"/>//2
          <path className='vLine line03' d="M1890.93997,753.986629v727.434722" fill="none" stroke="white" stroke-width="2"/>
          <path className='vLine line04' d="M1338.084439,1136.402395v743.763277" transform="translate(0 0.000001)" fill="none" stroke="white" stroke-width="2"/>
          <line className='vLine line05' x1="0" y1="-238.659848" x2="0" y2="238.659849" transform="translate(601.985379 1719.907275)" fill="none" stroke="white" stroke-width="2"/>
          <path className='vLine line06' d="M632.867185,2039.9135v385.056482" fill="none" stroke="white" stroke-width="2"/>
          <path className='vLine line07' d="M1417.965158,2263.919935v348.708084" fill="none" stroke="white" stroke-width="2"/>
          <path className='vLine line08' d="M1285.333534,2791.70087v303.992138" fill="none" stroke="white" stroke-width="2"/>     
          

          //hovering lines
          <path className='iVLine iline01' d="M121.393311,386.629823l.425105-305.915282" transform="translate(-1.382926 0.732624)" fill="none" stroke="white" stroke-width="2"/>//1
          <path className='iVLine iline02' d="M1095.947913,456.018858v-319.174558" fill="none" stroke="white" stroke-width="2"/>//2
          <path className='iVLine iline03' d="M1890.93997,753.986629l-14.19105-402.787245" transform="translate(0 0.000001)" fill="none" stroke="white" stroke-width="2"/>
          <path className='iVLine iline04' d="M1338.084439,1136.402396q0-254.184658,0-256.35371" fill="none" stroke="white" stroke-width="2"/>
          <line className='iVLine iline05' x1="0" y1="259.980834" x2="0" y2="-259.980834" transform="translate(601.985379 1221.266593)" fill="none" stroke="white" stroke-width="2"/>
          <path className='iVLine iline06' d="M632.867185,2039.9135v-308.913949" fill="none" stroke="white" stroke-width="2"/>
          <path className='iVLine iline07' d="M1417.965158,2263.919935v-378.463409" transform="translate(0 0.000001)" fill="none" stroke="white" stroke-width="2"/>
          <path className='iVLine iline08' d="M1285.333534,2791.70087v-332.67358" fill="none" stroke="white" stroke-width="2"/>
          
                     
              
        </svg>
          
        {/* Dynamic Orange Line SVG */}
        <svg id="orange-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 4320" preserveAspectRatio="xMidYMid meet">
          <path className="orangeLine"
                d="M117.297473,388.419002q904.628637-21.037875,1598.87852,224.404003c694.249883,245.441878-848.527637,624.123632-1318.373517,1002.805387s743.338259,532.959505,1030.855888,659.186757s364.656505,301.54288,56.101001,427.770131-610.098383,287.517628-799.43926,511.921631q-189.340877,224.404003-96.877638,315.853318"
                fill="none" stroke="#FE8000" strokeWidth="5" />
        </svg>

        {/* Orange Blurred Line */}
        <svg id="orange-svg-blur" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 4320" preserveAspectRatio="xMidYMid meet">
          <path className="blurLine"
                d="M117.297473,388.419002q904.628637-21.037875,1598.87852,224.404003c694.249883,245.441878-848.527637,624.123632-1318.373517,1002.805387s743.338259,532.959505,1030.855888,659.186757s364.656505,301.54288,56.101001,427.770131-610.098383,287.517628-799.43926,511.921631q-189.340877,224.404003-96.877638,315.853318"
                fill="none" stroke="#FE8000" strokeWidth="24" />
        </svg>
        
        
      </div>
    </div>
  );
}

export default Timeline;




//Bugs to resolve
// 1. on zoom out the effect is different due to 2 sections i.e. Header and Timeline

// Things Left to Do
// 1. Add text to the timeline
// 2.  the zoom out effect