const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/comments")
  .then(() => {
    console.log("connected to the database");
  })
  .catch(() => {
    console.log("error connecting to database");
  });
