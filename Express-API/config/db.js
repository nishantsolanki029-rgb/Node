const mongoose = require("mongoose")
// const dbgr = require("debug")("development:server")
// const config = require("config")

function connectToDB() {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => { console.log("🟩 MongoDB Connected Successfully ") })
        .catch((err) => { console.log(err) })
}

// function connectToDB() {
//     mongoose
//         .connect(`${config.get('MongoDB_URL')}/e-commerce`)
//         .then(() => { dbgr("MongoDB Connected") })
//         .catch((err) => { dbgr(err) })
// }

module.exports = connectToDB