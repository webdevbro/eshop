const mongoose = require("mongoose");

/* DB PRODUCT MODEL */
const ProductSchema = mongoose.Schema({
  name: String,
  image: String,
  stockQuantity: Number,
});

module.exports = mongoose.model("Product", ProductSchema);
