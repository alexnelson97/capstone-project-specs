require("dotenv").config();
const express = require("express");
const cors = require("cors");
const controller = require("./controller");

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use controller for the products route
app.get("/products", controller.getProducts);

// Additional route to handle order creation
app.post("/orders", controller.createOrder);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
