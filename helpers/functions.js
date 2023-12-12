const CryptoJS = require("crypto-js");
const {TransactionLog} = require("../models/transaction_log");
const ENC_KEY = process.env.ENC_KEY

function encryptData(data) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), ENC_KEY).toString();
}

module.exports.encryptData = encryptData

module.exports.decryptData = function (encryptedData) {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, ENC_KEY);
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}

module.exports.encryptObjectValues = async function (obj, properties) {
    for (const prop of properties) {
        if (obj[prop]) {
            obj[prop] = encryptData(obj[prop]);
        }
    }
}

function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`
}

module.exports.getCurrentDate = getCurrentDate

function getCurrentTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}-${minutes}-${seconds}`
}

module.exports.getCurrentTime = getCurrentTime

module.exports.getCurrentTimeWithMilliseconds = function () {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
    return `${hours}-${minutes}-${seconds}-${milliseconds}`;
}

module.exports.createLog = async function (dataTable, recordId, action, oldValue, newValue) {
    const log = new TransactionLog({
        dataTable,
        recordId,
        action,
        oldValue: JSON.stringify(oldValue),
        newValue: JSON.stringify(newValue),
        user: 'U010260'
    })
    await log.save()
}