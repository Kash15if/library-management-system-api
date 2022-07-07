const express = require("express");
const router = express.Router();

// middleware that is specific to this router
// ro0
// define the home page route
// router.get("/", (req, res) => {
//   res.send("Birds home page");
// });

// admin dashboard route
router.get("/dashboard", (req, res) => {
  //cards -> issued , returned , topic, dept
  //pie - > All Book borrowed share
  // bar -> Top 5 topic book borrower this month
  // last 30 days borrowed returned line chart
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

//routes for managing book details . i.e. form
//all crud
// create or insert route
router.post("/books", (req, res) => {
  res.send("About birds");
});
// get or read route
router.get("/books", (req, res) => {
  res.send("About birds");
});
// uodate route
router.put("/books", (req, res) => {
  res.send("About birds");
});
// delete route
router.delete("/books", (req, res) => {
  res.send("About birds");
});

//routes for managing staff details . i.e. form
//all crud
// create or insert route
router.post("/staff", (req, res) => {
  res.send("About birds");
});
// get or read route
router.get("/staff", (req, res) => {
  res.send("About birds");
});
// uodate route
router.put("/staff", (req, res) => {
  res.send("About birds");
});
// delete route
router.delete("/staff", (req, res) => {
  res.send("About birds");
});

//routes for managing students details . i.e. form
//all crud
// create or insert route
router.post("/students", (req, res) => {
  res.send("About birds");
});
// get or read route
router.get("/students", (req, res) => {
  res.send("About birds");
});
// uodate route
router.put("/students", (req, res) => {
  res.send("About birds");
});
// delete route
router.delete("/students", (req, res) => {
  res.send("About birds");
});

module.exports = router;
