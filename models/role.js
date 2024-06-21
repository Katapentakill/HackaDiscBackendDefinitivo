const { DataTypes, Model } = require("sequelize");
const db = require("../db/connection");

class Role extends Model {}

Role.init({
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    rol_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
}, {
    sequelize: db,
    modelName: 'Role',
    tableName: 'Roles', // Ensure this matches the SQL table name
    timestamps: false
});

module.exports = Role;