const express = require('express')
const {getTransactionLogs} = require("../controllers/logs.controller");
const router = express.Router()

router.get('/transactions', getTransactionLogs)

module.exports = router;
