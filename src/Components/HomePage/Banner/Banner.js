import React from "react";
import img from "../../../images/2.png";
import './Banner.css'
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner1 left-side-bar">
        <h1>A Showcase for</h1>
        <h1>Your AWESOME APP</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          perferendis voluptatum magnam accusamus natus totam labore
          necessitatibus quibusdam mollitia consequuntur?
        </p>
        <button>Download </button>
        <button>Learn More</button>
      </div>
      <div className="right-side-bar">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
