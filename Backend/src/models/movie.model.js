const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    movie_name : {type : String, required : true},
    rating : {type : Number, required : true},
    cast : {type : Array },
    genre : {type : String},
    release_date : {type : Date}
},
{
    versionKey : false,
    timestamps : true
})

module.exports = mongoose.model("movie_data", movieSchema)

