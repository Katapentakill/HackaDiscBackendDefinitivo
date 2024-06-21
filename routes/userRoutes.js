const express = require('express');
const router = express.Router();

const {getAllUsers} = require('../controllers/userController');
const {getUserById} = require('../controllers/userController');

router.get('', getAllUsers);
router.get('/:id', getUserById);

module.exports = router;