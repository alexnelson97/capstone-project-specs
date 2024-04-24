import React from "react";
import "./Wildlife.css"; // Import specific CSS for this component
import RedRockSpireImage from "../Images/red-rock-spire.png";

function Wildlife() {
  return (
    <div className="section wildlife">
      <div className="section-content">
        <div className="section-text">
          <h2>WILDLIFE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <img img src={RedRockSpireImage} alt="Red Rock Spire" />
      </div>
    </div>
  );
}

export default Wildlife;
