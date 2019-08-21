var express = require('express');
var router = express.Router();
const moviesCtrl = require('../controllers/api/movies')

//Retrieve all movies
router.get('/movies', moviesCtrl.index)

//Add a movie
router.get('/movies', moviesCtrl.create)

//Show DETAILS for a single movie by Id
// router.get('/movies:id', moviesCtrl.show)

//Update a single movie by Id
// router.get('/movies:id', moviesCtrl.update)

//Delete a single movie by Id
// router.get('/movies:id', moviesCtrl.remove)

module.exports = router;

