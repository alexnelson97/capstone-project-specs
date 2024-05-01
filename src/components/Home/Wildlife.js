import React from "react";
import "./Wildlife.css";
import RedRockSpireImage from "../Images/red-rock-spire.png";

function Wildlife() {
  return (
    <div className="section wildlife">
      <div className="section-content">
        <div className="section-text">
          <h2>WILDLIFE</h2>
          <p>
            Discover the resilience and beauty of America's wildlife through a
            collection of dynamic and intimate portraits. My work aims to bring
            you face-to-face with the fascinating creatures that roam from the
            dense forests of the Pacific Northwest to the swamps of the
            Southeast.
          </p>
        </div>
        <img img src={RedRockSpireImage} alt="Red Rock Spire" />
      </div>
    </div>
  );
}

export default Wildlife;
