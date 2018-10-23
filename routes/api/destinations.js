const express = require('express');
const router = express.Router();

// Destination model
const Destination = require('../../models/Destination');

// GET api/destinations Get all Destinations
router.get('/', (req, res) => {
    Destination.find()
    .then(destinations => res.json(destinations))
});

// POST api/destinations Post an Destination
router.post('/', (req, res) => {
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

// DELETE api/Destinations/:id Delete a Destination
// router.delete('/:id', (req, res) => {
//  Destination.findById(req.params.id)
//  .then(destination => destination.remove().then(()=> res.json({ success: true })))
//  .catch(error => res.status(404).json({ success: false }))
// });


module.exports = router;