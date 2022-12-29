//required packages
const path = require('path');
const app = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

//Get requests
app.get('/public/notes.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));

});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'));

});

app.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//Post request
app.post('/api/notes', (req, res) => {
    const {title, text, id} = req.body;

    if (req.body) {
       const newNote = {
            title,
            text,
            id: uuid()
        };
        
        readAndAppend(newNote, './db/db.json');
        res.json('Added new note');
        } else {
            res.error('Error in adding new note')
        }

    });

//Delete request
app.delete('/api/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json('true');
});

module.exports = app;