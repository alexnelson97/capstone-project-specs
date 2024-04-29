const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

exports.getProducts = async (req, res) => {
  const searchQuery = req.query.search;
  try {
    let query = "SELECT * FROM products";
    const params = [];

    if (searchQuery) {
      query += " WHERE title ILIKE $1";
      params.push(`%${searchQuery}%`);
    }

    const { rows } = await pool.query(query, params);
    res.json(rows);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    // You could determine the error type here and set a more specific status code
    if (error.code === "23505") {
      // Example: unique violation
      res
        .status(409)
        .json({ error: "Resource conflict", details: error.detail });
    } else {
      res.status(500).json({ error: "Server Error", details: error.message });
    }
  }
};

exports.createOrder = async (req, res) => {
  const { name, email, phone, skus, message } = req.body;
  try {
    // Insert into Order table
    const resultOrder = await pool.query(
      "INSERT INTO Order (name, email, phone) VALUES ($1, $2, $3) RETURNING id",
      [name, email, phone]
    );
    const orderId = resultOrder.rows[0].id;

    // Assume SKUs are sent as comma-separated values and need to be linked in Order_Products
    const productIds = skus.split(",");
    for (let productId of productIds) {
      await pool.query(
        "INSERT INTO Order_Products (order_id, product_id) VALUES ($1, $2)",
        [orderId, productId]
      );
    }

    res
      .status(201)
      .json({ message: "Order created successfully!", orderId: orderId });
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Server Error", details: error.message });
  }
};
