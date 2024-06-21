const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./data/database.sqlite", // Ruta donde se almacenará la base de datos SQLite
});

module.exports = sequelize;