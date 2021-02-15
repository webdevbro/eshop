const Product = require("../models/product");
const express = require("express");
const router = express.Router();

/* GET API */
router.get("/", async (req, res) => {
  try {
    let productList = await Product.find();
    res.json(productList);
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
});

/* POST API */
/* async await notation */
router.post("/", async (req, res) => {
  try {
    let product = new Product();
    product.name = req.body.name;
    product.image = req.body.image;
    product.stockQuantity = req.body.stockQuantity;
    product.save();
    res.status(302).json({
      success: true,
      message: "Successfully created a new product",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
});

module.exports = router;

/* .then.catch notation */
/* app.post(`${api}/products`, (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    stockQuantity: req.body.stockQuantity,
  });
  product
    .save()
    .then((createdProduct) => {
      res.status(201).json(createdProduct);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
}); */
