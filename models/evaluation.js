const { DataTypes, Model } = require("sequelize");
const db = require("../db/connection");

class Evaluation extends Model {}

Evaluation.init({
    user_id: {
        type: DataTypes.INTEGER,
    },
    adaptability_to_change: {
        type: DataTypes.INTEGER,
    },
    safe_conduct: {
        type: DataTypes.INTEGER,
    },
    dynamism_energy: {
        type: DataTypes.INTEGER,
    },
    personal_effectiveness: {
        type: DataTypes.INTEGER,
    },
    initiative: {
        type: DataTypes.INTEGER,
    },
    working_under_pressure: {
        type: DataTypes.INTEGER,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
}, {
    sequelize: db,
    modelName: 'Evaluation',
});

module.exports = Evaluation;