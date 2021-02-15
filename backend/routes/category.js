const Category = require("../models/category");
const express = require("express");
const router = express.Router();

/* GET API */
router.get("/", async (req, res) => {
  try {
    let categoryList = await Category.find();
    res.json(categoryList);
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
});

/* POST API */
router.post("/", async (req, res) => {
  try {
    let category = new Category();
    category.name = req.body.name;
    category.save();
    res.status(302).json({
      success: true,
      message: "Successfully created a new category",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
});

module.exports = router;
