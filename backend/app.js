const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv/config");
const api = process.env.API_URL;

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: "eshop",
  })
  .then(() => {
    console.log("Successfully connected to the database.");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(4000, () => {
  console.log("Server started on localhost:4000");
});

/* MIDDLEWARES */
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

/* ROUTES */
const productsRoutes = require("./routes/product");
const categoriesRoutes = require("./routes/category");
const usersRoutes = require("./routes/user");
const ordersRoutes = require("./routes/order");
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);
