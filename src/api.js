"use strict";

const axios = require("axios");

/**
 * Sucht die Api nach dem Suchbegriff('term') ab und gibt das Ergebnis in einem Array zurück.
 * @param {String} term 
 * @returns Array
 */
module.exports.search = function search(term) {
  return axios
    .get("http://www.omdbapi.com/?s=" + term + "&apikey=99947005", {
      params: {
        api_key: "apikey=99947005",
        query: term,
      },
    })
    .then(function (response) {
      const movieArray = [];
      for (const movie of response.data["Search"]) {
        const movieData = movie["imdbID"] + ": " + movie["Title"];
        movieArray.push(movieData);
      }
      return movieArray
    });
};

this.search("cars");
