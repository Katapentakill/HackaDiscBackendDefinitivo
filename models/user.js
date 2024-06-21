const { DataTypes, Model } = require("sequelize");
const db = require("../db/connection");

class User extends Model {}

User.init({
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    role_id: {
        type: DataTypes.INTEGER,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    area_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    sequelize: db,
    modelName: 'User',
});

module.exports = User;