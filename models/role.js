const { DataTypes, Model, Sequelize } = require("sequelize");
const db = require("../db/connection");

class Role extends Model {}

Role.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      rol_name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
}, {
    sequelize: db,
    modelName: 'Role',
    tableName: 'Roles', // Ensure this matches the SQL table name
    timestamps: false
});

module.exports = Role;