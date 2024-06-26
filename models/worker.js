const { DataTypes, Model } = require("sequelize");
const db = require("../db/connection");

class Worker extends Model {}

Worker.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Multicompanies',
            key: 'main_company_id'
        }
    },
    area_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    area_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    post_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Estado_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Estado',
            key: 'Estado_id'
        }
    }
}, {
    sequelize: db,
    modelName: 'Worker',
    tableName: 'Workers', // Ensure this matches the SQL table name
    timestamps: false
});

module.exports = Worker;