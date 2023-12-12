const express = require('express')
const router = express.Router()
const path = require("path");
const {decryptData} = require("../helpers/functions");

router.post('/download', async (req, res) => {
    const examCode = decryptData(req.body.examCode)
    const filePath = path.join(__dirname, `../public/instructions/${examCode}.pdf`);
    res.download(filePath, function (err) {
        if (err) {
            return res.status(404).json({success: false, message: 'Instructions file not found. Please contact us.'})
        }
    });
})

module.exports = router;
