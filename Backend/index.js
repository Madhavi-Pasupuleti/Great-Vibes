const express = require("express")
const dotenv = require("dotenv");
const connect = require("./src/configs/db")
const app = express()
dotenv.config();
app.use(express.json())
const cookieParser = require('cookie-parser')

const moviecontrioller = require("../Backend/src/controllers/movie.controller")
const { loginHandler } = require('../Backend/src/controllers/login.controller')
const User = require('../Backend/src/controllers/register.controller')

app.use(cookieParser())

app.use("/movies", moviecontrioller)
app.post('/login', loginHandler)
app.use('/register', User)

app.listen(process.env.PORT || 3000, async() => {
    try{
        await connect()
        console.log("connected to DB")
    }
    catch(err){
        console.log(err.message)
    }
});