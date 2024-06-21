const express = require('express');
const router = express.Router();

const {getPromedyTotalSkills} = require('../controllers/evaluationController');
const {getAverageSkillForUser} = require('../controllers/evaluationController');

const {getAllEvaluations} = require('../controllers/evaluationController');
const {getEvaluationById} = require('../controllers/evaluationController');

router.get('', getAllEvaluations);
router.get('/:userid', getEvaluationById);
// Rutas para obtener los promedios de las habilidades de evaluación para un usuario específico
router.get('/average/:userId/adaptability', getAverageSkillForUser);
router.get('/total/:userid', getPromedyTotalSkills);
// Agrega rutas similares para las otras habilidades de evaluación y para cada usuario

module.exports = router;