const User = require("../models/user");
const express = require("express");
const router = express.Router();

/* GET API */
router.get("/", async (req, res) => {
  try {
    let userList = await User.find();
    res.json(userList);
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
    let user = new User();
    user.name = req.body.name;
    user.image = req.body.image;
    user.save();
    res.status(302).json({
      success: true,
      message: "Successfully created a new user",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
});

module.exports = router;
