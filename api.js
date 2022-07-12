const express = require("express");
const os = require("os");
const ProductModel = require("./config/config");
const port = 5000;

const app = express();

app.use(express.json());

// Get Req.
app.get("/", async (req, res) => {
  const data = await ProductModel.find();
  res.send(data);
});

// Insert One data
app.post("/mobile", async (req, res) => {
  const data = new ProductModel(req.body);
  const result = await data.save();
  res.send(result);
});

app.listen(port);

// Update Data
app.put("/name/:id", async (req, res) => {
  const data = await ProductModel.updateOne(
    { _id: req.params.id },
    {
      $set: { price: 1500 },
    }
  );

  res.send(data);
});

// Delete Data
app.delete("/name/:id", async (req, res) => {
  console.log(req.params.id);
  const data = await ProductModel.deleteOne({ _id: req.params.id });
  res.send(data);
});

// Search Api for Single & multiple
app.get("/search/:name", async (req, res) => {
  const data = await ProductModel.find({
    $or: [
      { name: { $regex: req.params.name } },
      { category: { $regex: req.params.name } },
      { model: { $regex: req.params.name } },
      { price: { $regex: req.params.name } },
    ],
  });
  res.send(data);
});

// Os Module
console.log(os.hostname());
console.log(os.arch());
console.log((os.freemem() / 1020) * 1020 * 1020);
console.log(os.endianness());
console.log(os.getPriority());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.userInfo());
console.log(os.uptime());
