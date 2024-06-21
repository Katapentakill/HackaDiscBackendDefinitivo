const express = require('express');
const router = express.Router();

const {getAllWorkers} = require('../controllers/workerController');
const {getWorkerById} = require('../controllers/workerController');

router.get('', getAllWorkers);
router.get('/:id', getWorkerById);

module.exports = router;