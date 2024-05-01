const { Pool } = require("pg");

const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: { rejectUnauthorized: false },
});
exports.getProducts = async (req, res) => {
  const searchQuery = req.query.search;

  try {
    let query = "SELECT * FROM products";
    const params = [];

    if (searchQuery) {
      query += " WHERE title Ilike $1";
      params.push(`%${searchQuery}%`);
    }

    // Logging the query to see the exact form
    console.log("Executing unsafe query:", query);

    const { rows } = await client.query(query, params);
    res.json(rows);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json({ error: "Server Error", details: error.message });
  }
};

exports.createOrder = async (req, res) => {
  const { name, email, phone, skus, message } = req.body;
  try {
    const resultOrder = await client.query(
      "INSERT INTO Order (name, email, phone) VALUES ($1, $2, $3) RETURNING id",
      [name, email, phone]
    );
    const orderId = resultOrder.rows[0].id;

    const productIds = skus.split(",");
    for (let productId of productIds) {
      await client.query(
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
  await client.end();
};
