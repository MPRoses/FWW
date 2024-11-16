import React, { useEffect } from "react";

import gsap from "gsap-trial";
import "./Dashboard.css";
import $ from "jquery";
import anime from "animejs";
import france from "./img/logo.png";
import home from "./img/home.png";
import book from "./img/book.png";
import groups from "./img/groups.png";
import forum from "./img/forum.png";
import pfp from "./img/pfp.png";

function Dashboard() {
  useEffect(() => {

    $(".btn-item").on("click", (e) => {
      $(".btn-item").removeClass("active");
      $(e.currentTarget).addClass("active");
    })
    
      
  
    return () => {
      // Cleanup event listeners
      $(window).off();
    };
  }, []);

  return (
    <div className="container">
      <div className="left-nav">
        <img src={france} alt="french flag" />

        <div className="btn-item active">
          <img src={home} alt="home icon"/>
        </div>
        <div className="btn-item">
          <img src={book} alt="library icon"/>
        </div>
        <div className="btn-item">
          <img src={groups} alt="groups icon"/>
        </div>
        <div className="btn-item">
          <img src={forum} alt="forum icon"/>
        </div>
        <div className="btn-item pfp">
          <img src={pfp} alt="pfp icon"/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
