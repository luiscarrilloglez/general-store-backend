const Order = require("../models/order");

const listOrders = async () => {
  const orders = await Order.find().lean().exec();

  return orders;
};

const saveOrder = async (order) => {
  const newOrder = new Order(order);

  await newOrder.save();
  return newOrder;
};

const getOrder = async (id) => {
  const order = await Order.findById(id).lean().exec();

  return order;
};

const updateOrder = async (id, order) => {
  const updatedOrder = await Order.findByIdAndUpdate(id, order, {
    returnDocument: "after",
  })
    .lean()
    .exec();

  return updatedOrder;
};

const deleteOrder = async (id) => {
  await Order.findByIdAndDelete(id).exec();
};

module.exports = {
  listOrders,
  saveOrder,
  getOrder,
  updateOrder,
  deleteOrder,
};
