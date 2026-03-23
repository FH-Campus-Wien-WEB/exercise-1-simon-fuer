const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const moviesArray = [
    {
      "Title": "A Beautiful Mind",
      "Released": "2001-12-21",
      "Runtime": 135,
      "Genres": ["Biography", "Drama"],
      "Directors": ["Ron Howard"],
      "Writers": ["Akiva Goldsman", "Sylvia Nasar"],
      "Actors": ["Russel Crowe", "Ed Harris", "Jenniffer Connelly"],
      "Plot": "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
      "Poster": "https://image.tmdb.org/t/p/original/BDyBnOtfCvAlksCHwibBAm979U.jpg",
      "Metascore": 72,
      "imdbRating": 8.2
    },
    {
      "Title": "The Machinist",
      "Released": "2004-10-22",
      "Runtime": 101,
      "Genres": ["Drama", "Thriller"],
      "Directors": ["Brad Anderson"],
      "Writers": ["Scott Kosar"],
      "Actors": ["Christian Bale", "Jennifer Jason Leigh", "Aitana Sánchez-Gijón"],
      "Plot": "An industrial worker who hasn't slept in a year begins to doubt his own sanity.",
      "Poster": "https://image.tmdb.org/t/p/original/diAYqR4xdF9Hnj7qun6DEQhRrT2.jpg",
      "Metascore": 61,
      "imdbRating": 7.6
    },
    {
      "Title": "Parasite",
      "Released": "2019-05-30",
      "Runtime": 132,
      "Genres": ["Drama", "Thriller", "Comedy"],
      "Directors": ["Bong Joon Ho"],
      "Writers": ["Bong Joon Ho", "Han Jin-won"],
      "Actors": ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
      "Plot": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      "Poster": "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "Metascore": 97,
      "imdbRating": 8.5
    }
  ];
  res.send(moviesArray);
})
// 
app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

