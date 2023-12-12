const express = require('express')
const router = express.Router()
const {getDesignations, createDesignation, getDesignation, updateDesignation, deleteDesignation} = require("../controllers/designations.controller");

router.get('/', getDesignations)
router.post('/', createDesignation)
router.get('/edit/:id', getDesignation)
router.put('/edit', updateDesignation)
router.delete('/delete/:id', deleteDesignation)

module.exports = router;
