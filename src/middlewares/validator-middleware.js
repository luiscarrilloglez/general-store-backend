const validateRequiredProps = (object, requiredProps) => {
  const invalidProp = "";
  const obecjtCopy = { ...object };

  requiredProps.forEach((propName) => {
    const prop = obecjtCopy[propName].trim?.() ?? "";
    if (prop === "") {
      invalidProp = propName;
      return;
    }
  });

  return invalidProp;
};

const productIsValid = (req, res, next) => {
  const product = req.body;
  const requiredProps = ["name", "category", "imageUrl", "price"];
  const invalidProp = validateRequiredProps(product, requiredProps);

  if (invalidProp !== "") {
    return res
      .status(400)
      .json({ message: `Property ${invalidProp} is required` });
  }

  next();
};

const orderIsValid = (req, res, next) => {
  const order = req.body;
  const requiredProps = [
    "name",
    "street",
    "neighborhood",
    "zipCode",
    "city",
    "state",
    "email",
    "phone",
  ];
  const invalidProp = validateRequiredProps(order, requiredProps);

  if (invalidProp !== "") {
    return res
      .status(400)
      .json({ message: `Property ${invalidProp} is required` });
  }

  if (!order.products?.length) {
    return res
      .status(400)
      .json({ message: `At least one product is required` });
  }

  next();
};

module.exports = {
  productIsValid,
  orderIsValid,
};
