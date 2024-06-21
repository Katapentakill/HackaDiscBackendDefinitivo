const { Op } = require('sequelize');
const Evaluation = require('../models/evaluation');
const db = require('../db/connection'); // Asegúrate de ajustar la ruta según sea necesario

const evaluationController = {

  async getAllEvaluations(req, res) {
    try {
      const evaluations = await Evaluation.findAll();
      res.status(200).json(evaluations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getEvaluationById(req, res) {
    const { id } = req.params;
    try {
      const evaluation = await Evaluations.findOne({
        where: { user_id: id }
      });
      if (evaluation) {
        res.status(200).json(evaluation);
      } else {
        res.status(404).json({ error: 'Evaluacion no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Método para calcular el promedio de una habilidad específica para un usuario
  async getAverageSkillForUser (req, res) {
    const { userId } = req.params; // Obtener el id de usuario desde los parámetros de la solicitud

    try {
      const average = await Evaluation.findOne({
        attributes: [
          [db.sequelize.fn('avg', db.sequelize.col('adaptability_to_change')), 'average']
        ],
        where: {
          user_id: userId // Filtrar por el id de usuario
        }
      });

      res.json({ average: average.dataValues.average });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  // Método para calcular el promedio de todas las habilidades de evaluación para un usuario en la fecha más reciente
  async getPromedyTotalSkills (req, res)  {
    const { userId } = req.params; // Obtener el id de usuario desde los parámetros de la solicitud
  
    try {
      // Consulta para obtener la evaluación más reciente
      const latestEvaluation = await Evaluation.findOne({
        where: {
          user_id: userId // Filtrar por el id de usuario
        },
        order: [['date', 'DESC']], // Ordenar por fecha más reciente
        limit: 1
      });
  
      if (!latestEvaluation) {
        return res.status(404).json({ error: 'No se encontraron evaluaciones para el usuario' });
      }
  
      // Calcular el promedio total dividiendo entre 6
      const totalAverage = (
        latestEvaluation.adaptability_to_change +
        latestEvaluation.safe_conduct +
        latestEvaluation.dynamism_energy +
        latestEvaluation.personal_effectiveness +
        latestEvaluation.initiative +
        latestEvaluation.working_under_pressure
      ) / 6;
  
      res.json({ 
        totalAverage: totalAverage,
        latestDate: latestEvaluation.date
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },
}
// Agrega métodos similares para las otras habilidades de evaluación y para cada usuario

module.exports = evaluationController