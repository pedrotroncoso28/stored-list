var express = require("express");
var router = express.Router();
const Song = require("../models/songs");

/* GET home page */
router.get("/", async function (req, res, next) {
  try {
    const songs = await Song.find();
    res.render("index", { title: "Christmas List", songsList: songs });
  } catch (err) {
    console.error("GET / error:", err);
    next(err);
  }
});

/* POST add new song (form) */
router.post("/add", async (req, res) => {
  try {
    await Song.create({ title: req.body.title });
    res.redirect("/");
  } catch (err) {
    console.error("POST /add error:", err);
    res.status(500).send("Error adding song");
  }
});

/* POST delete (form) */
router.post("/delete/:id", async (req, res) => {
  try {
    await Song.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.error("POST /delete/:id error:", err);
    res.status(500).send("Error deleting song");
  }
});

/* GET edit page */
router.get("/edit/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).send("Song not found");
    res.render("edit", { song });
  } catch (err) {
    console.error("GET /edit/:id error:", err);
    res.status(500).send("Error loading edit page");
  }
});

/* POST save edited song */
router.post("/edit/:id", async (req, res) => {
  try {
    await Song.findByIdAndUpdate(req.params.id, { title: req.body.title });
    res.redirect("/");
  } catch (err) {
    console.error("POST /edit/:id error:", err);
    res.status(500).send("Error editing song");
  }
});

/* POST /item - create (JSON) */
router.post("/item", async (req, res) => {
  try {
    const newSong = await Song.create({ title: req.body.title });
    res.status(201).json(newSong);
  } catch (err) {
    console.error("POST /item error:", err);
    res.status(500).json({ error: "Error creating item" });
  }
});

/* PUT /item/:id - update (JSON) */
router.put("/item/:id", async (req, res) => {
  try {
    const updated = await Song.findByIdAndUpdate(req.params.id, { title: req.body.title }, { new: true });
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (err) {
    console.error("PUT /item/:id error:", err);
    res.status(500).json({ error: "Error updating item" });
  }
});

/* DELETE /item/:id - delete (JSON) */
router.delete("/item/:id", async (req, res) => {
  try {
    const deleted = await Song.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) {
    console.error("DELETE /item/:id error:", err);
    res.status(500).json({ error: "Error deleting item" });
  }
});

module.exports = router;
