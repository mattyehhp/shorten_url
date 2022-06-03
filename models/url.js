const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    short_Code: String,
    formerUrl: String,
    shortUrl: String
})

module.exports = mongoose.model('Url', urlSchema)