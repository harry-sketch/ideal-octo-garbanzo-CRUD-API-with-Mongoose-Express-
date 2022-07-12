const EventEmitter = require("events");
const express = require("express");
const app = express();
const event = new EventEmitter();

let count = 0;

event.on("countCalled", () => {
  count++;
  console.log("called");
});

app.get("/", (req, res) => {
  event.emit("countCalled");
  console.log(count);
  res.send("called");
});

app.listen(7000);
