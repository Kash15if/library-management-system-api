const express = require("express");
const router = express.Router();

// middleware that is specific to this router
// ro0
// define the home page route
// router.get("/", (req, res) => {
//   res.send("Birds home page");
// });

// admin dashboard route
router.post("/admindashboard", (req, res) => {
  res.send("About birds");
});

// admin login route
router.post("/login", (req, res) => {
  res.send("About birds");
});

// register login route
router.post("/register", (req, res) => {
  res.send("About birds");
});

module.exports = router;
