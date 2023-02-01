const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/task", taskRoutes.routes);

const PORTS = process.env.PORT || 3000;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORTS, () => console.log(`server running on ${PORTS}`));
  })
  .catch((error) => {
    console.log(error);
  });
