const express = require("express");
const orderController = require("../controllers/order-controller");
const validator = require("../middlewares/validator-middleware");

const router = express.Router();

router.get("/", orderController.listOrders);
router.post("/", validator.orderIsValid, orderController.saveOrder);
router.get("/:id", orderController.getOrder);
router.delete("/:id", orderController.deleteOrder);
router.put("/:id", orderController.updateOrder);

module.exports = router;
