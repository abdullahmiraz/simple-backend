const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const formRoutes = require("./form.routes");

const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/formdata", formRoutes);

module.exports = app;
