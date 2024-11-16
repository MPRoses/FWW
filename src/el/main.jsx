import React, { useEffect } from "react";
import "./../css/main.css";
import { gsap } from "gsap-trial";
import $ from "jquery";

function Main() {
  useEffect(() => {

    var currentMode = 1;
    var flag = 0;

    gsap.to(".main-bio-2 *", {
      y: 50,
      opacity: 0,
      stagger: 0.025,
      duration: 0.5,
      onComplete: () => {
        setTimeout(() => {
          $(".main-bio-2").css("display", "none");
        }, 700);
      }
  });
  
    
    $(".main-btn").on("click", (e) => {
      if ($(e.currentTarget).hasClass("active")) {
        return;
      }

      if (flag) return;
      flag = 1;
      setTimeout(() => {
        flag = 0;
      }, 1500);

      var clickedBtn = $(e.currentTarget);
  
      $(".main-btn").removeClass("active");
      clickedBtn.addClass("active");

      console.log(currentMode);
  
      if (currentMode) {
          $(".main-btn:eq(0)").attr("style", "opacity: .4 !important");
          setTimeout(() => {
            $(".main-btn:eq(0)").attr("style", "opacity: 1");
          }, 1500);
          gsap.to(".main-bio-1 *", {
              y: 50,
              opacity: 0,
              stagger: 0.025,
              duration: .3,
              onComplete: () => {
                setTimeout(() => {
                  $(".main-bio-1").css("display", "none");
                }, 700);
              }
          });
          $(".main-bio-2").css("display", "block");
          gsap.fromTo(".main-bio-2 *", {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.025,
            duration: 0.5,
            delay: 0
        });
      } else {
        $(".main-btn:eq(1)").attr("style", "opacity: .4 !important");
          setTimeout(() => {
            $(".main-btn:eq(1)").attr("style", "opacity: 1");
          }, 1500)
          gsap.to(".main-bio-2 *", {
              y: 50,
              opacity: 0,
              stagger: 0.025,
              duration: 0.5,
              onComplete: () => {
                setTimeout(() => {
                  $(".main-bio-2").css("display", "none");
                }, 700);
              }
          });
          $(".main-bio-1").css("display", "block");
          gsap.fromTo(".main-bio-1 *", {
              y: -50,
              opacity: 0
          }, {
              y: 0,
              opacity: 1,
              stagger: 0.025,
              duration: 0.5
          });
      }
  
      currentMode = (currentMode === 1) ? 0 : 1;
    });

  return () => {
    $(".second-main-container").off();
  }
  }, []);
  return (
      <div className="second-main-container">
        <p className="main-title fadein">Hoe werkt het?</p>
        <div className="main-btn active fadein"  style={{"opacity": "0", "transform": "translateY(-50px)"}}>
          <p>Leerling</p>
        </div>
        <div className="main-btn fadein" style={{"opacity": "0", "transform": "translateY(-50px)"}}>
          <p>Docent</p>
        </div>
        <div className="main-biocontainer main-bio-1">
          <p className="main-title2 fadein">
            1. Maak een account aan
          </p>
          <p className="main-bio2 fadein">
          Registreer je online op de website of op je telefoon en maak een account aan. Dit geeft je toegang tot alle interactieve lessen en oefenmogelijkheden, zonder enige kosten. 
          <span><br></br><br></br></span>
          Heeft je docent een groep aangemaakt? Zorg dan dat je lid word van de groep.
Dit doe je met behulp van een uitnodigingslink die je van je docent krijgt.
          </p>
          <p className="main-title2 fadein">
            2. Maak studies aan
          </p>
          <p className="main-bio2 fadein">
            Maak een study waarin je werkwoorden en tijden toevoegt. Je kunt deze studies op verschillende manieren oefenen en hierbij punten verdienen. Hiernaast is er elke week een speciale toets die alle studenten op het platform kunnen maken, met prijzen te winnen.
            <span><br></br><br></br></span>
            Als je deel uitmaakt van een groep die door je docent is gemaakt, kun je je studies delen met je groepsgenoten of de studies leren die je docent heeft gepost.
          </p>
          <p className="main-title2 fadein">
            3. Behaal je doelen
          </p>
          <p className="main-bio2 fadein">
            Voltooi de door jou of je docent ingestelde opdrachten. Verbeter je vaardigheden, bereik je leerdoelen en bereid je beter voor op je toetsen!
          </p>
        </div>
        <div className="main-biocontainer main-bio-2">
          <p className="main-title2 fadein">
            1. Maak een docentenaccount aan
          </p>
          <p className="main-bio2 fadein">
          Registreer je als docent en creëer je eigen account. Dit geeft je toegang tot alle lesmaterialen en beheertools.
          </p>
          <p className="main-title2 fadein">
            2. Stel groepen samen
          </p>
          <p className="main-bio2 fadein">
            Maak groepen aan voor je klassen en nodig je leerlingen uit door een uitnodigingslink aan te maken en deze te delen.  
          </p>
          <p className="main-title2 fadein">
            3. Zet studies uit
          </p>
          <p className="main-bio2 fadein">
            Maak een study aan waarin je werkwoorden en tijden toevoegt die je moeten leren, samen met een deadline. De deadline zorgt ervoor dat leerlingen herinneringen krijgen, zodat ze op tijd oefenen.
          </p>
          <p className="main-title2 fadein">
            4. Evalueer en beloon
          </p>
          <p className="main-bio2 fadein">
            Evalueer de voortgang van je leerlingen per study, en kijk welke leerlingen het het best doen in de groep op de groep leaderboard. Gebruik deze data om je lessen aan te passen en je leerlingen te motiveren.
          </p>
        </div>
      </div>
  );
}

export default Main;