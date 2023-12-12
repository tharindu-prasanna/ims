const mongoose = require('mongoose')

const organizationSchema = new mongoose.Schema({
    code: {type: String, unique: true, required: true},
    description: {type: String, unique: true, required: true},
    createdBy: {type: String, required: true},
    updatedBy: {type: String, default: '-'},
}, {versionKey: false, timestamps: true})

module.exports.Organization = mongoose.model('Organization', organizationSchema)
