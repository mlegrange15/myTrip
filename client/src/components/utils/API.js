import axios from "axios";

export default {
  // Gets all destinations
  getDestinations: function() {
    return axios.get("/api/destinations");
  },
  //   // Deletes the note with the given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a note to the database
  saveNote: function(noteData) {
    return axios.post("/api/notes", noteData);
  },
  // Gets notes
  getNotes: function() {
    return axios.get("/api/notes");
  }
};
