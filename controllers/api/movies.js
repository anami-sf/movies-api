const Movie = require('../../models/movie')

//We will be responding with JSON and a Status Code to every HTTP request to our API.

const index = (req, res) => {
    Movie.find({})
    // .populate('cast')
    // .exec()
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
        res.status(404).json(err)        
    })
}

const show = (req, res) => {
    Movie.findById(req.params.id)
    .then((movies)=> {
        res.status(200).json(movies)
    })
    .catch((err)=> {
        res.status(404).json(err) 
    })
}

const remove = (req, res) => {
    Movie.deleteOne(req.params.id)
    .then((movies)=> {
        res.status(200).json(movies)
    })
    .catch((err)=> {
        res.status(404).json(err) 
    })
}

const update = (req,res) => {
    Movie.findByIdAndUpdate(req.params.id)
    .then((movies)=> {
        res.status(200).json(movies)
    })
    .catch((err)=> {
        res.status(404).json(err) 
    })
}


module.exports = {
    index,
    create,
    show,
    remove,
    update
}