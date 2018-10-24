const express = require('express');
const router = express.Router();

// Destination model
const Destination = require('../../models/Destination');
const Note = require('../../models/Note');


// GET api/destinations Get all Destinations
router.get('/destinations', (req, res) => {
    Destination.find()
    .then(destinations => res.json(destinations))
});

// POST api/destination Post an Destination
router.post('/destination', (req, res) => {
    const newDestination = new Destination({
        _id: req.body._id,
        name: req.body.name,
        description: req.body.description,
        images: req.body.images,
        hotels: req.body.hotels,
        events: req.body.events,
        food: req.body.food,
        tours: req.body.tours,
    });
    newDestination.save().then(destination => res.json(destination))
});

// DELETE api/destination/:id Delete a Destination
// router.delete('/:id', (req, res) => {
//  Destination.findById(req.params.id)
//  .then(destination => destination.remove().then(()=> res.json({ success: true })))
//  .catch(error => res.status(404).json({ success: false }))
// });

// ** NOTES ** //

// GET api/notes Get all Notes
router.get('/notes', (req, res) => {
    Note.find()
    .then(notes => res.json(notes))
});

// POST api/note Post a Note
router.post('/notes', (req, res) => {
    const newNote = new Note({
        _id: req.body._id,
        name: req.body.name,
        note: req.body.note,
    });
    newNote.save().then(note => res.json(note))
});

// DELETE api/note/:id Delete a Note
router.delete('/notes/:id', (req, res) => {
 Note.findById(req.params.id)
 .then(note => note.remove().then(()=> res.json({ success: true })))
 .catch(error => res.status(404).json({ success: false }))
});


module.exports = router;