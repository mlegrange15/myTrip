const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
const DestinationsSchema = new Schema({
  _id: Number,
  name: {
    type: String
  },
  description: {
    type: String
  },
  images: {
    type: String
  },
  hotels: [
    {
      _id: Number,
      name: String,
      images: String,
      description: String
    }
  ],
  events: [
    {
      _id: Number,
      name: String,
      images: String,
      description: String
    }
  ],
  food: [
    {
      _id: Number,
      name: String,
      images: String,
      description: String
    }
  ],
  tours: [
    {
      _id: Number,
      name: String,
      images: String,
      description: String
    }
  ]
});

module.exports = Destination = mongoose.model(
  "destination",
  DestinationsSchema
);
