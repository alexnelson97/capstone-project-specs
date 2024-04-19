import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import OrderForm from "./components/orderForm/orderForm";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/order" element={<OrderForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
