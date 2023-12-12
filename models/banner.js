const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema({
    message: {type: String, required: true, default: ''},
    display: {type: Boolean, required: true, default: false}
}, {versionKey: false})

module.exports.Banner = mongoose.model('Banner', bannerSchema)
