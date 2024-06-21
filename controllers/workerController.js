const Workers = require('../models/worker');
const { Op } = require('sequelize');
const db = require('../db/connection'); // Asegúrate de ajustar la ruta según sea necesario

const workerController = {

  async getAllWorkers(req, res) {
    try {
      const workers = await Workers.findAll();
      res.status(200).json(workers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getWorkerById(req, res) {
    const { id } = req.params;
    try {
      const worker = await Workers.findOne({
        where: { user_id: id }
      });
      if (worker) {
        res.status(200).json(worker);
      } else {
        res.status(404).json({ error: 'Trabajador no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = workerController;