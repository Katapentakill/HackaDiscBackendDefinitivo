'use strict';

const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const filePath = path.join(__dirname, '..', 'dataset', 'workers.csv');
    const results = [];

    // Leer el archivo CSV y parsear cada línea como objeto
    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve());
    });
    // Insertar los datos en la base de datos
    return queryInterface.bulkInsert('Workers', results.map(row => ({
      user_id: row.user_id,
      company_id: row.company_id,
      area_id: row.area_id,
      area_name: row.area_name,
      post_id: row.post_id,
      post_name: row.post_name,
      user_name: row.user_name,
      company_name: row.company_name,
      status: null
    })), {});
  },

  down: async (queryInterface, Sequelize) => {
    // Borrar los datos insertados si se necesita revertir
    return queryInterface.bulkDelete('Workers', null, {});
  }
};