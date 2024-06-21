const { DataTypes, Model } = require("sequelize");
const db = require("../db/connection");

class Evaluation extends Model {}

Evaluation.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    adaptability_to_change: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    safe_conduct: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dynamism_energy: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    personal_effectiveness: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    initiative: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    working_under_pressure: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'Evaluation',
    tableName: 'Evaluations', // Ensure this matches the SQL table name
    timestamps: false
});

module.exports = Evaluation;