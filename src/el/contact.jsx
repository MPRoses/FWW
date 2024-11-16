import React, { useEffect } from "react";
import "./../css/contact.css";
import { gsap } from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import bg from "./../img/bg.svg";
import $ from "jquery";

function Contact() {
  useEffect(() => {
    const textElement = document.querySelector('.txt');
    const chars = new SplitText(textElement, { type: "chars", charsClass: "char", position: "relative" }).chars;

    const weightInit = getComputedStyle(document.body).getPropertyValue('--fw');
    const weightTarget = 400; 
    const stretchInit = getComputedStyle(document.body).getPropertyValue('--fs');
    const stretchTarget = 80;
    const maxYScale = 2.5;
    let charH = textElement.offsetHeight;
    let isMouseDown = false;
    let charIndexSelected = 0;
    let dragYScale = 0;
    let mouseInitialY = 0;

    var ran = 0;
    $(window).on("scroll", () => {
      if ($(window).scrollTop() > 1000) {
        if (ran) return;
        ran = 1;
        setTimeout(() => {
          $(".container-contact").css("opacity", "1");
          $(".container-contact").css("transform", "translate(0)");
        }, 50);
        animInTxt();
      } else {
        if (!ran) return;
        ran = 0;

        $(".container-contact").css("opacity", "0");
        $(".container-contact").css("transform", "translateY(-50px)");
      }
      })


    const animInTxt = () => {
      const elem = document.querySelector('.char');
      const rect = elem.getBoundingClientRect();
      gsap.from(chars, {
        y: () => -1 * (rect.y + charH + 500),
        fontWeight: weightTarget,
        fontStretch: stretchTarget,
        scaleY: 2,
        ease: "cubic-bezier(.13,.61,.2,.89)",
        duration: 1.5,
        delay: 0,
        stagger: { each: 0.05, from: 'random' },
        onComplete: initEvents
      });
      gsap.from($(".contact-container p, .contact-container svg"), {
        y: () => -1 * (rect.y + charH + 500),
        fontWeight: weightTarget,
        fontStretch: stretchTarget,
        scaleY: 2,
        ease: "cubic-bezier(.13,.61,.2,.89)",
        duration: 1.5,
        delay: 0,
        stagger: { each: 0.05, from: 'random' }
      });
    };

    const initEvents = () => {
      document.body.onmouseup = () => {
        if (isMouseDown) {
          isMouseDown = false;
          snapBackText();
        }
      };

      document.body.onmousemove = (e) => {
        if (isMouseDown) {
          const mouseFinalY = e.clientY;
          const distY = mouseInitialY - mouseFinalY;
          dragYScale = distY / (charH * (maxYScale - 1));
          if (dragYScale > (maxYScale - 1)) dragYScale = maxYScale - 1;
          else if (dragYScale < -0.5) dragYScale = -0.5;
          setFontDragDimensions();
        }
      };

      document.body.addEventListener("mouseleave", (event) => {
        if (event.clientY <= 0 || event.clientX <= 0 || event.clientX >= window.innerWidth || event.clientY >= window.innerHeight) {
          snapBackText();
          isMouseDown = false;
        }
      });

      chars.forEach((char, index) => {
        char.addEventListener("mousedown", (e) => {
          mouseInitialY = e.clientY;
          charIndexSelected = index;
          isMouseDown = true;
        });
      });
    };

    const setFontDragDimensions = () => {
      gsap.to(chars, {
        y: (index) => calcFracDispersion(index) * -50,
        fontWeight: (index) => weightInit - calcFracDispersion(index) * (weightInit - weightTarget),
        fontStretch: (index) => stretchInit - calcFracDispersion(index) * (stretchInit - stretchTarget),
        scaleY: (index) => Math.max(1 + calcFracDispersion(index), 0.5),
        ease: "power4",
        duration: 0.6
      });
    };

    const calcFracDispersion = (index) => {
      return (1 - Math.abs(index - charIndexSelected) / (chars.length * 0.8)) * dragYScale;
    };

    const snapBackText = () => {
      gsap.to(chars, {
        y: 0,
        fontWeight: weightInit,
        fontStretch: stretchInit,
        scaleY: 1,
        ease: "elastic(0.35, 0.1)",
        duration: 1,
        stagger: { each: 0.02, from: charIndexSelected }
      });
    };


    window.onresize = () => { charH = textElement.offsetHeight; };
  }, []);

  return (
    <div className="container-contact">
      
      <div className="contact-container">
        <img src={bg} alt="colourful swirlls"/>
          <h1 className="txt">contact</h1>
          <p>Wil je ons bereiken? Stuur gerust een mailtje. Heb je ergens een bug gevonden in de site/app? Stuur dit ook op, dat wordt namelijk erg gewaardeerd. Of ben je opzoek naar een functionaliteit die we nog niet hebben? Stuur dit dan ook op, dan gaan we er snel mee aan de slag!</p>
          <svg className="icon"width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 6L12 13L2 6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Fransewerkwoorden@outlook.com</p>

      </div>
    </div>
  );
}

export default Contact;