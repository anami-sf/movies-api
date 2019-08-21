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

const create = (req, res) => {
    Movie.create(req.body)
    .then((movie)=> {
        res.status(200).json(movie)
    })
    .catch((err)=> {
        console.log(err)
    })
}

// function create(req, res) {
//     // convert nowShowing's checkbox of nothing or "on" to boolean
//     req.body.nowShowing = !!req.body.nowShowing;
//     for (let key in req.body) {
//       if (req.body[key] === '') delete req.body[key];
//     }
//     var movie = new Movie(req.body);
//     movie.save(function(err) {
//       if (err) return res.redirect('/movies/new');
//       // res.redirect('/movies');
//       res.redirect(`/movies/${movie._id}`);
//     });
//   }

// const index = (req, res) => {
//     Movie.find({})
//     .then((movies)=> {
//         res.status(200).json(movies)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })
// }
// const index = (req, res) => {
//     Movie.find({})
//     .then((movies)=> {
//         res.status(200).json(movies)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })
// }
// const index = (req,res) => {
//     Movie.find({})
//     .then((movies)=> {
//         res.status(200).json(movies)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })
// }
// const index = (req,res) => {
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