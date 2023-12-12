const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    showContacts: {type: Boolean, default: true},
    showInquiry: {type: Boolean, default: true},
    phone: {type: String},
    phoneStatus: {type: Boolean, default: false},
    email: {type: String},
    emailLink: {type: String},
    emailStatus: {type: Boolean, default: false}
}, {versionKey: false})

module.exports.Contact = mongoose.model('Contact', contactSchema)
