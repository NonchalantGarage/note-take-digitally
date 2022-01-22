const fs = require('fs');
const path = require('path');

function createNewNote (body,notesArr){
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArr},null, 2)
    );
    return note;
}

function findById (id, notesArr){
    const result = notesArr.filter(notes => notes.id === id)[0];
    return result;
}

function deleteNote(body, notesArr){
    const note = body;
    notesArr.splice(note)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArr},null, 2)
    );
    return note;

}

module.exports = {createNewNote, findById, deleteNote} 