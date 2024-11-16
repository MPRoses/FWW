import React, { useEffect } from "react";
import "./../css/cursor.css";
import { gsap } from "gsap-trial";
import $ from "jquery";

function Cursor() {
  useEffect(() => {
    const cursorHover = document.querySelector(".cursor-hover");
    
    const moveCursor = (e) => {
      gsap.to(cursorHover, {
        x: e.clientX - 28, // Center the cursor
        y: e.clientY - 28,
        duration: 0.3,
        ease: "cubic-bezier(.13,.61,.2,.89)"
      });
    };

    const onMouseDown = () => {
      gsap.to(cursorHover, {
        scaleX: 1.55,
        scaleY: 1.1,
        duration: 0.4,
        ease: "bounce.out"
      });
      $(".contact-container img").css("filter", "blur(0px)");
    };

    const onMouseUp = () => {
      gsap.to(cursorHover, {
        scaleX: 1.3,
        scaleY: 1.3,
        duration: 0.5,
        ease: "bounce.out"
      });
      $(".contact-container img").css("filter", "blur(15px)");
    };
    
    $(".txt").on("mouseenter", () => {
      $(".cursor-hover").css("opacity", "1");
    }).on("mouseleave", () => {
      $(".cursor-hover").css("opacity", "0");
    })

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

  }, []);

  return (
      <div className="cursor-hover">
        <div></div>
        <div></div>
        <p>&lt;sleep&gt;</p>
      </div>
  );
}

export default Cursor;