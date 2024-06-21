const { DataTypes, Model } = require("sequelize");
const db = require("../db/connection");

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Roles',
            key: 'role_id'
        }
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Multicompanies',
            key: 'main_company_id'
        }
    },
    area_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
}, {
    sequelize: db,
    modelName: 'User',
    tableName: 'Users', // Ensure this matches the SQL table name
    timestamps: false
});

module.exports = User;