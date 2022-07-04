const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.SERVER_PORT || 3000;

const sequelize = require("./config/DB_Con");

const doCon = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

doCon();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
