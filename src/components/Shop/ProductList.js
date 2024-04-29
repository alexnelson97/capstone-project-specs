import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar"; // Assuming you have a SearchBar component

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const url = `http://localhost:4001/products${
      searchTerm ? `?search=${encodeURIComponent(searchTerm)}` : ""
    }`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [searchTerm]); // Re-run the effect if searchTerm changes

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.image_url}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
