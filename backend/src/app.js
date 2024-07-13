require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { mongoConfig } = require("./config/dbConfig");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");

mongoose
  .connect(mongoConfig.uri, {
    dbName: mongoConfig.dbName,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/user", userProfileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
