const mongoose = require('mongoose')

const transactionLogSchema = new mongoose.Schema({
    dataTable: {type: String, required: true},
    recordId: {type: String, required: true},
    action: {type: String, required: true},
    oldValue: {type: String},
    newValue: {type: String},
    user: {type: String, required: true}
}, {versionKey: false, timestamps: true})

module.exports.TransactionLog = mongoose.model('Transaction_log', transactionLogSchema)
