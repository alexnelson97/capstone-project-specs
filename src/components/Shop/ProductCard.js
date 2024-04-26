import React from "react";
import "./ProductCard.css";
import BryceCanyon from "../Images/Bryce-Canyon.png";

function ProductCard() {
  return (
    <div className="product-card">
      <img src={BryceCanyon} alt="Bryce Canyon" />
      <h3>Product Title</h3>
      <p>$Price</p>
      <p>SKU #</p>
    </div>
  );
}

export default ProductCard;
