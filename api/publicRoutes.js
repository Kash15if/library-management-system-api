const express = require("express");
const router = express.Router();

// dashboard route
//weekly trending books , trending today , trending topic ,new arrivals
router.get("/dashboard", (req, res) => {
  res.send("About birds");
});

//for public search bar
router.get("/allbook", (req, res) => {
  res.send("About birds");
});

//for selected book details
router.get("/onebook", (req, res) => {
  res.send("About birds");
});
