import React, { useState, useEffect } from "react";
import "./Shop.css";
import ShopHeader from "./ShopHeader";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

function Shop() {
  const [products, setProducts] = useState([]);

  const fetchProducts = (search = "") => {
    const url = `http://localhost:4001/products?search=${encodeURIComponent(
      search
    )}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  };

  useEffect(() => {
    fetchProducts(); // Fetch all products initially
  }, []);

  return (
    <div className="shop-page">
      <div className="collection-header">
        <ShopHeader />
      </div>

      <div className="search-bar">
        <SearchBar onSearch={fetchProducts} />{" "}
        {/* Pass fetchProducts to SearchBar */}
      </div>

      <div className="product-grid">
        <ProductList products={products} /> {/* Pass products to ProductList */}
      </div>
    </div>
  );
}

export default Shop;
