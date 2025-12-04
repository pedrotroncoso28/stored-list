

var express = require('express');
var router = express.Router();

// Import my Song model
const Song = require('../models/songs'); 

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    // Fetch all songs from MongoDB
    const songs = await Song.find();

    // Render index view and pass songs data
    res.render('index', { 
      title: 'My Song List',
      songsList: songs 
    });

  } catch (err) {
    console.error('Error fetching songs:', err);
    res.status(500).send('Error fetching songs');
  }
});

module.exports = router;
