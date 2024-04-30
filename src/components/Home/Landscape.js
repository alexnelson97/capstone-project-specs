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
          <p>
            "Embark on a photographic journey through America's vast and varied
            landscapes. Each photograph tells a story of time and texture, from
            the vibrant fall foliage of New England to the stark deserts of the
            Southwest.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landscape;
