const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
const NoteSchema = new Schema({
  _id: Number,
  name: {
    type: String
  },
  note: {
    type: String
  }
});

module.exports = Note = mongoose.model(
  "note",
  NoteSchema
);