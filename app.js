const express = require('express')
const { notes } = require('./dummy-data')
const app = express()
const port = 3000

app.get('/notes', (req, res) => {
    res.send(notes)
})

app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const note = notes.find((note) => note.id === id)
    if (note) {
        res.send(note)
    } else {
        res.send({
            error: 'Note not found'
        })
    }
})

app.listen(port, () => {
















  console.log(`Example app listening on port ${port}`)
})