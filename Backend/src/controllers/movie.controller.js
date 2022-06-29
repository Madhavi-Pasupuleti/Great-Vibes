const express = require("express")

const Movie = require("../models/movie.model")

const router = express.Router()

router.get("", async(req,res) => {
    try{
        const data = await Movie.find().lean().exec()
        return res.send(data)
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

router.post("/", async(req,res) => {
    try{
        const movie_data = await Movie.create(req.body)

        return res.send(movie_data)
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

router.delete("/delete/:id", async(req,res)=> {
    try{
        const movie = await Movie.findByIdAndDelete(req.params.id)
        return res.send(movie)
    }
    catch(e){
        return res.status(500).send({message : err.message})
    }
})

router.patch("/update/:id", async(req,res)=> {
    try{
        const movie = await Movie.findByIdAndUpdate(req.params.id,req.body)
        return res.send(movie)
    }
    catch(e){
        return res.status(500).send({message : err.message})
    }
})

module.exports = router