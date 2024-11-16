import React, { useEffect } from "react";
import "./../css/nav.css";
import logo from "./../img/logo.png";
import { gsap } from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import $ from "jquery";

gsap.registerPlugin(SplitText);

function Nav() {
  useEffect(() => {
    const pElements = document.querySelectorAll(".nav-main p");
    const btnElement = document.querySelector(".nav-btn");
    var isNav = 0;
    $(window).on("scroll", () => {
      if ($(window).scrollTop() > 50) {
        if (isNav) return;
        isNav = 1;
        $(".nav-container").addClass("active");
      } else {
        if (!isNav) return;
        isNav = 0;
        $(".nav-container").removeClass("active");
      }
    })
    $("#HWH").on("click", () => {
      $('html, body').animate({
        scrollTop: 850
    }, 600);
    });
    $("#CTT").on("click", () => {
      $('html, body').animate({
        scrollTop: 1240
    }, 600);
    });
    $(".nav-logo").on("click", () => {
      window.location.reload();
    });
    const animateText = (p) => {
      const split = new SplitText(p, { type: "chars" });
      gsap.set(split.chars, {
        transformOrigin: "center center 20px",
        backfaceVisibility: "hidden"
      });
      const tl = gsap.timeline({

      });
      tl.to(split.chars, {
        rotationX: "10deg",
        opacity: 0,
        stagger: 0.015,
        repeat: 0,
        duration: 0.3,
        ease: "power1.inOut"
      });
      tl.set(split.chars, {
        rotationX: "-10deg",
        opacity: 0 
      });
      tl.to(split.chars, {
        rotationX: "0deg",
        opacity: 1, 
        stagger: 0.015,
        repeat: 0, 
        duration: 0.3, 
        ease: "power1.inOut"
      });
    };
    pElements.forEach(p => {
      p.addEventListener("mouseenter", () => animateText(p));
    });

    if (btnElement) {
      btnElement.addEventListener("mouseenter", () => {
        const pElement = document.querySelector(".main-item:nth-child(3) p");
        if (pElement) animateText(pElement);
      });
    }
    return () => {
      pElements.forEach(p => {
        p.removeEventListener("mouseenter", () => animateText(p));
      });
      if (btnElement) {
        btnElement.removeEventListener("mouseenter", () => {
          const pElement = document.querySelector(".main-item:nth-child(3) p");
          if (pElement) animateText(pElement);
        });
      }
    };
  }, []);

  return (
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="french flag" />
          <p>Werkwoorden</p>
        </div>
        <div className="nav-main">
          <div className="main-item" id="HWH">
          <p>Hoe werkt het?</p>
          </div>
          <div className="main-item" id="CTT">
          <p>Contact</p>
          </div>
          <div className="main-item">
          <p className="nav-btn-txt">Login</p>
          <p className="nav-btn-txt">Menu</p>
          <div className="nav-btn">
          </div>
          </div>
        </div>
      </div>
  );
}

export default Nav;