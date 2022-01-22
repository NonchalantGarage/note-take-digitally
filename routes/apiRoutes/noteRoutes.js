const router = require('express').Router();
const {createNewNote, deleteNote} = require('../../lib/notes')
const {notes} = require('../../db/db.json');
const res = require('express/lib/response');
const { sendFile } = require('express/lib/response');


router.get('/notes', (req, res)=>{
    res.json(notes);
})

router.post('/notes', (req,res)=>{
    // set id based on what the next index of the array will be 
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id',(req,res)=>{
    deleteNote(req.params.id,notes);
    res.json(notes)
})

module.exports = router