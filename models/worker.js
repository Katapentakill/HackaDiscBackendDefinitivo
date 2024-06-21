const { DataTypes, Model } = require("sequelize");
const db = require("../db/connection");

class Worker extends Model {}

Worker.init({
    user_id: {
        type: DataTypes.INTEGER,
    },
    company_id: {
        type: DataTypes.INTEGER,
    },
    area_id: {
        type: DataTypes.INTEGER,
    },
    area_name: {
        type: DataTypes.STRING,
    },
    post_id: {
        type: DataTypes.INTEGER,
    },
    post_name: {
        type: DataTypes.STRING,
    },
    user_name: {
        type: DataTypes.STRING,
    },
    company_name: {
        type: DataTypes.STRING,
    },
    EstadoEstado_id: {
        type: DataTypes.INTEGER,
    },
}, {
    sequelize: db,
    modelName: 'Worker',
});

module.exports = Worker;