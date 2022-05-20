const mongoose = require('mongoose')
const {MONGOURI} = require("./config/keys")

const connectToMongo = ()=>{
    mongoose.connect(MONGOURI, ()=>{
        console.log('connected to mongo successfully')
    })
}

module.exports = connectToMongo