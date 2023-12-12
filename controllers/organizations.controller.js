const {Organization} = require("../models/organization");
const {decryptData, encryptObjectValues, createLog} = require("../helpers/functions");

const getOrganizations = async (req, res, next) => {
    const organizations = await Organization.find().sort({description: 1}).collation({locale: 'en', strength: 1})

    // Specify the properties you want to encrypt
    const propertiesToEncrypt = ['code', 'description', 'createdBy'];

    // Encrypt values of specified properties for each object in the array
    for (const organization of organizations) {
        await encryptObjectValues(organization, propertiesToEncrypt);
    }

    return res.status(200).json({status: true, message: organizations})
}

const createOrganization = async (req, res) => {
    if (!req.body.code || !req.body.description) return res.status(400).json({status: false, message: 'Invalid request'})

    const code = decryptData(req.body.code).trim()
    const description = decryptData(req.body.description).trim()

    if (!code || !description) return res.status(400).json({status: false, message: 'Fill all the required fields'})

    const codeResult = await Organization.findOne({code})
    if (codeResult) return res.status(400).json({status: false, message: 'Organization code already exists'})

    const descriptionResult = await Organization.findOne({description})
    if (descriptionResult) return res.status(400).json({status: false, message: 'Organization description already exists'})

    const organization = new Organization({code, description, createdBy: 'U010280'})
    const result = await organization.save()

    if (result) await createLog('organizations', result._id, 'create', '', result)

    return res.status(200).json({status: true, message: 'Organization added'});
}

const getOrganization = async (req, res) => {
    if (!(req.params.id)) return res.status(400).json({status: false, message: 'Invalid request'})
    const id = req.params.id;

    const organization = await Organization.findById(id)
    if (!organization) return res.status(404).json({status: false, message: 'Organization not found'})

    const propertiesToEncrypt = ['code', 'description', 'createdBy'];
    await encryptObjectValues(organization, propertiesToEncrypt);

    return res.status(200).json({status: true, message: organization})
}

const updateOrganization = async (req, res) => {
    if (!req.body.id || !req.body.description) return res.status(400).json({status: false, message: 'Invalid request'})

    const id = req.body.id
    const newDescription = decryptData(req.body.description).trim()

    if (!newDescription) return res.status(400).json({status: false, message: 'Fill all the required fields'})

    const descriptionResult = await Organization.findOne({description: newDescription})
    if (descriptionResult) return res.status(400).json({status: false, message: 'Organization description already exists'})

    const organization = await Organization.findById(id)
    if (!organization) return res.status(404).json({status: false, message: 'Organization not found'})

    const oldValue = {...organization.toObject()}

    const result = await Organization.findByIdAndUpdate(
        id,
        {$set: {description: newDescription, updatedBy: 'U000210'}},
        {new: true}
    )

    if (!result) return res.status(500).json({status: false, message: 'Something went wrong. Please try again later.'})

    await createLog('organizations', oldValue._id, 'update', oldValue, result)

    return res.status(200).json({status: true, message: 'Organization description updated'});
}

const deleteOrganization = async (req, res) => {
    if (!(req.params.id)) return res.status(400).json({status: false, message: 'Invalid request'})

    const id = req.params.id;

    const result = await Organization.findByIdAndDelete(id)
    if (result) {
        await createLog('organizations', result._id, 'delete', result, '')
        return res.status(200).json({status: true, message: 'Organization deleted'});
    } else {
        return res.status(404).json({status: false, message: 'Organization not found to delete!'})
    }
}

module.exports = {getOrganizations, createOrganization, getOrganization, updateOrganization, deleteOrganization};