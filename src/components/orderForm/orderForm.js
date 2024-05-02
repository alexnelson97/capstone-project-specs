import React, { useState } from "react";
import "./orderForm.css";
import RedRockSpire from "../Images/red-rock-spire.png";

function OrderForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const orderData = Object.fromEntries(formData.entries());

    fetch("http://localhost:4001/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit order");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Order placed:", data);
        setSuccessMessage("Order submitted successfully!");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        setErrorMessage(error.message);
        setSuccessMessage("");
      });
  };

  return (
    <div className="order-form-page">
      <div className="order-text">
        <h1>ORDER FORM</h1>
        <p>Please fill out the form below to complete your order.</p>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <div className="order-content">
        <img src={RedRockSpire} alt="Red Rock Spire" className="order-image" />
        <form className="order-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            required
          />
          <input type="text" id="sku" name="sku" placeholder="SKU" required />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">Submit Order</button>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
