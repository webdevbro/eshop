const Order = require("../models/order");
const express = require("express");
const router = express.Router();

/* GET API */
router.get("/", async (req, res) => {
  try {
    let orderList = await Order.find();
    res.json(orderList);
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
    let order = new Order();
    order.type = req.body.type;
    order.save();
    res.status(302).json({
      success: true,
      message: "Successfully created a new order",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
});

module.exports = router;
