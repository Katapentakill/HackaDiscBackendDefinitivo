'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Multicompanies', {
      sub_company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      main_company_id: {
        type: Sequelize.INTEGER,
        allowNull: false/*,
        references: {
          model: 'Multicompanies',
          key: 'sub_company_id'
        }
          */
      },
      main_company_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sub_company_name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });

    // Agregar índice en main_company_id para optimizar búsquedas
    await queryInterface.addIndex('Multicompanies', ['main_company_id']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Multicompanies');
  }
};