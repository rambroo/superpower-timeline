// Trial.js
import React, { useEffect } from 'react';
import './Trial.css'; // Ensure this file exists
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Trial = () => {
  useEffect(() => {
    gsap.defaults({ ease: "power"});
    // var element = document.querySelector(".theLine");
    // var pathLength = element.getTotalLength();
    // console.log(pathLength);
    // Pulses animation Trial

    // Function to show the corresponding .textBox and hide others
    const showTextBox = (index) => {
      // Hide all text boxes first
      // Hide all text boxes smoothly
      gsap.to('.textBox', { autoAlpha: 0, duration: 1 });
      
      // Show the specific text box smoothly
      const currentBox = document.querySelector(`.iText0${index}`);
      if (currentBox) {
        gsap.to(currentBox, { autoAlpha: 1, duration: 1 });
      }
    };




    const pulses = gsap.timeline({
      defaults: {
        autoAlpha: 1,
        transformOrigin: 'center',
        ease: "elastic(2.5, 1)"
      }
    })
    .to(".ball01, .iLine01", { onStart: () => showTextBox(1) }, 0.53)
    .to(".ball02, .iLine02", { onStart: () => showTextBox(2) }, 2.9)
    .to(".ball03, .iLine03", { onStart: () => showTextBox(3) }, 5.77)
    .to(".ball04, .iLine04", { onStart: () => showTextBox(4) }, 8.03)
    .to(".ball05, .iLine05", { onStart: () => showTextBox(5) }, 10.96)
    .to(".ball06, .iLine06", { onStart: () => showTextBox(6) }, 14.86)
    .to(".ball07, .iLine07", { onStart: () => showTextBox(7) }, 18.86)
    .to(".ball08, .iLine08", { onStart: () => showTextBox(8) }, 24.26);
    

    



    // Main scroll-triggered animation Trial
    const main = gsap.timeline({
      scrollTrigger: {
        trigger: "#svg",
        scrub: 2,
        start: "top center",
        end: "bottom top",
      }
    })
      .to(".ball01", { autoAlpha: 1, duration: 0.05 })
      .fromTo(
        ".theLine",
        { strokeDasharray: "7070", strokeDashoffset: "7070" }, // Set to a value large enough to cover the line length
        { strokeDashoffset: 0, duration: 40 }
      )
      .to(".ball01", {
        motionPath: {
          path: ".theLine",
          align: ".theLine",
          alignOrigin: [0.5, 0.5],
        },
        duration: 40
      }, 0) 


    // blur Line
    const main2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#svg",
        scrub: 1,
        start: "top center",
        end: "bottom top"
      }
    })
      .to(".ball01", { autoAlpha: 1, duration: 0.05 })
      .fromTo(
        ".blurLine",
        { strokeDasharray: "7070", strokeDashoffset: "7070" }, // Set to a value large enough to cover the line length
        { strokeDashoffset: 0, duration: 40 }
      )
      .to(".ball01", {
        motionPath: {
          path: ".blurLine",
          align: ".blurLine",
          alignOrigin: [0.5, 0.5],
        },
        duration: 40
      }, 0)
      .add(pulses, 0);



  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className='timeLine'>
         
          
    <svg id="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 4320" preserveAspectRatio="xMidYMid meet">
          <path className="whiteLine"
                d="M117.297473,388.419002q904.628637-21.037875,1598.87852,224.404003c694.249883,245.441878-848.527637,624.123632-1318.373517,1002.805387s743.338259,532.959505,1030.855888,659.186757s364.656505,301.54288,56.101001,427.770131-610.098383,287.517628-799.43926,511.921631q-189.340877,224.404003-96.877638,315.853318"
                fill="none" stroke="white" strokeWidth="10" />
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
          <path className='iVLine iLine01' d="M121.393311,386.629823l.425105-305.915282" transform="translate(-1.382926 0.732624)" fill="none" stroke="white" stroke-width="2"/>//1

          <path className='iVLine iLine02' d="M1095.947913,456.018858v-319.174558" fill="none" stroke="white" stroke-width="2"/>//2

          
          <path className='iVLine iLine03' d="M1890.93997,753.986629l-14.19105-402.787245" transform="translate(0 0.000001)" fill="none" stroke="white" stroke-width="2"/>

          <path className='iVLine iLine04' d="M1338.084439,1136.402396q0-254.184658,0-256.35371" fill="none" stroke="white" stroke-width="2"/>

          
          <line className='iVLine iLine05' x1="0" y1="259.980834" x2="0" y2="-259.980834" transform="translate(601.985379 1221.266593)" fill="none" stroke="white" stroke-width="2"/>

          
          <path className='iVLine iLine06' d="M632.867185,2039.9135v-308.913949" fill="none" stroke="white" stroke-width="2"/>

          <path className='iVLine iLine07' d="M1417.965158,2263.919935v-378.463409" transform="translate(0 0.000001)" fill="none" stroke="white" stroke-width="2"/>

          
          <path className='iVLine iLine08' d="M1285.333534,2791.70087v-332.67358" fill="none" stroke="white" stroke-width="2"/>
      </svg>

      
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 4320">
            <path className="theLine"
              d="M117.297473,388.419002q904.628637-21.037875,1598.87852,224.404003c694.249883,245.441878-848.527637,624.123632-1318.373517,1002.805387s743.338259,532.959505,1030.855888,659.186757s364.656505,301.54288,56.101001,427.770131-610.098383,287.517628-799.43926,511.921631q-189.340877,224.404003-96.877638,315.853318"
              fill="none" stroke="#FE8000" strokeWidth="10" />
      </svg>
       {/* Orange Blurred Line */}
        
        <svg id="orange-svg-blur" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 4320" preserveAspectRatio="xMidYMid meet">
          <path className="blurLine"
                d="M117.297473,388.419002q904.628637-21.037875,1598.87852,224.404003c694.249883,245.441878-848.527637,624.123632-1318.373517,1002.805387s743.338259,532.959505,1030.855888,659.186757s364.656505,301.54288,56.101001,427.770131-610.098383,287.517628-799.43926,511.921631q-189.340877,224.404003-96.877638,315.853318"
                fill="none" stroke="#FE8000" strokeWidth="24" />
        </svg>


        <div className="textBox iText01">
            <h3>C-Section</h3>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Microbiome Optimization</p>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Genetic test</p>
          </div>
          <div className="textBox iText02">
            <h3>Annual SuperPower Baseline</h3>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>60 biomarker blood test</p>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Microbiome test</p>
          </div>
           <div className="textBox iText03">
            <h3>Gut health protocol</h3>
            <p> <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Personalized probiotic</p>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Gut lining peptide</p>
          </div>
          
          <div className="textBox iText04">
            <h3>Fertility protocol</h3>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Pre-natal vitamin stack</p>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Post-partum nutrients</p>
          </div>
          
          <div className="textBox iText05">
            <h3>Hormone optimization protocol</h3>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Estrogren</p>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Testosterone</p>
          </div>
          
          <div className="textBox iText06">
            <h3>Disease prevention program</h3>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Full body MRI</p>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Grail cancer screening</p>
          </div>
          <div className="textBox iText07">
            <h3>Disease prevention program</h3>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Full body MRI</p>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Grail cancer screening</p>
          </div>
          <div className="textBox iText08">
            <h3>Disease prevention program</h3>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Full body MRI</p>
            <p><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L5.5 5L1.5 9" stroke="#FE8000" stroke-width="2"></path></svg>Grail cancer screening</p>
          </div> 
    </div>
  );
}

export default Trial;



//bugs to fix
//scrolling upwards it does not work as expected