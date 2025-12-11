

var express = require('express');
var router = express.Router();
const Song = require("../models/songs");

/* GET home page */
router.get('/', async (req, res) => {
  const songs = await Song.find();
  res.render('index', { 
    title: 'Christmas Song List',
    songsList: songs
  });
});

/* POST: add new song */
router.post("/add", async (req, res) => {
  const newTitle = req.body.title;

  await Song.create({ title: newTitle });

  res.redirect("/");
});

module.exports = router;
