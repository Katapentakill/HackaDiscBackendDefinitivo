'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Roles',
      [
        {
          role_id: 1,
          rol_name: 'Admin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 2,
          rol_name: 'CompanyManager',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 3,
          rol_name: 'AreaManager',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {})
  }
}
