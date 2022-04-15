const orderService = require("../services/order-service");

const listOrders = async (req, res, nextError) => {
  try {
    const orders = await orderService.listOrders(req.query);

    res.setHeader("Total", orders.length);
    res.json(orders);
  } catch (error) {
    nextError(error);
  }
};

const saveOrder = async (req, res, nextError) => {
  const order = req.body;

  try {
    const savedOrder = await orderService.saveOrder(order);

    res.status(201).json(savedOrder);
  } catch (error) {
    nextError(error);
  }
};

const getOrder = async (req, res, nextError) => {
  const { id } = req.params;

  try {
    const order = await orderService.getOrder(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    nextError(error);
  }
};

const updateOrder = async (req, res, nextError) => {
  const { id } = req.params;
  const updateOrder = req.body;

  try {
    const updatedOrder = await orderService.updateOrder(id, updateOrder);

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(updatedOrder);
  } catch (error) {
    nextError(error);
  }
};

const deleteOrder = async (req, res, nextError) => {
  const { id } = req.params;

  try {
    await orderService.deleteOrder(id);
    res.status(204).send();
  } catch (error) {
    nextError(error);
  }
};

module.exports = {
  listOrders,
  getOrder,
  saveOrder,
  updateOrder,
  deleteOrder,
};
