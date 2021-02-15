const mongoose = require("mongoose");

/* DB PRODUCT MODEL */
const CategorySchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Category", CategorySchema);
