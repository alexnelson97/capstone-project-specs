import react from "react";
import "./Shop.css";
import ShopHeader from "./ShopHeader";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";

function Shop() {
  return (
    <div className="shop-page">
      <div className="collection-header">
        <ShopHeader />
      </div>

      <div className="search-bar">
        <SearchBar />
      </div>

      <div className="product-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Shop;
