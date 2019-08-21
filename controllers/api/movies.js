const Movie = require('../../models/movie')

//We will be responding with JSON and a Status Code to every HTTP request to our API.

const index = (req, res) => {
    Movie.find({})
    .then((movies)=> {
        res.status(200).json(movies)
    })
    .catch((err)=> {
        console.log(err)
        res.status()
    })
}

// function create(req, res) {
//     Movie.create(req.body).then(function(movie) {
//       res.status(201).json(movie);
//     });
// }

const create = () => {
    Movie.create(req.body)
    .then((movie)=> {
        res.status(200).json(movie)
    })
    .catch((err)=> {
        console.log(err)
    })
}

// const index = () => {
//     Movie.find({})
//     .then((movies)=> {
//         res.status(200).json(movies)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })
// }
// const index = () => {
//     Movie.find({})
//     .then((movies)=> {
//         res.status(200).json(movies)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })
// }
// const index = () => {
//     Movie.find({})
//     .then((movies)=> {
//         res.status(200).json(movies)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })
// }
// const index = () => {
//     Movie.find({})
//     .then((movies)=> {
//         res.status(200).json(movies)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })
// }

module.exports = {
    index,
    create,
    // show,
    // remove,
    // update
}