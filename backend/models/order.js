const mongoose = require("mongoose");

/* DB PRODUCT MODEL */
const OrderSchema = mongoose.Schema({
  type: String,
});

module.exports = mongoose.model("Order", OrderSchema);
