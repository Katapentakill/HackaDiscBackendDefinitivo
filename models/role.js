const { DataTypes, Model } = require("sequelize");
const db = require("../db/connection");

class Rol extends Model {}

Rol.init({
    nombre_Rol: {
        type: DataTypes.STRING,
    },
    role_id: {
        type: DataTypes.INTEGER,
    },
}, {
    sequelize: db,
    modelName: 'Rol',
});

module.exports = Rol;