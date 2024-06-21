'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Workers', {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    area_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    area_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    post_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    company_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true,
    }
  })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Workers');
  }
};
