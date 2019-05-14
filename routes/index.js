var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "My Garden Gnomes Website" });
});

/* GET other pages 
router.get("/allcollection", function(req, res, next) {
  res.render("index", { title: "My Garden Gnomes Website" });
}); */

module.exports = router;
