const {TransactionLog} = require("../models/transaction_log");
const {encryptObjectValues} = require("../helpers/functions");

const getTransactionLogs = async (req, res, next) => {
    const transactions = await TransactionLog.find().sort({createdAt: -1})

    // Specify the properties you want to encrypt
    const propertiesToEncrypt = ['dataTable', 'action', 'oldValue', 'newValue', 'user'];

    // Encrypt values of specified properties for each object in the array
    for (const transaction of transactions) {
        await encryptObjectValues(transaction, propertiesToEncrypt);
    }

    return res.status(200).json({status: true, message: transactions})
}

module.exports = {getTransactionLogs};