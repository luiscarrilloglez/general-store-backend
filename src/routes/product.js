const express = require("express");
const productController = require("../controllers/product-controller");
const productValidator = require("../middlewares/product-validator-middleware");

const router = express.Router();

router.get("/", productController.listProducts);
router.post("/", productValidator.isValid, productController.saveProduct);
router.get("/:id", productController.getProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;
