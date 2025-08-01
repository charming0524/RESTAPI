const express = require("express");
const app = express();
const itemsRouter = require("./routes/items");
const errorHandler = require("./middleware/errorHandler");

// Middleware
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API Routes
app.use("/items", itemsRouter);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
