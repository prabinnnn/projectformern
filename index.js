require("dotenv").config();
var morgan = require("morgan");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = Number(process.env.PORT);
const indexofrouter = require("./routes");
app.use(morgan("dev"));
app.use("/", indexofrouter);
app.use(express.json());
mongoose.connect(process.env.PORT).then(() => console.log("Connected!"));
app.use((err, req, res, next) => {
  errmsg = err ? err.toString() : "something missing";
  res.status(500).json({ msg: errmsg });
});

app.listen(PORT, () => {
  console.log("app is runing");
});

module.exports = express.Router;
