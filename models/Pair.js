const mongoose = require('mongoose')

const pair = new mongoose.Schema({
    itemName: String,
    type: String,
    description: String,
    pairings: String
})

module.exports = mongoose.model("Pair", pair)