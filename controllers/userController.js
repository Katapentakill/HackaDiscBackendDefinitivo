const Users = require('../models/user');
const { Op } = require('sequelize');
const db = require('../db/connection'); // Asegúrate de ajustar la ruta según sea necesario

const userController = {
  // Método para obtener todas las compañías
  async getAllUsers(req, res) {
    try {
      const users = await Users.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Método para obtener una compañía por ID
  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await Users.findOne({
        where: { id: id }
      });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;