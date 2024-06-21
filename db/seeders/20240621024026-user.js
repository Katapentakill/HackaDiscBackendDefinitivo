'use strict';

const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const salt = bcryptjs.genSaltSync();
    return queryInterface.bulkInsert('Users', [
      {
        email: "pignus@gfmail.com",
        password: "7863",
        role_id: 1,
        nombre: "AdminPignus",
        company_id: null,
        area_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "jefeTotal@gmail.com",
        password: "7863",
        role_id: 2,
        nombre: "JefeT",
        company_id: null,
        area_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "JefeArea@gmail.com",
        password: "7863",
        role_id: 3,
        nombre: "JefeA",
        company_id: null,
        area_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "jefeTotal2@gmail.com",
        password: "7863",
        role_id: 2,
        nombre: "JefeT2",
        company_id: null,
        area_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "JefeArea2@gmail.com",
        password: "7863",
        role_id: 3,
        nombre: "JefeA2",
        company_id: null,
        area_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "jefeTotal3@gmail.com",
        password: "7863",
        role_id: 2,
        nombre: "JefeT3",
        company_id: null,
        area_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "JefeArea3@gmail.com",
        password: "7863",
        role_id: 3,
        nombre: "JefeA3",
        company_id: null,
        area_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
], {});
  },
async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
