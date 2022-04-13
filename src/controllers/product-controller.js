const productService = require("../services/product-service");

const listProducts = async (req, res, nextError) => {
  try {
    const products = await productService.listProducts(req.query);

    res.setHeader("Total products", products.length);
    res.json(products);
  } catch (error) {
    nextError(error);
  }
};

const saveProduct = async (req, res, nextError) => {
  const product = req.body;

  try {
    const savedProduct = await productService.saveProduct(product);

    res.status(201).json(savedProduct);
  } catch (error) {
    nextError(error);
  }
};

const getProduct = async (req, res, nextError) => {
  const { id } = req.params;

  try {
    const product = await productService.getProduct(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    nextError(error);
  }
};

const updateProduct = async (req, res, nextError) => {
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
    nextError(error);
  }
};

const deleteProduct = async (req, res, nextError) => {
  const { id } = req.params;

  try {
    await productService.deleteProduct(id);
    res.status(204).send();
  } catch (error) {
    nextError(error);
  }
};

module.exports = {
  listProducts,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct,
};
