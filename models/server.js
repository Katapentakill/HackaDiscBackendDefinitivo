const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const db = require('../db/connection'); // Asegúrate de ajustar la ruta según la estructura de tu proyecto
const User = require('./user')
const Role = require('./role');// Asegúrate de tener los modelos correctamente definidos
const Multicompany = require('./multicompany');
const Worker = require('./worker');
const Evaluation = require('./evaluation');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.paths = {
            auth: '/api/auth',
        }

        // Conectar a la base de datos
        this.dbConnection();

        // Middleware
        this.middlewares();

        // Rutas
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate(); // Sincronizar modelos con la base de datos
            await User.sync({ force: false });
            await Role.sync({ force: false });
            await Multicompany.sync({ force: false });
            await Worker.sync({ force: false });
            await Evaluation.sync({ force: false });
            console.log('Base de datos conectada');
        } catch (error) {
            console.error('Error al conectar con la base de datos:', error);
        }
    }

    middlewares() {
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/authRoutes')); // Asegúrate de tener definidas tus rutas correctamente
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;