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
      query += " WHERE title ILike $1";
      params.push(`%${searchQuery}%`);
    }

    // Logging the query to see the exact form
    console.log("Executing query:", query, "with params:", params);
    const { rows } = await client.query(query, params);
    res.json(rows);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json({ error: "Server Error", details: error.message });
  }
};

exports.createOrder = async (req, res) => {
  const { name, email, phone, sku, message } = req.body; // Include sku in the destructuring
  try {
    const resultOrder = await client.query(
      'INSERT INTO "orders" (name, email, phone, sku) VALUES ($1, $2, $3, $4) RETURNING id', // Include sku in the SQL query
      [name, email, phone, sku] // Pass sku as a parameter to the query
    );
    const orderId = resultOrder.rows[0].id;

    res
      .status(201)
      .json({ message: "Order created successfully!", orderId: orderId });
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Server Error", details: error.message });
  }
};
