const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'files')));

app.get('/movies', function (req, res) {
  res.send(Object.values(movieModel));
});

app.get('/movies/:imdbID', function (req, res) {
  const id = req.params.imdbID;
  const movie = movieModel[id];
  if (movie) {
    res.send(movie);
  } else {
    res.sendStatus(404);
  }
});

app.put('/movies/:imdbID', function (req, res) {
  const id = req.params.imdbID;
  const movie = req.body;

  if (movieModel[id]) {
    movieModel[id] = movie;
    res.sendStatus(200);
  } else {
    movieModel[id] = movie;
    res.status(201).send(movie);
  }
});

app.listen(3000);
console.log("Server now listening on http://localhost:3000/");