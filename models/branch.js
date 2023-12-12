const mongoose = require('mongoose')

const branchSchema = new mongoose.Schema({
    code: {type: String, unique: true, required: true},
    name: {type: String, unique: true, required: true},
    createdBy: {type: String, required: true},
    updatedBy: {type: String, default: '-'},
}, {versionKey: false, timestamps: true})

module.exports.Branch = mongoose.model('Branch', branchSchema)
