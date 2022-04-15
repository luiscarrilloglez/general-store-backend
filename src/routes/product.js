const express = require("express");
const productController = require("../controllers/product-controller");
const validator = require("../middlewares/validator-middleware");

const router = express.Router();

router.get("/", productController.listProducts);
router.post("/", validator.productIsValid, productController.saveProduct);
router.get("/:id", productController.getProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;
