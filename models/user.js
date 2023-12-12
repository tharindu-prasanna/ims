const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String, unique: true},
    role: {type: String},
    passwordReset: {type: Boolean, default: false},
    resetPasswordToken: {type: String},
    resetPasswordExpires: {type: Date},
    status: {type: String, default: 'inactive'}
}, {versionKey: false, timestamps: true})

module.exports.User = mongoose.model('User', userSchema)
