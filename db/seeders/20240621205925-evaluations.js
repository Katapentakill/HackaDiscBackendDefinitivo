'use strict';

const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const filePath = path.join(__dirname, '..', 'dataset', 'evaluations.csv');
    const results = [];

    // Leer el archivo CSV y parsear cada línea como objeto
    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve());
    });
    // Insertar los datos en la base de datos
    return queryInterface.bulkInsert('Evaluations', results.map(row => ({
      user_id: row.user_id,
      adaptability_to_change: row.adaptability_to_change,
      safe_conduct: row.safe_conduct,
      dynamism_energy: row.dynamism_energy,
      personal_effectiveness: row.personal_effectiveness,
      initiative: row.initiative,
      working_under_pressure: row.working_under_pressure,
      date: row.date
    })), {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Evaluations', null, {});
  }
};
