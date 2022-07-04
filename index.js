const express = require("express");
const app = express();

const adminApi = require("./api/adminRoutes");

const studentApi = require("./api/studentRoutes");

const staffApi = require("./api/staffRoutes");

require("dotenv").config();

const sqlCon = require("./models/DbCon");

const port = process.env.SERVER_PORT || 3000;

app.use("/admin", adminApi);

app.use("/student", studentApi);

app.use("/staff", staffApi);

sqlCon();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
