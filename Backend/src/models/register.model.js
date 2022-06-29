const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    username : {type: String, required: true},
    password : {type: String, required: true},
},
{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("registered_user", registerSchema)

