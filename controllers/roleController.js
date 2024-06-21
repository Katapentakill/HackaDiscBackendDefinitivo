const Roles = require('../models/role');
const { Op } = require('sequelize');
const db = require('../db/connection'); // Asegúrate de ajustar la ruta según sea necesario

const roleController = {

  async getAllRoles(req, res) {
    try {
      const roles = await Roles.findAll();
      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getRoleById(req, res) {
    const { id } = req.params;
    try {
      const role = await Roles.findOne({
        where: { id: id }
      });
      if (role) {
        res.status(200).json(role);
      } else {
        res.status(404).json({ error: 'Rol no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = roleController;