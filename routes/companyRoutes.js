const express = require('express');
const router = express.Router();

const {getAllCompanies} = require('../controllers/companyController');
const {getCompanyById} = require('../controllers/companyController');

router.get('', getAllCompanies);
router.get('/:id', getCompanyById);

module.exports = router;