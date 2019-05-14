var express = require("express");
var router = express.Router();

/* GET GardenGnomes listing. */
router.get("/", function(req, res, next) {
  //res.send('respond with a resource');

  res.json([
    {
      id: 1,
      name: "Monk Garden Gnome",
      pic:
        "https://www.fairiesandgnomes.com/wp-content/uploads/2017/02/Zen-Gnome-Main.jpg",
      size: "small",
      weight: 200,
      gender: "male",
      hatcolor: "green",
      price: 9,
      purchasedate: "03 May 2019",
      comment: "Monk looks so serious",
      group: "good"
    },
    {
      id: 2,
      name: "Happy Friend Garden Gnomes",
      pic:
        "https://bcc53877d7aa0a135b9a-1452ca75bf8985207bb5b0c44a65ef28.ssl.cf4.rackcdn.com/Product/c411d798-773d-4534-acc7-19dbd830f0f9.jpg",
      size: "medium",
      weight: 350,
      gender: "male",
      hatcolor: "no color",
      price: 15,
      purchasedate: "03 April 2019",
      comment: "There are two happy garden gnomes",
      group: "smart, good"
    },
    {
      id: 3,
      name: "Solar-Gartenleuchte",
      pic:
        "https://www.fairiesandgnomes.com/wp-content/uploads/2017/02/Zen-Gnome-Main.jpg",
      size: "big",
      weight: 550,
      gender: "male",
      hatcolor: "yellow",
      price: 23,
      purchasedate: "13 April 2019",
      comment:
        "This garden gnome has some little lamps which are empowered by solar energy",
      group: "smart"
    },
    {
      id: 4,
      name: "Beautiful Elza Garden Gnome",
      pic:
        "https://www.personalizationmall.com/cat_image/600/17369-41004-170223093932.jpg",
      size: "medium",
      weight: 350,
      gender: "female",
      hatcolor: "blue",
      price: 23,
      purchasedate: "13 April 2019",
      comment:
        "This garden gnome has some little lamps which are empowered by solar energy",
      group: "good"
    },
    {
      id: 5,
      name: "Old Lady Wizards",
      pic:
        "https://www.fairiesandgnomes.com/wp-content/uploads/2017/02/Zen-Gnome-Main.jpg",
      size: "small",
      weight: 150,
      gender: "female",
      hatcolor: "black",
      price: 13,
      purchasedate: "13 April 2019",
      comment:
        "This garden gnomes have some little lamps which are empowered by solar energy",
      group: "evil"
    }
  ]);
});

module.exports = router;
