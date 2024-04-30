import React from "react";
import "./AboutUs.css"; // Import specific CSS for this component
import ForestBearImage from "../Images/forest-bear.png";

function AboutUs() {
  return (
    <div className="section about-us">
      <div className="section-content">
        <div className="section-text">
          <h2>ABOUT ME</h2>
          <p>
            As a passionate explorer of America’s diverse landscapes and
            wildlife, I have dedicated over 40 years to capturing the
            breathtaking beauty found across the nation.
          </p>
        </div>
        <img src={ForestBearImage} alt="bear in forest" />
      </div>
    </div>
  );
}

export default AboutUs;
