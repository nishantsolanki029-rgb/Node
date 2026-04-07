const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/user-card")

let userSchema = mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    image: String
}, { timestemps: true })

module.exports = mongoose.model("usercard", userSchema) ;