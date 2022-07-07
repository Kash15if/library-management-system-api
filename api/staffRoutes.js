const express = require("express");
const router = express.Router();

// define the about route
router.get("/login", (req, res) => {
  res.send("About birds");
});

//routes for borrow and return books table . i.e. form
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
// delete route , send it to archive after deleting ffrom main table. or just dont delete.
router.delete("/books", (req, res) => {
  res.send("About birds");
});

// staff dashboard route
router.get("/dashboard", (req, res) => {
  res.send("About birds");
});

module.exports = router;
