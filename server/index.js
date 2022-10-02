// THIS IS MY APP FILE -----

const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
// import movies models file to use function .getAll
var models = require('./models');
// require the database file I created
var db = require('./db');


// Middleware
var morgan = require('morgan');
var cors = require('cors');

// Logging and parsing
app.use(morgan('dev'));
// fixes headers
app.use(cors());
// creates chunks for you
app.use(express.json());


// Router ---
// var router = require('./routes.js');
// Set up our routes - this adds an extra '/' title of your choosing before '/movies'
// also app.use with router is only if you have big files to work with
// here we can simply use app.get and app.post directly instead of having a seperate file
// app.use('/films', router);

// EXPRESS (app.get, app.post, app.delete) ---
// use this instead of routes if you dont want a big modular project ---
app.get('/films/movies', (req, res) => {
  let movies = new Promise((resolve, reject) => {
    models.movies.getAll((err, content) => {
      if (err) {
        console.log('error in get', err)
        reject(err);
      } else {
        resolve(content);
      }
    })
  });
  movies
    .then((result) => {
      // console.log('result to send', result);
      res.send(result)
    })
    .catch((err) => {
      res.end();
    });
})
app.post('/films/movies', (req, res) => {
  console.log(req.body, 'IM IN SERVER POST ---');
  // Here you can start doing the connections to mySQL
  const query = `INSERT INTO Movies (Title, Watched, Added) VALUES ("${req.body.Title}", ${req.body.Watched}, ${req.body.Added})`;
  // .query is a method to communicate with the database
  db.connection.query(query, [], (err, results) => {
    if (err) {
      throw err;
    } else {
      console.log(results, 'HELLLLO POST ----');
      res.status(200).json(req.body);
    }
  })
})
app.delete('/films/movies', (req, res) => {
  // console.log(req, res, 'BIG OBJECT DELETE')
  console.log(req.body, 'IM IN SERVER DELETE ---');
  // Here you can start doing the connections to mySQL
  const query = `DELETE FROM Movies WHERE Title='${req.body.Title}'`;
  // .query is a method to communicate with the database
  db.connection.query(query, [], (err, results) => {
    if (err) {
      throw err;
    } else {
      console.log(results, 'HELLLLO DELETE ----');
      res.send("DELETE Request Called")
    }
  })
})

// front end info to display -
// this gives localhost:3000/http://127.0.0.1:3000
// so you dont need to use it on any get/post but you can still use
app.use(express.static('client/dist'));

// listening in port
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


module.exports.app = app;