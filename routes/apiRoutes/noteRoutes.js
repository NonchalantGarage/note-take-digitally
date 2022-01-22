const router = require("express").Router();
const { createNewNote, deleteNote } = require("../../lib/notes");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  fs.readFile("db/db.json", "utf-8", (err, notes) => {
    let notesParsed = JSON.parse(notes);
    return res.json(notesParsed);
  });
});

router.post("/notes", (req, res) => {
  fs.readFile("db/db.json", "utf-8", (err, notes) => {
    let notesParsed = JSON.parse(notes);
    req.body.id = uuidv4();
    notesParsed.push(req.body);
    fs.writeFile("db/db.json", JSON.stringify(notesParsed), (err, newNotes) => {
      return res.json(newNotes);
    });
  });
});

router.delete("/notes/:id", (req, res) => {
  deleteNote(req.params.id, notes);
  res
    .json(notes)
    .catch((err) => {
      res.status(500).json(err);
    })
    .reload();
});

module.exports = router;
