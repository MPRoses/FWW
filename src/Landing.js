import React, { useEffect } from "react";
import "./Landing.css";
import Nav from "./el/nav";
import Hero from "./el/hero";
import Main from "./el/main";
import Contact from "./el/contact";
import $ from "jquery";
import anime from "animejs";
import phone from "./img/phone.png";
import gsap from "gsap-trial";
import laptop from "./img/laptop.png"
import verify from "./img/verify.png"
import google from "./img/google.png";
import back from "./img/back.png";

function Landing() {
  useEffect(() => {
    setTimeout(() => {
      $('html, body').animate({
        scrollTop: 1
    }, 50);
    }, 150);
  

    const fadeInOnScroll = (selector, scrollValue, delay, opposite) => {
      let isVisible = false;
      $(window).on("scroll", () => {
        if ($(window).scrollTop() > scrollValue) {
          if (isVisible) return;
          isVisible = true;
          setTimeout(() => {
            $(selector).css("opacity", `${opposite === 0 ? 1 : 0}`);
            var a = 0;
            if (opposite) {
              a = 50;
            }
            $(selector).css("transform", `translateY(${a}px)`);
          }, delay);
        } else {
          if (!isVisible) return;
          isVisible = false;
          $(selector).css("opacity", `${opposite}`);
          var a = 50;
            if (opposite) {
              a = 0;
            }
            $(selector).css("transform", `translateY(${a}px)`);
        }
      });
    };    

    $(".uno, .dos").on("click", ( e) => {

      $(".uno, .dos").removeClass("active");
      $(e.currentTarget).addClass("active");
      $(".uno, .dos").css({
        "z-index": "1",
      })
      if ($(e.currentTarget).css("top") === "0px") {
        // leerling
      
      } else {
        // student
      }
    })

    $(".login-switch").on("click", () => {
      if ($(".login-switch").eq(0).css("display") === "block") {
        // go to register
        $(".register").css("display", "block");
        $(".login").css("display", "none");
      } else {
        // go to login
        $(".register").css("display", "none");
        $(".login").css("display", "block");
      }
    })

    // Initializing fadeInOnScroll for the main elements
    fadeInOnScroll(".main-title", 475, 0, 0);

    fadeInOnScroll(".main-btn:eq(0)", 550, 0, 0);
    fadeInOnScroll(".main-btn:eq(1)", 550, 100, 0);

    fadeInOnScroll(".main-title2:eq(0)", 550, 200, 0);
    fadeInOnScroll(".main-bio2:eq(0)", 550, 300, 0);
    fadeInOnScroll(".main-title2:eq(1)", 700, 0, 0);
    fadeInOnScroll(".main-bio2:eq(1)", 700, 100, 0);
    fadeInOnScroll(".main-title2:eq(2)", 750, 0, 0);
    fadeInOnScroll(".main-bio2:eq(2)", 750, 100, 0);
    
    fadeInOnScroll(".main-title2:eq(3)", 550, 200, 0);
    fadeInOnScroll(".main-bio2:eq(3)", 550, 300, 0);
    fadeInOnScroll(".main-title2:eq(4)", 575, 0, 0);
    fadeInOnScroll(".main-bio2:eq(4)", 575, 100, 0);
    fadeInOnScroll(".main-title2:eq(5)", 600, 0, 0);
    fadeInOnScroll(".main-bio2:eq(5)", 600, 100, 0);
    fadeInOnScroll(".main-title2:eq(6)", 750, 0, 0);
    fadeInOnScroll(".main-bio2:eq(6)", 750, 100, 0);

    //
    fadeInOnScroll(".hero-main-container", 400, 0, 1);
    fadeInOnScroll(".phone-container", 1500, 0, 1);
    $('body').addClass('body-preloader');



      var textContainer = document.querySelector(".preloader-text");
      textContainer.innerHTML = textContainer.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({})
      .add({
        targets: ".preloader-text .letter",
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "spring(1, 80, 10, 0)",
        duration: 1000,
        delay: (el, i) => 500 + 30 * i
      }).add({
        targets: ".preloader-text .letter",
        translateY: [0, -100],
        opacity: [1, 0],
        easing: "spring(1, 80, 10, 0)",
        duration: 1000,
        delay: (el, i) => 30 * i
      })

      anime.timeline({})
      .add({
        targets: ".main-landing div:not(.hero-btn):not(.hero-btn-circle):not(.main-btn):not(.container-contact), .login-container p, .login-container div",
        translateY: [0, -50],
        opacity: [1, 0],
        easing: "spring(1, 80, 10, 0)",
        duration: 600,
        delay: (el, i) => 0 + 50 * i
      }).add({
        targets: ".main-landing div:not(.hero-btn):not(.hero-btn-circle):not(.main-btn):not(.container-contact)",
        translateY: [-50, 0],
        opacity: [0, 1],
        easing: "spring(1, 80, 10, 0)",
        duration: 1000,
        delay: (el, i) => 150 + 69 * i
      });

      setTimeout(() => {
        $(".preloader-bg div").css("transform", "translateY(0)");
        $(".main-landing").css({
          "filter": "blur(0px)",
          "transform": "scale(1)"
        });
        setTimeout(() => {
          $(".preloader-bg").css("transform", "scale(3)")
        }, 600);

        setTimeout(() => {
          $(".container").removeClass("preloader");
          $('body').removeClass('body-preloader');
          
        }, 1500);
      }, 3500);

      $(window).on("scroll", () => {
       //console.log($(window).scrollTop());
       console.log('hello');
       const scrollTop = $(window).scrollTop();
        const maxScroll = 1200;
        const scrollPosition = scrollTop / maxScroll;
        console.log(scrollPosition);
        // Calculate new top value based on scroll position (from 220px to 800px)
        const newTop = 220 + (scrollPosition * (1500 - 220));
        const newTop2 = 150 + (scrollPosition * (1500 - 150));
        if (scrollPosition > 0.7) {
          return;
        }

        // Calculate rotations based on scroll position
        const rotationZ = scrollPosition * -35;
        const rotationY = scrollPosition * 10;

        // GSAP animation for smooth movement and rotation
        gsap.to(".phone", {
          top: newTop,
          rotationZ: rotationZ,
          rotationY: rotationY,
          duration: 1,
          ease: "power2.out"
          });
          if (scrollPosition < 0.3) {
            gsap.to(".laptop", {
              top: newTop2,
              right: -950 - scrollPosition * 1400,
              rotationZ: rotationZ,
              rotationY: rotationY,
              duration: 1,
              ease: "power2.out"
              });
          }
      })

      $(window).on("mousemove", (e) => {
        const { clientX, clientY } = e;
        const centerX = $(window).width() / 2;
        const centerY = $(window).height() / 2;
        const posX = (clientX - centerX) / 40;
        const posY = (clientY - centerY) / 40;
      
        console.log("breached");
        console.log("posX:", posX, "posY:", posY);
      
        gsap.to(".phone", {
          rotationY: posX,
          rotationX: -posY,
          ease: "power2.out",
          duration: 1
        });
      });
      

        $("input").on("focus", function() {
          $(this).closest(".form-container").css("border", "1px solid #1E255E");
          $(this).closest(".form-container").prev(".p-top").css("color", "#1E255E");
        });
      
        $("input").on("blur", function() {
          $(this).closest(".form-container").css("border", "1px solid #747E8D");
          $(this).closest(".form-container").prev(".p-top").css("color", "#747E8D");
        });

        $(".form-exit").on("click", () => {
          setTimeout(() => {
            $(".container").removeClass("preloader");
            $('body').removeClass('body-preloader');
          }, 1500);
          anime.timeline({})
          .add({
            targets: ".login-container *:not(.checkmark img)",
            translateY: [0, -50],
            opacity: [1, 0],
            easing: "spring(1, 80, 10, 0)",
            duration: 1000,
            delay: (el, i) => 0 + 20 * i
          });
            $(".preloader-bg").css("transform", "scale(3)")
            $(".login-container").css({
              "opacity": "0"
            })
          setTimeout(() => {
            $(".login-container").css({
              "z-index": "0"
            })
          }, 1500);
          


          $(".main-landing").css({
            "filter": "blur(0)",
            "transform": "scale(1)"// rotate3d(300, 300, 1, -60deg)
          });


        })

        $(".google").on("click", () => {
          if ($(".login-form").hasClass("active")) {
            console.log("login with google");

          } else {
            console.log("register with google");
          }
        })

        // Register button click event
        $(".register-btn").on("click", () => {
          // Retrieve values from the registration form fields
          const username = $(".register-form input[name='username']").val() || "";
          const email = $(".register-form input[type='email']").val() || "";
          const password = $(".register-form input[type='password']").first().val() || "";
          const confirmPassword = $(".register-form input[type='password']").last().val() || "";

          // Check if the checkbox (agreement) is checked in the register form
          const isAgreed = (typeof currentOpacityRegister !== 'undefined' && currentOpacityRegister === 1);

          // Create JSON object for registration form data
          const registerData = {
              username: username,
              email: email,
              password: password,
              confirmPassword: confirmPassword,
              agreedToTerms: isAgreed // Checkbox status
          };

          // Display the JSON object for registration in the console
          console.log("Register Data:", JSON.stringify(registerData, null, 2));
        });

        // Login button click event
        $(".login-btn").on("click", () => {
          // Retrieve values from the login form fields
          const email = $(".login-form input[type='email']").val() || "";
          const password = $(".login-form input[type='password']").val() || "";

          // Check if the checkbox (stay logged in) is checked in the login form
          const stayLoggedIn = (typeof currentOpacityLogin !== 'undefined' && currentOpacityLogin === 1);

          // Create JSON object for login form data
          const loginData = {
              email: email,
              password: password,
              stayLoggedIn: stayLoggedIn // Checkbox status
          };

          // Display the JSON object for login in the console
          console.log("Login Data:", JSON.stringify(loginData, null, 2));
        });


        $(".hbtn-1").on("click", () => {
          $('html, body').animate({
            scrollTop: 1
        }, 1000);
        setTimeout(() => {
          $(".container").addClass("preloader");
          $('body').addClass('body-preloader');
        }, 1100);
          $(".main-landing").css({
            "filter": "blur(5px)",
            "transform": "scale(0)"// rotate3d(300, 300, 1, -60deg)
          });
          $(".login-container").css("margin-left", "0");
          $(".login-container").css("transform", "scale(1)");
          setTimeout(() => {
            $(".preloader-bg").css("transform", "scale(1)")
          }, 	700);

          $(".p-title, .p-bio").removeClass("active");
          $(".login-form").removeClass("active");
          $(".register-form").addClass("active");
          $(".title-register, .bio-register").addClass("active");
  
          setTimeout(() => {
            $()
            $(".login-container").css({
              "opacity": "1",
              "z-index": "3132112"
            })

            
            anime.timeline({})
          .add({
            targets: ".login-container *:not(.checkmark img)",
            translateY: [-50, 0],
            opacity: [0, 1],
            easing: "spring(1, 80, 10, 0)",
            duration: 1000,
            delay: (el, i) => 0 + 20 * i
          });
  
          }, 1500);
        })

      $(".nav-btn").on("click", () => {
        $('html, body').animate({
          scrollTop: 1
      }, 1000);
      setTimeout(() => {
        $(".container").addClass("preloader");
        $('body').addClass('body-preloader');
      }, 1100);
        $(".main-landing").css({
          "filter": "blur(5px)",
          "transform": "scale(0)"// rotate3d(300, 300, 1, -60deg)
        });
        $(".login-container").css("margin-left", "0");
        $(".login-container").css("transform", "scale(1)");
        setTimeout(() => {
          $(".preloader-bg").css("transform", "scale(1)")
        }, 	700);

        $(".p-title, .p-bio").removeClass("active");
        $(".login-form").addClass("active");
        $(".register-form").removeClass("active");
        $(".title-login, .bio-login").addClass("active");
        
        setTimeout(() => {
          $()
          $(".login-container").css({
            "opacity": "1",
            "z-index": "3132112"
          })
          anime.timeline({})
        .add({
          targets: ".login-container *:not(.checkmark img)",
          translateY: [-50, 0],
          opacity: [0, 1],
          easing: "spring(1, 80, 10, 0)",
          duration: 1000,
          delay: (el, i) => 0 + 20 * i
        });

        }, 1500);
      })

      var currentOpacityLogin = 0;
      $(".checkmark-login").on("click", () => {
        $(".checkmark-login img").css("opacity", currentOpacityLogin = currentOpacityLogin === 0 ? 1 : 0);
      })

      var currentOpacityRegister = 0;
      $(".checkmark-register").on("click", () => {
        $(".checkmark-register img").css("opacity", currentOpacityRegister = currentOpacityRegister === 0 ? 1 : 0);
      })

      $(".p-switch").on("click", (e) => {
        console.log("reached");
        $(".p-title, .p-bio").removeClass("active");

        if ($(".login-form").hasClass("active")) {
          $(".login-form").removeClass("active");
          $(".register-form").addClass("active");
          $(".title-register, .bio-register").addClass("active");
        } else {
          $(".login-form").addClass("active");
          $(".register-form").removeClass("active");
          $(".title-login, .bio-login").addClass("active");
        }
        
      })
  
    return () => {
      // Cleanup scroll event listeners
      $(window).off("scroll");
    };
  }, []);

  return (
    <div>
      <div className="login-container">
        <div className="container-form">
          <div className="form-exit">
            <img src={back} alt="back logo" className="back-icn"/>
          </div>
          <p className="p-title title-register active">Registreer</p>
          <p className="p-bio bio-register active">Maak hier een account aan, zowel voor leerlingen als docenten.</p>
          <p className="p-title title-login ">Login</p>
          <p className="p-bio bio-login">Welkom terug! 
            <br></br>Log in en ga verder met je leertraject.</p>
          <div className="form-container google">
            <div className="google-container">
            <img src={google} alt="google logo" className="google-icn"/>
            <p className="p-google">Ga verder met Google</p>
            </div>
          </div>
          <svg width="308" height="19" viewBox="0 0 308 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="seperator">
          <path d="M147.972 14.098C147.066 14.098 146.24 13.888 145.494 13.468C144.747 13.0387 144.154 12.446 143.716 11.69C143.286 10.9247 143.072 10.066 143.072 9.114C143.072 8.162 143.286 7.308 143.716 6.552C144.154 5.78667 144.747 5.194 145.494 4.774C146.24 4.34467 147.066 4.13 147.972 4.13C148.886 4.13 149.717 4.34467 150.464 4.774C151.21 5.194 151.798 5.782 152.228 6.538C152.657 7.294 152.872 8.15267 152.872 9.114C152.872 10.0753 152.657 10.934 152.228 11.69C151.798 12.446 151.21 13.0387 150.464 13.468C149.717 13.888 148.886 14.098 147.972 14.098ZM147.972 12.992C148.653 12.992 149.264 12.8333 149.806 12.516C150.356 12.1987 150.786 11.746 151.094 11.158C151.411 10.57 151.57 9.88867 151.57 9.114C151.57 8.33 151.411 7.64867 151.094 7.07C150.786 6.482 150.361 6.02933 149.82 5.712C149.278 5.39467 148.662 5.236 147.972 5.236C147.281 5.236 146.665 5.39467 146.124 5.712C145.582 6.02933 145.153 6.482 144.836 7.07C144.528 7.64867 144.374 8.33 144.374 9.114C144.374 9.88867 144.528 10.57 144.836 11.158C145.153 11.746 145.582 12.1987 146.124 12.516C146.674 12.8333 147.29 12.992 147.972 12.992ZM160.07 4.242V5.278H155.828V8.568H159.272V9.604H155.828V14H154.554V4.242H160.07Z" fill="#747E8D"/>
          <line x1="-4.37114e-08" y1="10.5" x2="126" y2="10.5" stroke="#747E8D"/>
          <line x1="182" y1="10.5" x2="308" y2="10.5" stroke="#747E8D"/>
          </svg>

          <div className="register-form active">
            <p className="p-top">Gebruikersnaam<span>*</span></p>
            <div className="form-container">
              <input type="text" name="username"></input>
            </div>
            <p className="p-top">E-mail<span>*</span></p>
            <div className="form-container">
            <input type="email"></input>
            </div>
            <p className="p-top">Wachtwoord<span>*</span></p>
            <div className="form-container">
            <input type="password"></input>
            </div>
            <p className="p-top">Bevestig wachtwoord<span>*</span></p>
            <div className="form-container">
            <input type="password"></input>
            </div>
            <div className="checkmark checkmark-register">
            <img src={verify} alt="checkmark icon"/>
              <div>
              </div>
            </div>
            <p className="p-confirm p-top">Ik ga akkoord met de <span>Terms of Service</span><span id="red">*</span></p>
            <p className="err-message err-register">This is an error message</p>
            <div className="form-container login register-btn">
              <p>Registreer</p>
            </div>
            <p className="p-switch">Heb je al een account?&nbsp;<span>Log in</span></p>
          </div>

          <div className="login-form">
            <p className="p-top">E-mail<span>*</span></p>
            <div className="form-container">
            <input type="email"></input>
            </div>
            <p className="p-top">Wachtwoord<span>*</span></p>
            <div className="form-container">
            <input type="password"></input>
            </div>
            <div className="checkmark checkmark-login">
            <img src={verify} alt="checkmark icon"/>
              <div>
              </div>
            </div>
            <p className="p-confirm p-top p-stay">Blijf ingelogd</p>
            <p className="err-message err-login">This is an error message</p>
            <div className="form-container login login-btn">
              <p>Login</p>
            </div>
            <p className="p-switch">Heb je nog geen account?&nbsp;<span>Registreer</span></p>
          </div>

      </div>

      </div>
    <div className="container preloader">
      <div className="main-landing">
      <Nav />
      <div className="phone-container fadein" style={{"opacity": "1", "transform": "translateY(0)"}}>
      <img src={phone} alt="telefoon" className="phone phone-bg" />
      <img src={phone} alt="telefoon" className="phone" />
      <img src={laptop} alt="laptop" className="laptop" />
      </div>
      <div className="spline">
      </div>

      <Hero />
      <Main />
      <Contact />
      <a className="credits" href="https://www.jensvandersloot.nl">Site By</a>
      </div>
      <div className="preloader">
        <p className="preloader-text">FRANSE WERKWOORDEN.NL</p>
        <div className="preloader-bg">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Landing;
