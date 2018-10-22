const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const DestinationsSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    images: {
        type: String,
    },
    hotels: [{
        GRough: {
            name: String,
            images: String,
            description: String
        },
        JWMarriot: {
            name: String,
            images: String,
            description: String,
        },
    }],
    // events: { 
    //     Trevi_Fountain: {
    //         images: "",
    //         description: "",
    //         type: String,
    //     },
    // },
    // food: {
    //     Fridgedarium: {
    //         images: "",
    //         description: "",
    //         type: String,
    //     },
    // },
    // tours: {
    //     Vatican: {
    //         images: "",
    //         description: "",
    //         type: String,
    //     },
    // },
});

module.exports = Destination = mongoose.model('destination', DestinationsSchema); 