// models/songs.js

const mongoose = require("mongoose");

// basic song schema
const songSchema = new mongoose.Schema({
  title: String
});

// export the model
module.exports = mongoose.model("Song", songSchema);
