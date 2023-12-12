const mongoose = require('mongoose')

const investigationSchema = new mongoose.Schema({
    serial: {type: Number, required: true, unique: true},
    receivedDate: {type: Date, required: true},
    senderOrganization: {type: String, required: true},
    senderSentDate: {type: Date, required: true},
    senderReference: {type: String, default: ''},
    senderName: {type: String, default: ''},
    tinNicNumber: {type: String, default: ''},
    description: {type: String, required: true, default: ''},
    reference: {type: String, required: true, default: ''},
    confidentiality: {type: String, required: true, default: 'No'},
    subjectOfficer: {type: String, default: ''},
    actionTaken: {type: String, default: ''},
    caseSentBranch: {type: String, default: ''},
    caseSendDate: {type: Date, default: null},
    feedbackReceived: {type: String, default: ''},
    feedbackReceivedDate: {type: Date, default: null},
    investigationStatus: {type: String, required: true, default: 'Pending'},
    feedback: {type: String, default: ''},
    createdBy: {type: String, required: true},
    updatedBy: {type: String, default: '-'},
}, {versionKey: false, timestamps: true})

module.exports.Investigation = mongoose.model('Investigation', investigationSchema)
