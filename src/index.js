const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/product", productRouter);
app.use("/order", orderRouter);

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ message: error.message });
});

module.exports = app;
