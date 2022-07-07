const express = require("express");
const app = express();

const adminApi = require("./api/adminRoutes");

const studentApi = require("./api/studentRoutes");

const staffApi = require("./api/staffRoutes");

const publicApi = require("./api/publicRoutes");

require("dotenv").config();

const sqlCon = require("./models/DbCon");

const port = process.env.SERVER_PORT || 3000;

app.use("/admin/protected/", adminApi);

app.use("/student", studentApi);

app.use("/staff", staffApi);

app.use("/", publicApi);

sqlCon();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
