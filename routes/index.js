

var express = require('express');
var router = express.Router();

// Import my Song model
const Song = require('../models/songs'); 

/* GET home page. */
router.post('/item', async function(req, res) {
  try {
    const { title } = req.body;

    // Create a new item in MongoDB
    const newItem = await Song.create({ title });

    res.status(201).json({
      message: "Item added successfully",
      item: newItem
    });

  } catch (err) {
    console.error("Error adding item:", err);
    res.status(500).json({ error: "Failed to add item" });
  }
})
