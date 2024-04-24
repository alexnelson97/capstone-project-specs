import React from "react";
import "./Landscape.css"; // Import specific CSS for this component
import RedRockSpireImage from "../Images/red-rock-spire.png";

function Landscape() {
  return (
    <div className="section landscape">
      <div className="section-content">
        <img src={RedRockSpireImage} alt="Red Rock Spire" />
        <div className="section-text">
          <h2>LANDSCAPE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
    </div>
  );
}

export default Landscape;
