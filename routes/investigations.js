const express = require('express')
const router = express.Router()
const {
    getInvestigations,
    createInvestigation,
    getInvestigation,
    updateInvestigation,
    deleteInvestigation,
    getSerial
} = require("../controllers/investigations.controller");

router.get('/', getInvestigations)
router.post('/', createInvestigation)
router.get('/edit/:id', getInvestigation)
router.put('/edit', updateInvestigation)
router.delete('/delete/:id', deleteInvestigation)
router.get('/serial', getSerial)

module.exports = router;
