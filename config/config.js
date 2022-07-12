const mongoose = require("mongoose");
const url = "mongodb://localhost:27017";
mongoose.connect(`${url}/shop`);

const ShopSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  model: String,
});

const ShopModel = mongoose.model("lists", ShopSchema);

module.exports = ShopModel;
