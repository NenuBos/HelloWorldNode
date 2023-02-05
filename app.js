const express = require('express')
const bodyParser = require("body-parser")
const { notes } = require('./dummy-data')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/notes', (req, res) => {
    // TODO returneaza din baza de date
    res.send(notes)
})

app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    // TODO returneaza din baza de date
    const note = notes.find((note) => note.id === id)
    if (note) {
        res.send(note)
        return
    }
    res.send({
        error: 1,
        message: 'Note not found'
    })
})

app.post('/note', (req, res) => {
    console.log('here', req)
    const body = req.body;

    if (!body.title || !body.content) {
        res.send({
            error: 1,
            message: 'O notita trebuie sa aiba titlu si content'
        })
        return
    }
    const note = {
        id: notes.length,
        title: body.title,
        content: body.content,
        dateCreated: new Date(),
        dateUpdated: new Date(),
    }
    // TODO de salvat notita in baza de date

    res.send({
        error: 0,
        note: note,
    })
})

app.put('/note/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;

    // TODO returneaza din baza de date
    let note = notes.find((note) => note.id === id)
    if (note) {
        note = {
            ...note,
            ...body,
        };
        // TODO salveaza in baza de date
        res.send(note)
        return
    }
    res.send({
        error: 1,
        message: 'Note not found'
    })
})

app.delete('/note/:id', (req, res) => {
    const id = req.params.id;
    // TODO returneaza din baza de date
    const note = notes.find((note) => note.id === id)
    if (note) {
        // TODO delete note from database
        res.send({
            id: note.id
        })
        return
    }
    res.send({
        error: 1,
        message: 'Note not found'
    })
})

app.listen(port, () => {
















  console.log(`Example app listening on port ${port}`)
})