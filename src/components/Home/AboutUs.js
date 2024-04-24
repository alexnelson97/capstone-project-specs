import React from "react";
import "./AboutUs.css"; // Import specific CSS for this component
import ForestBearImage from "../Images/forest-bear.png";

function AboutUs() {
  return (
    <div className="section about-us">
      <div className="section-content">
        <div className="section-text">
          <h2>ABOUT US</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <img src={ForestBearImage} alt="bear in forest" />
      </div>
    </div>
  );
}

export default AboutUs;
