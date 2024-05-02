import React from "react";
import "./ShopHeader.css";
import RedRockLandscape from "../Images/red-rock-landscape.png";

function ShopHeader() {
  return (
    <div className="section ShopHeader">
      <div className="section-content">
        <div className="section-text">
          <h2>SHOP</h2>
          <p>
            Discover stunning landscapes and captivating wildlife captured
            through the lens of our seasoned photographer.
          </p>
        </div>
        <img src={RedRockLandscape} alt="bear in forest" />
      </div>
    </div>
  );
}

export default ShopHeader;
