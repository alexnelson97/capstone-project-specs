import react from "react";
import "./Shop.css";

function Shop() {
  return (
    <div className="shop-page">
      <div className="collection-header">
        <div className="collection-info">
          <h1>Collection Name</h1>
          <p>Description of the collection goes here.</p>
        </div>
        <img
          src="path-to-collection-image.jpg"
          alt="Collection"
          className="collection-image"
        />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
      </div>

      <div className="product-grid">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="product-card">
            <img src="path-to-product-image.jpg" alt="Product Name" />
            <h3>Product Title</h3>
            <p>$Price</p>
            <p>SKU #</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
