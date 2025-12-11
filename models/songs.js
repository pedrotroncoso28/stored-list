// models/songs.js

const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
}, { collection: 'songs' }); 
module.exports = mongoose.model("Song", songSchema);
