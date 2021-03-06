const express = require('express')
const router = express.Router()

const User = require("../models/reigster.model")

router.post("", async(req,res)=> {
    try{
       const user = await User.create(req.body)
       return res.send(user)
    }
    catch(e){
        return res.send(e.message)
    }
})

module.exports = router;