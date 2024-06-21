const { DataTypes, Model } = require("sequelize");
const db = require("../db/connection");

class Multicompani extends Model {}

Multicompani.init({
    main_company_id: {
        type: DataTypes.INTEGER,
    },
    sub_company_id: {
        type: DataTypes.INTEGER,
    },
    main_company_name: {
        type: DataTypes.STRING,
    },
    sub_company_name: {
        type: DataTypes.STRING,
    },
}, {
    sequelize: db,
    modelName: 'Multicompani',
});

module.exports = Multicompani;