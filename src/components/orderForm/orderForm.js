import react from "react";
import "./orderForm.css";

function OrderForm() {
  return (
    <div className="order-form-page">
      <h1>Place Your Order</h1>
      <p>Please fill out the form below to complete your order.</p>
      <div className="order-content">
        <img
          src="path-to-your-image.jpg"
          alt="Landscape image"
          className="order-image"
        />
        <form className="order-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="skus">SKUs:</label>
            <input type="text" id="skus" name="skus" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit Order</button>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
