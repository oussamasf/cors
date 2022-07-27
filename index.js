const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT;
// app.use(cors()); solution 01
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  ); // Solution 02

  if ("OPTIONS" === req.method) {
    res.send(200);
  } else {
    next();
  }
});
app.get("/", (req, res) => {
  // res.set("Access-Control-Allow-Origin", "*");
  res.send("Hello World!");
  console.log(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
