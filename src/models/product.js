const mongoose = require("mongoose");
const { categories } = require("../constants");

const ProductSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: Object.keys(categories),
    },

    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: mongoose.Decimal128,
      min: 1,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
