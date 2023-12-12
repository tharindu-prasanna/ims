const {Branch} = require("../models/branch");
const {decryptData, encryptObjectValues, createLog} = require("../helpers/functions");

const getBranches = async (req, res, next) => {
    const branches = await Branch.find().sort({name: 1}).collation({locale: 'en', strength: 1})

    // Specify the properties you want to encrypt
    const propertiesToEncrypt = ['code', 'name', 'createdBy'];

    // Encrypt values of specified properties for each object in the array
    for (const branch of branches) {
        await encryptObjectValues(branch, propertiesToEncrypt);
    }

    return res.status(200).json({status: true, message: branches})
}

const createBranch = async (req, res) => {
    if (!req.body.code || !req.body.name) return res.status(400).json({status: false, message: 'Invalid request'})

    const code = decryptData(req.body.code).trim()
    const name = decryptData(req.body.name).trim()

    if (!code || !name) return res.status(400).json({status: false, message: 'Fill all the required fields'})

    const codeResult = await Branch.findOne({code})
    if (codeResult) return res.status(400).json({status: false, message: 'Branch code already exists'})

    const nameResult = await Branch.findOne({name})
    if (nameResult) return res.status(400).json({status: false, message: 'Branch name already exists'})

    const branch = new Branch({code, name, createdBy: 'U010280'})
    const result = await branch.save()

    if (result) await createLog('branches', result._id, 'create', '', result)

    return res.status(200).json({status: true, message: 'Branch added'});
}

const getBranch = async (req, res) => {
    if (!(req.params.id)) return res.status(400).json({status: false, message: 'Invalid request'})
    const id = req.params.id;

    const branch = await Branch.findById(id)
    if (!branch) return res.status(404).json({status: false, message: 'Branch not found'})

    const propertiesToEncrypt = ['code', 'name', 'createdBy'];
    await encryptObjectValues(branch, propertiesToEncrypt);

    return res.status(200).json({status: true, message: branch})
}

const updateBranch = async (req, res) => {
    if (!req.body.id || !req.body.name) return res.status(400).json({status: false, message: 'Invalid request'})

    const id = req.body.id
    const newName = decryptData(req.body.name).trim()

    if (!newName) return res.status(400).json({status: false, message: 'Fill all the required fields'})

    const nameResult = await Branch.findOne({name: newName})
    if (nameResult) return res.status(400).json({status: false, message: 'Branch name already exists'})

    const branch = await Branch.findById(id)
    if (!branch) return res.status(404).json({status: false, message: 'Branch not found'})

    const oldValue = {...branch.toObject()}

    const result = await Branch.findByIdAndUpdate(
        id,
        {$set: {name: newName, updatedBy: 'U000210'}},
        {new: true}
    )

    if (!result) return res.status(500).json({status: false, message: 'Something went wrong. Please try again later.'})

    await createLog('branches', oldValue._id, 'update', oldValue, result)

    return res.status(200).json({status: true, message: 'Branch name updated'});
}

const deleteBranch = async (req, res) => {
    if (!(req.params.id)) return res.status(400).json({status: false, message: 'Invalid request'})

    const id = req.params.id;

    const result = await Branch.findByIdAndDelete(id)
    if (result) {
        await createLog('branches', result._id, 'delete', result, '')
        return res.status(200).json({status: true, message: 'Branch deleted'});
    } else {
        return res.status(404).json({status: false, message: 'Branch not found to delete!'})
    }
}

module.exports = {getBranches, createBranch, getBranch, updateBranch, deleteBranch};