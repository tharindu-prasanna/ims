const express = require('express')
const router = express.Router()
const {Contact} = require("../models/contact");

router.get('', async (req, res) => {
    const contacts = await Contact.findOne();
    res.status(200).json({success: true, message: contacts});
})

module.exports = router;
