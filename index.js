const multer = require("multer");
const express = require("express");
const app = express();

const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("data");

app.post("/upload", uploadFile, (req, res) => {
  res.send("uploaded");
});

app.listen(3000);
