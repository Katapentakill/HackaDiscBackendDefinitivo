const express = require('express');
const router = express.Router();
const evaluationController = require('../controllers/evaluationController');

// Rutas para obtener los promedios de las habilidades de evaluación para un usuario específico
router.get('/evaluation/average/:userId/adaptability', evaluationController.getAverageSkillForUser);
// Agrega rutas similares para las otras habilidades de evaluación y para cada usuario

module.exports = router;