const mongoose = require("./mongoose");

const express = require("express");
const cors = require("cors");
const commentsRouter = require("./commentsRouter");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", commentsRouter);

app.listen(1234, () => {
  console.log("Server started on port 1234");
});
