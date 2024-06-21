const { Op } = require('sequelize');
const Evaluation = require('../models/evaluation');
const db = require('../db/connection'); // Asegúrate de ajustar la ruta según sea necesario

// Método para calcular el promedio de una habilidad específica para un usuario
const getAverageSkillForUser = async (req, res) => {
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
};

// Agrega métodos similares para las otras habilidades de evaluación y para cada usuario

module.exports = {
  getAverageSkillForUser,
  // Agrega aquí los otros métodos para las habilidades de evaluación y usuarios
};