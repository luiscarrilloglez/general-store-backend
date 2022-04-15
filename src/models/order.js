const mongoose = require("mongoose");
const ProductSchema = require("./product").schema;

const OrderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: ProductSchema,
      },
    ],
    name: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    neighborhood: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
