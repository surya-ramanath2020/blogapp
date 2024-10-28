const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/MERN-BlogApp")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

module.exports = mongoose;