const express = require("express")
const dotenv = require("dotenv");
const connect = require("./src/configs/db")
const app = express()
dotenv.config();
app.use(express.json())

app.listen(process.env.PORT, async() => {
    try{
        await connect()
        console.log("connected to DB")
    }
    catch(err){
        console.log(err.message)
    }
});