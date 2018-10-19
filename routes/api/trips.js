const express = require('express');
const router = express.Router();

// Trip model
const Trip = require('../../models/Trip');

// GET api/trips Get all Trips
router.get('/', (req, res) => {
    Trip.find()
    .then(trips => res.json(trips))
});

// POST api/trips Post an Trip
router.post('/', (req, res) => {
    const newTrip = new Trip({
        destination: req.body.destination,
    });
    newTrip.save().then(trip => res.json(trip))
});

// DELETE api/trips/:id Delete a Trip
router.delete('/:id', (req, res) => {
 Trip.findById(req.params.id)
 .then(trip => trip.remove().then(()=> res.json({ success: true })))
 .catch(error => res.status(404).json({ success: false }))
});


module.exports = router;