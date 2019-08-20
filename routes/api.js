var express = require('express');
var router = express.Router();
const puppiesCtrl = require('../controllers/api/puppies')

//Retrieve all puppies
//router.get('/puppies', puppiesCtrl.index)

//Add a puppy
//router.get('/puppies', puppiesCtrl.create)

//Show DETAILS for a single puppy by Id
// router.get('/puppies:id', puppiesCtrl.show)

//Update a single puppy by Id
// router.get('/puppies:id', puppiesCtrl.update)

//Delete a singel puppy by Id
// router.get('/puppies:id', puppiesCtrl.remove)

module.exports = router;