const { DataTypes, Model } = require("sequelize");
const db = require("../db/connection");

class Multicompany extends Model {}

Multicompany.init({
    main_company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    sub_company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Multicompanies',
            key: 'main_company_id'
        }
    },
    main_company_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sub_company_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'Multicompany',
    tableName: 'Multicompanies',
    timestamps: false
});

module.exports = Multicompany;
