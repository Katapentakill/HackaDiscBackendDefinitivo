'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Evaluations', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    adaptability_to_change: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    safe_conduct: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dynamism_energy: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    personal_effectiveness: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    initiative: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    working_under_pressure: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    date: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
  })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Evaluations');
  }
};
