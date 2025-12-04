// models/songs.js

const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: String,
}, { collection: 'songs' });

// export the model
module.exports = mongoose.model("Song", songSchema);
