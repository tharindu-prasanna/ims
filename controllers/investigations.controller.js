const {decryptData, encryptObjectValues, createLog} = require("../helpers/functions");
const {Investigation} = require("../models/investigation");

const getInvestigations = async (req, res, next) => {
    const investigations = await Investigation.find().sort({serial: -1})

    // Specify the properties you want to encrypt
    const propertiesToEncrypt = [
        'senderOrganization',
        'senderReference',
        'senderName',
        'tinNicNumber',
        'description',
        'reference',
        'confidentiality',
        'subjectOfficer',
        'actionTaken',
        'caseSentBranch',
        'feedbackReceived',
        'investigationStatus',
        'feedback',
        'createdBy',
        'updatedBy'
    ];

    // Encrypt values of specified properties for each object in the array
    for (const investigation of investigations) {
        await encryptObjectValues(investigation, propertiesToEncrypt);
    }

    return res.status(200).json({status: true, message: investigations})
}

const createInvestigation = async (req, res) => {
    const requestBody = [
        'serial',
        'receivedDate',
        'senderOrganization',
        'senderSentDate',
        'senderReference',
        'senderName',
        'tinNicNumber',
        'description',
        'reference',
        'confidentiality'
    ];

    if (requestBody.some(field => !req.body[field])) {
        return res.status(400).json({status: false, message: 'Invalid request'});
    }

    const newInvestigation = {
        serial: decryptData(req.body.serial),
        receivedDate: decryptData(req.body.receivedDate),
        senderOrganization: decryptData(req.body.senderOrganization),
        senderSentDate: decryptData(req.body.senderSentDate),
        senderReference: decryptData(req.body.senderReference) ? decryptData(req.body.senderReference).trim() : '',
        senderName: decryptData(req.body.senderName) ? decryptData(req.body.senderName).trim() : '',
        tinNicNumber: decryptData(req.body.tinNicNumber) ? decryptData(req.body.tinNicNumber).trim().toUpperCase() : '',
        description: decryptData(req.body.description) ? decryptData(req.body.description).trim() : '',
        reference: decryptData(req.body.reference) ? decryptData(req.body.reference).trim() : '',
        confidentiality: decryptData(req.body.confidentiality),
        investigationStatus: 'Pending',
        createdBy: 'U010280'
    };

    const requiredFields = [
        'serial',
        'receivedDate',
        'senderOrganization',
        'senderSentDate',
        'description',
        'reference',
        'confidentiality'
    ];

    if (requiredFields.some(field => !newInvestigation[field])) {
        return res.status(400).json({status: false, message: 'Fill all the required fields'});
    }

    const serialResult = await Investigation.findOne({serial: newInvestigation.serial})
    if (serialResult) return res.status(400).json({status: false, message: 'Serial already exists'})

    const investigation = new Investigation(newInvestigation)
    const result = await investigation.save()

    if (result) await createLog('investigations', result._id, 'create', '', result)

    return res.status(200).json({status: true, message: 'Investigation added'});
}

const getInvestigation = async (req, res) => {
    if (!(req.params.id)) return res.status(400).json({status: false, message: 'Invalid request'})
    const id = req.params.id;

    const investigation = await Investigation.findById(id)
    if (!investigation) return res.status(404).json({status: false, message: 'Investigation not found'})

    const propertiesToEncrypt =
        ['serial', 'senderOrganization', 'senderReference', 'senderName', 'tinNicNumber', 'description', 'reference', 'confidentiality',
            'subjectOfficer', 'actionTaken', 'caseSentBranch', 'feedbackReceived', 'investigationStatus', 'feedback', 'createdBy', 'updatedBy'];
    await encryptObjectValues(investigation, propertiesToEncrypt);

    return res.status(200).json({status: true, message: investigation})
}

const updateInvestigation = async (req, res) => {
    const requestBody = [
        '_id',
        'receivedDate',
        'senderOrganization',
        'senderSentDate',
        'senderReference',
        'senderName',
        'tinNicNumber',
        'description',
        'reference',
        'confidentiality',
        'subjectOfficer',
        'actionTaken',
        'caseSentBranch',
        'caseSendDate',
        'feedbackReceived',
        'feedbackReceivedDate',
        'investigationStatus',
        'feedback'
    ];

    if (requestBody.some(field => !req.body[field])) {
        return res.status(400).json({status: false, message: 'Invalid request'});
    }

    const updatedInvestigation = {
        id: req.body._id,
        receivedDate: decryptData(req.body.receivedDate),
        senderOrganization: decryptData(req.body.senderOrganization),
        senderSentDate: decryptData(req.body.senderSentDate),
        senderReference: decryptData(req.body.senderReference),
        senderName: decryptData(req.body.senderName),
        tinNicNumber: decryptData(req.body.tinNicNumber),
        description: decryptData(req.body.description),
        reference: decryptData(req.body.reference),
        confidentiality: decryptData(req.body.confidentiality),
        subjectOfficer: decryptData(req.body.subjectOfficer),
        actionTaken: decryptData(req.body.actionTaken),
        caseSentBranch: decryptData(req.body.caseSentBranch),
        caseSendDate: decryptData(req.body.caseSendDate),
        feedbackReceived: decryptData(req.body.feedbackReceived),
        feedbackReceivedDate: decryptData(req.body.feedbackReceivedDate),
        investigationStatus: decryptData(req.body.investigationStatus),
        feedback: decryptData(req.body.feedback)
    }

    const requiredFields = [
        'id',
        'receivedDate',
        'senderOrganization',
        'senderSentDate',
        'description',
        'reference',
        'confidentiality',
        'investigationStatus'
    ];

    if (requiredFields.some(field => !updatedInvestigation[field])) {
        return res.status(400).json({status: false, message: 'Fill all the required fields'});
    }

    const investigation = await Investigation.findById(updatedInvestigation.id)
    if (!investigation) return res.status(404).json({status: false, message: 'Investigation not found'})

    if (updatedInvestigation.subjectOfficer === '') {
        const {actionTaken, caseSentBranch, caseSendDate, feedbackReceived, feedbackReceivedDate, feedback, investigationStatus} = updatedInvestigation;

        if (actionTaken.trim() !== '' || caseSentBranch !== '' || caseSendDate !== null || feedbackReceived !== '' || feedbackReceivedDate !== null || feedback.trim() !== '' || investigationStatus !== 'Pending') {
            return res.status(400).json({status: false, message: 'Invalid details'});
        }
    } else {
        const {caseSentBranch, caseSendDate, feedbackReceived, feedbackReceivedDate, feedback, investigationStatus} = updatedInvestigation;

        if (
            (caseSentBranch !== '' && caseSendDate === null) ||
            (feedbackReceived === 'Yes' && feedbackReceivedDate === null) ||
            (caseSentBranch === '' && (feedbackReceived !== '' && feedbackReceived !== 'No')) ||
            (feedbackReceived !== 'Yes' && feedback.trim() !== '')
        ) {
            return res.status(400).json({status: false, message: 'Invalid details'});
        }

        if (caseSentBranch !== '' && feedbackReceived === 'Yes' && (investigationStatus !== 'Reviewing' && investigationStatus !== 'Completed')) {
            return res.status(400).json({status: false, message: 'Invalid investigation status1'});
        } else if (caseSentBranch !== '' && (feedbackReceived === '' || feedbackReceived === 'No') && investigationStatus !== 'Feedback pending') {
            return res.status(400).json({status: false, message: 'Invalid investigation status2'});
        } else if (caseSentBranch === '' && (feedbackReceived === '' || feedbackReceived === 'No') && (investigationStatus !== 'Processing' && investigationStatus !== 'Completed')) {
            return res.status(400).json({status: false, message: 'Invalid investigation status3'});
        }
    }

    const oldValue = {...investigation.toObject()}

    const result = await Investigation.findByIdAndUpdate(
        updatedInvestigation.id,
        {
            $set: {
                receivedDate: updatedInvestigation.receivedDate ? new Date(updatedInvestigation.receivedDate) : null,
                senderOrganization: updatedInvestigation.senderOrganization,
                senderSentDate: updatedInvestigation.senderSentDate ? new Date(updatedInvestigation.senderSentDate) : null,
                senderReference: updatedInvestigation.senderReference,
                senderName: updatedInvestigation.senderName,
                tinNicNumber: updatedInvestigation.tinNicNumber,
                description: updatedInvestigation.description,
                reference: updatedInvestigation.reference,
                confidentiality: updatedInvestigation.confidentiality,
                subjectOfficer: updatedInvestigation.subjectOfficer,
                actionTaken: updatedInvestigation.actionTaken,
                caseSentBranch: updatedInvestigation.caseSentBranch,
                caseSendDate: updatedInvestigation.caseSendDate ? new Date(updatedInvestigation.caseSendDate) : null,
                feedbackReceived: updatedInvestigation.feedbackReceived,
                feedbackReceivedDate: updatedInvestigation.feedbackReceivedDate ? new Date(updatedInvestigation.feedbackReceivedDate) : null,
                investigationStatus: updatedInvestigation.investigationStatus,
                feedback: updatedInvestigation.feedback,
                updatedBy: 'U00950'
            }
        },
        {new: true}
    )

    if (!result) return res.status(500).json({status: false, message: 'Something went wrong. Please try again later.'})

    await createLog('investigations', oldValue._id, 'update', oldValue, result)

    return res.status(200).json({status: true, message: 'Investigation updated'});
}

const deleteInvestigation = async (req, res) => {
    if (!(req.params.id)) return res.status(400).json({status: false, message: 'Invalid request'})

    const id = req.params.id;

    const result = await Investigation.findByIdAndDelete(id)
    if (result) {
        await createLog('investigations', result._id, 'delete', result, '')
        return res.status(200).json({status: true, message: 'Investigation deleted'});
    } else {
        return res.status(404).json({status: false, message: 'Investigation not found to delete!'})
    }
}

const getSerial = async (req, res) => {
    const result = await Investigation.findOne()
        .sort({serial: -1}) // Sort in descending order to get the maximum serial first
        .limit(1);

    if (!result) res.status(200).json({status: true, message: 1});

    const maxSerial = result.serial;
    return res.status(200).json({status: true, message: (maxSerial + 1)});
}

module.exports = {getInvestigations, createInvestigation, getInvestigation, updateInvestigation, deleteInvestigation, getSerial};