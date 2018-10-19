const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const TripSchema = new Schema({
    destination: {
        type: String,
        required: true
    },
});

module.exports = Article = mongoose.model('trip', TripSchema);