const Multicompany = require('../models/multicompany');
const { Op } = require('sequelize');
const db = require('../db/connection'); // Asegúrate de ajustar la ruta según sea necesario

const multicompanyController = {
  // Método para obtener todas las compañías
  async getAllCompanies(req, res) {
    try {
      const companies = await Multicompany.findAll();
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Método para obtener una compañía por ID
  async getCompanyById(req, res) {
    const { id } = req.params;
    try {
      const company = await Multicompany.findOne({
        where: { sub_company_id: id }
      });
      if (company) {
        res.status(200).json(company);
      } else {
        res.status(404).json({ error: 'Compañia no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = multicompanyController;