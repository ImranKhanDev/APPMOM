import React from "react";
import "./About.css";
import img from "../../../images/2.png";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>ABOUT APPMOM</h1>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p className="para-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet
          dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis
          elit eget neque porttitor congue non sit amet dolor. Proin pretium
          purus a lorem ornare
        </p>

        <p>
          sed lobortis pulvinar. Integer laoreet mi id eros porta euismod.
          Suspendisse potenti. Nulla eros mauris, convallis et sem tempus,
          viverra hendrerit sapien
        </p>
        <div className="social">
          <i className="fab fa-facebook fa-2x"></i>
          <i className="fab fa-twitter fa-2x"></i>
          <i className="fab fa-pinterest-p fa-2x"></i>
          <i className="fab fa-staylinked fa-2x"></i>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default About;
