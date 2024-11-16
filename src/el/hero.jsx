import React, { useEffect } from "react";
import "./../css/hero.css";
import arrow from "./../img/arrow.svg";
import arrow2 from "./../img/arrow2.svg";
import $ from "jquery";
import calendar from "./../img/calendar.png";
import dude from "./../img/dude.png";

function Hero() {
  useEffect(() => {


    $(".hbtn-1").on("mouseenter", (e) => {
      var x = e.clientX;
      var y = e.clientY + $(window).scrollTop();
      console.log("x: " + x + " y: " + y);
      console.log("scrolltop: " + $(window).scrollTop());
      //minx = 250, maxx = 483. miny = 662 maxy = 590
      var deltaX = e.clientX - 250 - 25;
      var deltaY = e.clientY + $(window).scrollTop() - 590 - 25;

      
      $("hcircle-1").css("top", `${deltaY}`);
      $("hcircle-1").css("left", `${deltaX}`);


    setTimeout(() => {
      $(".hcircle-1").css("transform", "scale(15)");
      $(".hbtn-1").css("transform", "scale(1.1)");
      $(".hbtn-1").css("border", "solid 2px #F7F7F9");
      $(".hbtn-1 p").css("color", "#F7F7F9");
      $(".marrow-1").css("opacity", "0");
      $(".marrow-1").css("transform", "translate(25px, -25px)");
      $(".harrow-1").css("opacity", "1");
      $(".harrow-1").css("transform", "translate(-12px,0)");
    }, 10);

  }).on("mouseleave", (e) => {
    var x = e.clientX;
    var y = e.clientY + $(window).scrollTop();
    console.log("exit");
    console.log("x: " + x + " y: " + y);
    var deltaX = e.clientX - 250;
    var deltaY = e.clientY + $(window).scrollTop() - 590;

    $(".hcircle-1").css("top", `calc(-25px + ${deltaY}px)`);
    $(".hcircle-1").css("left", `calc(-25px + ${deltaX}px)`)
    $(".hcircle-1").css("transform", "scale(0)");
    $(".hbtn-1").css("transform", "scale(1)");
    $(".hbtn-1").css("border", "solid 2px #1E255E");
    $(".hbtn-1 p").css("color", "#1E255E");
    $(".marrow-1").css("opacity", "1");
    $(".marrow-1").css("transform", "translate(0px, 0px)");
    $(".harrow-1").css("opacity", "0");
    $(".harrow-1").css("transform", "translate(-37px, 25px)");
  });

  $(".hbtn-2").on("mouseenter", (e) => {
    var x = e.clientX;
    var y = e.clientY;
    console.log("x: " + x + " y: " + y);
    //minx = 250, maxx = 483. miny = 662 maxy = 590

    var deltaX = e.clientX - 537 - 25;
    var deltaY = e.clientY + $(window).scrollTop() - 590 - 25;

    $("hcircle-2").css("top", `${deltaY}`);
    $("hcircle-2").css("left", `${deltaX}`);

    setTimeout(() => {
      $(".hcircle-2").css("transform", "scale(15)");
      $(".hbtn-2").css("transform", "scale(1.1)");
      $(".hbtn-2").css("border", "solid 2px #F7F7F9");
      $(".hbtn-2 p").css("color", "#F7F7F9");
      $(".marrow-2").css("opacity", "0");
      $(".marrow-2").css("transform", "translate(25px, -25px)");
      $(".harrow-2").css("opacity", "1");
      $(".harrow-2").css("transform", "translate(-12px,0)");
    }, 10);

}).on("mouseleave", (e) => {
  var x = e.clientX;
  var y = e.clientY;
  console.log("exit");
  console.log("x: " + x + " y: " + y);
  var deltaX = e.clientX - 537;
  var deltaY = e.clientY + $(window).scrollTop() - 590;

  $(".hcircle-2").css("top", `calc(-25px + ${deltaY}px)`);
  $(".hcircle-2").css("left", `calc(-25px + ${deltaX}px)`)
  $(".hcircle-2").css("transform", "scale(0)");
  $(".hbtn-2").css("transform", "scale(1)");
  $(".hbtn-2").css("border", "solid 2px #1E255E");
  $(".hbtn-2 p").css("color", "#1E255E");
  $(".marrow-2").css("opacity", "1");
  $(".marrow-2").css("transform", "translate(0px, 0px)");
  $(".harrow-2").css("opacity", "0");
  $(".harrow-2").css("transform", "translate(-37px, 25px)");
});

  return () => {
    $(".hbtn-1, .hbtn-2").off();
  }
  }, []);
  return (
      <div className="hero-main-container fadein"  style={{"opacity": "1", "transform": "translateY(0)"}}>
        <p className="hero-title">Leer Werkwoorden</p>
        <p className="hero-title">Slimmer & Sneller</p>
        <svg width="67" height="81" viewBox="0 0 67 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-line1">
          <path d="M28.5 1.5C28.5 1.5 81.8596 30.389 61 64C43.1493 92.7627 1 73.5 1 73.5" stroke="#1E255D" strokeWidth="2"/>
        </svg>
        <svg width="61" height="186" viewBox="0 0 61 186" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-line2">
          <path d="M59.9868 1C59.9868 1 -2.07052 80.7118 1.99994 120.5C7.05924 169.954 51.5 184.5 51.5 184.5" stroke="#1E255D" stroke-width="2"/>
        </svg>
        <img src={calendar} alt="calendar" className="calendar"/>

        <img src={dude} alt="french dude" className="dude"/>
      <p className="hero-bio">Verbeter je Frans met interactieve oefeningen en heldere uitleg over werkwoorden.<br></br>Perfect voor leerlingen die sneller en slimmer willen leren. Maar ook voor docenten die het net wat <span>anders</span> willen aanpakken.</p>
      <p className="hero-bio hero-bio-2">
      Verbeter je Frans met interactieve oefneningen en heldere uitleg over werkwoorden. Perfect voor leerlingen die sneller en slimmer willen leren. Maar ook voor docenten die het net wat <span>anders</span> willen aanpakken.
      </p>

      <svg width="50" height="16" viewBox="0 0 50 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-back">
<path d="M2.58621 0L50 1.41176V16L0 15.0588L2.58621 0Z" fill="#E4E6F8"/>
</svg>


      <div className="hero-btn hbtn-1">
        <p>Registreren</p>
        <img src={arrow} className="marrow marrow-1" alt="arrow pointing top right"/>
        <img src={arrow2} className="harrow harrow-1" alt="arrow pointing top right"/>
        <div className="hero-btn-circle hcircle-1"></div>
      </div>
      <div className="hero-btn hbtn-2">
        <p>Download de app</p>
        <img src={arrow} className="marrow marrow-2" alt="arrow pointing top right"/>
        <img src={arrow2} className="harrow harrow-2" alt="arrow pointing top right"/>
        <div className="hero-btn-circle hcircle-2"></div>
        
      </div>
      </div>
  );
}

export default Hero;