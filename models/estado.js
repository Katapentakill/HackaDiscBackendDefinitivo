const { DataTypes, Model } = require("sequelize");
const db = require("../db/connection");

class Estado extends Model {}

Estado.init({
    Estado_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    NombreEstado: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'Estado',
    tableName: 'Estado', // Ensure this matches the SQL table name
    timestamps: false
});

module.exports = Estado;