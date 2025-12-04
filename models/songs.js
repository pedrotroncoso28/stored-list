// models/songs.js

const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
}, { collection: 'songs' });

// export the model
module.exports = mongoose.model("Song", songSchema);
