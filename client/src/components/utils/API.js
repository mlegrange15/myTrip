import axios from "axios";

export default {
  // Gets all destinations
  getDestinations: function() {
    return axios.get("/api/destinations");
  },
  //   // Deletes the article with the given id
  //   deleteArticle: function(id) {
  //     return axios.delete("/api/destinations/" + id);
  //   },
  // Saves a note to the database
  saveNote: function(noteData) {
    return axios.post("/api/notes", noteData);
  },
  // Gets notes
  getNotes: function(cityName) {
    return axios.get("/api/notes", cityName);
  }
};
