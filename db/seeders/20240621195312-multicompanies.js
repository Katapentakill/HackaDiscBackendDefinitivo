'use strict';

const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const filePath = path.join(__dirname, '..', 'dataset', 'multicompanies.csv');
    const results = [];

    // Leer el archivo CSV y parsear cada línea como objeto
    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve());
    });
    // Insertar los datos en la base de datos
    return queryInterface.bulkInsert('Multicompanies', results.map(row => ({
      sub_company_id: row.sub_company_id,
      main_company_id: row.main_company_id,
      main_company_name: row.main_company_name,
      sub_company_name: row.sub_company_name
    })), {});
  },

  down: async (queryInterface, Sequelize) => {
    // Borrar los datos insertados si se necesita revertir
    return queryInterface.bulkDelete('Multicompanies', null, {});
  }
};