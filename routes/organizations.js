const express = require('express')
const {getOrganizations, createOrganization, getOrganization, updateOrganization, deleteOrganization} = require("../controllers/organizations.controller");
const router = express.Router()

router.get('/', getOrganizations)
router.post('/', createOrganization)
router.get('/edit/:id', getOrganization)
router.put('/edit', updateOrganization)
router.delete('/delete/:id', deleteOrganization)

module.exports = router;
