const express = require('express')
const router = express.Router()
const {getBranches, createBranch, getBranch, updateBranch, deleteBranch} = require("../controllers/branches.controller");

router.get('/', getBranches)
router.post('/', createBranch)
router.get('/edit/:id', getBranch)
router.put('/edit', updateBranch)
router.delete('/delete/:id', deleteBranch)

module.exports = router;
