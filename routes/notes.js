const router = require("express").Router();

const notesSchema = require("../models/noteSchema");

//API for creating the notes
router.post("/notes", async (req, res) => {
  try {
    const { title, content } = req.body;
    const noteList = new notesSchema({ title, content });
    await noteList.save().then(() => {
      res.status(200).json({ noteList });
    });
  } catch (error) {
    console.error(error);
  }
});

//API for Updating the notes
router.put("/notes/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await notesSchema.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (updatedNote) {
      res.status(200).json({ updatedNote });
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//API for Deleting the notes
router.delete("/notes/:id", async (req, res) => {
  try {
    const note = await notesSchema.findByIdAndDelete(req.params.id);

    if (note) {
      res.status(200).json({ message: "Note deleted successfully" });
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// API for displaying all notes
router.get("/notes", async (req, res) => {
  try {
    const notes = await notesSchema.find().sort({ createdAt: -1 });

    if (notes.length > 0) {
      res.status(200).json(notes);
    } else {
      res.status(404).json({ message: "NO NOTES CREATED" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

module.exports = router;
