import axios from "axios";

export default {
  // Gets all articles
  getDestinations: function() { 
    return axios.get("/api/destinations");
  },
//   // Deletes the article with the given id
//   deleteArticle: function(id) {
//     return axios.delete("/api/destinations/" + id);
//   },
//   // Saves a article to the database
//   saveArticle: function(articleData) {
//     return axios.post("/api/destinations", articleData);
//   }
};