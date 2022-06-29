const express = require("express")
const dotenv = require("dotenv");
const connect = require("./src/configs/db")
const app = express()
dotenv.config();
app.use(express.json())

const moviecontrioller = require("../Backend/src/controllers/movie.controller")

app.use("/movies", moviecontrioller)

app.listen(process.env.PORT || 3000, async() => {
    try{
        await connect()
        console.log("connected to DB")
    }
    catch(err){
        console.log(err.message)
    }
});