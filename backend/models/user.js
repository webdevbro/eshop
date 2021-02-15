const mongoose = require("mongoose");

/* DB PRODUCT MODEL */
const UserSchema = mongoose.Schema({
  name: String,
  image: String,
});

module.exports = mongoose.model("User", UserSchema);
