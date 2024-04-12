import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ProductPage from "./components/Shop/Shop";
import OrderFieldPage from "./components/orderForm/orderForm";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/order" element={<OrderFieldPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
