var express = require("express");
var router = express.Router();
const Song = require("../models/songs");

/* GET home page */
router.get("/", async function (req, res, next) {
  const songs = await Song.find();
  res.render("index", { title: "Christmas List", songsList: songs });
});

/* POST add new song */
router.post("/add", async (req, res) => {
  await Song.create({ title: req.body.title });
  res.redirect("/");
});

/* DELETE a song */
router.post("/delete/:id", async (req, res) => {
  await Song.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

/* GET edit page */
router.get("/edit/:id", async (req, res) => {
  const song = await Song.findById(req.params.id);
  res.render("edit", { song });
});

/* POST save edited song */
router.post("/edit/:id", async (req, res) => {
  await Song.findByIdAndUpdate(req.params.id, { title: req.body.title });
  res.redirect("/");
});

module.exports = router;
