

var express = require('express');
var router = express.Router();

// Import my Song model
const Song = require('../models/songs'); 

/* GET home page. */
// POST - Add new item
router.post('/item', async function(req, res) {
  try {
    // Read form data
    const title = req.body.title;

    // Create and save new song
    await Song.create({ title });

    // Redirect back to the homepage
    res.redirect('/');
  } catch (err) {
    console.error('Error adding item:', err);
    res.status(500).send('Error adding item');
  }
});
