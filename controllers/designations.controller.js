const {Designation} = require("../models/designation");
const {decryptData, encryptObjectValues, createLog} = require("../helpers/functions");

const getDesignations = async (req, res, next) => {
    const designations = await Designation.find().sort({description: 1}).collation({locale: 'en', strength: 1})

    // Specify the properties you want to encrypt
    const propertiesToEncrypt = ['code', 'description', 'createdBy'];

    // Encrypt values of specified properties for each object in the array
    for (const designation of designations) {
        await encryptObjectValues(designation, propertiesToEncrypt);
    }

    return res.status(200).json({status: true, message: designations})
}

const createDesignation = async (req, res) => {
    if (!req.body.code || !req.body.description) return res.status(400).json({status: false, message: 'Invalid request'})

    const code = decryptData(req.body.code).trim()
    const description = decryptData(req.body.description).trim()

    if (!code || !description) return res.status(400).json({status: false, message: 'Fill all the required fields'})

    const codeResult = await Designation.findOne({code})
    if (codeResult) return res.status(400).json({status: false, message: 'Designation code already exists'})

    const descriptionResult = await Designation.findOne({description})
    if (descriptionResult) return res.status(400).json({status: false, message: 'Designation description already exists'})

    const designation = new Designation({code, description, createdBy: 'U010280'})
    const result = await designation.save()

    if (result) await createLog('designations', result._id, 'create', '', result)

    return res.status(200).json({status: true, message: 'Designation added'});
}

const getDesignation = async (req, res) => {
    if (!(req.params.id)) return res.status(400).json({status: false, message: 'Invalid request'})
    const id = req.params.id;

    const designation = await Designation.findById(id)
    if (!designation) return res.status(404).json({status: false, message: 'Designation not found'})

    const propertiesToEncrypt = ['code', 'description', 'createdBy'];
    await encryptObjectValues(designation, propertiesToEncrypt);

    return res.status(200).json({status: true, message: designation})
}

const updateDesignation = async (req, res) => {
    if (!req.body.id || !req.body.description) return res.status(400).json({status: false, message: 'Invalid request'})

    const id = req.body.id
    const newDescription = decryptData(req.body.description).trim()

    if (!newDescription) return res.status(400).json({status: false, message: 'Fill all the required fields'})

    const descriptionResult = await Designation.findOne({description: newDescription})
    if (descriptionResult) return res.status(400).json({status: false, message: 'Designation description already exists'})

    const designation = await Designation.findById(id)
    if (!designation) return res.status(404).json({status: false, message: 'Designation not found'})

    const oldValue = {...designation.toObject()}

    const result = await Designation.findByIdAndUpdate(
        id,
        {$set: {description: newDescription, updatedBy: 'U000210'}},
        {new: true}
    )

    if (!result) return res.status(500).json({status: false, message: 'Something went wrong. Please try again later.'})

    await createLog('designations', oldValue._id, 'update', oldValue, result)

    return res.status(200).json({status: true, message: 'Designation description updated'});
}

const deleteDesignation = async (req, res) => {
    if (!(req.params.id)) return res.status(400).json({status: false, message: 'Invalid request'})

    const id = req.params.id;

    const result = await Designation.findByIdAndDelete(id)
    if (result) {
        await createLog('designations', result._id, 'delete', result, '')
        return res.status(200).json({status: true, message: 'Designation deleted'});
    } else {
        return res.status(404).json({status: false, message: 'Designation not found to delete!'})
    }
}

module.exports = {getDesignations, createDesignation, getDesignation, updateDesignation, deleteDesignation};