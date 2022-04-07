const productService = require("../services/product-service");

const listProducts = async (req, res, next) => {
  try {
    const products = await productService.listProducts();

    res.setHeader("Total", products.length);
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const saveProduct = async (req, res, next) => {
  const product = req.body;

  try {
    const savedProduct = await productService.saveProduct(product);

    res.status(201).json(savedProduct);
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await productService.getProduct(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const updateProduct = req.body;

  try {
    const updatedProduct = await productService.updateProduct(
      id,
      updateProduct
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    await productService.deleteProduct(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listProducts,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct,
};
