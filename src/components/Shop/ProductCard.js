import React from "react";
import "./ProductCard.css";

function ProductCard({ id, title, price, image_url }) {
  return (
    <div className="product-card">
      <img
        src={image_url}
        alt={title}
        style={{ width: "100%", height: "auto" }}
      />
      <h3>{title}</h3>
      <p>${price}</p>
      <p>SKU: {id}</p>
    </div>
  );
}

export default ProductCard;
